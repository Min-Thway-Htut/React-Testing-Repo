import React, {useContext, useState} from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeSwitcher;