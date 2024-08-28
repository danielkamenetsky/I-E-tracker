/** Variables */

const incomeList = document.getElementById('income-list')
const expensesList = document.getElementById('expense-list')

/** Cached element references */
const incomeBtn = document.querySelector('#add-income-btn')
const expenseBtn = document.querySelector('#add-expense-btn')
/** Eventlisteners */
incomeBtn.addEventListener('click', addIncome)
expenseBtn.addEventListener('click', addExpense)


/** Functions */
function addIncome (){
  console.log("adding income")
  const item = prompt("Enter Income Item ")
  const amount = prompt("Enter Amount: ")
  const incomeItem = document.createElement('li')
  incomeItem.textContent = `${item}: $${amount}`
  incomeList.appendChild(incomeItem)
}

function addExpense () {
  console.log("adding expense")
  const item = prompt("Enter Expense Item ")
  const amount = prompt("Enter Amount: ")
  const expenseItem = document.createElement('li')
  expenseItem.textContent = `${item}: $${amount}`
  expenseList.appendChild(expenseItem)
}
