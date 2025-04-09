import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHouse,
    faBars,
    faGraduationCap,
    faListCheck,
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons'


import {
    faLinkedinIn,
    faGithub,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons'

import propTypes from 'prop-types'

const SideNavBar = (props) => {
    const activeStyles = {
        backgroundColor: 'var(--ternary-color)',
    }
    return (
        <header>
            <div className="logo">
                <NavLink
                    to="/"
                    end
                    className='link'>
                    <img
                        src={
                            props.theme === 'light' ? '/images/Light-300-300px.png' : '/images/Dark-300-300px.png'
                        }
                        alt="logo"
                        className='logo-ico'
                    />
                </NavLink>
            </div>

            <nav className='nav-links'>
                <NavLink
                    to="/"
                    end
                    style={({ isActive }) => isActive ? activeStyles : undefined}
                >
                    <FontAwesomeIcon icon={faHouse} />
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : undefined}
                >
                    <FontAwesomeIcon icon={faBars} />
                </NavLink >
                <NavLink
                    to="/curriculums"
                    style={({ isActive }) => isActive ? activeStyles : undefined}
                >
                    <FontAwesomeIcon icon={faGraduationCap} />
                </NavLink >
                <NavLink
                    to="/projects"
                    style={({ isActive }) => isActive ? activeStyles : undefined}
                >
                    <FontAwesomeIcon icon={faListCheck} />
                </NavLink>
            </nav>


            <div className="social-links">
                <a href="https://www.linkedin.com/in/m-essam/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/messams" target="_blank">
                    <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://x.com/m_essam_s" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </div>

            <div className="social-links theme theme-btn">
                <button
                    onClick={props.toggleTheme}
                >
                    <FontAwesomeIcon icon={
                        props.theme === 'light' ? faMoon : faSun
                    }
                    />


                </button>
            </div>

        </header>
    )
}

SideNavBar.propTypes = {
    theme: propTypes.string.isRequired,
    toggleTheme: propTypes.func.isRequired,
}

export default SideNavBar
