SELECT L.location_id, L.street_address, L.city, L.state_province, C.country_name FROM hr.locations AS L
NATURAL JOIN hr.countries AS C;