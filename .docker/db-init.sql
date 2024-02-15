/**
  * Criar usuário para acessar o banco de dados de serviço de usuário
  */
CREATE USER team_user_service with encrypted password '123456' CREATEDB;

/**
  * Criar usuário para acessar o banco de dados de serviço de produto
  */
CREATE USER team_product_service with encrypted password '123456' CREATEDB;

/**
  * Criar usuário para acessar o banco de dados de serviço de leiloes
  */
CREATE USER team_auction_service with encrypted password '123456' CREATEDB;

/**
  * Criar usuário para acessar o banco de dados de serviço de lances
  */
CREATE USER team_bid_service with encrypted password '123456' CREATEDB;

/**
  * Criar usuário para acessar o banco de dados de serviço de mail
  */
CREATE USER team_mail_service with encrypted password '123456' CREATEDB;

/**
  * Criar usuário para executar apenas migrations no banco de dados
  */
CREATE USER team_migration with encrypted password '123456' CREATEDB;

/**
  * Base de dados para o serviço de usuário
  */
CREATE DATABASE user_service OWNER team_user_service;
GRANT ALL PRIVILEGES ON DATABASE user_service TO team_migration;

/**
  * Base de dados para o serviço de produto
  */
CREATE DATABASE product_service OWNER team_product_service;
GRANT ALL PRIVILEGES ON DATABASE product_service TO team_migration;

/**
  * Base de dados para o serviço de leiloes
  */
CREATE DATABASE auction_service OWNER team_auction_service;
GRANT ALL PRIVILEGES ON DATABASE auction_service TO team_migration;

/**
  * Base de dados para o serviço de lances
  */
CREATE DATABASE bid_service OWNER team_bid_service;
GRANT ALL PRIVILEGES ON DATABASE bid_service TO team_migration;

/**
  * Base de dados para o serviço de mail
  */
CREATE DATABASE mail_service OWNER team_mail_service;
GRANT ALL PRIVILEGES ON DATABASE mail_service TO team_migration;