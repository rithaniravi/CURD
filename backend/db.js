const mongoose=require('mongoose')

connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI)
      .then(()=>console.log("DB is connected"))
      .catch((err)=>{
        console.log("DB is not connected")
      })
}

module.exports=connectDatabase;