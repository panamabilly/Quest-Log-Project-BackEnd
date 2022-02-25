# Quest-Log-Project-BackEnd
# Quest-Log | Track your adventures

# Application Summary

The goal of this application is for the user to drop a marker on any location around the globe (by simply double-clicking) and have the ability to add notes specific to the place they have visited. You can use the application to recall memories of past vacations/trips or use it as a inspiration for new quests around the globe. Users are able to see their own pins marked in yellow and other users in purple. Users are able to read other users comments by selecting them on the map.
The back-end for this application was deployed on heroku. The backend is able to save the pins created by the user with text details about the location pinned.
### Installation

If you would like to look at the paths for the API they are: 

https://quest-log-backend.herokuapp.com/api/users

https://quest-log-backend.herokuapp.com/api/pins

https://quest-log-backend.herokuapp.com/api/resorts

### Stack Utilized for Frontend/Backend

MERN Stack (Full Stack Application)

### Technologies used

-MongoDB -Express.js -React.js -Node.js -CSS -MapBox GL JS -Timeago.js -MUI Icons -Axios -Bcrypt(password-hashing)

### User stories

#### MVP

-As a user, I want to be able to pin locations that I have visited.
-As a user, I want to be able to add information into a form about the place that I have visited.
-As a user, I want my pins to be saved for future reference.

#### Post-MVP

-As a user, I want to be able to create a profile so that I can save my own pins on the map.
-As a user, I want to see what other users of the app have pinned around the world.

### List of backend models and their properties
Models

User
UserName: String
FirstName: String
LastName: String
Password: String
TimeStamp: String

Pin
UserName: String
Title: String
Description: String
Rating: Number
Photo: Image File
Latitude: Number
Longitude: Number
TimeStamp: String

Resort
Name: String
State: String
City: String
Description: String
Photo: Image file
Latitude: Number
Longitude: Number
Website: String


### Running this Back End
If you want to run this server, you must first install the dependencies used in the app. You can fork and clone down the repository, and install nodemon, CORS, dotenv, Mongoose, and Express with the following command:

npm i cors dotenv mongoose express nodemon

This will install the necessary dependencies that the back end utilizes to send and receive data from MongoDB.

You will then need connect a Database to the app by create a .env file and placing

DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.bc5wb.mongodb.net/<appName>?retryWrites=true&w=majority,

replacing the username and password with your credentials, and replacing the appName with whatever you would like to name the collection.

Finally, the server should be ready to run, which is accomplished by running nodemon index.js within the main directory. The app will default to running on localhost:3000/ or any port you may define within .env.


### Unsolved Issues / Major Hurdles

-I left the project open-ended so I can build some more app development/programming skills in my free time. I would like to implement a photo upload system. I would also like to build up the api to show information about ski resorts in the Western United States for users to have as a reference I set up the start of a user authentication system in the back-end but due to time constraints it will need to be implemented later. I recently tested the app in a mobile phone and discovered that the double click gesture does not work using a touch screen and I would like to incorporate mobile functionality with the app.

I had a major hurdle in deployement trying to get the token authorization to work on the deployed app, apparently the .env file is read by react but needs to be explicitly linked within the code to work in the web deployment using netlify.

### Screenshots

![image](https://user-images.githubusercontent.com/93820113/155620745-f42c75ed-cb51-4454-9355-1e3456b551c4.png)
Note existing Pins created by other users shown in purple while the User's pins are shown in yellow as shown in the image above.
![image](https://user-images.githubusercontent.com/93820113/155621377-9187b973-121a-4826-84b6-6b11daf59500.png)
User Input form shown in Image Above created when double clicking on any point in the world map. The information is saved to a backend server when the add pin button is clicked.


