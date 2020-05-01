const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017';
const dbname = 'day7';

MongoClient.connect(url)
.then((client) => {
    console.log("Connection Successfull");
    const db = client.db(dbname);
    dboper.insertDocument(db, {name: "xyz", description: "Test"}, 'dishes')
.then((result) => {
    console.log("Insert Document: \n", result.ops);
    return dboper.findDocuments(db, 'dishes')
})
.then((docs) => {
    console.log('Found: ', docs);
    return dboper.updateDocument(db, {name: "xyz"}, {description: "Modified Test"}, 'dishes')
})
.then((result) => {
    console.log("Updated Result:", result.result);
    return dboper.findDocuments(db, 'dishes')
})
.then((docs) => {
    console.log(docs);
    return db.dropCollection('dishes')
})
.then((result) => {
    console.log("Dropped Result");
    client.close();
})
.catch((err) => {
    console.log("Error Found: " + err);
})
})
.catch((err) => {
    console.log("Error Found: " + err);
})