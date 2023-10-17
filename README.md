# MERN Stack Internship

# Food Delivery App (Dish-Dash) using MERN stack

Welcome to the MERN Stack Internship project repository, which contains the source code and materials for our MERN (MongoDB, Express, React, Node.js) stack internship program, aimed at developing a user-friendly food delivery app with a clean and modern interface.

## Table of Contents

- [About the Project](#about-the-project)
- [Architecture](#Architecture)
  - [Features](#Features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)

## About the Project

The MERN Stack Internship project is designed to provide a comprehensive learning experience for individuals interested in web development using the MERN stack. It covers various aspects of building web applications, including creating RESTful APIs, building user interfaces with React, and working with a MongoDB database.

## Architecture

The food delivery app is built using the MERN stack. The app consists of several components, including the home page, My Orders page, Cart page, Login andLogout page. The Home page displays the list of restaurants, and includes a search bar and filter options. The Menu page displays the list of items in the menu, and allows the user to add items to their cart. The Cart page displays the list of items in the user's cart, and allows the user to place an order. The Confirm Order page displays the details of the user's order with its delivery address. After confirming the order, it will redirect to Payment Page and then to the Order History Page where users can see their order history.

### Features:

- User Authentication: Allow users to sign up, log in, and manage their
  profiles i.e., update users profile and password.
- Browse Restaurants: Display a list of restaurants with address and ratings including search and filtering options.
- View Menus: Show restaurant’s menu with dish details, prices, and images.
- Cart Management: Enable users to add/remove items, adjust quantities, and
  view their cart.
- Order Placement: Allow users to place orders, and provide
  delivery addresses.
- Payment Integration: Integrate a payment gateway for secure transactions.
- Order History: Show users their past orders and order status.
- Responsive Design: Ensure the website works well on different devices and
  screen sizes.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Git installed
- Stripe and Mailtrap configured for payment and email functionality, respectively.

### Installation

#### 1. Clone the Repository

To get started with this project, follow these steps:

- Open your terminal or command prompt.

- Clone the repository by running the following command.

```bash
git clone https://github.com/KalmathAjay/Mern-stack-internship
```

#### 2. Install Dependencies

- Navigate to the cloned directory, Install the project dependencies. This project uses npm, so run:

```bash
cd Dish-Dash/Backend
npm install
```

```bash
cd Dish-Dash/Frontend
npm install
```

### Configuration

To set up and configure the MERN Stack Internship project, you'll need to follow these steps:

#### 1. Environment Variables

Update `.env` file present in

```bash
cd Dish-Dash/Backend/config/config.env
```

and populate it with the following environment-specific variables:

```env
# Express Server Configuration
PORT=4000
NODE_ENV=DEVELOPMENT

# MongoDB Configuration
DB_LOCAL_URI=mongodb://127.0.0.1/Internship

# JSON Web Token (JWT) Configuration
JWT_SECRET=
JWT_EXPIRES_TIME=90

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# MailTrap Configuration (for email functionality)
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_FROM=

# Stripe Configuration (for payments)
STRIPE_SECRET_KEY=
STRIPE_API_KEY=
```

#### 2. Database Setup

To set up the project's data, you can use a database file provided in this repository. Follow these steps to import the data into your MongoDB database:

- Database File

Locate the provided database file, which is typically named something like `data.json` or `database.json`. You can find this file in the project's repository on GitHub. Here's the link to the file: [data.json](https://github.com/KalmathAjay/Mern-stack-internship/path/to/database.json).

- Import Data

You can import the data into your MongoDB database using the `mongoimport` command. Make sure you have MongoDB installed and running locally.

Run the following command, replacing `DB_NAME` with the name of your database and `data.json` with the correct path to the database file:

```bash
mongoimport --db DB_NAME --collection your_collection_name --file path/to/data.json --jsonArray
```

## Usage

#### 1. Starting the Backend

- Open a terminal.

- Navigate to the project's backend directory. This is typically where your server code is located. Use the `cd` command to change the directory:

  ```bash
  cd path/to/backend
  nodemon run server
  ```

#### 2. Starting the Frontend

- Open a second terminal.

- Navigate to the project's frontend directory. This is typically where your React or frontend code is located. Use the cd command to change the directory:

  ```bash
  cd path/to/frontend
  npm start
  ```
----
For questions, reach out to kalmathajay@gmail.com
