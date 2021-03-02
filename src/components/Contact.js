import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';
import '../styles/index.sass';

export default function Contact() {

    return (
        <Box className="contactJucci">
            <Container>
                <Grid container spacing={2} className="centeredJucci">
                    <Grid item xs={12} className="contactTitle">
                        <Typography variant="h4" component="h4">
                            Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="contactSubtitle">
                        <Typography variant="p" component="p">
                            Entre em contato
                        </Typography>
                        <Typography variant="h5" component="h5">
                            comercial@jussi.com.br
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}