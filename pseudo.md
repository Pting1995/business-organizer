PSUEDO CODE :
Link all the blue ids together.
WHAT WE NEED:
1 SCHEMA (3 tables, each with their own set of ids)
    - EMPLOYEE
        id
        first_name
        last_name
        role_id
        manager_id
    - DEPARTMENT
        id  - INT PRIMARY KEY
        name - VARCHAR(30)
    - ROLE
        id
        title
        salary
        department_id
    Manager id needs to be linked to the role table.
For the command line application:
Going to ask for the information using inquirer, then use INSERT INTO to fill in the table with the response.
ADD:
Departments
roles
Employees
VIEW:
Departments
roles
Employees
UPDATE:
Employees role
First Question:
What would you like to do?
Add Employees
Add Roles
Add Departments
View All Roles
View All Departments
View All Employees
Update Employee role
THIS IS GOING TO BE 7 FUNCTIONS
Function 1: Add employee
[EMPLOYEE
Inquirer Questions:
What is your the employee name?
What is your emplyee’s last name?
What is the role id?
What is the manager id?]
.then (response, function () =>
var query = connection.query(
    “INSERT INTO products SET ?“,
    {response.first_name, response.last_name, response.role_id,
      flavor: “Rocky Road”,
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + ” product inserted!\n”);
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );
response.manager_id
) REFER TO ACTIVITY 9
---------------------------------------------
Function 2: Add Roles
[ROLE:
What is the title?
What is the salary?
What is the department id?]
CREATE/ADD by using INSERT INTO table role SET ?
--------------------------------------------------------
Function 3: Add Departments
[DEPARTMENTS:
What is the department name?
CREATE/ADD by using INSERT INTO department table SET ?
--------------------------------------------------------
Function 4: View All Roles
SELECT * role FROM table_role
something like this: REFER TO ACTIVITY 9
connection.query(“SELECT * FROM products”, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table;
    connection.end();
--------------------------------------------------------
Function 5: View All Departments
SELECT * departments FROM department table
something like this: REFER TO ACTIVITY 9
connection.query(“SELECT * FROM products”, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table;
    connection.end();
--------------------------------------------------------
Function 6: View All Employees
SELECT * FROM employee table
something like this: REFER TO ACTIVITY 9
connection.query(“SELECT * FROM products”, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table;
    connection.end();
______________________________________________________
Function 7: Update Employee Role
REFER TO ACTIVITY 9
Need Inquirer to ask about the employee role
SELECT role id FROM employee WHERE ? [role: user input]
var query = connection.query(
    “UPDATE products SET ? WHERE ?“,
    [
      {
        quantity: 100
      },
      {
        flavor: “Rocky Road”
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + ” products updated!\n”);