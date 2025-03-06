import chalk from "chalk";
import { Command } from "commander";
import { COMMANDS } from "../utils/constants";
import { openUrl } from "../utils/openUrl";

export const githubCommand = new Command(COMMANDS.github.name)
  .alias(COMMANDS.github.alias)
  .description(chalk.magentaBright(COMMANDS.github.description))
  .option("-b, --browser <browser>", "Specify the browser to open the URL")
  .action((options, command) => {
    openUrl(COMMANDS.github.url, command.name(), options.browser);
  });
