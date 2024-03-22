# UI-Automation-Cypress
UI Automation using TypeScript-Cypress-Cucumber-POM-BDD.

## Assignment

The task is to automate filter product on Amazon website. The goal is to ensure the tests run and pass on both Chrome and Firefox, on any platform (Windows, Mac, Linux).

### Steps to Automate

1. Open [Amazon](https://www.amazon.com/)
2. Click on the hamburger menu in the top left corner
3. Click on "Computers"
4. Click on "Table Accessories"
5. Filter the results by Brand "JETech"
6. Sort the JETech results by "Newest Arrivals"
7. Click on the lowest priced item.
8. Switch the Window
9. Assert that the "About this item" section is present and log this section text to the console/report.

## Framework, Approach, Installation and Execution Instructions

### Framework
- Cypress

### Practice Used
- BDD
- POM

### Installation
1. Clone this repository.
2. Install dependencies using `npm install`


### Execution

#### Chrome:
- Run `npx cypress run --browser chrome`

#### Firefox:
- Run `npx cypress run --browser firefox`


### Folder Structure
- `cypress/e2e/src/`: Contains tests and page object model folders with files.
- `cypress/support/commands/`: Contains reusable commands.
- `cypress/support/constants/`: Contains reusable elements file.
- `cypress/support/helper/`: Contains reusable internal and external commands files.

## Design Principles
- The code follows good design principles to ensure readability, maintainability, and scalability.