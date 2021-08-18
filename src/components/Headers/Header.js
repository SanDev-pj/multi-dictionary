import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord,LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: { main:LightMode?"#000": "#fff" },
            type:LightMode?"light": 'dark',
        },
    });
    const handleChange=(language)=>{
        setCategory(language);
        setWord("");
    }
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        label="Search a Word"
                        className="search"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }

                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
