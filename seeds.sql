INSERT INTO departmentTable (depName)
VALUES ("Operations");

INSERT INTO roleTable (title, salary, depID)
VALUES ("Manager", "6", "1");

INSERT INTO roleTable (title, salary, depID)
VALUES ("Full Stack Developer", "5", "1");

INSERT INTO employeeTable (firstName, lastName, roleID, managerID)
VALUES ("Peter", "Ting", "2", "2");

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUES ("Mom", "Ting", "1");

INSERT INTO employeeTable (firstName, lastName, roleID, managerID)
VALUES ("Dad", "Ting", "2", "2");



SELECT * FROM departmentTable;

SELECT * FROM roleTable;

SELECT * FROM employeeTable;