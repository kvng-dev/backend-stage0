#Project Description

This is a simple public API developed for HNG12 Stage 0. The API returns basic information in JSON format, including:

Your registered email address.

The current datetime in ISO 8601 format (UTC).

The GitHub URL of the project's codebase.

Technology Stack

Programming Language: JavaScript

Framework: Express.js

Deployment: Hosted on a publicly accessible platform

CORS Handling: Enabled

Installation & Setup

Prerequisites

Ensure you have Node.js installed on your system.

Steps to Run Locally

Clone the repository:

      git clone https://github.com/yourusername/your-repo.git
      cd your-repo

Install dependencies:

    npm install

Start the server:

    node server.js

The server will run on http://localhost:3001/.

API Documentation

Endpoint

GET <your-deployed-url>

Response Format (200 OK)

    {
      "email": "your-email@example.com",
      "current_datetime": "2025-01-30T09:30:00Z",
      "github_url": "https://github.com/yourusername/your-repo"
    }

Deployment

This API is deployed on [Platform Name]. You can access it at:

<your-deployed-url>

License

This project is open-source and available under the MIT License.

Author

Your Name

GitHub: kvng-dev
