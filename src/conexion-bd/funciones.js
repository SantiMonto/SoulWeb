const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://smonto:smonto123456@cluster0.qsznc.mongodb.net/SoulWeb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});