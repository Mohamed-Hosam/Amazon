const foodModel = require('../models/food')

// Method to get food items from the database, it takes as parameters (page needed, size of page, type of food (fruit, vegetable),
// sortBy, and ascending) and returns along with the data, the number of fruits or vegetables in the database
exports.getFood = async (req, res) => {
  try{
    let {page, size, type, sortBy, ascending} = req.query
      if(!page){
        page = 1
      }
      if (!size){
        size = 9
      }
      if(!type){
        type = "fruit"
      }
      const limit = size
      const skip = (page - 1) *size
      const query = { 'type':type }
      const numberOfEntries = await foodModel.find(query).count();
      if(!sortBy){
      const food = await foodModel.find(query).limit(limit).skip(skip);
      return res.send({count: numberOfEntries, data: food});
      }
      else{
        if(ascending == undefined){
          ascending ='true'
        }
        const isAscending = (ascending === 'true')
        const food = await foodModel.find(query).limit(limit).skip(skip).sort({ [sortBy]: isAscending ? 1 : -1 });
        return res.send({count: numberOfEntries, data: food});
      }
  }catch(err){
      return res.status(500).send({ error: err.toString()})
  }
}

// Method to add food to the database, it takes as body the name, type and price of the item
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
