import { Link } from 'react-router-dom'
import Logo from '/images/Light-300-300px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse, faBars, faGraduationCap, faListCheck, faBarsProgress, faMoon } from '@fortawesome/free-solid-svg-icons'

import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header>

            <div className="logo">
                <Link to="/" className='link'>
                    <img src={Logo} alt="Wild Code School logo" className='logo-ico' />
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

            <div className="social-links theme">
                <a href="">
                    <FontAwesomeIcon icon={faMoon} />
                </a>
            </div>

        </header>
    )
}

export default Header