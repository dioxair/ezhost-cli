import inquirer from "inquirer";

let authKey: String;
let serviceToUse: String;

let authPrompt: any = await inquirer.prompt([
  {
    type: "password",
    name: "authKey",
    message: "Please input your E-Z.host authentication key:",
    mask: "*",
  },
]);

authKey = authPrompt.authKey;

let servicePrompt = await inquirer.prompt([
  {
    type: "list",
    name: "serviceToUse",
    message: "What do you want to do on E-Z.host?",
    choices: [
      "Upload files",
      "Delete files",
      "Create URL shortener",
      "Delete URL shortener",
      "Create paste",
      "Edit existing paste",
      "Delete paste",
    ],
  },
]);

servicePrompt = servicePrompt.serviceToUse;

switch (servicePrompt) {
  case "Upload files":
    uploadFile();
}

async function uploadFile() {
  let filePrompt = await inquirer.prompt([
    {
      type: "input",
      name: "pathToFile",
      message: "Please input the path to the file to want to upload:",
    },
  ]);
  console.log(filePrompt.pathToFile);
}
