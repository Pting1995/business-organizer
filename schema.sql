-- three tables - maybe use constructors?

DROP DATABASE IF EXISTS workDB;

CREATE DATABASE workDB;

USE workDB;

CREATE TABLE departmentTable (
    depID INT NOT NULL AUTO_INCREMENT,
    depName VARCHAR(20) NOT NULL,
    PRIMARY KEY (depID)
);

CREATE TABLE roleTable (
    roleID INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    salary INT NOT NULL,
    depID INT,
    PRIMARY KEY (roleID),
    FOREIGN KEY (depID) REFERENCES departmentTable(depID)
);

CREATE TABLE employeeTable (
  employeeID INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(20) NOT NULL,
  roleID INT NOT NULL,
  managerID INT,
  PRIMARY KEY (employeeID),
  FOREIGN KEY (roleID) REFERENCES roleTable(roleID)
);

CREATE TABLE roleNum (
    SELECT employeeTable.firstName, employeeTable.lastName, roleTable.title
    FROM employeeTable
    INNER JOIN roleTable
    ON employeeTable.roleID = roleTable.roleID
);
    -- SELECT employeeTable.firstName, employeeTable.lastName, roleTable.title
    -- FROM roleTable
    -- INNER JOIN employeeTable
    -- ON employeeTable.roleID = roleTable.roleID


CREATE TABLE overview (
    SELECT departmentTable.depName, employeeTable.employeeID, employeeTable.firstName, employeeTable.lastName, roleTable.title, roleTable.salary
    FROM roleTable
    INNER JOIN departmentTable ON departmentTable.depID = roleTable.depID
    INNER JOIN employeeTable ON employeeTable.roleID = roleTable.roleID
);

SELECT * FROM employeeRole;
SELECT * FROM overview;

