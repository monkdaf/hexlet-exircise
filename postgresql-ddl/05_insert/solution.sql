DROP TABLE IF EXISTS "cars";

CREATE TABLE cars (
    id integer PRIMARY KEY,
    name character varying UNIQUE NOT NULL,
    price numeric
);

-- BEGIN (write your solution here)
insert into cars values (1, 'nissan', 1.12), (10, 'kia', null);
-- END
