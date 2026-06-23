const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

  const bikeDelivery = new Promise((resolve) => {
  setTimeout(() => resolve("Bike Arrived"), 2000);
});

const carDelivery = new Promise((resolve) => {
  setTimeout(() => resolve("Car Arrived"), 4000);
});

Promise.race([bikeDelivery, carDelivery])
  .then((result) => {
    console.log(result);
  });

  const examResult = Promise.resolve("Passed");
const interviewResult = Promise.reject("Rejected");

Promise.allSettled([examResult, interviewResult])
  .then((response) => {
    console.log(response);
  });

  const serverOne = Promise.reject("Server 1 Down");
const serverTwo = Promise.resolve("Data from Server 2");
const serverThree = Promise.reject("Server 3 Down");

Promise.any([serverOne, serverTwo, serverThree])
  .then((data) => {
    console.log(data);
  });

  function fetchEmployeeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Employee Data Loaded");
    }, 2000);
  });
}

fetchEmployeeData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  function fetchEmployeeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Employee Data Loaded");
    }, 2000);
  });
}

async function displayEmployeeData() {
  const employeeInfo = await fetchEmployeeData();
  console.log(employeeInfo);
}

displayEmployeeData();

function fetchOrderStatus() {
  return new Promise((resolve, reject) => {
    reject("Order Not Found");
  });
}

async function checkOrder() {
  try {
    const orderInfo = await fetchOrderStatus();
    console.log(orderInfo);
  } catch (errorMessage) {
    console.log("Error:", errorMessage);
  }
}

checkOrder();

const mobileDetails = {
  brandName: "Samsung",
  modelName: "S25",
  priceValue: 85000
};

const { brandName, modelName, priceValue } = mobileDetails;

console.log(brandName);
console.log(modelName);
console.log(priceValue);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java"
];

const [firstLanguage, secondLanguage, thirdLanguage] = programmingLanguages;

console.log(firstLanguage);
console.log(secondLanguage);
console.log(thirdLanguage);

const cityNames = [
  "Hyderabad",
  "Bangalore",
  "Chennai"
];

const cityIterator = cityNames[Symbol.iterator]();

console.log(cityIterator.next());
console.log(cityIterator.next());
console.log(cityIterator.next());
console.log(cityIterator.next());

function* employeeIdGenerator() {
  yield 101;
  yield 102;
  yield 103;
}

const employeeIds = employeeIdGenerator();

console.log(employeeIds.next());
console.log(employeeIds.next());
console.log(employeeIds.next());
console.log(employeeIds.next());

function calculateTotalMarks() {
  return 450;
}

console.log(calculateTotalMarks());

function* generateSemesterMarks() {
  yield 85;
  yield 90;
  yield 88;
}

const semesterMarks = generateSemesterMarks();

console.log(semesterMarks.next());
console.log(semesterMarks.next());
console.log(semesterMarks.next());