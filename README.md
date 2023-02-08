# Restaurant Bistro
A simple restaurant website bundled using webpack.

## Table of Content
+ [General Info](#general-info)
+ [Technologies](#technologies)
+ [How to Run](#how-to-run)
+ [Demo](#demo)
+ [Features](#features)

## General Info
A very basic resturant website. This project illustrates the use of webpack to bundle your project. Content of
this project is created using javascript and then inserted into DOM. Each of the three page in this website is
created in its own file and then imported and put together into another file. Whole code is then bundled using
webpack.

## Technologies
+ Webpack

## How to Run
To run this project locally, you can clone this repository and run index.html directly.
If you want to make changes in any js file, then remember to bundle your code.
To bundle your code
```
# Bundle your code after changes
npx webpack

```
You can also change webpack.config file to suit your need.

## Demo
Here is a live demo [https://tanishka-2000.github.io/restaurant-page/](https://tanishka-2000.github.io/restaurant-page/)

## Features
+ Home page shows the restaurant's Name and a brief description.
+ A navigation bar containing links for menu and contact page.
+ Menu page has a list of cards of each menu item with price and a button for order.
+ Contact page contains a form for booking the restaurant for any occassion.