# Finance Dashboard Backend

## Overview

This is a backend system for a finance dashboard.
It supports user roles, financial records management, and dashboard analytics.

---

## Tech Stack

* Node.js
* Express.js
* MySQL (mysql2)
* JWT Authentication

---

## Setup Instructions

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```
3. Create a `.env` file:

   ```
   JWT_SECRET=your_secret_key
   ```
4. Setup MySQL database using provided schema
5. Start the server:

   ```
   npm run dev
   ```

---

## Database Tables

### Users

* id
* name
* email
* password
* role (viewer, analyst, admin)
* is_active

### Records

* id
* amount
* type (income, expense)
* category
* date
* notes
* user_id

---

## API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Records

* GET `/api/records`
* POST `/api/records`
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

### Dashboard

* GET `/api/dashboard`

---

## Role Access

* Viewer → can view records only
* Analyst → can view records and dashboard
* Admin → full access (create, update, delete, manage users)

---

## Features

* User authentication (JWT)
* Role-based access control
* Financial records CRUD
* Filtering records
* Dashboard summary (income, expense, balance)
* Category breakdown

---

## Assumptions

* Only admin can modify records
* JWT is used for authentication
* No frontend included

---

## Possible Improvements

* Pagination
* Monthly trends
* Refresh tokens
* API documentation
