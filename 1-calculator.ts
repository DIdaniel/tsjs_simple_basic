{
  type Operation = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(operation: Operation, first: number, second: number) {
    switch (operation) {
      case "add":
        console.log(first + second);
        return;
      case "substract":
        console.log(first - second);
        return;
      case "multiply":
        console.log(first * second);
        return;
      case "divide":
        console.log(first / second);
        return;
      case "remainder":
        console.log(first % second);
        return;
    }
  }

  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
