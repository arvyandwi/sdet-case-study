# SDET Case Study 🧪🔍

This repository contains a Software Development Engineer in Test (SDET) case study, demonstrating capabilities in building automated tests for web applications using modern tools and best practices.

## ⚙️ Tools & Frameworks

- **Language**: Javascript
- **Automation Tool**: [Playwright](https://playwright.dev/)
- **Testing Types**: Web UI Testing
- **IDE**: Visual Studio Code

## 🚀 Getting Started

### Prerequisites

- [Playwright](https://playwright.dev/)
- Visual Studio Code
- Git

### Cloning the Repository

```bash
git clone https://github.com/arvyandwi/sdet-case-study.git
cd sdet-case-study
```

## 🚀 How to Run

Go to terminal:
```bash
npx playwright test
```

If you want to run a specific test case/scenario:
Go to terminal:
```bash
npx playwright test tests/login.spec.js
```
You can find all test case on the `tests` folder.

You can run in UI Mode using:
```bash
npx playwright test --ui
```

## 🧑‍💻 Headless or Not?

Simply go to `playwright.config.ts` in the project folder and find the attribute `headless`. Change the values to your preference (`true` means run on headless and vice versa).
