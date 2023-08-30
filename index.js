const cTable = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',
        password: 'rootroot',
        database: 'employee tracker'
    },

    console.log('Connected to employee_tracker-db database.')
        );

    const init = () => {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Please select from the following questions:",
                name: "initialize", 
                choice: [
                    "Departments",
                    "Roles",
                    "Employees",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update Employee Role",
                    "Finished"

                ]
            }
            

                ]
            }
        ])    }