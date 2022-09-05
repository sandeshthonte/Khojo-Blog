import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;
