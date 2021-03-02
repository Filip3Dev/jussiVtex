import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';
import '../styles/index.sass';

export default function Hero() {

    const menuItems = [
        { image: 'https://ik.imagekit.io/abkvohwfl/logo-brastemp_1CRIXg6Bn.png' },
        { image: 'https://ik.imagekit.io/abkvohwfl/logo-compra_bJ7Sn3RR3.png' },
        { image: 'https://ik.imagekit.io/abkvohwfl/logo-consul_gCFkko0Er.png' },
        { image: 'https://ik.imagekit.io/abkvohwfl/logo-thebar_LCtetg2S_.png' },
    ];

    return (
        <Box className="storesJucci">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3} className="textGridStore">
                        <Box className="">
                            <Typography>
                                Nossas principais lojas VTEX &nbsp;&nbsp; →
                            </Typography>
                        </Box>
                    </Grid>
                    {menuItems.map((menuItem, index) => {
                        let component = (
                            <Grid item xs={2} key={index} className="tradeMarksStore">
                                <Grid container className="">
                                    <img src={menuItem.image} />
                                </Grid>
                            </Grid>
                        )
                        return component;
                    })}
                </Grid>
            </Container>
        </Box>
    )
}