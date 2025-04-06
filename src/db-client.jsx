const { Client } = require('pg');

// PostgreSQL 接続情報
const client = new Client({
  host: 'db', // docker-compose のサービス名
  port: 5432,
  user: 'user',
  password: 'postgres',
  database: 'my_database',
});

async function fetchData() {
  try {
    await client.connect();
    console.log('Connected to the database');

    // データを取得
    const res = await client.query('SELECT * FROM users');
    console.log('Data from users table:', res.rows);

    await client.end();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

fetchData();