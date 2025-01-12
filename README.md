# DevelopsToday Backend

DevelopsToday Backend is a backend service for managing and serving developer-related content. It integrates various APIs and services to provide the required data for the DevelopsToday platform. This project is built with Express.js and connects to multiple resources such as country information, game modes, and more.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Ensure that you have the following software installed:
- [Node.js](https://nodejs.org/en/download/) (version >=14.x)
- [npm](https://www.npmjs.com/get-npm)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/renanbianchi/developstoday-backend.git
   cd developstoday-backend
Install dependencies:

npm install

Create a .env file in the root directory and set up any required environment variables. Refer to the Configuration section for more details.

Start the development server:

    npm run dev

    This will start the Express server on the default port (3000).

Configuration

Make sure to add the following environment variables to your .env file:

PORT=3000

    PORT: The port your server will run on (default is 3002).
Usage

After starting the server, you can access the API via http://localhost:3000.

Example:

    GET /all - Retrieves a list of all countries.
    POST /country - Posts data about a country.

Make sure to explore the API Endpoints section for more information about available routes and how to interact with the backend.
API Endpoints

Here are the available API routes:
GET /all

    Description: Retrieves a list of all countries.
    Response:

    [
      {
        "countryCode": "US",
        "name": "United States"
      },
      ...
    ]

POST /country

    Description: Posts data for a specific country.
    Request Body:

{
  "countryCode": "US",
  "countryName": "United States"
}

Response:

    {
      "message": "Country data received successfully",
      "data": { ... }
    }

POST /game-mode

    Description: Handles game mode-related operations.
    Request Body:

{
  "mode": "Arcade",
  "description": "Fast-paced, action-packed mode."
}

Response:

    {
      "message": "Game mode updated successfully",
      "data": { ... }
    }

Project Structure

Here is a brief overview of the project structure:

/developstoday-backend
├── /src
│   ├── /controllers    # Controller functions for handling requests
│   ├── /routes        # All the API routes
│   ├── /services      # Business logic and external API integrations
│   ├── /models        # Database models (if any)
│   └── /utils         # Utility functions
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

    controllers: Contains the logic for handling incoming HTTP requests.
    routes: Defines the API routes and links them with corresponding controller methods.
    services: Includes core business logic, external API calls, and data manipulation.
    models: Defines the structure for the data (e.g., schema for database models).
    utils: Utility functions for various operations.

This project is licensed under the MIT License - see the LICENSE file for details.
