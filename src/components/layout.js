import React from "react";
import { Box, CssBaseline } from '@material-ui/core';
import Bar from '../components/header';
import '../styles/index.sass';

export default function Layout({ children }) {

    return (
        <>
            <CssBaseline />
            <Bar />
            <Box maxWidth="false">
                {children}
            </Box>
        </>
    )
}