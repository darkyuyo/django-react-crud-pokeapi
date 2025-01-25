import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="white-text flex justify-between items-center py-3">
      <h1 className="white-text font-bold text-3xl">Pokemon App</h1>
      <Link className="blue-text"to="/">Home</Link>
      <br></br>
      <Link className="blue-text" to="/pokemon-create">Create Pokemon</Link>
    </div>
  );
}
