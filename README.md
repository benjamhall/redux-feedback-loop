## Redux Feedback Loop
## Description
This is application is a survey that allows someone to get feedback on how the users are feeling, understanding, supported and if they have any comments. 

## Installation
Create your database and tables using the provided data.sql file. Start the server.

npm install
npm run server
Now that the server is running, open a new terminal tab with cmd + t and start the react client app.
npm run client

## How it Works
The app starts at a base page where the user sees their first question regarding feedback after their day at work/school. After answering how they are feeling overall on a 1-5 scale, they will be directed to the next view which asks them to rate their understanding of the day's material. From there the have the option to go back and change their rating or continue on to answer how they feel they are being supported.

After answering, they are able to add optional comments and finally they are guided to the review page where the user is able to see all of their answers and comments and perform a final submit. Upon submit they are given a thank you if the submit was successful and an opportunity to add new feedback.
## Features
This app has input validation in which the user is not allowed to move on to the next page unless they have filled out the appropriate form.
## Software Used
This is a react app that uses redux and a router to sift through views while still maintaining user added data as well as express as well as PostgreSQL to keep track of submitted feedback. Material-ui is used for styling.
## Contributor 
Ben Hall
## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 
## Support
If you have suggestions or issues, please email me at benjamhall@gmail.com
