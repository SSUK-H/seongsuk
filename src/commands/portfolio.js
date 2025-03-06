import chalk from "chalk";
import { Command } from "commander";
import { COMMANDS } from "../utils/constants";
import { openUrl } from "../utils/openUrl";

export const portfolioCommand = new Command(COMMANDS.portfolio.name)
  .alias(COMMANDS.portfolio.alias)
  .description(chalk.cyanBright(COMMANDS.portfolio.description))
  .option("-b, --browser <browser>", "Specify the browser to open the URL")
  .action((options, command) => {
    openUrl(COMMANDS.portfolio.url, command.name(), options.browser);
  });
