
    let data = []


    function addExpense(expenseName, expenseAmount) {
        const expense = {
          name: expenseName,
          amount: parseFloat(expenseAmount)
        };
    }
        expense.push(expense);
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';

        updateExpenseList();
       updateTotalAmount();


      expense-table.forEach((expense, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.amount}</td>
      <td><button onclick="deleteExpense(${index})">Delete</button></td>
    `;
    expenseList.appendChild(row);
  });











