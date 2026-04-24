# Products Auth App

A simple React application demonstrating authentication flow using Redux Toolkit and React Router.

## Overview

This project shows a basic client-side authentication experience in a React + Vite app. Users can log in with any non-empty username and password, view a product list, and access a profile page. The app uses Redux for user state and protects routes so only authenticated users can access certain pages.

## Tech Stack

- React (Vite)
- React Router DOM
- Redux Toolkit
- React Redux
- CSS

## Features

- Login page with basic validation (username and password required)
- Redux state management for storing the logged-in user
- Protected routes for authenticated access
- Public route protection to prevent logged-in users from returning to the login page
- Sidebar layout with navigation links
- Product list loaded from local `products.json`
- Simple profile page placeholder
- Logout functionality

## Project Structure

- `src/components`
  - `Layout.jsx` - Main layout wrapper for authenticated routes
  - `Sidebar.jsx` - Navigation sidebar component
- `src/pages`
  - `LoginPage.jsx` - Login form and validation logic
  - `ProductsPage.jsx` - Product list display
  - `ProfilePage.jsx` - User profile placeholder
- `src/features/user`
  - `userSlice.js` - Redux slice for authentication state
- `src/data`
  - `products.json` - Local product data used by the product list
- `src/store/index.js` - Redux store configuration

## How to Run

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open the app in the browser at:
   ```text
   http://localhost:5173
   ```

## Usage

- Enter any username and password to log in
- Use the sidebar to navigate between the Product List and Profile pages
- Use the logout button to return to the login page

## Notes

- This project uses simple client-side authentication with no backend
- The password is not stored; only the username is saved in Redux state
- The app is designed for demonstration and assessment purposes

## Future Improvements

- Persist login state across refreshes
- Integrate real API authentication
- Add product filtering and search
- Improve profile page content and user details
- Add better form validation and error handling
