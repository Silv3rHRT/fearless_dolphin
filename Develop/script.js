// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
function collectEmployees() {
  const employeesArray = [];

  do {
    //prompt the user for employee details
    const firstName = prompt("Please enter the employee's first name:","First Name");
    const lastName = prompt("Please enter the employee's last name:", "Last Name");
    const salary = parseFloat(prompt("Please enter the employee's salary:","123456"));

    //ensure the salary is a valid number, if not set to 0
    if (isNaN(salary)) {
      salary = 0;
    };
    //creates current employee into the arroy
    const currentEmployee = {firstName: firstName || "Unknown", 
      lastName: lastName || "Unknown",  
      salary: salary};
      //push info to the array
      employeesArray.push(currentEmployee);
    } while (confirm("Do you want to add another employee?")); //confirms if you want to add any more entries
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  if (Number.isInteger(averageSalary)) {
    console.log(`The average employee salary between our employee(s) is $${averageSalary}`);
  } else {
    console.log(`The average employee salary between our employee(s) is $${averageSalary.toFixed(2)}`);
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  //generate random number index
  const surprisedPikachu = Math.floor(Math.random() * employeesArray.length);
  
  //select winner
  const winner = employeesArray[surprisedPikachu];

  //log the winner
  console.log(`congratulations to ${winner.firstName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
