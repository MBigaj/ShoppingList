import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Shopping list</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/items'>Add more items</Link>
                <Link to='/my-items'>My item list</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;