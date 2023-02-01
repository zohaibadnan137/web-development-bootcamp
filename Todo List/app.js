window.setTimeout(TodoList, 100);

function TodoList() {
  const todos = [];
  while (true) {
    let input = prompt("What would you like to do?").toLowerCase();

    if (input === "quit") {
      console.log("Goodbye!");
      break;
    } else if (input === "new") {
      let newTodo = prompt("Enter a new Todo:");
      todos.push(newTodo);
      console.log(`"${newTodo}" added to the list!`);
    } else if (input === "list") {
      console.log("****************");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`);
      }
      console.log("****************");
    } else if (input === "delete") {
      let deleteTodo;
      while (true) {
        deleteTodo = parseInt(prompt("Enter an index to delete:"));
        if (
          Number.isNaN(deleteTodo) ||
          deleteTodo < 0 ||
          deleteTodo >= todos.length
        )
          console.log("Enter a valid index.");
        else break;
      }
      let deleted = todos.splice(deleteTodo, 1);
      console.log(`"${deleted}" deleted from the list!`);
    } else continue;
  }
}
