const mongoose=require('mongoose');

const schemadata=mongoose.Schema({
    userID:{
       type:String,
       required: true
    },
    date:{
       type: date,
       required: true
    },
    description:{
       type:String,
       required: true
    },
    amount:{
       type:Number,
       required: true
    },
    paymentMethod:{
       type:Number,
       required: true
    },
},{ timestamps:true});

const userFinance=mongoose.model("financeRecord ",schemadata);

export default userFinance;