const  mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/labtestSignup'

mongoose.connect(url, { useNewUrlParser: true,

}).then(()=> {
    console.log(`Connection Succesfully established`);
}).catch(()=>{
    console.log(`Connection failed`)
});