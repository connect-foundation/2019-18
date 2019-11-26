import mongoose from 'mongoose';
import { IWorkImage } from './workImage';
import { IUser } from './user';

export default interface IImage{
    owner: mongoose.Types.ObjectId | IWorkImage,
    creator: mongoose.Types.ObjectId | IUser,
    public: boolean,
    ref: mongoose.Types.ObjectId[],
    url: string,
};
