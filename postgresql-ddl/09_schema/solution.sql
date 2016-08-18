DROP SEQUENCE IF EXISTS custom.serial;
DROP SCHEMA IF EXISTS custom;

-- BEGIN (write your solution here)
CREATE SCHEMA custom;
CREATE SEQUENCE serial;
ALTER SEQUENCE serial SET SCHEMA custom;
-- END
