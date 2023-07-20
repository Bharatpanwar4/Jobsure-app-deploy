//const connectionString=`mongodb+srv://bharatpanwar4:<password>@cluster0.xnzyexp.mongodb.net/?retryWrites=true&w=majority`

import mongoose from "mongoose";

const connectDB = (url)=>{
    return mongoose.connect(url)
}

export default connectDB