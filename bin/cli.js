#! /usr/bin/env node

import { execSync } from "child_process";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fse from "fs-extra";

const useCommand = async (command) => {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (error) {
    console.log(`⚠️ Failed to run ${command}. Error:\n`, error);
    return false;
  }
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_NAME = process.argv[2] === "." ? "" : process.argv[2];

const LIBRARY_PATH = path.dirname(__dirname);
const LIBRARY_TEMPLATE_PATH = path.join(LIBRARY_PATH, "template");
const PROJECT_PATH = path.join(process.cwd(), PROJECT_NAME);

// Commands
const installDepends = `cd ${PROJECT_PATH} && npm install`;
const moveFiles = async () => {
  try {
    await fse.ensureDir(PROJECT_PATH); // check if we have dir if not create
    await fse.copy(LIBRARY_TEMPLATE_PATH, PROJECT_PATH);
    return true;
  } catch (err) {
    console.log("⚠️ Error copying files. Error:", err);
    return false;
  }
};

// Run
console.log("Start configure the project✨");
console.log("==================================");

console.log("Move boilerplate to your project✨");
const movingFile = await moveFiles();
if (!movingFile) process.exit(-1);
console.log("Successfully move boilerplate to your project🥳");

console.log("Install all dependencies✨");
const installDependsRun = useCommand(installDepends);
if (!installDependsRun) process.exit(-1);
console.log("Successfully install all dependencies✨");

console.log("==================================");
console.log("Congratulation! Successfully configure the project🥳");
console.log("");
console.log(
  `To start development run: cd ${PROJECT_NAME} && npm run storybook`
);
