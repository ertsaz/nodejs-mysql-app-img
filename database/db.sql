CREATE DATABASE Image;
USE Image;

CREATE TABLE imageSchema(
    title VARCHAR(80),
    description VARCHAR(200),
    filename VARCHAR(100),
    path TEXT,
    originalname TEXT,
    mimetype TEXT,
    size INTEGER,
    create_at DATE DEFAULT (CURRENT_DATE)
);
