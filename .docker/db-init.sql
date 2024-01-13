/**
  * Create a new user and database for the application
  * This script is only run once when the database container is created
  */
CREATE USER developer with encrypted password '123456';

/**
  * Create a new database for the application
  * This script is only run once when the database container is created
  */
CREATE DATABASE service_user;
GRANT ALL PRIVILEGES ON DATABASE service_user TO developer;

/**
  * Create a new database for the application
  * This script is only run once when the database container is created
  */
CREATE DATABASE service_product;
GRANT ALL PRIVILEGES ON DATABASE service_product TO developer;

/**
  * Create a new database for the application
  * This script is only run once when the database container is created
  */
CREATE DATABASE service_auction;
GRANT ALL PRIVILEGES ON DATABASE service_auction TO developer;
