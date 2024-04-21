
import {model, Schema ,models, mongoose } from "mongoose";

const MenuItemSchema =new Schema({
image:{type:String},
name:{type:String},
description:{type:String},
category:{type: mongoose.Types.ObjectId},
price:{type:Number},
quantity:{type:Number},
},{timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem',MenuItemSchema);