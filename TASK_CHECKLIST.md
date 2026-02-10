# Lab 2: User Registration and Authentication - Task Checklist

**Project:** IT342 G6 (Tan)  
**Due Date:** 7 February 2026  
**Submission Date:** 10 February 2026

---

## ✅ DONE

### Backend Implementation
- [x] **POST /api/auth/register endpoint** - Commit: `bd914de`
  - Validates unique username and email
  - Encrypts password using BCrypt
  - Returns JWT token on success
  
- [x] **POST /api/auth/login endpoint** - Commit: `bd914de`
  - Authenticates user credentials
  - Returns JWT token on successful login
  - Returns 401 on invalid credentials

- [x] **GET /api/user/me endpoint (protected)** - Commit: `0a5e24c`
  - Requires valid JWT token in Authorization header
  - Returns current user profile information
  - JWT authentication filter validates token

- [x] **Database Integration** - Commit: `bd914de`
  - MySQL database configured in application.properties
  - User entity with JPA annotations
  - Proper schema with user_id, username, email, password_hash, first_name, last_name, created_at, updated_at

- [x] **Password Encryption (BCrypt)** - Commit: `bd914de`
  - PasswordEncoder bean configured
  - BCryptPasswordEncoder implementation
  - Passwords hashed before storage

- [x] **JWT Implementation** - Commit: `bd914de`
  - JwtUtil class for token generation and validation
  - JwtAuthenticationFilter for request authorization
  - Token extraction from Authorization header

- [x] **CORS Configuration** - Commit: `bd914de`
  - Allows requests from http://localhost:3000
  - Supports GET, POST, PUT, DELETE methods
  - Credentials enabled for authentication

### Frontend Implementation
- [x] **Register page component** - Commit: `0a5e24c`
  - Form with username, email, password, firstName, lastName fields
  - Calls POST /api/auth/register
  - Displays success/error messages

- [x] **Login page component** - Commit: `0a5e24c`
  - Form with usernameOrEmail and password inputs
  - Calls POST /api/auth/login
  - Stores JWT token in localStorage on successful login

- [x] **Dashboard/Profile page (protected)** - Commit: `0a5e24c`
  - Displays user profile: username, email, full name
  - Fetches from GET /api/user/me with Bearer token
  - Shows "Not authenticated" if no valid token

- [x] **Logout functionality** - Commit: `0a5e24c`
  - Removes JWT token from localStorage
  - Clears user session state

- [x] **React project scaffold** - Commit: `0a5e24c`
  - package.json with React dependencies
  - public/index.html entry point
  - src/index.js React DOM root
  - src/App.js navigation and page routing
  - src/components/ folder with all components

### Documentation
- [x] **FRS Document (Initial)** - Commit: `0a5e24c`
  - Entity Relationship Diagram (ERD)
  - Functional requirements for all 3 endpoints
  - Request/response specifications
  - Validation rules documented

- [x] **Project README.md** - Commit: `f987675`
  - Project overview and structure
  - Setup instructions for backend and web
  - Feature list
  - Technologies used

---

## 🔄 IN-PROGRESS

- [ ] FRS Screenshots (Web UI screenshots)
  - Register page screenshot
  - Login page screenshot
  - Dashboard/Profile page screenshot
  - Logout functionality screenshot

---

## 📋 TODO

### Mobile Application (Lab 3)
- [ ] Mobile project setup
- [ ] Mobile authentication integration
- [ ] Mobile user profile screen
- [ ] Mobile registration and login screens

### Future Enhancements
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile update endpoint
- [ ] Role-based access control (RBAC)
- [ ] Pagination for user lists
- [ ] Advanced search and filtering

---

## Summary

**Total Completed Tasks:** 19/23 (82%)

### Endpoints Implemented
✅ POST /api/auth/register  
✅ POST /api/auth/login  
✅ GET /api/user/me (protected)  

### Pages Implemented
✅ Register page  
✅ Login page  
✅ Dashboard/Profile page  
✅ Logout functionality  

### Security Features
✅ JWT token-based authentication  
✅ BCrypt password encryption  
✅ Protected endpoints with token validation  
✅ CORS configured for frontend integration  

### Documentation
✅ Functional Requirements Specification (FRS) - drafted  
✅ README with setup instructions  
✅ Architecture diagrams in FRS  

---

## Repository Information

**GitHub Repository:** https://github.com/Aire2001/IT342_G6_Tan_Lab1-  
**Branch:** main  
