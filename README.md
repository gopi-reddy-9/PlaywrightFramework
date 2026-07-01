# 🚀 Playwright Automation Framework

A scalable End-to-End UI Automation Framework built using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern. The framework includes reusable fixtures, data-driven testing, API testing, GitHub Actions CI/CD, and Jenkins integration.

---

## 📌 Features

- ✅ Playwright with TypeScript
- ✅ Page Object Model (POM)
- ✅ Base Page Architecture
- ✅ Custom Playwright Fixtures
- ✅ Data-Driven Testing
- ✅ API Testing
- ✅ Hooks (BeforeEach / AfterEach)
- ✅ Parallel Test Execution
- ✅ Cross Browser Testing
- ✅ HTML Reports
- ✅ GitHub Actions CI/CD
- ✅ Jenkins Pipeline Support
- ✅ Random Test Data Generation
- ✅ Git Version Control

---

## 📂 Project Structure

```
PlaywrightFramework
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── fixtures
│   └── baseTest.ts
│
├── pages
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests
│   ├── Login.spec.ts
│   ├── AccountRegistration.spec.ts
│   ├── SearchProduct.spec.ts
│   ├── AddToCart.spec.ts
│   └── Checkout.spec.ts
│
├── utils
│   └── RandomData.ts
│
├── playwright.config.ts
├── package.json
├── Jenkinsfile
├── README.md
└── .gitignore
```

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions
- Jenkins

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/gopi-reddy-9/PlaywrightFramework.git
```

### Navigate to the Project

```bash
cd PlaywrightFramework
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

### Run all tests

```bash
npm test
```

### Run in headed mode

```bash
npm run headed
```

### Run on Chromium

```bash
npm run chrome
```

### Run on Firefox

```bash
npm run firefox
```

### Run on WebKit

```bash
npm run webkit
```

### Run Smoke Tests

```bash
npm run smoke
```

### Run Regression Tests

```bash
npm run regression
```

### Open HTML Report

```bash
npm run report
```

---

# 📊 Reporting

Playwright automatically generates an HTML report.

Open it using:

```bash
npm run report
```

---

# 🔄 CI/CD

## GitHub Actions

The framework is integrated with GitHub Actions.

Every push automatically:

- Installs dependencies
- Installs Playwright browsers
- Executes the test suite
- Displays build status

---

## Jenkins

The framework supports Jenkins CI/CD using a **Jenkinsfile**.

Pipeline stages include:

- Checkout Source Code
- Install Dependencies
- Install Playwright Browsers
- Execute Tests
- Generate Reports

---

# 📋 Test Scenarios Covered

- User Registration
- User Login
- Logout
- Product Search
- Product Details Verification
- Add to Cart
- Checkout Flow
- End-to-End Purchase Flow
- API Testing

---

# 🏗️ Framework Design

This framework follows the **Page Object Model (POM)** design pattern.

Key components include:

- Reusable Page Classes
- Base Test Fixtures
- Utility Classes
- Modular Test Design
- Clean Folder Structure
- Easy Maintenance

---



# 🚀 Future Enhancements


- Docker Integration
- Azure DevOps Pipeline
- BrowserStack Integration
- SQL Database Validation
- Performance Testing

---

# 👨‍💻 Author

**Sanampudi Gopi Reddy**

📧 Email:
gopisanampudi017@gmail.com

🔗 GitHub:
https://github.com/gopi-reddy-9



---

## ⭐ If you found this project useful, please consider giving it a Star.