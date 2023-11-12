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
    <div class="alert alert-success" role="alert">
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
