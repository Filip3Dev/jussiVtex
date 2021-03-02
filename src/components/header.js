import React from "react";

import { Link as RouterLink } from "gatsby";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    MenuItem,
    Link,
    IconButton,
    Paper,
    InputBase,
} from "@material-ui/core";

export default function Bar() {

    const menuItems = [
        { name: "Nossas soluções" },
        { name: "Conheça a Jüssi" },
    ];

    return (
        <AppBar color="white" position="fixed" >
            <Toolbar>
                <Box display="flex">
                    <Typography color="inherit" variant="h6">
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to="/"
                            underline="none"
                        >
                            <img src={'https://ik.imagekit.io/abkvohwfl/JussiVector_9vn4O4XP6.png'} alt="Jussi Logo" />
                        </Link>
                    </Typography>
                </Box>
                <Box display="flex" flexGrow={1}>
                    {menuItems.map((menuItem, index) => {
                        if ( menuItem.hasOwnProperty("condition") && !menuItem.condition) {
                            return null;
                        }
                        let component = (
                            <MenuItem
                                key={index}
                                component={RouterLink}
                            >
                                {menuItem.name}
                            </MenuItem>
                        );
                        return component;
                    })}
                </Box>

                <Paper component="form" elevation={0} variant="outlined">
                    <InputBase
                        placeholder="Buscar"
                        inputProps={{ 'aria-label': 'Buscar' }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <Button>Login</Button>
                <IconButton aria-label="add to shopping cart">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}