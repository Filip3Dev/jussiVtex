import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
    Button,
    Card,
    CardMedia,
    CardActions
} from '@material-ui/core';
import '../styles/index.sass';

export default function Hero() {

    const menuItems = [
        { name: "Adicionar à sacola", image: 'https://ik.imagekit.io/abkvohwfl/black-prod_M02EmDgNZ.png' },
        { name: "Comprar em 12x", image: 'https://ik.imagekit.io/abkvohwfl/batedeira-prod_sXkvMjF7oh.png' },
        { name: "Mais Detalhes", image: 'https://ik.imagekit.io/abkvohwfl/geladeira-prod_HA548v7z7.png' },
    ];

    return (
        <Box className="heroJucci">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="heroJucciTextBox">
                        <Box className="heroMainText">
                            <Typography variant="h1" component="h1">
                                Criamos lojas que vendem mais.
                            </Typography>
                            <p>
                                A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
                            </p>
                            <Button variant="outlined">
                                <Typography>
                                    Veja nossas soluções
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container className="promoCards">
                            {menuItems.map((menuItem, index) => {
                                if (menuItem.hasOwnProperty("condition") && !menuItem.condition) {
                                    return null;
                                }
                                let component = (
                                    <Grid item key={index}>
                                        <Card className="cardPromo">
                                            <CardMedia
                                                image={menuItem.image}
                                                title={menuItem.name}
                                            />
                                            <CardActions disableSpacing>
                                                <Button variant="outlined">
                                                    <Typography>
                                                        {menuItem.name}
                                                    </Typography>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                                return component;
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}