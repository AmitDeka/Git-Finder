# Git Finder Web Application

## Overview

Git Finder is a web application designed to search for GitHub user profiles and display their details. It allows users to input a GitHub username, fetches the corresponding user data from the GitHub API, and presents it in a user-friendly format.

### Technologies Used

- HTML
- CSS
- JavaScript
- GitHub API

#### File Structure

- index.html: Contains the structure and layout of the web page.
- global.css: Stylesheet file for the application.
- global.js: JavaScript file responsible for fetching user data from the GitHub API and updating the UI accordingly.

## Features

- Search Functionality: Users can input a GitHub username in the search field and press "Search" to fetch and display the corresponding user details.
- User Details Display: Upon successful retrieval of user data, the application displays various details including the user's name, bio, location, social media links, company, join date, number of repositories, followers, and followings.
- Error Handling: If the entered username is not found or there's an error in fetching the user data, an error message is displayed prompting the user to check the username and try again.

### Screenshots

![Screenshot 1](./screenshot.jpg)

### Demo

[Live URL](https://amitdeka.github.io/Git-Finder/)

### Usage

1.  Open the index.html file in a web browser.
2.  Enter a valid GitHub username in the search input field.
3.  Click on the "Search" button or press Enter.
4.  View the user details displayed on the page.

### Setup

No specific setup is required to run this application. Simply open the index.html file in a web browser that supports JavaScript.

### API Usage

The application uses the GitHub API to fetch user data. It sends a request to the endpoint `https://api.github.com/users/{username}` where username is the GitHub username entered by the user.

#### Contributions

Contributions to the project are welcome. You can contribute by:

- Fixing issues or bugs.
- Adding new features or enhancements.
- Improving the UI/UX.
- Optimizing the code.

### License

This project is licensed under the MIT License.

### Author

This project was created by Amit Deka.

### Acknowledgements

- The application utilizes the GitHub API.
- Icons provided by Remix Icon.
- SVG image sourced from undraw.co.
