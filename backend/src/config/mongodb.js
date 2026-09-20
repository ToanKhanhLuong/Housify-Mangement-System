import mongoose from 'mongoose'
import { env } from './environment.js'

const CONNECT_DB = async () => {
    try {
        await mongoose.connect(env.MONGODB_URI, {
            dbName: env.DATABASE_NAME
        });
        console.log("Kết nối MongoDB với Mongoose thành công!");
    } catch (error) {
        console.error("Lỗi kết nối MongoDB:", error);
        process.exit(1);
    }
};

const CLOSE_DB = async () => {
    await mongoose.disconnect();
};

export { CONNECT_DB, CLOSE_DB }