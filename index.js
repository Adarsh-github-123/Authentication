const express = require("express");
const app = express();
const routes = require("./routes/authRoutes")
const PORT = 5500;

//middle wares

//accept json 
app.use(express.json());
//accept the body
app.use(express.urlencoded({ extended : true }));
//use the html
app.use(express.static("public"));
//Name the api as api/v1/signUp....
app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log('App is running at port ',PORT)
});