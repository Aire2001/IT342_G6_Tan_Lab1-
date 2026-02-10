# Functional Requirements Specification (FRS)
## IT342 Lab 2: User Registration and Authentication System

**Version:** 1.0  
**Date:** February 2026  
**Project:** IT342 Group 6 (Tan)

---

## 1. Project Overview
This document specifies the functional requirements for the User Registration and Authentication system. The system consists of a Spring Boot backend API and a ReactJS web application frontend.

---

## 2. System Architecture

### 2.1 Entity Relationship Diagram (ERD)

```
User Table
├── user_id (PK, BIGINT, AUTO_INCREMENT)
├── username (VARCHAR 255, UNIQUE, NOT NULL)
├── email (VARCHAR 255, UNIQUE, NOT NULL)
├── password_hash (VARCHAR 255, NOT NULL)
├── first_name (VARCHAR 255)
├── last_name (VARCHAR 255)
├── created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
└── updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP on UPDATE)
```

---

## 3. Functional Requirements

### 3.1 Authentication Module

#### FR-AUTH-1: User Registration
- **Endpoint:** `POST /api/auth/register`
- **Request:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "firstName": "string",
    "lastName": "string"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "token": "jwt_token",
    "message": "Registration successful",
    "user": {
      "userId": 1,
      "username": "user123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "createdAt": "2026-02-10T12:00:00"
    }
  }
  ```
- **Validations:**
  - Username must be unique
  - Email must be unique and valid
  - Password must meet security requirements
  - Email format validation

#### FR-AUTH-2: User Login
- **Endpoint:** `POST /api/auth/login`
- **Request:**
  ```json
  {
    "usernameOrEmail": "string",
    "password": "string"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "token": "jwt_token",
    "message": "Login successful",
    "user": { ... }
  }
  ```
- **Error Response:** `401 Unauthorized`
  - Invalid credentials message

#### FR-AUTH-3: Get Current User (Protected)
- **Endpoint:** `GET /api/user/me`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Response:** `200 OK`
  ```json
  {
    "userId": 1,
    "username": "user123",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "createdAt": "2026-02-10T12:00:00"
  }
  ```
- **Error Response:** `401 Unauthorized` if token invalid

### 3.2 Password Security
- Passwords are hashed using BCrypt before storage
- Passwords are never stored or transmitted in plain text
- Password verification uses BCrypt comparison

### 3.3 JWT Authentication
- JWT tokens contain user's username claim
- Tokens have expiration time (configurable)
- Token must be sent in Authorization header as `Bearer <token>`

---

## 4. Web Application Requirements

### 4.1 Register Page (View)
- **Components:**
  - Username input field
  - Email input field
  - Password input field
  - First name input field
  - Last name input field
  - Register button
  - Success/Error message display
  - Link to login page

### 4.2 Login Page (View)
- **Components:**
  - Username/Email input field
  - Password input field
  - Login button
  - Error message display
  - Link to register page
  - Token stored in localStorage on success

### 4.3 Dashboard/Profile Page (View - Protected)
- **Components:**
  - Display user information (username, email, name)
  - User avatar/profile picture placeholder
  - Logout button
  - Protected route (requires valid JWT token)
  - Redirect to login if not authenticated

### 4.4 Logout Functionality
- Clears token from localStorage
- Redirects user to login page
- Clears any cached user data

---

## 5. Non-Functional Requirements

### 5.1 Security
- HTTPS/TLS for all communications
- BCrypt with salt for password hashing
- JWT for stateless authentication
- CORS configured for frontend origin
- Input validation on all endpoints

### 5.2 Performance
- JWT validation < 10ms
- Login response time < 500ms
- Database queries use indexes on unique fields

### 5.3 Scalability
- Stateless design (no server-side sessions)
- Horizontal scaling friendly
- Database connection pooling

---

## 6. Technology Stack

| Component | Technology |
|-----------|-----------|
| Backend | Spring Boot 3.x, Spring Security |
| Frontend | React 18.x |
| Database | MySQL 8.x |
| Authentication | JWT (JSON Web Tokens) |
| Password Hashing | BCrypt |
| Build Backend | Maven |
| Build Frontend | npm/react-scripts |

---

## 7. API Endpoints Summary

| Method | Endpoint | Auth Required | Status |
|--------|----------|---------------|--------|
| POST | `/api/auth/register` | No | ✅ Implemented |
| POST | `/api/auth/login` | No | ✅ Implemented |
| GET | `/api/user/me` | Yes | ✅ Implemented |

---

## 8. Testing Scenarios

### 8.1 Backend Testing (Postman/cURL)

**Register a new user:**
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"Pass123!","firstName":"John","lastName":"Doe"}'
```

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"usernameOrEmail":"john","password":"Pass123!"}'
```

**Get current user:**
```bash
curl -X GET http://localhost:8080/api/user/me \
  -H "Authorization: Bearer <token_from_login>"
```

### 8.2 Frontend Testing
- Register with valid/invalid inputs
- Login with correct/incorrect credentials
- Navigate to dashboard after login
- Verify token persistence in localStorage
- Test logout functionality

---

## 9. Database Setup

```sql
CREATE DATABASE user_auth_db;

CREATE TABLE user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
);
```

---

## 10. Deployment Instructions

### Backend
```bash
cd backend
mvn clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd web
npm install
npm start
```

---

## 11. Screenshots & UI (Placeholder)

Note: Screenshots to be added after web app styling is complete.

- Register Page
- Login Page
- Dashboard/Profile Page
- Logout Confirmation

---

## 12. Known Limitations

- Mobile app not included in this version (Lab 3)
- Email verification not implemented
- Password reset functionality pending
- User profile editing pending

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Group 6 (Tan) | Initial FRS creation |

---

**End of Document**
