// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...optional: [string, any][]): Car {
  const car: Car = {
    manufacturer,
    model
  };

  // Adding optionals
  for (let [key, value] of optional) {
    car[key] = value;
  };

  return car;
}


// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
const car = createCar('Toyota', 'Fortuner', ['color', 'Black'], ['year', 2024], ['transmission', 'Automatic']);

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(car);