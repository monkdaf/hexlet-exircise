DROP TABLE IF EXISTS "cars";

-- BEGIN (write your solution here)
CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    name character varying,
    price numeric DEFAULT 1.22);
-- END

INSERT INTO cars (name) VALUES ('first') , ('second');
