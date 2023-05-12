import inquirer from "inquirer";

let authKey: String;

let authPrompt = await inquirer.prompt([
  {
    type: "password",
    name: "authKey",
    message: "Please input your E-Z.host authentication key.",
    mask: "*",
  },
]);

authKey = authPrompt.authKey;
