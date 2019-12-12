import mongoose from 'mongoose';

export type User = {
    _id: string;
    name : string;
    email : string;
    thumbnailUrl : string;
    originUrl: string;
    profile : mongoose.Types.ObjectId;
}
