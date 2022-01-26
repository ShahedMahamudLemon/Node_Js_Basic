var mysql = require("mysql");
var DBConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "pathshaladb",
};

var con = mysql.createConnection(DBConfig);
con.connect(function (error) {
  if (error) {
    console.log("Error Detected!!");
  } else {
    console.log("Connection Success");
    // insertData(con);
    // deleteData(con);
    selectData(con);
  }
});

function insertData(con) {
  let sqlQ =
    "INSERT INTO `dashboardinfo`(`id`,`title`, `description`, `temail`, `postid`) VALUES ('4','Exam!!','Agamikal theke Exam suru hobe','nai@gmail.com','5')";
  con.query(sqlQ, function (error) {
    if (error) {
      console.log("Failed to insert data");
    } else {
      console.log("Data inserted");
    }
  });
}
function deleteData(con) {
  let sqlQ = "DELETE FROM `dashboardinfo` WHERE `id`='4'";
  con.query(sqlQ, function (error) {
    if (error) {
      console.log("Failed to delete data");
    } else {
      console.log("Data deleted");
    }
  });
}
function selectData(con) {
  let sqlQ = "SELECT * FROM `dashboardinfo`";
  con.query(sqlQ, function (error, result) {
    if (error) {
      console.log("Failed to select data");
    } else {
      console.log(result);
    }
  });
}
