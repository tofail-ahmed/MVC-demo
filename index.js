const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);



app.listen(2023, () => {
  console.log("server listening on http://localhost:2023");
});
app.use((req, res) => {
      res.send(`<h1 style="color:yellow; background-color:green; margin:auto; text-align: center;">404!! Bad url request</h1>
           <h1 style="color:green; background-color:orange;  text-align: center;">Response not found!!</h1>`);
    });
