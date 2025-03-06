import { exec } from "child_process";
import { URL_MESSAGES } from "./constants";
import chalk from "chalk";

/**
 * URL 오픈 함수
 * @param {string} url - 이동할 URL
 * @param {string} page - 이동할 페이지 이름
 * @param {string} [browser] - 사용할 브라우저 (선택 사항)
 */
export const openUrl = async (url, page, browser = "") => {
  console.log(chalk.blueBright(URL_MESSAGES.openingUrl(page, browser)));

  let openCommand = "";

  if (browser) {
    // 브라우저 옵션 지정한 경우
    switch (process.platform) {
      case "darwin":
        openCommand = `open -a "${browser}" ${url}`;
        break;
      case "win32":
        openCommand = `start ${browser} ${url}`;
        break;
      case "linux":
        openCommand = `${browser} ${url} &`;
        break;
      default:
        console.error(chalk.red("❌ Unsupported OS."));
        return;
    }
  } else {
    // 없으면 기본 브라우저 사용
    switch (process.platform) {
      case "darwin":
        openCommand = `open ${url}`;
        break;
      case "win32":
        openCommand = `start ${url}`;
        break;
      case "linux":
        openCommand = `xdg-open ${url}`;
        break;
      default:
        console.error(chalk.red("❌ Unsupported OS."));
        return;
    }
  }

  // 실행
  exec(openCommand, (error) => {
    if (error) {
      console.error(chalk.red(URL_MESSAGES.errorOpenUrl(page, browser)));
    }
  });
};
