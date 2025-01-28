const express = require("express");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const uri = "mongodb+srv://fatimaarshad118:iwyEmpz0zYlhS7BW@cluster0.azlft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function createCollection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("speed");
    const collectionName = "testing-speed";
    const collection = database.collection(collectionName);
    const startTime = Date.now();
const result = await collection.find({ age: { $gt: 25 } }).toArray();
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

// createCollection();


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
