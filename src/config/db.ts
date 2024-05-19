import mysql from "mysql";
const conneted = mysql.createConnection({
    host: "mysql-172661-0.cloudclusters.net",
    port: 19877,
    user: "admin",
    password: "ySb0cMMb",
    database: "workshokDB",
});
conneted.connect((err)=>{
  if(err) throw "Connected Faild"
  console.log("Connected DB");
})
export default conneted;