# peace-app

## Project Description
This application is designed for introspective online gamers with a penchant for seeking revenge. The primary purpose of the app is to serve as a tracker for users to record the names of offenders, the game where the offense occurred, and the nature of the offense. In addition, the app provides reporting capabilities to analyze key criteria such as the most common type of troll, the most frequently targeted game, and the peak periods when trolls are most active.

## Installation Instructions
To install the necessary dependencies for this project, follow these steps:

1. Install Express Generator globally using the command: `npm i -g express-generator`
2. Install the `method-override` package for Express Generator using: `npm install method-override`
3. Install MongoDB package using: `npm i mongoose`
4. Install Chart.js package using: `npm i chart.js`

## Usage Guide
To use the app, follow these steps:

1. Start by clicking on "Create A New Offender" and enter the relevant details. This is particularly useful when you've just finished a gaming session and want to store the troll user's name for future reference.
2. Once you reach the decision-making phase, you can click on an offender to decide whether to forgive them (Peace) or seek revenge (Get Yo Lick Back).
3. The "Lick Back" page allows you to describe how the revenge made you feel.

## Configuration
There is no additional configuration required for this project. The app uses the default configuration provided by Express Generator and MongoDB.

## File Structure
The file structure of the project typically follows the conventions of an Express application generated using Express Generator. Here is a basic file structure:
+ public/
  - styles/
    - main.css

+ views/
  - edit.ejs
  - home.ejs
  - index.ejs
  - new.ejs
  - report.ejs
  - show.ejs

+ app.js
+ package.json

## Dependencies
The project relies on the following dependencies:

- Express.js: A fast and minimalist web application framework for Node.js.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Chart.js: A JavaScript charting library that enables data visualization.
- method-override: A middleware for Express that allows using HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

## Development Instructions
There are no specific guidelines for contributing to this project. However, if you'd like to contribute or report any issues, feel free to submit a pull request or open an issue on the project's GitHub repository.
