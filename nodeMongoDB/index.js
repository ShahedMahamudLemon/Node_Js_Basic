var mongoCli = require("mongodb").MongoClient;
// var URL =
//   "mongodb+srv://noobUser:<password>@cluster0.ypvke.mongodb.net?retryWrites=true&w=majority";
var URL = "mongodb://127.0.0.1:27017/"; //for local server
mongoCli.connect(URL, function (error, myMongoCli) {
  if (error) {
    console.log("Error Detected!!");
  } else {
    console.log("Connection Success!!");
    insertData(myMongoCli);
    // deleteDataOne(myMongoCli);
    // deleteAll(myMongoCli);
    // findOne(myMongoCli);
    // findAll(myMongoCli);
    // findAllByProjection(myMongoCli);
    // findAllDataQuery(myMongoCli);
    // findDataByLimit(myMongoCli);
    // sortData(myMongoCli);
    // updateData(myMongoCli);
    // createNewCollection(myMongoCli);
    // deleteCollection(myMongoCli);
  }
});

function insertData(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var myData = {
    name: "Evan",
    class: "8",
    roll: "2",
    address: "Manchester",
  };
  myColl.insertOne(myData, function (error) {
    if (error) {
      console.log("Failed to insert Data!!");
    } else {
      console.log("Data inserted!!");
    }
  });
}

function deleteDataOne(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var deleteData = { class: "9" };
  myColl.deleteOne(deleteData, function (error) {
    if (error) {
      console.log("Failed to delete Data!!");
    } else {
      console.log("Data Deleted!!");
    }
  });
}

function deleteAll(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  myColl.deleteMany(function (error, resObj) {
    if (error) {
      console.log("Failed to delete Data!!");
    } else {
      console.log(resObj.deletedCount + " Item deleted");
    }
  });
}

function findOne(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  // var FindObj = {};  empty object define no codition
  var FindObj = { class: "9" };
  myColl.findOne(FindObj, function (error, resObj) {
    if (error) {
      console.log("Data not found or Filed to Find!!");
    } else {
      console.log(resObj);
    }
  });
}
function findAll(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  myColl.find().toArray(function (error, result) {
    if (error) {
      console.log("Data not found or Filed to Find!!");
    } else {
      console.log(result);
    }
  });
}
// find specific coloumn data
function findAllByProjection(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var obj = {};
  var objProjection = { projection: { class: 1 } };
  myColl.find(obj, objProjection).toArray(function (error, result) {
    if (error) {
      console.log("Data not found or Failed to find data!!");
    } else {
      console.log(result);
    }
  });
}

function findAllDataQuery(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var query = { roll: "1", address: "Manchester" };
  myColl.find(query).toArray(function (error, result) {
    if (error) {
      console.log("Data not found or Failed to find data!!");
    } else {
      console.log(result);
    }
  });
}
function findDataByLimit(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  myColl
    .find()
    .limit(3)
    .toArray(function (error, result) {
      if (error) {
        console.log("Data not found or Failed to find data!!");
      } else {
        console.log(result);
      }
    });
}
function sortData(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var sortPattern = { name: -1 }; //use 1 to smaller->bigger && -1 to bigger->smaller
  myColl
    .find()
    .sort(sortPattern)
    .toArray(function (error, result) {
      if (error) {
        console.log("Data not found or Failed to find data!!");
      } else {
        console.log(result);
      }
    });
}
function updateData(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  var myColl = myDb.collection("testData");
  var query = { class: "8", roll: "5" };
  var updatedValue = { $set: { address: "Manchester", roll: "4" } };
  myColl.updateOne(query, updatedValue, function (error, result) {
    if (error) {
      console.log("Data is not updated");
    } else {
      console.log("Data successfully updated");
    }
  });
}

function createNewCollection(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  myDb.createCollection("demoDB", function (error) {
    if (error) {
      console.log("Failed to create Database");
    } else {
      console.log("Database Created");
    }
  });
}
function deleteCollection(myMongoCli) {
  var myDb = myMongoCli.db("testDB");
  myDb.dropCollection("demoDB", function (error) {
    if (error) {
      console.log("Failed to delete Database");
    } else {
      console.log("Database deleted");
    }
  });
}
