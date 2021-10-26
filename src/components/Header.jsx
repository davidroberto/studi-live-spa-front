import { Link } from 'react-router-dom';

function Header(props) {

    const style = {
        backgroundColor: props.color
    };

    return (
        <header style={style}>
            <nav>
                <ul>
                    <li>
                       <Link to="/">Accueil</Link> 
                    </li>
                    <li>
                       <Link to="/articles">Articles</Link> 
                    </li>
                    <li>
                       <Link to="/categories">Categories</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;