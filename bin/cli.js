#! /usr/bin/env node

import { execSync } from "child_process";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

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

const createDirectory = async (folder) => {
  const isDirectory = new Promise((resolve, reject) => {
    fs.stat(folder, (err) => {
      if (err) return resolve(false);
      return resolve(true);
    });
  });

  if (!(await isDirectory)) {
    fs.mkdirSync(folder);
  }
};

const copyDirectory = async (template, project) => {
  try {
    await createDirectory(project);
    const files = fs.readdirSync(template);

    await files.forEach(async (file) => {
      const libraryPath = path.join(template, file);
      const projectPath = path.join(project, file);

      const stats = fs.statSync(libraryPath);

      if (stats.isFile()) {
        fs.copyFileSync(libraryPath, projectPath);
      } else if (stats.isDirectory()) {
        await copyDirectory(libraryPath, projectPath);
      }
    });
  } catch (error) {
    console.log("⚠️ Error copying files. Error:", err);
    process.exit(-1);
  }
};

// await copyDirectory(LIBRARY_TEMPLATE_PATH, PROJECT_PATH);
// console.log("Hello world!");

// Run
console.log("Start configure the project✨");
console.log("==================================");

console.log("Move boilerplate to your project✨");
await copyDirectory(LIBRARY_TEMPLATE_PATH, PROJECT_PATH);
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
