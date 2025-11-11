import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the Home Page.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Home;
