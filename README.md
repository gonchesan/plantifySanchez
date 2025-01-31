<div align="center">    
 
# Plantify App 🌱

This is an e-commerce project created with [Expo](https://expo.dev).

[![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)](https://firebase.google.com/)

<!--
ARXIV
[![Paper](http://img.shields.io/badge/arxiv-math.co:1480.1111-B31B1B.svg)](https://www.nature.com/articles/nature14539)
-->

</div>

## Table of contents

- [General info](#general-info)
- [Requirements](#requirements)
- [Setup](#setup)
- [Folder structure](#folder-structure)
- [Features](#features)
- [Technologies](#technologies)

## General info

This project is simple Lorem ipsum dolor generator.

## Requirements

This is a example of requirements.

## Setup

To run this project, install it locally using npm. But first:

1. Clone project

   ```bash
   git clone https://github.com/gonchesan/plantifySanchez.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Replace the values of .env file

   - Copy and paste the .env.example
   - Rename the file .env.example to .env
   - Change the value of the following variables

   ```bash
    EXPO_PUBLIC_FIREBASE_URL
    EXPO_PUBLIC_FIREBASE_AUTH_URL
    EXPO_PUBLIC_FIREBASE_API_KEY
    EXPO_PUBLIC_MAP_BOX_TOKEN
   ```

4. Set up Firebase credentials in your project.

5. And finllay start the app.

   ```bash
    npm run start
   ```

## Folder structure

```
.
├── build # Compiled files
├── app # Source files
├── assets # Files for the app such as images, icons and fonts
|   └── fonts
|   └── images
├── .env # Here you will find your environment variables
├── .env.example # Example file of environment variables
└── README.md # Documentation file (You are here)
```

## Features

> ### Profile Screen
>
> Displays user details such as name and address.\
> _Only **authenticated users** can access the profile screen and make purchases._

> ### Firebase Authentication
>
> Uses Firebase authentication to manage user access. Allows users to securely log in and register.

> ### Categories Screen
>
> Displays a selection of categories on cards. Clicking on a category navigates to the corresponding products screen.

> ### Products Screen
>
> Lists all products on cards with name and photo. Includes a search to filter products by name. Clicking on a product navigates to the product details screen.

> ### Product Details Screen
>
> Provides a detailed description of the product. Displays the price and available stock. Allows adding the product to the cart.

## Technologies

Project is created with:

- **Firebase Authentication:** Implements the Firebase authentication system to manage the security of the application.
- **React Native Navigation Stack:** Manages navigation between screens.
- **React Native Navigation Buttom tap:** Manages navigation between tabs.
- **Expo-Location:** Allows you to access and manage the user's location.
- **Expo-Picker-Image:** Facilitates the loading of profile images.
- **Redux:** Centralizes and manages the state of the application.
- **RTK Query and Firebase:** Performs read/write operations on the database.
- **MapboxGL:** For realize the reverse geo-location.
- **Yup:** For manage the validations in the form.
