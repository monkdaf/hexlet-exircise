﻿-- BEGIN
CREATE TABLE cars (
    id integer PRIMARY KEY,
    name character varying UNIQUE NOT NULL,
    price numeric,
    created_at timestamp NOT NULL
);
-- END