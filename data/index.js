const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const uri = "mongodb+srv://fatimaarshad118:iwyEmpz0zYlhS7BW@cluster0.azlft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


let counter = 0;


async function getCollection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("speed");
    const collectionName = "customer-id-testing";
    const collection = database.collection(collectionName);
    const startTime = Date.now();
    const result = await collection.find().toArray();
    const endTime = Date.now();
    console.log(`Query execution time: ${endTime - startTime}ms`);

    // const filePath = path.join(__dirname, "customer.csv");
    // const fileData = fs.readFileSync(filePath, "utf-8");
    // const jsonData = fileData
    //   .split("\n")
    //   .slice(1)
    //   .filter((line) => line.trim() !== "")
    //   .map((line) => {
    //     const [name, age, email] = line.split(",");
    //     return { name, age: parseInt(age, 10), email };
    //   });
    // const result = await collection.insertMany(jsonData);
    // console.log(`Collection '${collectionName}' created with ${result.insertedCount} documents.`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}
getCollection()
// createCollection();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require("express");
// const { MongoClient } = require("mongodb");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// const uri = "mongodb+srv://fatimaarshad118:iwyEmpz0zYlhS7BW@cluster0.azlft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// let counter = 0;

// // Function to generate a custom ID
// function generateCustomId() {
//   const timestamp = Math.floor(Date.now() / 1000);
//   const hexTimestamp = timestamp.toString(16).toUpperCase();
//   const hexCounter = counter.toString(16).padStart(4, '0').toUpperCase();

//   counter = (counter + 1) % 65536;

//   return `user_${hexTimestamp}${hexCounter}`;
// }

// // Function to read a CSV file, assign custom _id, and insert into MongoDB
// async function insertDataFromFile() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const database = client.db("speed");
//     const collection = database.collection("testing-speed");

//     // Read the file
//     const filePath = path.join(__dirname, "customer.csv"); // Make sure file exists
//     const fileData = fs.readFileSync(filePath, "utf-8");

//     // Convert file data to JSON format
//     const jsonData = fileData
//       .split("\n")
//       .slice(1) // Skip header row
//       .filter(line => line.trim() !== "") // Remove empty lines
//       .map(line => {
//         const [name, age, email] = line.split(",");
//         return { 
//           _id: generateCustomId(), // Assign custom ID
//           name: name.trim(), 
//           age: parseInt(age, 10), 
//           email: email.trim() 
//         };
//       });

//     // Insert into MongoDB
//     const result = await collection.insertMany(jsonData);
//     return { success: true, insertedCount: result.insertedCount };
//   } catch (error) {
//     console.error("Error:", error);
//     return { success: false, error: error.message };
//   } finally {
//     await client.close();
//   }
// }

// // API endpoint to trigger file reading and data insertion
// app.get("/insert-data", async (req, res) => {
//   const result = await insertDataFromFile();
//   res.json(result);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



