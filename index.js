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


        ]).then(ans => {
            switch (ans.initialilze) {
                case "Departments" : viewDept();
                break;
                case "Roles": viewRoles();
                break;
                case "Employees": viewEmployees();
                break;
                case "Add Department": addDept();
                break;
                case "Add Role": addRole ();
                break;
                case "Add Employee": addEmployee ();
                break;
                case "Update Employee Role": updateEmployee ();
                break;
                case "Finished":
                    console.log("Thank you for this completion.");
                    process.exit();
            }
            catch(err => console.error(err));

        }

        init ();

        const viewDept = () => {
            db.query ('SELECT * FROM department', (err, results) => {
                err ? console.error(err) : console.table(results);
                init ();
            
            })
        };

        const viewRoles = () => {
            db.query('SELECT * FROM roles', (err, results) => {
                err ? console.error(err): console.table(results);
                init();
        })
    };

    const viewEmployees = () => {
        db.query('SELECT * FROM employees', (err, results) => {
            err ? console.error(err) : console.table(results);
            init ();

        })
    }

    const addDept = () => {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is the department name?",
                name: "addDept"
            }

        ]).then(ans => {
            db.query('INSERT INTO department(name)
            getRandomValues(?)', ans.addDept, (err, results) => {
                if (err) {
                    console.log(err)

                }else {
                    db.query('SELECT * FROM department', (err, results) => {
                        err ? console.error(err) : console.table(results);
                        init ();

                    })
                }
            }

            }
    })
    };

    