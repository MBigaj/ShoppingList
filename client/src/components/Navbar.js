import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Shopping List</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/items' urlItems='/api/items' urlTypes='/api/object-types'>Add more items</Link>
                <Link to='/my-items' url={ '/api/my-items' }>My item list</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;