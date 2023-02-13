import User from "../model/User.js";

export const addUser = async (request, response) => {
    try{
        console.log(request.body);
        let existingUser = await User.findOne({sub: request.body.sub})
        if(existingUser) {
            response.status(200).json({ msg: 'User Already Exists'});
            return;
        }
        const newUser = new User(request.body)
        await newUser.save();
        return response.status(200).json(newUser)
    } catch(error) {
        return response.status(500).json(error.message)
    }
}

export const getUsers = async (request, response) => {
    try {
        console.log("hello");
        const users = await User.find({});
        console.log(`${users} find in backend usercontroller layer`)
        return response.status(200).json(users);
    } catch(error) {
        return response.status(500).json(error.message);
    }
}


