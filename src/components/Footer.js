import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/index.sass';

export default function Footer() {

    return (
        <Box className="footerJucci">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="left">
                        <div>
                            <img src={'https://ik.imagekit.io/abkvohwfl/wppcompany_m9d1okyJ8.png'} alt="Jussi Logo" />
                        </div>
                    </Grid>
                    <Grid item xs={6} className="rigth">
                        <ul>
                            <li>
                                <a>
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <LinkedInIcon />
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}