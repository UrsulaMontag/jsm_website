const path = require("path");

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" --file ")}`;

module.exports = {
	"*.{js,jsx,ts,tsx}": [buildEslintCommand],
	"*": "npm run prettier:write",
  	"*.js": ["npm run prettier:write", "npm run eslint"],
 	"*.jsx ": ["npm run prettier:write", "npm run eslint"],
 	"*.ts": ["npm run prettier:write", "npm run eslint"],
 	"*.tsx ": ["npm run prettier:write", "npm run eslint"]
};
