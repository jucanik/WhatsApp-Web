import Conversation from "../model/Conversation.js";

export const newConversation =async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        const exist = await Conversation.findOne({ members: {$all: [receiverId, senderId]}});
        if(exist){
            response.status(200).json('Conversation already exists');
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        return response.status(200).json("Conversation Saved successfully");
    } catch(error) {
        return response.status(500).json(error.message);
    }
} 