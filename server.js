var mysql = require("mysql");
const inquirer = require('inquirer');
const cTable = require('console.table');

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
                addEmployeeOverview()
                break;
            case "Add role":
                addRoleOverview()
                break;
            case "Add department":
                addDep()
                break;
            case "View employee":
                viewEmployees()
                break;
            case "View role":
                viewRoles()
                break;
            case "View department":
                viewDeps()
                break;
            case "Update employee role":
                changeEmpRole()
                break;
        }
    })
}

function addEmployeeOverview() {
    
    connection.query("SELECT roleID, title FROM roleTable", function (err, result) {
        if (err) throw err;
        console.table("Role ID & Role Title Reference", result);

    });
    connection.query("SELECT employeeID, firstName, lastName FROM employeeTable where roleID = 1", function (err, result) {
        if (err) throw err;
        console.table("Manager Reference", result);
        
        addEmployee();
    });
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
            message: "What is the employee's roleID?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is the manager's employee ID?",
            name: "manager"
        }
    ]).then((response) => {
        connection.query("INSERT INTO employeeTable SET ?",
            {
                firstName: response.firstName,
                lastName: response.lastName,
                roleID: response.roleID,
                managerID: response.manager
            },
            function (err, res) {
                if (err) throw err;
                console.log("Added new employee!");
                initPrompt();
            }
        )
    })
}

function addRoleOverview() {
    connection.query("SELECT depID, depName FROM departmentTable", function (err, result) {
        if (err) throw err;
        console.table("Department ID & Department Name Reference", result);
        
        addRole();
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the role's salary?",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "What department does this role belong to?",
            name: "roleDep"
        }
    ]).then((res) => {
        connection.query("INSERT INTO roleTable SET ?",
            {
                title: res.roleName,
                salary: res.roleSalary,
                depID: res.roleDep
            },
            function (err, res) {
                if (err) throw err;
                console.log("Added new role!");
                initPrompt();
            }
        )
    })
}

function addDep() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department?",
            name: "depName"
        }
    ]).then((res) => {
        connection.query("INSERT INTO departmentTable SET ?",
            {
                depName: res.depName
            },
            function (err, res) {
                if (err) throw err;
                console.log("Added new Department!");
                initPrompt();
            }
        )
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employeeTable", function (err, res) {
        if (err) throw err;

        console.table("All employees:", res)

        initPrompt();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM roleTable", function (err, res) {
        if (err) throw err;

        console.table("All roles:", res)

        initPrompt();
    });
}

function viewDeps() {
    connection.query("SELECT * FROM departmentTable", function (err, res) {
        if (err) throw err;

        console.table("All departments:", res)

        initPrompt();
    });
}

function changeEmpRole() {
    connection.query("SELECT * FROM employeeTable", function (err, res) {
        if (err) throw err;

        const fullName = [];

        res.forEach(index => {
            fullName.push(`${index.firstName} ${index.lastName}`)
        });

        inquirer.prompt([
            {
                type: "list",
                name: "employeeChange",
                message: "Which employee's role do you want to change?",
                choices: fullName
            }
        ])
    });
}