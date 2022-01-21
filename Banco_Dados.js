exports.BDbanco = function(){

    var mysql = require('mysql');

    var connect = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "",
        database: "banco"

    });

    return connect;

};