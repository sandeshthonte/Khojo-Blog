const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a className="website-title" href="/">
          The Khojo Blog
        </a>
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        {/* <a href="/">Home</a> */}
        {/* <a href="/">Home</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
