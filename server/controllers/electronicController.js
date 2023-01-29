const electronicModel = require('../models/electronic')

// Method to get electronics items from database it takes as extra parameters the page number needed and size of page
exports.getElectronic = async (req, res) => {
  try{
      let {page, size} = req.query
      if(!page){
        page = 1
      }
      if (!size){
        size = 9
      }
      const limit = size
      const skip = (page - 1) *size
      const electronic = await electronicModel.find().limit(limit).skip(skip);
      const numberOfEntries = await electronicModel.count();
      return res.send({count: numberOfEntries, data: electronic});
  }catch(err){
      return res.status(500).send({ error: err.toString()})
  }
}

// Method to add electronics to the database it takes as body parameters the name and price of the item
exports.addElectronic = async (req, res) => {
  const name = req.body.name
  const price = req.body.price
  if (!name) {
    return res.status(500).send({ error: 'Enter an Electronic.' });
  }
  if (!price) {
    return res.status(500).send({ error: 'Enter its price.' });
  }

  try {
    const newElectronic = await electronicModel.create(req.body);
    return res.send({ data: newElectronic, msg: `${name} Created successfuly` });
  } catch (err) {
    return res.status(500).send({ error: err.toString() });
  }
}
