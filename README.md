# Expense Sharing Backend

This project is a backend implementation of a simplified expense sharing application, similar to Splitwise.  
It focuses on system design, data modeling, and balance computation rather than UI or deployment.

---

## Objective

Design a backend system that allows users to:
- Create groups
- Add shared expenses
- Track balances
- Simplify balances
- Settle dues logically

Supported split types:
- Equal split
- Exact amount split
- Percentage split

---

## High-Level Design

The system is designed around the following core concepts:

- **Users**: People who participate in expense sharing.
- **Groups**: Logical boundaries (e.g. trips, roommates) where expenses are shared.
- **Expenses**: Records of payments made within a group.
- **Balances**: Directional records showing who owes whom and how much.

All split types are internally normalized into exact amounts to keep balance computation consistent.

---

## Architecture Overview

The backend follows a layered design:

- **Routes**: Define API endpoints and HTTP methods.
- **Controllers**: Handle incoming requests and responses.
- **Services**: Contain core business logic (split calculation, balance simplification).
- **Models**: Define database schemas.

This separation keeps the system modular, readable, and easy to reason about.

---

## Balance Tracking Logic

- Balances are stored in the form:  
  **User A owes User B an amount**
- When an expense is added, balances are updated instead of recalculating from scratch.
- A balance simplification algorithm is used to reduce unnecessary intermediate transactions.

Example:
A owes B 50
B owes C 50
→ simplified to
A owes C 50


---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## Folder Structure

src/
├── app.js
├── server.js
├── config/
│ └── db.js
├── models/
│ ├── User.js
│ ├── Group.js
│ ├── Expense.js
│ └── Balance.js
├── controllers/
│ ├── user.controller.js
│ ├── group.controller.js
│ ├── expense.controller.js
│ └── balance.controller.js
├── services/
│ ├── split.service.js
│ └── simplify.service.js
├── routes/
│ ├── user.routes.js
│ ├── group.routes.js
│ ├── expense.routes.js
│ └── balance.routes.js


---

## How to Run Locally

1. Install dependencies:
```bash
npm install


Create a .env file in the root directory:

MONGO_URI=<your_mongodb_connection_string>


Start the server:

npm start


Server runs on port 3000.

Notes

Authentication, validation, and frontend are intentionally omitted as they are outside the scope of the assignment.

The focus is on clear data modeling, balance computation, and design clarity.

Author

MD Amir