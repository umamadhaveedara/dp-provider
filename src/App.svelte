<script>
  // import Router  from 'svelte-spa-router';
  // import routes from './routes';
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
  import Login from './Pages/Login.svelte'
  import Signup from './Pages/Signup.svelte'
  import ForgotPassword from "./Pages/ForgotPassword.svelte";
</script>

<main>
  <Router {url}>
    <!-- <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav> -->
    <div>
      <Route path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </div>
  </Router>
</main>


