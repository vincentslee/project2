CREATE DATABASE happiness;
USE happiness;

CREATE TABLE `cities` (
id INTEGER NOT NULL, 
city VARCHAR(50) NOT NULL,
life_quality DECIMAL(5,2) NOT NULL,
purchasing_power DECIMAL(5,2) NOT NULL,
safety DECIMAL(5,2) NOT NULL,
health_care DECIMAL(5,2) NOT NULL,
living_cost DECIMAL(5,2) NOT NULL,
prop_to_income_ratio DECIMAL(5,2) NOT NULL,
traffic DECIMAL(5,2) NOT NULL,
polution DECIMAL(5,2) NOT NULL,
climate DECIMAL(5,2) NOT NULL
);

CREATE TABLE `countries` (
id INTEGER NOT NULL,
country VARCHAR(50) NOT NULL, 
score DECIMAL(5,2) NOT NULL,
gdp DECIMAL(5,2) NOT NULL,
social_support DECIMAL(5,2) NOT NULL,
life_expectancy DECIMAL(5,2) NOT NULL,
freedom DECIMAL(5,2) NOT NULL, 
generosity DECIMAL(5,2) NOT NULL, 
corruption DECIMAL(5,2) NOT NULL
);


