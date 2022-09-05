import React from "react";
import { useHistory } from "react-router-dom";

function BlogList(props) {
  const blog = props.blogs;
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  console.log(props);
  return (
    <div className="blog-details">
      <article>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <p>Written by {blog.author}</p>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
}

export default BlogList;
