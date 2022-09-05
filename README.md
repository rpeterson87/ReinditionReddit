# ReinditionReddit

# Project 2 - Nick Duitsman - Ryan Peterson - Michael Dixon

## Description
This site is a reverse engineered version of the well known site Reddit. The site provides users the ability to view posts made by other users with or without login. Once a user logs in, they are allowed to create posts and make comments. 

## Wireframe
<img width="1000" alt="Screen Shot 2022-09-01 at 10 32 27 AM" src="https://user-images.githubusercontent.com/109879521/187940624-7f57edd8-f861-4807-82b8-178e5a392e71.png">

## Site progress via images
HTML with no CSS applied

<img width="700" alt="Shot 2022-09-01 at 9 26 28 AM" src="https://user-images.githubusercontent.com/9807461/187928692-ab974bf2-6c9d-46da-bd59-55816c41a827.png">

Preliminary CSS applied

<img width="700" alt="Screen Shot 2022-09-01 at 9 28 26 AM" src="https://user-images.githubusercontent.com/9807461/187928702-f6d26086-d0c3-44b7-8784-b6b1d56eab6a.png">

Final CSS styling:

<img width="700" alt="Screen Shot 2022-09-01 at 9 29 46 AM" src="https://user-images.githubusercontent.com/9807461/187937738-20c121ce-5e08-48c7-97d6-bec5860c2982.png">

Final show page with comment section:
(NOTE: Top Communities side bar gets updated as users upload more posts and begin voting on them. Currently the listing order is based on which community has a single highest upvoted post per community.)

<img width="700" alt="Screen Shot 2022-09-01 at 10 36 05 AM" src="https://user-images.githubusercontent.com/109879521/187941241-4d7e854f-c8fe-4777-9dd1-c29a9275b978.png">


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

## User Stories
At RenditionReddit, we are always keeping an ear to the ground to listen for ideas from our users.
Below you will find the feedback we have recieved thus far. 

### User Story #1
As a frequent user of RenditionReddit, I want to see the addition of a feature that allows me to stay logged in after leaving the site so that I can easily return without having to go back through the process of logging in.

### User Story #2
As a photographer on RenditionReddit,  I would like to be able to upload photos directly to the site 
so that I can attach images to my post instead of using links to third-party image hosts.

### User Story #3
As a content creator on RenditionReddit who typically works closely with moderators, I would like to be able to add moderators to my RenditionReddit community so that I can delegate some of the admin tasks.

### User Story #4
As a user who enjoys the comment section of RenditionReddit, I would like to be able to sort the comment section by different methods such as top, most recent and most controversial comments so that I can more easily navigate the comments.

### User Story #5
As a user of RenditionReddit who likes to let my personality project onto my social media presence, I would like to be able to add a profile picture so that I can have a little more individuality from other users.

## Future Goals
Additional functionality regarding user login verification would be beneficial. Currently any email/username can be registered, with no verification of validity. This should be solved in a production setting. Additionally, being able to upload multiple images into a carousel on a post would be nice for communities such as DIY, ie; before and after images. Additionally, we could like to change the posting/commenting dates to appear as a "time since" model rather than the abolute timestamp of creation like it currently is. Voting currently has no limitation to the number of up/down votes; user database should get tied to the voting mechanism to prevent infinite votes. Lastly, we plan to add the ability for users to delete/edit their own comments, currently not an available feature. 
