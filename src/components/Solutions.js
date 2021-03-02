import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Container,
    Avatar,
    Button
} from '@material-ui/core';
import '../styles/index.sass';

export default function Solutions() {

    const cardItens = [
        { icon: 'P1', title: 'Nome do Produto #1', description: 'Descrição do produto #1', features: [{ name: 'Feature 1' }, { name: 'Feature 2' }, { name: 'Feature 3' }] },
        { icon: 'P2', title: 'Nome do Produto #2', description: 'Descrição do produto #2', features: [{ name: 'Feature 1' }, { name: 'Feature 2' }, { name: 'Feature 3' }] },
        { icon: 'P3', title: 'Nome do Produto #3', description: 'Descrição do produto #3', features: [{ name: 'Feature 1' }, { name: 'Feature 2' }, { name: 'Feature 3' }] },
        { icon: 'P4', title: 'Nome do Produto #4', description: 'Descrição do produto #4', features: [{ name: 'Feature 1' }, { name: 'Feature 2' }, { name: 'Feature 3' }] },
    ];

    return (
        <Box className="solutionsJucci">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="solutionsTitle">
                        <Typography variant="h4" component="h4">
                            Nossas soluções
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {cardItens.map((objetor, index) => {
                        let component = (
                            <Grid item xs={3} key={index} className="solutionsItens">
                                <Card className="cardPromo" variant="outlined">
                                    <div className="avatarCarnder">
                                        <Avatar>
                                            {objetor.icon}
                                        </Avatar>
                                    </div>
                                    <CardContent>
                                        <div className="contentPromo">
                                            <p>
                                                {objetor.title}
                                            </p>
                                            <p>
                                                {objetor.description}
                                            </p>
                                            <ul>
                                                {objetor.features.map((x, i) => {
                                                    let component = (
                                                        <li>{x.name}</li>
                                                    );
                                                    return component;
                                                })}
                                            </ul> 
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Button variant="outlined" className="btnNamed">
                                            <Typography>
                                                Ver solução
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                        return component;
                    })}
                </Grid>
            </Container>
        </Box>
    )
}