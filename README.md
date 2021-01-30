# Business Organizer

[Demo](https://drive.google.com/file/d/1Gfb74D9POcfHsPjAvhO26_R6PsxS8kw1/view)

This website was made to help managers to keep track of employees! Upon starting the program you will be met with 7 options. Add employees will allow you to input your employee's first and last name, role ID and your employee's manager's employee ID. Add roles will allow you to input the name of the role, its salary, and which department the role belongs to. Add departments will allow you to add a department! These new additions will have IDs generated unique to the department type, role type, or employee. I decided that having references pop up when adding a new department, role or employee is more user-friendly than creating a list of potentially dozens of roles and multiple departments. This would force the user to sift through them which could take multiple arrow key presses. The user can also edit employee's roles.
 
The user can also view employees, roles, and departments. These commands will update the console with tables unique to provide the most useful information to the user.
 
## Install Instructions
 
Open up gitbash and type "npm install" without the quotes. This will install the dependencies I used which include console.table, inquirer, and mysql. You will also need to copy and paste the schema.sql into mysql workbench and execute it. If you want values for testing purposes you can also copy and paste the seeds.sql into mysql workbench as well. To run the program you just need to type "node server.js".
 
## Snips of code
 
The code snippet has been modified for readability. This is how the change employee function works. It creates an array of a string of the employee's ID, first name and last name. This is repeated for each of the employees inserted. When the prompt is called then the array will be shown. The user can use the arrow keys to switch between the options. Upon choosing a person, inquirer returns that string in an object along with the other answer which isn't shown. The object is turned into an array with Object.values and then the first index of the array is chosen and then the employee's ID is separated from the rest of the string. The ID then is used to point towards the employee that the user wanted. The same process occurs to the role ID and the role name. Using this we can obtain the IDs of both role and the employee while still keeping a detailed list of options the user can use arrow keys to navigate.

```
function changeEmpRole() {
    connection.query("SELECT * FROM employeeTable", function (err, res) {
        const promptAnswers1 = [];
        res.forEach(index => {
            promptAnswers1.push(`${index.employeeID}.) ${index.firstName} ${index.lastName}`)
        });
            inquirer.prompt([
                {
                    type: "list",
                    name: "employee",
                    message: "Which employee's role do you want to change?",
                    choices: promptAnswers1
                }
            ]).then((res) => {
                var answers = Object.values(res)
                person = answers[0]
                person = person.split('.')

                connection.query("UPDATE employeeTable SET ? WHERE ?", [
                    {
                        roleID: role[0]
                    },
                    {
                        employeeID: person[0]
                    }
                ])
                console.log("Employee's role updated!")
                initPrompt()
            })
        });
    })
}
```

## Built With

* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [console.table](https://www.npmjs.com/package/console.table)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Authors

* Peter Ting

- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)
- [Link to Portfolio](https://pting1995.github.io/Portfolio-mk2/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Thank you to UC Berkeley's Extension Bootcamp for giving me the opportunity to work on this project!