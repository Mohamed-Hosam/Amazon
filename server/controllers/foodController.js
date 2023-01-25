const { ConnectionStates } = require('mongoose');
const foodModel = require('../models/food')

exports.getFood = async (req, res) => {
  try{
      const food = await foodModel.find();
      return res.send({data: food});
  }catch(err){
      return res.status(500).send({ error: err.toString()})
  }
}

exports.addFood = async (req, res) => {
  const name = req.body.name
  const type = req.body.type
  const price = req.body.type
  if (!name) {
    return res.status(500).send({ error: 'Enter a fruit.' });
  }
  if (!type) {
    return res.status(500).send({ error: 'Enter its type.' });
  }
  if (!price) {
    return res.status(500).send({ error: 'Enter its price.' });
  }

  try {
    const newFood = await foodModel.create(req.body);
    return res.send({ data: newFood, msg: `${name} Created successfuly` });
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
}
