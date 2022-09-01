# ReinditionReddit

# Project 2 - Nick Duitsman - Ryan Peterson - Michael Dixon

## Description
This site is a reverse engineered version of the well known site Reddit. The site provides users the ability to view posts made by other users with or without login. Once a user logs in, they are allowed to create posts and make comments. 

## Site progress via images
<img width="700" alt="Shot 2022-09-01 at 9 26 28 AM" src="https://user-images.githubusercontent.com/9807461/187928692-ab974bf2-6c9d-46da-bd59-55816c41a827.png">

<img width="700" alt="Screen Shot 2022-09-01 at 9 29 23 AM" src="https://user-images.githubusercontent.com/9807461/187928696-78f3610d-e53f-4aab-b7f3-a26b1bbba221.png">

<img width="700" alt="Screen Shot 2022-09-01 at 9 29 18 AM" src="https://user-images.githubusercontent.com/9807461/187928699-b2584cc5-112e-4ef3-b2cc-3429f7e184ab.png">

<img width="700" alt="Screen Shot 2022-09-01 at 9 28 37 AM" src="https://user-images.githubusercontent.com/9807461/187928700-089505e2-6a20-4f45-bd1e-9d0b803b36cc.png">

<img width="700" alt="Screen Shot 2022-09-01 at 9 28 26 AM" src="https://user-images.githubusercontent.com/9807461/187928702-f6d26086-d0c3-44b7-8784-b6b1d56eab6a.png">

Final CSS styling:

<img width="700" alt="Screen Shot 2022-09-01 at 9 29 46 AM" src="https://user-images.githubusercontent.com/9807461/187928694-6c06d9ae-a900-4b4f-8377-0cc1edb03a6a.png">

## Technologies Used
HTML, CSS, , EJS, Mongoose, MongoDB, Node Express

HTML - provides the content for the graphical user interface (GUI).
CSS - provides the styling and page alignment. 
EJS - is a simple templating language that lets you generate HTML markup with plain JavaScript.
MongoDB Atlas - document model that enables developers to store data as JSON-like objects that resemble objects in application code.
Mongoose - elegant mongodb object modeling for node.js
Node Express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Code Challenges
The code snippet below displays one of the more challenging routes. The show route needed to incorporate the ability to find the specific ID of the post selected, then returning the entire database object (document) matching the given ID. Once this document has been found, the route then locates all comments that share the same post-ID and adds them to the 'context' variable to pass to the show.ejs page. In doing so, only the comments that are specific to that single post, are displayed. 
<img width="700" alt="Screen Shot 2022-09-01 at 10 07 05 AM" src="https://user-images.githubusercontent.com/109879521/187934421-23ed9ae6-ebc9-44e5-8398-0f39ac547c95.png">

## Future Goals
