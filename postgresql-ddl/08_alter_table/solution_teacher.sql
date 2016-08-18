-- BEGIN
ALTER TABLE products
    -- ADD PRIMARY KEY (price),
    ADD COLUMN amount integer,
    ALTER COLUMN name TYPE varchar,
    ALTER COLUMN name SET NOT NULL,
    ADD CONSTRAINT name_uniq UNIQUE (name),
    ALTER COLUMN price DROP DEFAULT;
-- END