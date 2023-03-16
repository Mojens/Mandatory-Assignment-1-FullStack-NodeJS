document.getElementById("nav").innerHTML = DOMPurify.sanitize(`<div class="navigation-wrapper">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/" style="margin-left: 20px;margin-right: 20px;">Mandatory 1</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="margin-left:10px;margin-right:10px">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown" style="margin-left:10px;margin-right:10px">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="javascriptDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          JavaScript
        </a>
        <div class="dropdown-menu" aria-labelledby="javascriptDropdown">
          <a class="dropdown-item" href="variables">Variables, Data Types</a>
          <a class="dropdown-item" href="clean-code">Code Conventions / Clean Code</a>
          <a class="dropdown-item" href="variables-functions">Variables and Functions</a>
          <a class="dropdown-item" href="callback-functions">Callback Functions</a>
          <a class="dropdown-item" href="loops">Loops and Loop Methods</a>
          <a class="dropdown-item" href="time">Time</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="nodejsDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Node.js
        </a>
        <div class="dropdown-menu" aria-labelledby="nodejsDropdown">
          <a class="dropdown-item" href="intro">Intro to Node.js</a>
          <a class="dropdown-item" href="crud">CRUD</a>
          <a class="dropdown-item" href="express">Express</a>
          <a class="dropdown-item" href="fetch">Fetch</a>
          <a class="dropdown-item" href="get-request">GET Request (Parameter and Query)</a>
          <a class="dropdown-item" href="package-json">package.json</a>
          <a class="dropdown-item" href="rest-api">REST API Conventions</a>
          <a class="dropdown-item" href="ssr">SSR (Server-side rendering)</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="html-express">HTML and Express</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Deployment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/login"><button class="btn btn-outline-success"
        type="submit">Login</button></a>
      </li>
    </ul>
  </div>
`)