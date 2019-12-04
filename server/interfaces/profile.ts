import mongoose from 'mongoose';

export default interface IProfile{
    owner: mongoose.Types.ObjectId,
    follewer: mongoose.Types.ObjectId[],
    following:mongoose.Types.ObjectId[],
    introSimple: string,
    introDetail: string,
    activeFields: string[],
    websiteUrl: string,
};
