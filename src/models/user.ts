import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import IUser from '../interfaces/user';

const userSchema = new Schema<IUser>({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

export default model<IUser>('User', userSchema);