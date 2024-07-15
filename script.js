document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total-amount");

  let total = 0;

  expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && !isNaN(expenseAmount)) {
      addExpenseToList(expenseName, expenseAmount);
      updateTotalAmount(expenseAmount);
      clearFormInputs();
    }
  });

  function addExpenseToList(name, amount) {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = name;

    const amountTd = document.createElement("td");
    amountTd.textContent = `R${amount.toFixed(2)}`;

    const actionTd = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      removeExpense(tr, amount);
    });
    actionTd.appendChild(deleteButton);

    tr.appendChild(nameTd);
    tr.appendChild(amountTd);
    tr.appendChild(actionTd);

    expenseList.appendChild(tr);
  }

  function updateTotalAmount(amount) {
    total += amount;
    totalAmount.textContent = total.toFixed(2);
  }

  function removeExpense(expenseRow, amount) {
    expenseList.removeChild(expenseRow);
    total -= amount;
    totalAmount.textContent = total.toFixed(2);
  }

  function clearFormInputs() {
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  }
});







    