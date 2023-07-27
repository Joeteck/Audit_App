# Automobile Audit Web App

This is a web application for an audit company to evaluate the usage and preference of automobile manufacturer customers. The app allows customers to provide their information, car preferences, and any car conditions they are experiencing.

## Features

### First Page
- An input field to accept customers' full name.
- An input field to accept customers' reference code.
- An input field to accept customers' email address.
- A dropdown to select from a list of automobile makers.
- A dropdown to select a model related to the selected maker.
- A group of checkboxes to select multiple car conditions customers are experiencing.

### Second Page
- Displays all information acquired from the first page in a presentable format.
- Trims customer's full name to not exceed 30 characters and concatenates with ellipsis(...) if needed.
- Combines selected car conditions into a single string, separated by commas.

## Data Validation and Submission
- On the first page, all fields including checkboxes must be filled before proceeding to the next page.
- Reference code is validated based on specific criteria.
- Customer's email address is validated for its format.
- On the second page, the "Submit" button converts the final data into a JSON object and logs it to the console.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
git clone <repository_url>

2. Install dependencies:
npm install

3. Start the development server:
npm start
The app will be accessible at http://localhost:3000.

## Technology Stack
React: A popular JavaScript library for building user interfaces.
React Router: For handling page navigation in the app.
Styled Components: For styling components with CSS-in-JS approach.

## Folder Structure
src: Contains the source code for the application.
components: Contains React components for each page.
data.js: Contains the data of automobile makers and models.
App.js: The main entry point of the application.