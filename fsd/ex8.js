//8. Create a MongoDB application to create CRUD operations.

//Source code:

var MongoClient = require('mongodb').MongoClient;
const client = new 
MongoClient("mongodb://Khumaini:toor@localhost:27017/bookings");
async function findCollections(colllist){
 const cursor = colllist.collections({});
 await (await cursor).forEach(coll=>console.log(` -
${coll.collectionName}`));
}
async function insertDocuments(collection){
 const doc = 
{name:"Khumaini",userid:"skkhumaini1119",age:21,gender:"male"};
 const docs = [
 {name:"John",userid:"john694"},
 {name:"stake",userid:"stake428"},
 {name:"black",userid:"black123"},
 ]
 const result = await collection.insertOne(doc);
 console.log(`Document inserted with _id:${result.insertedId}`);
 const insertManyResult = await collection.insertMany(docs);
 for(let _id of Object.values(insertManyResult.insertedIds)){
 console.log(`Document inserted with _id:${_id}`);
 }
}
async function findDocuments(collection){
 console.log("=============>Documents in users collection<================");
 const cursor = client.db().collection('users').find({});
 while(await cursor.hasNext()){
 console.log(await cursor.next());
 }
 await cursor.close();
}
async function updateDocuments(collection){
 const result = await collection.updateOne({ name:"Khumaini" },{ $set:{age:22}});
 const query = {name:"Khumaini"};
 const cursor = collection.find(query);
 console.log("=============>Modified results<================");
 await cursor.forEach(doc => console.log(doc)); 
 await cursor.close();
}
async function deleteDocuments(collection){
 await collection.deleteOne({name:"John"});
 console.log("=============>Documents after delete operation<================");
 await findDocuments(collection);
}
async function main(){
 try{
 await client.connect();
 var dbObj = await client.db();
 console.log("=============>Collections inside the bookings database:<================ ");
 await findCollections(dbObj);
 
 var collection = dbObj.collection('users');
 console.log("=============>users collection created in bookings database<================");
 console.log("=============>Collections inside the bookings database:<================ ");
 await findCollections(dbObj);
 
 console.log("=============>Inserting documents into collection<================");
 await insertDocuments(collection);
 
 console.log("=============>Collections inside the bookings database:<================ ");
 await findCollections(dbObj);
 
 await findDocuments(collection);
 await updateDocuments(collection);
 await deleteDocuments(collection);
 await client.close();
 }
 catch(err){
 console.error(err);
 }
 finally{
 await client.close();
 }
}
main().catch(console.error);

