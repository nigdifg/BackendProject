import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to the database: ${connectionInstances.connection.host}`);
    } catch (error) {
        console.log('Error connecting to the database');
        process.exit(1);
    }
};
export default connectDB;