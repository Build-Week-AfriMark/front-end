import React from 'react'

const Header = (props) => {
    const { tokenState } = props
    console.log(tokenState)
    return (
        <>
        {tokenState ? (
            <header>
            <nav>
            <a href='/the-market'>The Market</a>
            <a href='/logout'>Logout</a>
            </nav>
        </header>
        ) : (
            <header>
                <nav>
                    <a href='/login'>Login</a>
                    <a href='/signup'>Sign Up</a>
                </nav>
            </header>
        )}
        </>
    )
}

export default Header