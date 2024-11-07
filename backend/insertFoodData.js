import connectDB from './config/db.js';  // Import the database connection
import foodModel from './models/foodModel.js';  // Import the food model
import assets from './assets';  // Import your assets.js data
//import db from './config';
import { food_list } from '../frontend/src/assets/assets.js';

// Function to insert food data into MongoDB
const insertFoodData = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Insert all food data into the database using insertMany()
    await foodModel.insertMany(food_list);

    console.log('Food data inserted successfully!');
  } catch (error) {
    console.error('Error inserting food data:', error);
  }
};

// Run the insert function
insertFoodData();
