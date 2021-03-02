import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
    Button
} from '@material-ui/core';
import '../styles/index.sass';

export default function Whowe() {

    return (
        <Box className="whoweJucci">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3} className="whoweTitle">
                        <Typography variant="h4" component="h4">
                            Olá, somos da Jüssi
                        </Typography>
                        <p className="descriptions">
                            A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                        </p>
                        <Button variant="outlined" className="btnNamed">
                            <Typography>
                                Conheça a Jüssi
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={8} className="whoweImage">
                        <div>
                            <img src="https://ik.imagekit.io/abkvohwfl/image-jussi_zmGdcoifV.png" alt="Jussi Office" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}