import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page not found !</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
        laboriosam accusantium repudiandae minus quaerat quis officiis
        exercitationem animi eaque ullam.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}

export default NotFound;
