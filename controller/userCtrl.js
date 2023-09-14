import { User } from "../models/userModal.js";

export const createUser = async (req, res) => {
    const { firstName, lastName, mobile, password, email } = req.body;
    console.log(req.body)
    const findUser = await User.findOne({ email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        res.json({
            msg: "user already exist",
            success: false
        })
    }
}