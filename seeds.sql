INSERT INTO departmentTable (depName)
VALUES ("Operations");

INSERT INTO departmentTable (depName)
VALUES ("Finance");

INSERT INTO roleTable (title, salary, depID)
VALUES ("Manager", "100000", "1");

INSERT INTO roleTable (title, salary, depID)
VALUES ("Full Stack Developer", "100000", "1");

INSERT INTO roleTable (title, salary, depID)
VALUES ("Accountant", "70000", "2");

INSERT INTO employeeTable (firstName, lastName, roleID, managerID)
VALUES ("Billy", "Bob", "2", "2");

INSERT INTO employeeTable (firstName, lastName, roleID)
VALUES ("Ricky", "Ring", "1");

INSERT INTO employeeTable (firstName, lastName, roleID, managerID)
VALUES ("George", "Forge", "3", "2");



SELECT * FROM departmentTable;

SELECT * FROM roleTable;

SELECT * FROM employeeTable;