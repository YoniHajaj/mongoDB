const { Inventory , User} = require("../mongodb");


const createInventory = async (req, res) => {
    let body = req.body;
    let inventoryData = new Inventory(body);
    let result = await inventoryData.save();
    res.status(201).json({ result });
  }

  const updateInventory = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await Inventory.updateOne({ inventory_id: id }, data);
    res.status(200).json({ result });
  }


 const deleteInventory = async (req, res) => {
    console.log("delete");
    const { id } = req.params;
    const result = await Inventory.deleteMany({});
    res.status(200).json({ result });
  };
  
 const  getInventory =  async (req, res) => {
    let result = await Inventory.find({});
    res.status(200).json({ result });
  };

module.exports = {createInventory, updateInventory , deleteInventory , getInventory}