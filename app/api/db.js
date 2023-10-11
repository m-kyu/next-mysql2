
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.NEXT_PUBLIC_HOST,
  user     : process.env.NEXT_PUBLIC_USER,
  password : process.env.NEXT_PUBLIC_PASSWORD,
  database : process.env.NEXT_PUBLIC_DATABASE,
  port : process.env.NEXT_PUBLIC_PORT
});

connection.connect();

export async function queryExecute(str,value){
    let data= await new Promise((resolve,reject)=>{  
            connection.query(str, value, function (error, results) {
                resolve(results);
            });
        });
    return data;
}