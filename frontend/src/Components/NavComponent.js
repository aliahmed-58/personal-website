import '../styles/navbar.css';

const NavComponent = () => {
    return (
        <div className="navbar">
            <div className="brandname"><h1>ali ahmed nadeem</h1></div>
            <div className="navitems">
                <ul className="navlist">
                    <li><a href="#home">home</a></li>
                    <li><a href="#home">portfolio</a></li>
                    <li><a href="#home">about</a></li>
                    <li><a href="#home">contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavComponent;