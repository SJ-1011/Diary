import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1129", // 본인 비밀번호
  database: "diary_db",
});

db.connect((err) => {
  if (err) {
    console.error("DB 연결 실패:", err);
    return;
  }
  console.log("DB 연결 성공!");
});

export default db;
