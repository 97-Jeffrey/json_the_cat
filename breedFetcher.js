const request = require('request');

let array = process.argv.slice(2);

const describe = function(callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`, (error, response, body) => {
    // console.log(typeof body);
    
    if (error) {
      console.log(`error is ${error}`);
      return;
    }
    const data  = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(breed);
    } else {
      console.log(`fail to find the breed ${array[0]}`);
      return;
    }
    
  });
};

const printDescription = (data)=>{
  console.log('This is the description of the breed: ',data.description);
};

describe(printDescription);
