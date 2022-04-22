let input = prompt("What would you like to do?");
const todos = ["Clean Litter Box", "Collect Eggs"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("******** LIST *********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*************************");
  } else if (input === "new") {
    const newTodo = prompt("Okay, what is the new todo item?");
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list`);
  } else if (input === "delete") {
    const indexStr = parseInt(prompt("Which todo would you like to delete?"));
    if (!Number.isNaN(indexStr)) {
      const deleted = todos.splice(indexStr, 1);
      console.log(`${deleted} has been removed from the list`);
    } else {
      console.log("You did not enter an actual number");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OKAY FINE! QUITE THE APP!");
