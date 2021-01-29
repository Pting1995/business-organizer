// command line - get inquirer 
//     add employee, role, dep use INSERT INTO to fill
//     view employee, role, dep
//     update employee

var mysql = require("mysql");
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "workDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    initPrompt();
});

function initPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "choiceA",
            message: "What would you like to do?",
            choices: [
                "Add employee",
                "Add role",
                "Add department",
                "View employee",
                "View role",
                "View department",
                "Update employee role"
            ]
        }
    ]).then((res) => {
        switch (res.choiceA) {
            case "Add employee":
                addEmployee()
                break;
            case "Add role":
                addRole()
                break;
            case "Add department":
                addDep()
                break;
            case "View employee":
                viewEmployee()
                break;
            case "View role":
                viewRole()
                break;
            case "View department":
                viewDep()
                break;
            case "Update employee role":
                changeEmpRole()
                break;
        }
    })
}


function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
        },
        {
            type: "input",
            message: "What is the employee's RoleID?",
            name: "role"
        }
    ]).then((res) => {
        console.log("Adding new employee!");
        connection.query("INSERT INTO employeeTable SET ?",
            {
                firstName: res.firstName,
                lastName: res.lastName,
                roleID: res.role
            }, 
            function (err, res) {
                if (err) throw err;

                console.log(res.affectedRows + " product inserted!\n");

                initPrompt();
            }
        )
    })


}

// function addRole() {

// }

// function addDep() {

// }

// function viewEmployee() {

// }

// function viewRole() {

// }

// function viewDep() {

// }

// function changeEmpRole() {

// }