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
var kittySchema = mongoose.Schema({
  // ?? Add one more attribute of your choice to this kitty Schema object!
  name: String
});


// speak has been rewritten without the ternary operator tomfoolery
kittySchema.methods.speak = function () {
  // ?? What does `this` refer to inside kittySchema.methods.speak?
  var greeting;
  if (this.name){
    greeting = "Meow name is " + this.name;
  } else {
    greeting = "I don't have a name";
  }
  console.log(greeting);
};

// ?? What is a model used for with Mongoose? How is it different from a schema?
Kitten = mongoose.model('Kitten', kittySchema);


var fluffy = new Kitten({ name: 'fluffy' });
console.log("Here's a brand new kitten: ", fluffy);
// speak was added to kittenSchema.methods, so here's how we call it:
fluffy.speak(); // "Meow name is fluffy"

// ?? Why do we need to save the new kitten? 
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log('You saved ' + fluffy.name + '! ', fluffy);
  // ?? How does fluffy's object look different after it's been saved?
});


// ?? Make a new kitten with a different name, also using the attribute you added to the kitty schema.
// ?? Before you move on, run `gettingstarted.js` again. Does your new kitten show up on the list of all kittens?


// ?? Save your new kitten, and run `gettingstarted.js` again. Does your new kitten show up on the list of all kittens now?


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
