import figlet from "figlet";
import chalk from "chalk";
import { CLI_INFO, MESSAGES } from "./utils/constants";

// 텍스트 배너
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
