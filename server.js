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

    homePrompt()
});

function homePrompt() {
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
            type : input,
            message : "What is the employee's first name?",
            name : "firstName"
        }
    ])


    console.log("Adding new employee!");
    connection.query("INSERT INTO products SET ?",
        {
            employeeID : "Rocky Road",
            price: 3.0,
            quantity: 50
        },
        function (err, res) {
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            updateProduct();
        }
    )
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