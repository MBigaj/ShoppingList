import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Shopping list</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/items'>Check items</Link>
                <Link to='/list'>My item list</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;