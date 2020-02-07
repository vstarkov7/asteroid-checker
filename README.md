## Asteroid Checker

## Description

This app will connect to NASA API through specific endpoints and retrieve data, which includes daily data for near Earth asteroids. With this app, you can check the closest asteroids to Earth and their statistics on any given date. Alternatively, NASA uploads beautiful pictures every day, and their Picture of the Day pictures can also be accessed through the API's, so this app will be able to pull up any particular date's picture of the day.

## Wireframes

![First Wireframe Image](https://i.imgur.com/oMV47Dj.jpg)

![Second Wireframe Image](https://i.imgur.com/5YP18in.jpg)

![Mobile View Wireframe Image](https://i.imgur.com/O8TV5rk.jpg)

## API

I will be using NASA API's, particularly the endpoints for near Earth asteroids and NASA's Picture of the Day.

## MVP

I would like to sort through and pull up the closest asteroids to Earth on any given day. So the user should be able to input a date and get stats (size, velocity, distance to Earth) about the closest asteroids for that day, also whether they are deemed dangerous or not. The user should also be able to view NASA's picture of the day for any given date.

## Post-MVP

Add more statistics for the asteroids. Make fun visual comparisons and use CSS/JS animation - for example, compare the distance of asteroid to Earth to the distance from Earth to the Moon. Or comparing the size of the asteroid to something with similar area (big asteroids can compare to Texas, smaller can be compared to Manhattan and so on). Make an animation of an asteroid flying across the screen when you click the button to look them up.

Generally, adding good looking CSS and animations involving asteroids would be a cool feature to have.

## Approaches Taken

For this project, I used NASA's API's to pull near Earth asteroid data. The site works by asking a user to input a date in order to display closest asteroids to Earth on that date. When a user inputs the date, the site checks whether the date is in a valid format - if it's not, it will display a normally hidden error message asking a user to use the correct format. If the date is valid, a GET request will be sent to NASA with the proper parameters (such as the date and the API key). 

This returns data with nested objects. Because I know which particular objects I am looking for (such as the asteroids' diameter or miss distance), I specifically select those and then use a for loop to display them in a separate container for each of the asteroids.

Additionally, an animation function that makes an asteroid fly across the page is triggered whenever a user inputs a valid date and clicks the button (or presses enter). The asteroid flies across the screen as far as the screen's width and then resets. 

For the Picture of the Day tab, I used NASA API in a similar way to grab the image URL using the date that the user typed into the input field. Clicking the

## Link to Live Site

http://asteroid-watch.surge.sh

## Relevant Instructions for Viewers

Please use the YYYY-MM-DD format for the date (writing out the dashes and everything). I will make this more user-friendly as I polish the project post-presentation.