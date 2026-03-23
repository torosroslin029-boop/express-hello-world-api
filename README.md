# Express Hello World API

A simple, well-structured Express.js Hello World API with proper error handling, testing, and documentation.

## 🚀 Features

- Clean Express.js server setup
- RESTful API endpoints
- Comprehensive error handling
- Health check endpoint
- Request logging
- Unit tests with Jest
- Development hot-reload with nodemon
- Proper project structure

## 📋 Prerequisites

- Node.js (>= 14.0.0)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/express-hello-world-api.git
cd express-hello-world-api
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Usage

### Development Mode
Start the server with hot-reload:
```bash
npm run dev
```

### Production Mode
Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

Example:
```bash
PORT=8080 NODE_ENV=production npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### GET /
Returns a Hello World message.

**Response:**
```json
{
  "message": "Hello World!"
}
```

**Example:**
```bash
curl http://localhost:3000/
```

#### GET /health
Returns server health status and uptime.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:45.123Z",
  "uptime": 123.456
}
```

**Example:**
```bash
curl http://localhost:3000/health
```

### Error Handling

The API includes comprehensive error handling:

#### 404 Not Found
When accessing undefined routes:
```json
{
  "error": "Not Found",
  "message": "Route GET /undefined-route not found",
  "timestamp": "2024-01-15T10:30:45.123Z"
}
```

#### 500 Server Error
For internal server errors:
```json
{
  "error": "Server Error",
  "message": "Internal Server Error",
  "timestamp": "2024-01-15T10:30:45.123Z"
}
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

The project includes tests for:
- Main Hello World endpoint
- Health check endpoint
- 404 error handling
- Response format validation

## 📁 Project Structure

```
express-hello-world-api/
├── server.js              # Main server file
├── package.json          # Project configuration
├── jest.config.js        # Jest configuration
├── README.md            # Documentation
├── tests/               # Test files
│   └── server.test.js
└── coverage/           # Test coverage reports (generated)
```

## 🔧 Development

### Code Style
- Follow Node.js best practices
- Use proper error handling
- Include comprehensive logging
- Write tests for all endpoints

### Adding New Endpoints
1. Add route handler in `server.js`
2. Add corresponding tests in `tests/server.test.js`
3. Update API documentation in README.md

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, please open an issue on the GitHub repository.