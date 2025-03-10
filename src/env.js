import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  github: process.env.GITHUB_URL || "https://www.github.com",
  portfolio: process.env.PORTFOLIO_URL || "https://www.github.com",
};
