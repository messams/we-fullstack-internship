import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHouse,
    faBars,
    faGraduationCap,
    faListCheck,
    faBarsProgress,
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
    return (
        <header>

            <div className="logo">
                <Link to="/" className='link'>
                    <img
                        src={
                            props.theme === 'light' ? '/images/Light-300-300px.png' : '/images/Dark-300-300px.png'
                        }
                        alt="logo"
                        className='logo-ico'
                    />
                </Link>
            </div>

            <nav className='nav-links'>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link to="/about">
                    <FontAwesomeIcon icon={faBars} />
                </Link>
                <Link to="/curriculums" >
                    <FontAwesomeIcon icon={faGraduationCap} />
                </Link>
                <Link to="/tasks" >
                    <FontAwesomeIcon icon={faListCheck} />
                </Link>
                <Link to="/projects" >
                    <FontAwesomeIcon icon={faBarsProgress} />
                </Link>
            </nav>


            <div className="social-links">
                <a href="https://www.linkedin.com/in/m-essam/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/m-essam-s" target="_blank">
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