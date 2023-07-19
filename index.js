// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let distanceInBlocks;
  if (someValue > 42) {
    distanceInBlocks = someValue - 42;
  } else {
    distanceInBlocks = 42 - someValue;
  }
  return distanceInBlocks;
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(a, b) {
  let distance;
  if (a > b) {
    distance = a - b;
  } else {
    distance = b - a;
  }
  return distance * 264;
  //returns the number of feet traveled
}

function calculatesFarePrice(a, b) {
  let distance = distanceTravelledInFeet(a, b);
  // < 400
  // 400 - 2000
  // 2000 - 2500
  // 2500 +

  if (distance < 400) {
    return 0;
  }
  if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  }
  if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }

  //returns the fare for the customer
}
