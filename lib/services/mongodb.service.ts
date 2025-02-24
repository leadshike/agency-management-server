import mongoose from 'mongoose';

export async function connectToDatabase() {
    try {
        const url = process.env.MONGODB_URI || '';
        const client: mongoose.Mongoose = await mongoose
            .connect(url, {
                dbName: 'agency_manager',
                retryWrites: true,
                w: 'majority',
                connectTimeoutMS: 30000,
                socketTimeoutMS: 30000,
            });
        console.log("Successfully connected to mongodb " + client.connection.db?.databaseName);
    } catch (error) {
        console.log("Failed connected to mongodb " + error);
    }
}
