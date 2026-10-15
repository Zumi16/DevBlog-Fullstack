import { DatabaseSync } from 'node:sqlite'
const db = DatabaseSync(':memory:')

db.exec(`
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT 
    )
`)

db.exec(`
    CREATE TABLE blog_post (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        content TEXT, 
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `)

    export default db;