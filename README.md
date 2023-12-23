# Basketball App

## Challenge 1

Create a react app that where the app component has an h1 with Hello World. Delete App.css and svg files that are imported.

## Challenge 2

Setup react router dom with the app component as the layout and have one home / index page.

## Challenge 3

Create a Nav Component for Navigation menu using bootstrap.

- Add the bootstrap cdn link tag the head element in the index.html. Change the the title tag to "Basketball App"

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
```

- Take out the hello world from the App Component and add a navigation component. (components/Nav.jsx component)
- Add a Nav Component and import it into the App.jsx file. Use this html. Notice that I replace class with className.

```html
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Basketball App</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

All the can be found on the [bootstrap website](https://getbootstrap.com/)

## Challenge 4

Get mobile navigation working. When you click on the hamburger menu the drop down show appear. To get it work you will need to add and remove collapse class from this div.

```html
<div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
```

## Challenge 5

- Replace all the a tags with NavLink components from react router dom.
- Add an about page and replace the a tag that has "Link" in it with a NavLink that points to the about page.

Hint: You can pass the bootstrap classes in the className as a string.

## Challenge 6

Create the registration page and menu item.

- In the App component wrap the Outlet with div that has the container class.
- Create a registration page with this HTML.

```html
<div className="row">
  <div className="col">
    <h1>Register</h1>
  </div>
</div>
<div className="row">
  <div className="col">
    <label for="email" className="form-label">Email</label>
    <input type="email" id="email" className="form-control" />
  </div>
</div>
<div className="row">
  <div className="col">
    <label for="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" />
  </div>
</div>
<div className="row mt-3">
  <div className="col">
    <button className="btn btn-primary w-100">Register</button>
  </div>
</div>
```

- Add a navigation item to the menu that has the word register in it.

## Challenge 7

Create the input you will need to submit the information in the register form to the server.

- Use State to store the data from the inputs in the form.
- Create an onClick for the button that will create a javascript object with the email and password.
- Console.log the result

Note: We are doing this with each to know what we should build on the backend.

## Challenge 8

Create an express server using port 3000.

- There should be one route that has a path "/"
- Do not create a controller or route for this, just create in the app.js file.
- Send "basketball backend" from the endpoint
- Create a postman collection for this endpoint.

## Challenge 9

Create a register endpoint with a controller and route.

- The endpoint should be /users
- Use the built in json middleware
- console.log the post body in the controller
- return the post body back using the json function in the response object.

## Challenge 10

Create validate the post body in the register endpoint using yup library.

- Install the yup library.
- Validate that email field is required and is an actual email.
- Validate that password has a min of 6 and a max 30 characters long.
- Return a 400 with bad request when input is invalid.

## Challenge 11

Setup the database and database connection with nodejs and dbbeaver.

- Create a new database using [elephant sql](https://elephantsql.com)
- Install dotenv and sequelize
- create a .env file and use that string to authenticate with database in the listen function of app.js
- Connect your new database with dbbeaver.

## Challenge 12

Create a UserModel and Migration.

- Create the UserModel with a
  - id primary key int
  - email String
  - password String
  - createdAt DateTime
  - updatedAt DateTime
- Create migration, be sure to use the .env for password information.

Hint: use the sequelize documentation to complete this. I will be using it.

## Challenge 13

Have the user endpoint create a user. Create a response function that will create a response json to look like this. The function should take in 3 parameters: type, action, and data.

For the register user

- type = user
- data = create user
- action = "create"

```json
{
  "meta": {
    "type": "user",
    "action": "create"
  },
  "data": {
    "id": 4,
    "email": "noah3@gmail.com",
    "password": "moomoo",
    "updatedAt": "2023-11-06T17:31:58.531Z",
    "createdAt": "2023-11-06T17:31:58.531Z"
  }
}
```

Don't worry about hashing the password or taking the password from the response. We'll do that in the next challenge.

## Challenge 14

Install [Bcrypt](https://www.npmjs.com/package/bcrypt) and encrypt the password and ensure that the password is not being shown in the json.

```json
{
  "meta": {
    "type": "user",
    "action": "create"
  },
  "data": {
    "id": 4,
    "email": "noah3@gmail.com",
    "updatedAt": "2023-11-06T17:31:58.531Z",
    "createdAt": "2023-11-06T17:31:58.531Z"
  }
}
```

## Challenge 15

Create validation around the email to prevent duplicate emails from appearing. The error message should be on the email. It should look like this.

```json
{
  "meta": {
    "type": "form_errors"
  },
  "errors": {
    "email": ["Email is already taken."]
  }
}
```

## Challenge 16

Connect the register page to backend. If it's successful show a success bootstrap alert with a NavLink to the login page. Look up the html for the bootstrap alert. You will also want to hide the register form as well.
Don't worry about error messages we'll deal with that in the next challenge. :)

- Install [cors](https://www.npmjs.com/package/cors) npm library and use the middleware.
- Connect the form to the server using the fetch api.

## Challenge 17

Display bootstrap errors if the api returns a 400 status code. Use the bootstrap documentation. If there are multiple errors just display the first one.

## Challenge 18

Create the login page and menu item.

- Create a Login page with this HTML.

```html
<div className="row">
  <div className="col">
    <h1>Login</h1>
  </div>
</div>
<div className="row">
  <div className="col">
    <label for="email" className="form-label">Email</label>
    <input type="email" id="email" className="form-control" />
  </div>
</div>
<div className="row">
  <div className="col">
    <label for="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" />
  </div>
</div>
<div className="row mt-3">
  <div className="col">
    <button className="btn btn-primary w-100">Login</button>
  </div>
</div>
```

- Add a navigation item to the menu that has the word Login in it.

## Challenge 19

Create the input you will need to submit the information in the login form to the server.

- Use State to store the data from the inputs in the form.
- Create an onClick for the button that will create a javascript object with the email and password.
- Console.log the result

Note: We are doing this with each to know what we should build on the backend.

## Challenge 20

Create the login endpoint and the frontend validation. We'll be creating the jwt token in the next challenge. For now you can return a 200 with an empty response.

- Create a login route and controller
- Create a validator for the login that will validate that the email is present and the password is present only.
- Send a 400 status with an empty string for response if there is a validation error.
- Connect the frontend and backend code.
- If you get a 200 response direct the user /admin
- If you get a 400 so the form errors.
- If you get a 401 status response show this alert box under the form. (test this on the server by manually setting that status to 401)

```html
<div className="row">
  <div className="col">
    <div className="alert alert-success" role="alert">
      Successfully Register!!! Please{" "}
      <NavLink to="/login">login</NavLink>.
    </div>
  </div>
</div>
```

## Challenge 21

In the login endpoint return a JWT token if the user enters the right email and password. If the user does not enter the right email or password return a 401.

- Create an RSA certificate using https://cryptotools.net/rsagen (4096)
- Install jsonwebtoken library and follow the instructions here for generating a jwt token. The payload of your token should have the user id and should have alorgithm RS25. The token should expire in 4 hours. Please use the documentation found here: https://www.npmjs.com/package/jsonwebtoken

The postbody should look like this:

```json
{
  "meta": {
    "type": "jwt_token",
    "action": "login"
  },
  "data": {
    "token": "example_token"
  }
}
```

Once you have a jwt go jwt.io to confirm the payload of your webtoken.

## Challenge 22

Implement useContext hook for authentication with the login page. Show whether the user is logged in or on the home page

- Create an Auth Context that will store whether the user is logged in or not.
- Change the value stored in that context to true when the user logs in.
- Redirect the user to the home page
- useContext hook to show wether the user is logged in on the home page.
- Save jwt token to localstorage.
- If the jwt token exists in localstorage default the value stored in the context to true.

## Challenge 23

Logout Button and dynamic menu items.

- Create a logout menu item that redirect the user back to the home page and logs the user out. This should change the value in the auth context. Delete the the jwt token in localstorage.
- Hide Regiser and Login in the nav when the user is loggedin and the logout menu item. Show register and login when the user is not logged in and hide the logout menu item.

Hint: use a button instead of anchor tag for logout menu item.

## Challenge 24

Create a protected route

- Create an admin page and menu item that is only visible if the user is logged in.
- Create a component like AuthProvider that will return a children prop only if the user is loggedIn. If the user is not logged in return a Navigate Component from react-router-dom that should redirect the user back home. You will want to use useContext to determine if the user is logged in.
- When you register the Admin component in the main.jsx file. Wrap it in the component that you created.

```
element: <ProtectedRoute><Admin></ProtectedRoute>
```

## Challenge 25

Create add game page. It should have a field for the name of the home team, the away team and the time that the game will start. All the fields should be text fields. The route should be /admin/addgame and the game should be wrapped in react router dom form. This will be a protected route so make sure only people logged in can see it.

## Challenge 26

Create an action connected to the addgame page and console.log the object that will turn into json, in later videos. In the action return a redirect to /game/33. Redirect is a function built into react router dom.

The json object should look like this:

```json
{
  "hometeam": "Thunder",
  "awayteam": "Mavs",
  "gametime": "3:00 EST"
}
```

## Challenge 27

Create an endpoint for creating a game. It should take in json that looks like the json above. It should validate that each field has between 5 to 20 characters long and is required. (The game time field should have a 50 character max). It should return json that looks like this. We'll be adding authentication middleware in the next challenge.

```json
{
  "meta": {
    "type": "game",
    "action": "create"
  },
  "data": {
    "hometeam": "Dawgs",
    "awayteam": "Beangles",
    "gametime": "Tuesday Nov 3rd at 3pm EST Time"
  }
}
```

## Challenge 28

### Authenication Middleware

Create a middle that will attach the user to the request if the user is logged in. This middleware should be applied to every request and it should never fail a requeest, meaning force it return a 403.

### Authorization Middleware

Create another middleware that will fail a request if the user is not logged in. Apply this middleware to the game endpoints. If this fails it should return a 403 with an empty response.

## Challenge 29

Create a database table for the basketball game. It should have these fields. Once you have created the table try to create a migration for it. Then create a game in the addGame controller. Default the scores to zero and isLive should be false when created.

- id (primary key) auto increment
- hometeam string
- awayteam string
- hometeamScore int nullable
- awayteamScore int nullable
- gametime string
- isLive boolean (set this to false in the controller)
- isOver boolean (set this to false in the controller)
- quarter int (nullable)
- minutes int (nullable)
- seconds int (nullable)
- createdAt datetime
- updatedAt datetime

```json
{
  "meta": {
    "type": "game",
    "action": "create"
  },
  "data": {
    "id": 1,
    "hometeam": "Dawgs",
    "awayteam": "Beangles",
    "gametime": "Tuesday Nov 3rd at 3pm EST Time",
    "isOver": false,
    "isLive": false,
    "updatedAt": "2023-11-12T19:44:56.953Z",
    "createdAt": "2023-11-12T19:44:56.953Z",
    "hometeamScore": null,
    "awayteamScore": null,
    "quarter": null,
    "minutes": null,
    "seconds": null
  }
}
```

## Challenge 30

Create a userId field on the game table that is a foreign key. You will need to rollback the create game to run the migration. Use the sequelize migration and association documentation to complete. This is a tough challenge so go easy on yourself if you watch the video.

## Challenge 31

Connect the addGame Form to server.

- Create a logout route that will delete the jwt token and return a <Navigate to="/login"> component. Replace the current implemention going to the logout route. In that component have a useEffect hook that will delete the jwt token and isLoggedIn to false using that useContext.

- When you make the request use the Authorization header with the bearer token. It should look like this in headers keys

```js
'Authorization': 'Bearer ' + jwtokenvariable,
```

- Connect the http://localhost:3000/game to the game page
  - if you get a 400 return and display the form errors
  - if you get a 403 redirect to the logout page
  - if you get a 200 redirect to the admin page

## Challenge 32

Create the get game endpoint.

This should be a public endpoint, so will be need adjust the middleware configs. It should return a single. If there is no game it return a 404 status.

The route should look like this:

GET /game/3

```json
{
  "meta": {
    "type": "game",
    "action": "get"
  },
  "data": {
    "id": 5,
    "hometeam": "asdfs",
    "awayteam": "asdfs",
    "gametime": "ssssss",
    "isLive": false,
    "isOver": false,
    "hometeamScore": null,
    "awayteamScore": null,
    "quarter": null,
    "minutes": null,
    "seconds": null,
    "createdAt": "2023-11-13T06:35:15.914Z",
    "updatedAt": "2023-11-13T06:35:15.914Z",
    "userId": 7
  }
}
```

## Challenge 33

Update AuthContext to store userId and email.

Update the login endpoint and AuthContext to store the email address and user id in addition to if the user is logged in. You will need to modify both the node server and the react app. You will want to store these values in localstorage. When the user logs out be sure to unset these values in localstorage and in authcontext.

## Challenge 34

Create the update score game page.

- The page's url should look like this: /admin/game/5/updatescore
- The page should have these inputs:
  - away score
  - home score
  - minutes
  - seconds
  - quarters
- Their should be load that loads the game's information.
  - If the user is not logged in or does not have a user id that matches the game log the user out. I did this in a useEffect because you can't load the context in the loader.
- Use the game to populate the form with data that there. Test this out by manually setting the data in the database.

### HTML

```jsx
<>
  <div className="row">
    <div className="col">
      <h1>Update Score</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
      <label htmlFor="hometeamScore" className="form-label">
        Home Team Score
      </label>
      <input type="number" id="hometeamScore" className="form-control" />
    </div>
    <div className="col-6">
      <label htmlFor="awayteamScore" className="form-label">
        Away Team Score
      </label>
      <input type="number" id="awayteamScore" className="form-control" />
    </div>
  </div>
  <div className="row">
    <div className="col">
      <label htmlFor="quarter" className="form-label">
        Quater
      </label>
      <input type="number" id="quarter" className="form-control" />
    </div>
    <div className="col">
      <label htmlFor="minutes" className="form-label">
        Minutes
      </label>
      <input type="number" id="minutes" className="form-control" />
    </div>
    <div className="col">
      <label htmlFor="seconds" className="form-label">
        Seconds
      </label>
      <input type="number" id="seconds" className="form-control" />
    </div>
  </div>
  <div className="row mt-3">
    <div className="col">
      <button className="btn btn-primary w-100">Update Score</button>
    </div>
  </div>
</>
```

## Challenge 34

Create update score endpoint

- url: PUT /game/33/updatescore
- the user must be logged in:
- should have these json fields:
  - away score min -> 5 , max -> 200, required
  - home score min -> 5 , max -> 200, required
  - minutes min -> 0, max -> 15, required
  - seconds min -> 0, max -> 60, required
  - quarters min 1, max -> 4 not required
- should throw a 403 if the user is trying to update a game they did not create.
- should return a response that looks like this:

```json
{
  "meta": {
    "type": "game",
    "action": "update_score"
  },
  "data": {
    "id": 5,
    "hometeam": "asdfs",
    "awayteam": "asdfs",
    "gametime": "ssssss",
    "isLive": false,
    "isOver": false,
    "hometeamScore": 34,
    "awayteamScore": 33,
    "quarter": 1,
    "minutes": 2,
    "seconds": 15,
    "createdAt": "2023-11-13T06:35:15.914Z",
    "updatedAt": "2023-11-15T04:49:48.153Z",
    "userId": 7
  }
}
```

## Challenge 35

Connect the updatescore endpoint to the updatescore form. Use the react toastify library to show if the form was successfully submitted. https://fkhadra.github.io/react-toastify/installation

### Bonus

Pass a some text in for the number field. You will notice you get an ulgy error use this link and typeError to fix it on the node server.

https://github.com/jquense/yup/issues/211#issuecomment-464253977

## Challenge 36

When you submit a form with an error and resubmit the form without an error the error validation message on the form should go away.

## Challenge 37

Create the edit game endpoint.

PUT /game/33

```json
{
  "hometeam": "Reds",
  "awayteam": "Blues",
  "gametime": "2pm Friday"
}
```

- If user is not logged in return a response with status 404
- If the game does not exist return a response with status 404
- If the game was not created by the user return a response with status 404
- Otherwise update the game and return the game back.

The response should look like this:

```json
{
  "meta": {
    "type": "game",
    "action": "update_game"
  },
  "data": {
    "id": 5,
    "hometeam": "asdfs",
    "awayteam": "asdfs",
    "gametime": "ssssss",
    "isLive": false,
    "isOver": false,
    "hometeamScore": 34,
    "awayteamScore": 33,
    "quarter": 1,
    "minutes": 2,
    "seconds": 15,
    "createdAt": "2023-11-13T06:35:15.914Z",
    "updatedAt": "2023-11-15T04:49:48.153Z",
    "userId": 7
  }
}
```

## Challenge 38

Create the update game page.

- Create a component called GameForm that will where you will copy the JSX from AddGame Component
  - The component should have title prop and game data prop
    - Use the title prop to populate the h1 and button text
    - Use the gameData prop to populate the form. You can pass in the [defaultValue](https://react.dev/reference/react-dom/components/input#providing-an-initial-value-for-an-input) in the input. Hint use the elvic operator "?".
  - Reuse the loader you created in updateScore to get the game data to edit form.
  - See if you can create function that will be shared by both your editGame and and addGame forms. Hit should take in request, url, http and method

This is a big challenge take your time.

## Challenge 39

Create the game page

- url /game/:gameId
- use the game loader
- If the game is over display something like final score.
- If the game is isLive display something like live
- If the game is isLive or over display the score next to the team names.
- If both are not set show the game time

## Challenge 40

Create an two endpoints on the node. Try to re use the update function to do this. You will have to refactor it a little bit. This includes and rearranging the parameters of the function.

### Starting the game

PUT /game/:id/start

- requires authenication
- requires that the user created the game
- set isLive to true and isOver to false

### Ends the game

PUT /game/:id/end

- requires authenication
- requires that the user created the game
- set isLive to true and isOver to false

## Challenge 41

On the update score page if the game has not started only show a button that says start game. Once the user clicks on the button call the start game endpoint and show the update score form.

It game has started show a button to end the game that will call the end game endpoint.

In this challenge I was able to consolidate everything into one function for all the requests. If you are feeling brave you can do that as a bonus.

## Challenge 42

Create a paginated game endpoint. Use this documentation to create the ednpoint. https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall

GET /game?page=1&user_id=3

- The page size should be 10, meaning 10 games per request loaded.
- Use a query parameter named page to control the page number. It should start at 1. `?page=2`
- Use a query parameter to specify the user id you want to filter the games by `user_id=3`
- This should be an open endpoint that everyone can call.
- All query parameters should be optional.
- Adjust the page size to test all scenarios.

### Payload

```json
{
  "meta": {
    "type": "game_list",
    "action": "get_game_list",
    "page": 2,
    "page_size": 10,
    "number_of_pages": 3,
    "is_last_page": false,
    "is_first_page": false
  },
  "data": [...]
}
```

## Challenge 43

Create an admin page that uses that shows some games with pagination.

Adjust the sequelize configuration to use this on the startup. You can adjust it in the init.js file

```js
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
```

- Change the page size to 2 to make easier to have more than one page.
- create a loader for the admin page that will use local storage to get the userId and the request to get page param is available.
- Display the titles in a list of pages
- Create 2 nav links to test that the pagination works.

Hint use this article to see if you can find away to send the query params without manually constructing them in the string.
https://webtips.dev/solutions/send-query-params-in-get-and-post-in-javascript

## Challenge 44

Create a table to display the admin page. Each row should have an id, home team, an away team, game time, edit link, and update score link.

## Challenge 45

Create bootstrap pagination component and use it on the admin page.
https://getbootstrap.com/docs/5.3/components/pagination/

Hints:

- You can use this stack over question to create the loop you will need for your pagination: https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
- Use the useSearchParams hook to change the pagination. Read the documentation and see if you can keep all the other query parameters in place.
- Do not use NavLinks or Urls to change the pagination, instead use a function that uses that hook. You can change the a tags to span tags.

## Challenge 46

Create a migration migrations that will change the gametime to Date type in sequelize. You will need to delete all of your games before doing this. This will be a required field.

## Challenge 47

Change the game time validation to only use a number.

- Use the Date.now() function to make sure the timestamp you are submitting is in the future.
- Use this website to create a timestamp and multiply that number 1000. You are submitting the number of milliseconds.
  https://www.unixtimestamp.com/

## Challenge 48

Fix the forms and display to deal with the new date time refactoring.

- Fix the create and update forms to send a timestamp.
  - Change the input type to datetime-local
  - For the create calls calls convert the date time string into a timestamp. You can use the getTime() function. new Date(timestring).getTime(). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
  - For the game time input you will need to convert it into date using this example: https://stackoverflow.com/a/61082536
  - Fix the displays for the gametime. I used toLocaleString which you can find here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

## Challenge 49

Change the h1 of the admin page to say "My Games" and if there is no need for pagination display an empty fragment <></> in the pagination component. You will need adjust the node server.

## Challenge 50

Adjust the games endpoint to accept a type query parameter. ?type=all. There should be 3 types

- all -> means don't filter anything
- live -> means only show live games
- over -> means only show games that are over
- not_started -> means only show games that have not started yet.

Adjust this on the node side and on the react side.

You will also notice a bug in the pagination. You will need to fix that bug. When you are filter notice that type does not get transfered to the url.

HINT: Use the loader to make the request for the games and not an on change function.

## Challenge 50

Create a optional query parameter called search that will search the hometeam or the awayteam with term that is typed in. It should use or logic meaning:

(hometeam ilike %term% or awayteam ilike %term%)

You will want to use ilike for the comparison and not the equal one. Give this your best shot and if you can't figure it out after 5 or 10 minutes watch the video. :)

## Challenge 52

Create a home page loader that will take in query parameters and create a get games request. It should be able to handle the search, type, and page query parameters. See if you can re use code.

For now go ahead and load the home teams in an li and load the pagination component.

There are two bugs I want you to fix as well. One is sending null for the user id will break nodejs app. Meaning that if you send a string for the user id it will break. The other is sending the null string for the user id and other query paramters on the frontend.

## Challenge 53

Create a create component for showing the individual games. I am going to keep it simple. Feel free to make this challenge yours.

## Challenge 54

Create a game search bar that will have the type filter and search filter. Use the loader and useSearchParams to get the new page.

## Challenge 55

Whenever a user update a game I want you to send a web socket message with the game the user updated. Pass the web socket server object to the request via middleware. Delete all the code we put into the home endpoint and delete the on message code as well.

## Challenge 56

Using this [webpage](https://javascript.info/websocket) and useContext connect the frontend to web sockets. Your provider for the the context should be wrapped around the AuthProvider. You will want to update the game and the game component so that that game search results and the individual game page changes when you update the game.
