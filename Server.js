const express = require("express");
//const cors =require("cors");
const productRoute = require("./routes/product")
const app = express();

app.use(express.json());
//app.use(cors());
app.use("/product",productRoute);
app.listen(4000, () => console.log("listening!"));
