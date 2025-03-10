import figlet from "figlet";
import chalk from "chalk";
import { Command } from "commander";
import { CLI_INFO, MESSAGES } from "./constants";
import { githubCommand, portfolioCommand } from "./command";

const program = new Command();

// 텍스트 배너
if (process.argv.length <= 2) {
  console.log(
    chalk.blueBright(
      figlet.textSync(CLI_INFO.name.toLowerCase(), {
        font: "Dancing Font", // Ghost , Standard , Graffiti , Dancing Font , Slant , Pagga
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }),
    ),
  );
  console.log(chalk.blueBright(MESSAGES.welcome));
}

// CLI 정보
program
  .name(CLI_INFO.name)
  .description(chalk.yellowBright(CLI_INFO.description))
  .version(CLI_INFO.version, "-v, --version")
  .action(() => {
    program.help();
  });

// command
program.addCommand(githubCommand); // 깃헙
program.addCommand(portfolioCommand); // 포트폴리오

// 정의되지 않은 명령어인 경우 자동으로 help 실행
program.on("command:*", (operands) => {
  console.error(
    chalk.red(`${MESSAGES.error_unknown_command} '${operands[0]}'`),
  );
  program.help();
  process.exit(1);
});

program.parse(process.argv);
