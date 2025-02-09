const User = require("../Models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { name , email, password } = req.body;
    
    try{ 
        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(400).json({message: "Email already in use."})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name , 
            email , 
            password: hashedPassword
        });
        await user.save();

        res.status(200).json({message: "User registered successfully.", user: {user}})
    }catch(error){
        res.status(500).json({message: "Server Error", error: error});
        console.log(error);
    }
};

const logIn = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(user){
            const isCorrect = await bcrypt.compare(password, user.password);
            if(isCorrect){
                const token = jwt.sign(
                    {id: user.id, email: user.email, role: user.role},
                    process.env.JWT_SECRET,
                    {expiresIn: process.env.JWT_EXPIRES_IN}
                )
                res.status(200).json({
                    message: "Logged In successfully.",
                    token: token
                })
            }else{
                res.status(400).json({message: "Wrong Credentials."})
            }
        }else{
            res.status(404).json({message: "User not found."})
        }
    }catch(error){
        res.status(500).json({message: "Server Error", error: error});
        console.log(error);
    }
}

const resetPassword = async (req, res) => {
    const {oldPassword, newPassword} = req.body;
    const {id} = req.user;

    try{
        const user = await User.findById(id);
        if(user){
            const isCorrect = await bcrypt.compare(oldPassword, user.password)
            if(isCorrect){
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(newPassword, salt);
                await user.save();
                res.status(200).json({message: "Password changed successfully."})
            }else{
                res.status(400).json({message: "Wrong credentials."})
            }
        }else{
            res.status(404).json({message: "User not found."})
        }
    }catch(error){
        res.status(500).json({message: "Server Error", error: error});
        console.log(error);
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({message: "Users retrieved successfully", users: users})
    }catch(error){
        res.status(500).json({message: "Server Error", error: error});
        console.log(error);
    }
}

module.exports = { register , logIn , getUsers , resetPassword};