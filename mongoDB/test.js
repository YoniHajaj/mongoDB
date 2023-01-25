const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://yoni:jdS51pdFRDQhIVdH@cluster0.p7mzg.mongodb.net/mydb?retryWrites=true&w=majority'
      )
      .then(() => console.log(`🍃 mongo-db connected`))
      .catch(console.log)

const { Schema } = mongoose
const inventorySchema = new Schema({
    inventory_id: Number,
    title: String, // {type: String}
})

let inventory = mongoose.model('Inventory', inventorySchema)

// let inventoryData = new inventory({inventory_id: 2, title: "Inventory 0002"})
// inventoryData.save()

let findInventory = async () => {
    let result = await inventory.find({})
    return result
}
findInventory().then((result) =>console.log(result))

