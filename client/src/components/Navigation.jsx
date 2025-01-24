import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <h1>Pokemon App</h1>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/pokemon-create">Create Pokemon</Link>
    </div>
  );
}
