# Overview

- Javascript
- React CRA
- JSX
- Functional components
- React Router
- React Hooks
  

This project is built using React CRP. The application take the weather from a weather API with specified coordinates and shows clothes recommendations based on the weather. There is a popup that opens to display each item when they are clicked and another popup for adding new items. The temp and location are both populated using weather API. Card data retrieved from API. Items may be add and deleted. User profile shows all of their cards while the "/" main page shows filtered cards based on weather. When user name is clicked the user is directed to the user profile. When either of the avatars are clicked the user is directed back to the main page.


Users can create their own accounts. Users profiles are only accessable to the authorized user. jwt are stored in local storage. Users can like and unlike cards when they are logged in. Users can log out removing the jwt from local storage. Only cards belonging to logged in user can be deleted.

## to come

- edit user info
- weather card changes based on data from weather API
- like cards
