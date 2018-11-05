const packageJson = require('../../../../generated/icons/package.json');

export const generatePackageJson = async () => {
  const [major, minor, patch] = packageJson.version.split('.');

  const newVersion = `${major}.${1 + Number(minor)}.${patch}`;

  const packageJsonContents = `{
    "name": "@bulb/icons",
    "version": "${newVersion}",
    "private": true,
    "description": "bulb icons for react",
    "author": "Bulb",
    "license": "UNLICENSED",
    "main": "lib/icons.js",
    "files": [
        "src",
        "README.md"
    ],
    "publishConfig": {
        "registry": "https://registry.yarnpkg.com"
    },
    "scripts": {
        "test": "echo \\"Error: run tests from root\\" && exit 1"
    }
}`;

  return packageJsonContents;
};
