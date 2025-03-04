import figlet from "figlet";
import chalk from "chalk";
import { Command } from "commander";
import { CLI_INFO, MESSAGES } from "./utils/constants";

const program = new Command();

// 텍스트 배너
if (process.argv.length <= 2) {
  console.log(
    chalk.blue(
      figlet.textSync(CLI_INFO.name.toLowerCase(), {
        font: "Dancing Font", // Ghost , Standard , Graffiti , Dancing Font , Slant , Pagga
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }),
    ),
  );
  console.log(chalk.blue(MESSAGES.welcome));
}

// CLI 정보
program
  .name(CLI_INFO.name)
  .description(chalk.yellow(CLI_INFO.description))
  .version(CLI_INFO.version, "-v, --version");

// 정의되지 않은 명령어인 경우 자동으로 help 실행
program.on("command:*", (operands) => {
  console.error(
    chalk.red(`${MESSAGES.error_unknown_command} '${operands[0]}'`),
  );
  program.help();
  process.exit(1);
});

program.parse(process.argv);
