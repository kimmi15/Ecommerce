const express = require("express")
const route = require("./routes/route")
const bodyParser = require('body-parser')
const app = express()
const mongoose = require("mongoose")
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/Node_Assighmnent_1?retryWrites=true&w=majority",
    {useNewUrlParser: true
    })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));

app.use('/', route)

app.listen(process.env.PORT || 8080, function(){
    console.log("Express app running on port",(process.env.PORT || 8080) )
})
