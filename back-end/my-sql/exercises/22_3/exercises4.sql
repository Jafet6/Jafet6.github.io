USE hr;
SELECT * FROM locations;

ALTER TABLE locations
DROP state_province,
ADD state VARCHAR(25) AFTER city;

ALTER TABLE countries RENAME country_new

