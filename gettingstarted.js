
// See http://mongoosejs.com/docs/
// Before you start:
  // npm install mongoose from your terminal
  // in your terminal, run mongod
// To run this file:
  // leave mongod running
  // open a new tab in your terminal with command t
  // in your terminal, run node gettingstarted.js
  // after you see the output, you can use control c to kill this node app

// get access to code from the mongoose module with require. save as a variable
var mongoose = require('mongoose');

// use mongoose to connect to a 'test' database on this computer
mongoose.connect('mongodb://localhost/test');

// ?? Why do we set up a schema, or what is a schema used for in mongoose?
// !! Schema says how data will be structured
var kittySchema = mongoose.Schema({
  // ?? Add one more attribute of your choice to this kitty Schema object!
  // !! see cute
  name: String,
  cute: Boolean
});

// speak has been rewritten without the ternary operator tomfoolery
kittySchema.methods.speak = function () {
  // ?? What does `this` refer to inside kittySchema.methods.speak?
  // !! `this` is the particular kitten where the speak method was called
  console.log(this);
  var greeting;
  if (this.name){
    greeting = "Meow name is " + this.name;
  } else {
    greeting = "I don't have a name";
  }
  console.log(greeting);
};

// ?? What is a model used for with Mongoose? How is it different from a schema?
// !! The model actually lets us find data; the schema is just a blueprint or plan.
Kitten = mongoose.model('Kitten', kittySchema);


var fluffy = new Kitten({ name: 'fluffy' });
console.log("Here's a brand new kitten: ", fluffy);
// speak was added to kittenSchema.methods, so here's how we call it:
fluffy.speak(); // "Meow name is fluffy"

// ?? Why do we need to save the new kitten?
// !! Save fluffy to actually put fluffy into the database. This lets us find fluffy later!
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log('You saved ' + fluffy.name + '! ', fluffy);
  // ?? How does fluffy's object look different after it's been saved?
  // !! fluffy's object now has a `__v: 0` key-value pair inside. Cool.
});


// ?? Make a new kitten with a different name, also using the attribute you added to the kitty schema.
var cutey = new Kitten({name: 'Cutey', cute: true});
console.log("Here's another brand new kitten: ", cutey);
// ?? Before you move on, run `gettingstarted.js` again. Does your new kitten show up on the list of all kittens?
// !! It does not! Cutey is missing!

// ?? Save your new kitten, and run `gettingstarted.js` again. Does your new kitten show up on the list of all kittens now?
// !! Cutey is there now!
cutey.save(function(err, cutey) {
  if (err) return console.error(err);
  console.log('You saved ' + cutey.name + '! ', cutey);
})


// find some kittens!
// The first {} argument here lets us filter down which kittens we're looking for.
// An empty object (or leaving the object off) means find all kittens!
Kitten.find({}, function (err, kittens) {
  if (err) return console.error(err);
  console.log('Here are all the kittens!');
  console.log(kittens);
});

// finds only kittens named fluffy
Kitten.find({name: 'fluffy'}, function (err, kittens) {
  if (err) return console.error(err);
  console.log('Here are all the kittens named fluffy!');
  console.log(kittens);
});

// ?? Make another call to Kitten.find, but filter down only kittens with your kitten's name!
// !! finds only kittens named Cutey
Kitten.find({name: 'Cutey'}, function (err, kittens) {
  if (err) return console.error(err);
  console.log('Here are all the kittens named Cutey!');
  console.log(kittens);
});

// Set up the connection to close when we kill our node app
// by listening for an interrupt singal ('SIGINT') from the terminal.
// This lets us avoid putting all our code inside a giant callback function.
// Don't worry about details of this code; focus on mongoose stuff.
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on node app termination');
    process.exit(0);
  });
});
