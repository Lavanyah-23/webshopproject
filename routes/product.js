const { Router } = require("express");
const Product = require("../models").products;
const Category = require("../models").categories;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    console.log("got here");
    const prods = await Product.findAll({ include: Category });
    const categories = await Category.findAll({ include: Product });
    console.log(categories);
    // console.log(prods);
    res.send(prods);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
