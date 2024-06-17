  // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
  // when clicked displays prompts to add employees

  // Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an 
  //array of employee objects

  // makes an employees array

let addEmployees = true
let employeesArray = []

  // while loop allows user to add employees 
  //to employees array via prompts

while (addEmployees) {
let firstName = prompt("What is the employee's first name?")
let lastName = prompt("What is the employee's last name?")
let employeeSalary = prompt("What is the employee's salary?")
let salary = Number(employeeSalary)

//checks if salary is not a number, if true alert shows Not a Number!
if (isNaN(salary)) {
      alert("Not a Number!")
      return 'Not a Number!';
    }
else {}
console.log(salary)
  
// organizes employee data to push into array

let employee = {
  firstName: firstName, 
  lastName: lastName,
  salary: salary,

}


// pushes employee into array

employeesArray.push(employee)
addEmployees = confirm("Would you like to add another employee?")
}
return employeesArray

}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
for (let i = 0; i < employeesArray.length; i++) {
  const employee = employeesArray[i];
  totalSalary += employee.salary ;
  
}

console.log("Average Employee Salary: $"+ totalSalary/employeesArray.length)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
console.log("Congrats "+ randomEmployee.firstName, randomEmployee.lastName+ "! You've won the drawing!")
return randomEmployee
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
