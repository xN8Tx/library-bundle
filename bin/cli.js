#! usr/bin/env node

import { execSync } from 'child_process';

const useCommand = async (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.log(`⚠️Failed to run ${command}. Error:\n`, error);
    return false;
  }
};

const PROJECT_NAME = process.argv[2];

// Commands
const cloneRepository = `git clone https://github.com/xN8Tx/ts-rlb ${projectName}`;
const installDepends = `cd ${PROJECT_NAME} && npm install`;

// Run
console.log('Start to tune the project✨');

console.log('Move boilerplate to your project✨');
const cloneRepositoryRun = useCommand(cloneRepository);
if (!cloneRepositoryRun) return process.exit(-1);

console.log('Install all dependencies✨');
const installDependsRun = useCommand(installDepends);
if (!installDependsRun) return process.exit(-1);

console.log('Congratulation! Successfully tune the project🥳');
console.log(`Next step is run:`);
console.log(`cd ${PROJECT_NAME} && npm run storybook`);
