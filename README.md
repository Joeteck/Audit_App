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










### Preferred Language, Framework and Library

I chose React(JavaScript) as the preferred language for this project because of its popularity, flexibility, and component-based architecture. React is a widely-used JavaScript library for building user interfaces, and it has a large and active community, which means there are plenty of resources, libraries, and support available.

Here are the frameworks and libraries used in the project and why they were chosen:

1. React: As mentioned earlier, React is a popular JavaScript library for building user interfaces. Its component-based approach allows for modular and reusable code, making it easier to manage and maintain complex UIs.

2. react-router-dom: This library provides routing capabilities for React applications. It allows us to create multiple pages and navigate between them using URLs. I used this library to handle the routing between the first page and the second page of the form.

3. styled-components: Styled-components is a popular CSS-in-JS library that allows us to write CSS directly within our JavaScript code using tagged template literals. I used it to style the components in a more organized and modular way. It also supports dynamic styles based on props, which is helpful for conditional styling.

4. react-responsive-carousel: This library provides a responsive and customizable carousel component for React applications. I used it to implement the image slider on the first page of the form.

5. pdfmake: pdfmake is a library that allows generating PDF documents in the browser. I used it to create a PDF document with the form data on the second page when the user clicks the submit button.

Overall, these libraries were chosen to enhance the development process and provide a better user experience for the form application. React, with its component-based architecture, made it easy to build and manage the form's UI, while the other libraries added specific functionalities, such as routing, styling, carousel, and PDF generation, to create a complete and efficient application.