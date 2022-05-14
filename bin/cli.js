// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT\
const { execSync } = require('child_process');

const runCommand = command => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	}
	catch (e) {
		console.error(e);
		return false;
	}
	return true;
};

const repoName = process.argv[2];
const gitCheckout = `git clone --depth 1 https://github.com/Grayson-code/create-crema-app ${repoName}`;

const install = `cd ${repoName} && npm ci`;

console.log(`Cloning The Repository to ${repoName}`);

const checkOut = runCommand(gitCheckout);

if (!checkOut) process.exit(-1);

console.log('Installing the dependencies');
const installDeps = runCommand(install);
if (installDeps) process.exit(-1);

