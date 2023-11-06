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
