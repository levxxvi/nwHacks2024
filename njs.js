// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Node.js!\n');
// }).listen(8080);

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nwhacks"
});

con.connect(function(err) {
    if (err) throw err; 
    console.log("Connected!");
});
//     var sql = "INSERT INTO moodtracker (date, mood) VALUES ('current date', happy')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });