const commander = require("commander");
const { version } = require("../package.json");

const genCli = (argv) => {
  const program = new commander.Command();

  program
    .requiredOption(
      "-t --title <title>",
      "Title of the post. Must be wrapped in quotes if contains multiple words."
    )
    .option(
      "-c --categories <list of categories>",
      "Comma-separated list of post categories. (Required)"
    );

  program.version(version);

  program.parse(argv);
    return program.opts() ;
};
module.exports = genCli;
