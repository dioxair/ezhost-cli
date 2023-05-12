import inquirer from "inquirer";

inquirer.prompt([
  {
    type: "password",
    name: "authKey",
    message: "Please input your E-Z.host authentication key.",
    mask: "*",
  },
]);
