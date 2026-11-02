# Automation Exercise - Playwright E2E Tests

An end-to-end test automation framework built with [Playwright](https://playwright.dev/) for [Automation Exercise](https://automationexercise.com/). This project is for practice of test automation including Page Object Model (POM) design pattern. Any one can practise adding more tests and requesting PR.

## Features

- **Page Object Model** - Clean separation of page elements and actions
- **Cross-browser testing** - Supports Chromium, Firefox, and WebKit
- **Modular structure** - Reusable page classes and organized test suites
- **GitHub Actions CI** - Ready to run in CI/CD pipeline
- **TypeScript support** - Type-safe test development

## Project Structure

```
automation-exercise-playwright/
├── pages/              # Page Object classes
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/              # Test specifications
│   ├── home.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── fixtures/           # Custom fixtures (to be added)
├── utils/              # Helper utilities (to be added)
└── test-data/          # Test data files (to be added)
```

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/automation-exercise-playwright.git
cd automation-exercise-playwright
```

2. Install dependencies
```bash
npm ci
```

3. Install Playwright browsers
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Viewing Reports

After test execution, view the HTML report:
```bash
npx playwright show-report
```

## Test Scenarios Covered

- **Home Page** - Page load and navigation visibility
- **Login** - Navigation to login/signup page, invalid login validation
- **Products** - Product listing, product search functionality

## Best Practices Implemented

- Page Object Model for maintainability
- Descriptive test names and proper test organization with `describe` blocks
- Reusable base page class
- TypeScript for better code quality
- Cross-browser testing configuration

## How to Contribute

Feel free to add more test cases, improve page objects, or enhance the framework. Any one can practise adding more tests and requesting PR. Please follow the existing Page Object Model structure when adding new tests.

## License

ISC
