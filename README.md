Public API for HNG12 Stage 0

This is a simple public API created as part of the HNG12 Stage 0 task. The API provides basic information in a structured JSON format. It includes the following data:

    Registered email address.
    Current date and time in ISO 8601 format (UTC).
    GitHub URL of the project’s codebase.

Technology Stack

    Programming Language: JavaScript
    Framework: Express.js
    Deployment: Hosted on a publicly accessible platform
    CORS Handling: Enabled for cross-origin requests

Installation & Setup
Prerequisites

Ensure that you have Node.js installed on your system. You can download it from here.
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

    GET /

Response Format (200 OK)

        {
          "email": "your-email@example.com",
          "current_datetime": "2025-01-30T09:30:00Z",
          "github_url": "https://github.com/yourusername/your-repo"
        }

Deployment

This API is deployed on [Platform Name]. You can access the live version at:

       https://stage0-fwpofh86p-oghuanlankingsleys-projects.vercel.app/

License

This project is open-source and available under the MIT License.
Author

    Oghuanlan Kingsley
    GitHub: kvng-dev

details.
