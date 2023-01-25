const electronicModel = require('../models/electronic')

exports.getElectronic = async (req, res) => {
  try{
      const electronic = await electronicModel.find();
      return res.send({data: electronic});
  }catch(err){
      return res.status(500).send({ error: err.toString()})
  }
}

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
