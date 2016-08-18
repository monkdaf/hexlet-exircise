DROP TABLE IF EXISTS "products";

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name text,
    price numeric DEFAULT 1
);

-- BEGIN (write your solution here)
ALTER TABLE products ALTER COLUMN name TYPE character varying;
ALTER TABLE products ADD CONSTRAINT name_unique UNIQUE(name);
ALTER TABLE products ALTER COLUMN name SET NOT NULL;

ALTER TABLE products ADD COLUMN amount integer;

ALTER TABLE products ALTER COLUMN price DROP DEFAULT;
-- END
