import mongoose from "mongoose";
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        index: true,
    },
    lastName: {
        type: String,
        required: true,
        index: true,
    },
    email: {
        type: String,
        required: true,

    },
    mobile: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
});

//Export the model
const User = mongoose.model('User', userSchema);
export { User };