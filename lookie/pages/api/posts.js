const { connectToDatabase } = require("../../lib/connection");
const ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken')

async function addPost(req, res) {
  const  {name, email, password, userName} = req.body
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    let posts = await db
      .collection("posts")
      .find({ email })
      .sort({ published: -1 })
      .toArray();

    if (!posts) {
      return res.json({ error: "email already exist" });
    } else {

      // add the post
      await db.collection("posts").insertOne(req.body);
      // return a message

      let token = jwt.sign(
        {
          name: posts.name,
          email: posts.email,
        },
        "secret123"
      );
      // return the posts
      return res.json({
        token: token,
        success: true,
      });
      
    }

  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function getPosts(req, res) {

  let { password, email } = req.body;
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({ email })
      .sort({ published: -1 })
      .toArray()
    if(posts.length) {
      let token = jwt.sign(
        {
          name: posts.name,
          email: posts.email,
        },
        "secret123"
      );
      // return the posts
      return res.json({
        token: token,
        success: true,
      });
    }
    else {
      throw Error('invalid email')
    }
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }

    case "POST": {
      if(req.body.userName) {
      return addPost(req, res);
      }else {
        return getPosts(req, res);
      }
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}
