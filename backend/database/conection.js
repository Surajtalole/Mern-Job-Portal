import mongoose from "mongoose";

export const connection =()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Database Connection faild:${err}`)
    })
}