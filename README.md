# Seongsuk's CLI

## 🚀 Introduction

Welcome to **Seongsuk's CLI**! This CLI allows you to explore Seongsuk's development activities.

## 🎯 Features

- Open Seongsuk's GitHub profile
- Explore the portfolio website
- Display CLI help and version information
- Open links in a specified browser

## ⚡️ Installation & Quick Start

You can **run directly without installation** or **install it globally** for repeated use.

### 🔹 Run Without Installation

If you want to use it instantly, run:

```sh
npx seongsuk
```

Or execute a specific command directly:

```sh
npx seongsuk github
```

### 🔹 Install Globally

If you prefer to install it and use it multiple times, install it globally:

```sh
npm install -g seongsuk
```

Then, you can run:

```sh
seongsuk github
```

## 🔥 Commands

| Command                   | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| `-v, --version`           | Output CLI version                                          |
| `-h, --help`              | Display available commands                                  |
| `github\|gh`              | Open GitHub profile in browser                              |
| `portfolio\|pf`           | Open portfolio website in browser                           |
| `--browser, -b <browser>` | Specify the browser to open (e.g., Chrome, Safari, Firefox) |

## 💡 Examples

```sh
$ npx seongsuk github
👉 Opens GitHub profile in your default browser!

$ seongsuk portfolio
👉 Opens portfolio website in your default browser!

$ npx seongsuk github -b safari
👉 Opens GitHub profile in Safari!

$ seongsuk portfolio --browser chrome
👉 Opens portfolio website in Chrome!
```

## 🌱 Development & Contribution

### 🛠 Setting Up the Development Environment

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/seongsuk-cli.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the project:
   ```sh
   npm run build
   ```
4. Run the project locally:
   ```sh
   npm start
   ```
5. Submit a PR with your contribution.

## 📜 License

This project is licensed under the MIT License.
