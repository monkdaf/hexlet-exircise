-- BEGIN
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name character varying,
    price numeric DEFAULT 1.22
);
-- END