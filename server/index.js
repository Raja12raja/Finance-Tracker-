const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT || 3001;

mongoose.connect("mongodb://127.0.0.1:27017/finance")
.then(()=>console.log("connect to db"))
.catch((err)=>console.log(err));

const financialRecordSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  });
  
const userFinance= new mongoose.model("financeRaja", financialRecordSchema);

app.get("/getall/:userID",async(req,res)=>{
    try {
      const id=req.params.userID;
      console.log(id);
      const data= await userFinance.find({userId: id});
      console.log(data);
      if(data.length === 0){
          return res.status(404).send("NO records found");
      }
        res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
})

app.post("/create",async(req,res)=>{
    try {
      const newRecord=req.body;
      console.log(newRecord);
      const records= new userFinance(newRecord);
      await records.save();
      res.send({success:true,msg: "date saved"});
    } catch (error) {
      res.status(500).send(error);
    }
})

app.put("/:ID",async(req,res)=>{
    try {
      const id=req.params.ID;
      console.log(req.body);
      console.log(id);
      const data= await userFinance.findByIdAndUpdate(id,req.body);
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
})

app.delete("/:ID",async(req,res)=>{
    try {
      const id=req.params.ID;
      console.log(id);
      const data= await userFinance.findByIdAndDelete(id);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
})

app.listen(PORT,()=>{
    console.log("ok");
}) 