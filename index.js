const express = require('express')
const fs = require('fs');
const EventEmitter = require('events');

const app = express()

app.get('/', (req,res)=>{
   res.json("Event Driven")
})

// Using Promises for asynchronous operation
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully');
      }, 2000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });


fs.readFile('./callback.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 console.log('File content:', data);
});



// Create an EventEmitter instance
const myEmitter = new EventEmitter();

// Define a custom event and attach a listener
myEmitter.on('customEvent', () => {
  console.log('Custom event occurred!');
});

// Emit the custom event
myEmitter.emit('customEvent');





const { Observable } = require('rxjs');

// Creating an observable
const observable = new Observable((observer) => {
  observer.next('First event');
  setTimeout(() => {
    observer.next('Second event after a delay');
  }, 2000);
});

// Subscribing to the observable
observable.subscribe((data) => {
  console.log(data);
});

const port = 3000
app.listen(port , ()=>{
    console.log(`Connection is establish at ${port}`)
})