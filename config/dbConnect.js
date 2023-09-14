import mongoose from "mongoose";

const db = () => {
    mongoose
        .connect(process.env.MONGO_DB)
        .then((c) => console.log(`Database Connected with  succesfully ${c.connection.host}`))
        .catch((e) => console.log(e.message));
};
export default db;