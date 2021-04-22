import React from "react";

const Welcome = React.lazy(() => import("./pages/welcome/Welcome"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Users = React.lazy(() => import("./pages/users/Users"));
const User = React.lazy(() => import("./pages/users/User"));
const Tours = React.lazy(() => import("./pages/tour/Tours"));
const Tour = React.lazy(() => import("./pages/tour/Tour"));

const routes = [
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/", exact: true, name: "Home" },
  { path: "/welcome", name: "Welcome", component: Welcome },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  { path: "/tours", exact: true, name: "Tours", component: Tours },
  { path: "/tours/:id", exact: true, name: "Tour Details", component: Tour },
];

export default routes;
