import chalk from "chalk";
import { Command } from "commander";
import { COMMANDS } from "./constants";
import { openUrl } from "./openUrl";

// 깃헙 command
export const githubCommand = new Command(COMMANDS.github.name)
  .alias(COMMANDS.github.alias)
  .description(chalk.magentaBright(COMMANDS.github.description))
  .option("-b, --browser <browser>", "Specify the browser to open the URL")
  .action((options, command) => {
    openUrl(COMMANDS.github.url, command.name(), options.browser);
  });

// 포트폴리오 command
export const portfolioCommand = new Command(COMMANDS.portfolio.name)
  .alias(COMMANDS.portfolio.alias)
  .description(chalk.cyanBright(COMMANDS.portfolio.description))
  .option("-b, --browser <browser>", "Specify the browser to open the URL")
  .action((options, command) => {
    openUrl(COMMANDS.portfolio.url, command.name(), options.browser);
  });
