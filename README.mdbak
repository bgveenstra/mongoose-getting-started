# Databases

We're about to start working with a database! Yay!

![](https://media.giphy.com/media/D76YOxpdvXne8/giphy.gif)

Remember how our data got reset every time we restarted our servers over the past few days?  Databases help us store data *persistently* longer than we could if we just stored data in an array in our server code.  

We'll see a few different types of databases during WDI that store data in different ways. Our first database is MongoDB. MongoDB stores data in BSON, a format that looks a lot like JSON. The other database we'll look at later, PostgreSQL, will store data in a much more broken up, strictly structured way.  

**The way a database stores data isn't always the most convenient way for us to work with the data.**   When we want database data in a working app, we'll add a layer between the database and our code. The layer will help translate from raw database data to objects like we're used to working with. This extra layer is called an Object _something_ Mapper. MongoDB refers to its data as "documents," so with MongoDB we'll use an Object Document Mapper (or ODM), called Mongoose.

## Explore MongoDB and Mongoose

1. Read only the first page of MongoDB's [Introduction](https://docs.mongodb.org/getting-started/cpp/introduction/). You should get an idea of what a MongoDB _document_ is and what a MongoDB _collection_ is.  The rest of the MongoDB docs are good and interesting, but mongoose's syntax is a little different, so let's move on.

1. Fork and clone this repository. Change directories into your local copy.  We're going to play with mongoose, so `npm install mongoose`.  Of course we'll need MongoDB running, so run `mongod`. Notice that `mongod` takes over this tab of your terminal.

1. We need to leave `mongod` running, so open a new terminal tab by pressing command and t. The new tab should open in the same directory you were at.  Run the `gettingstarted.js` file by entering `node gettingstarted.js`.  You should see some kitten stuff happen in your terminal.

1. Let's investigate the kitten stuff!  Some of the comments inside `gettingstarted.js` start with `// ??`.  Answer the questions in those comments, or make the code additions they suggest.  Use the following resources:

  * Read over [mongoose's quick start guide](http://mongoosejs.com/docs/).    
  * Read the first few sections of Mongoose's [guide](http://mongoosejs.com/docs/guide.html), up through the section on creating a model. If you're curious and have a few more minutes, read about creating instance methods with `someSchema.methods` and static methods with `someSchema.statics`. We don't recommend reading beyond there for now.

1. Add, commit and push your changes for this repo, then submit a pull request.
