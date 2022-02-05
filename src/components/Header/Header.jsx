import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Конвертер валют</NavLink>
                </li>
                <li>
                    <NavLink to='currency'>Курс валют</NavLink>
                </li>
            </ul>
        </div>
    );
};

Header.propTypes = {
    text: PropTypes.string,
};

export default Header;
