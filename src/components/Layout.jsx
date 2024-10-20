import SideNavBar from './SideNavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'


const Layout = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    let root = document.querySelector(':root')
    root.style.setProperty('--font-color:', theme === 'light' ? 'black' : 'rgba(255, 255, 255, 0.884)')
    root.style.setProperty('--secondary-font-color', theme === 'light' ? 'rgb(110, 110, 110)' : 'rgb(206, 206, 206)')
    root.style.setProperty('--bg-color', theme === 'light' ? 'white' : 'black')
    root.style.setProperty('--ico-color', theme === 'light' ? '#00abf0' : '#00abf0')
    root.style.setProperty('--ternary-color', theme === 'light' ? '#00abf0' : '#f000e4')
    root.style.setProperty('--quaternary-color', theme === 'light' ? '#f000e4' : '#00abf0')

    return (
        <>
            <SideNavBar
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
