import pkg from "../../package.json";
import { ENV } from "../config/env";

// CLI 정보
export const CLI_INFO = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
};

// 기본 메세지
export const MESSAGES = {
  welcome: `
========================================================
  
  🚀 Welcome to Seongsuk's CLI! 🚀

  Nice to meet you:)
  I am Seongsuk, a developer who codes even in dreams.

  Use the commands below to learn more about me!

========================================================
`,
  error_unknown_command: "❌ error: unknown command",
};

// 명령어
export const COMMANDS = {
  github: {
    name: "github",
    alias: "gh",
    description: "Open my GitHub profile in your browser",
    url: ENV.github,
  },
  portfolio: {
    name: "portfolio",
    alias: "pf",
    description: "Explore my portfolio website in your browser",
    url: ENV.portfolio,
  },
};

export const URL_MESSAGES = {
  /**
   * URL 열기 메시지
   * @param {string} page - 열려는 페이지 이름
   * @param {string} [browser] - 사용할 브라우저 (선택 사항)
   * @returns {string} 포맷된 메시지
   */
  openingUrl: (page, browser = "") =>
    browser ? `🔗 Opening ${page} in ${browser}...` : `🔗 Opening ${page}...`,

  /**
   * URL 열기 실패 메시지
   * @param {string} page - 열려는 페이지 이름
   * @param {string} [browser] - 사용할 브라우저 (선택 사항)
   * @returns {string} 포맷된 메시지
   */
  errorOpenUrl: (page, browser = "") =>
    browser
      ? `❌ Failed to open ${page} in ${browser}.`
      : `❌ Failed to open ${page}.`,
};
