import "./Navbar.css";
import { Menu, Music2 } from "lucide-react";

const navLinks = [
    "Performance",
    "Studio",
    "Visualizer",
    "Library",
];

const Navbar = () => {
    return (
        <header className="navbar">

            <div className="navbar-container">

                <a
                    href="/"
                    className="navbar-logo"
                >

                    <div className="logo-icon">

                        <Music2 size={20} />

                    </div>

                    <div className="logo-text">

                        <span className="logo-title">

                            DrumVerse

                        </span>

                        <span className="logo-subtitle">

                            LIVE PERFORMANCE

                        </span>

                    </div>

                </a>

                <nav className="navbar-links" aria-label="Primary Navigation">

                    {navLinks.map((link) => (

                        <a
                            key={link}
                            href="/"
                            className="nav-link"
                        >
                            {link}
                        </a>

                    ))}

                </nav>

                <div className="navbar-actions">

                    <button className="enter-stage-btn" aria-label="Enter Stage" type="button">
                        Enter Stage
                    </button>

                    <button
                        className="menu-btn"
                        type="button"
                        aria-label="Open Menu"
                    >
                        <Menu size={22} />
                    </button>

                </div>

            </div>

        </header>
    );
};

export default Navbar;