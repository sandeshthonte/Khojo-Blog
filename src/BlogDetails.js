import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
// import BlogList from "./BlogList";
import BlogDetailsFormat from "./BlogDetailsFormat";

function BlogDetails() {
  const { id } = useParams();
  const { data: blogs, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log(blogs);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {blogs && <BlogDetailsFormat blogs={blogs} />}
    </div>
  );
}

export default BlogDetails;
