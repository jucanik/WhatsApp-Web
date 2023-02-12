import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);
export default User;