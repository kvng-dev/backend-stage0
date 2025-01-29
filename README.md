# HNG Stage 0 Backend Task

This project is a simple public API developed as part of the **HNG Stage 0 Backend Task**. The API provides basic JSON data, including:

- The registered email address of the developer
- The current datetime in ISO 8601 format
- The GitHub repository URL

## Features

- Returns structured JSON data
- Displays the current datetime dynamically
- Built with **Node.js** and **Express.js**
- Hosted and accessible via a public URL

## Setup(local) Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kvng-dev/backend-stage0.git
cd hng-backend-stage-zero
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

```bash
node index.js
```

### 4️⃣ Test the API

Open your browser to test:

```
http://localhost:3001
```

## 📌 API Documentation

### Endpoint

- **URL:** `GET <https://stage0.vercel.app//>` or `http://localhost:3001`
- **Method:** `GET`
- **Response Format:** `JSON`

### Example Response

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Example Usage


#### Using a browser 

1. Open  your browser.
2. Enter the API URL:
   ```
   https://stage0.vercel.app/
   ```
3. Send a `GET` request.
4. View the JSON response.

## 💂️‍♂️ Project Structure

```
hng-stage0-api/
├── node_modules/
├── index.js            # Main server file
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore file
├── package.json        # Project metadata
├── package-lock.json   # Dependency lock file
├── README.md           # Project documentation
└── LICENSE             # License file
```
## Hire Node.js Developers

If you're looking to hire Node.js developers, check out [HNG Tech - Hire Node.js Developers](https://hng.tech/hire/nodejs-developers).

## 📝 License

This project is open-source and available under the **MIT License**.
