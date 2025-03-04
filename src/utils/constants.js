import pkg from "../../package.json";

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
  error_unknown_command: "error: unknown command",
};
