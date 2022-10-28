import React from 'react'
import { Link } from 'react-router-dom'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { useSelector } from 'react-redux'

export function AppBar() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: "1px solid black", marginBottom: 12 }}>
            <nav>
                {!isLoggedIn && <Link to='/login'>Log in</Link>}
                {isLoggedIn && <Link to='/dashboard'>Dashboard</Link>}
            </nav>
            {isLoggedIn && <UserMenu />}
        </header>
    )
}
