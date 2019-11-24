import mongoose from 'mongoose';

export default interface IWallpaper{
    owner: mongoose.Types.ObjectId;
    creator: mongoose.Types.ObjectId;
    public: boolean;
    ref: mongoose.Types.ObjectId[];
    url: string;
}
