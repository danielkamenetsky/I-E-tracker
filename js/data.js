const data = {
  income: [],
  expenses: []
}

function addIncomeData(income) {
  data.income.push(income)
}

function addExpenseData(expense) {
  data.expense.push(expense)
}

function getIncomeData() {
  return data.income;
}

function getExpenseData() {
  return data.expenses
}