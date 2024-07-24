
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

const NavItem = ({ item }) => {
    if (!item) {
        return null;
    }

    return (
        <li>
            {item.children ? (
                <>
                    <NavLink to={item.href} activeClassName="active">
                        {item.text}
                    </NavLink>
                    <ul>
                        {item.children.map((child) => (
                            <li key={child.href}>
                                <NavLink to={child.href} activeClassName="active">
                                    {child.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <NavLink to={item.href} activeClassName="active">
                    {item.text}
                </NavLink>
            )}
        </li>
    );
};

NavItem.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    }).isRequired,
};

const Navbar = () => {
    const navItems = [
        { href: "/projects", text: "Projects" },
        { href: "/about", text: "About" },
        {
            href: "/projects",
            text: "Projects",
            children: [
                { href: "/projects/form-development", text: "Form Development" },
                { href: "/services/mobile-apps", text: "Mobile Apps" },
                { href: "/services/cloud-solutions", text: "Cloud Solutions" },
            ]
        },
        { href: "/contact", text: "Contact" },
        { href: "/eduction", text: "Education" }
    ];

    return (
        <nav className="nav05">
            <ul>
                {navItems.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;