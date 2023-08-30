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