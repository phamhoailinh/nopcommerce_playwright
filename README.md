# nopcommerce_playwright
This is repository for automation test, based on Playwright Framework. 
## Structure project

--root

----logs

----playwright-repot => This folder containt HTML report after run

----resource: it had Q&A file - need to clarify, Testcase file(empty for now), and Business Flow

----tests: Main test include test spec file, POM file

----video: Screen recording


# What work for this:

1. Only one test-spec: register done - but in progress execute, I got info about security. If had more time will have solution for it
2. I complete this assignment following of test process.
* Get requirement
* Analyze and feed back Q&A
* Create biz flow - show all flow of assignment
* Init project with Playwright from scratch.
* Analyze and create POM for all flow
* Create register spec to debug and complete first spec

# Setup

Clone this repository and extract to your computer.
It required NodeJS pre-install

## Installation

Open project and run command below to get all dependency of nodejs

```bash
npm init
```

## Run test

```bash
npx playwright test --headed
```

