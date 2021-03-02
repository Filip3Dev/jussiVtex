import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
    Input,
    Button,
    FormControl,
    InputAdornment
} from '@material-ui/core';
import '../styles/index.sass';

export default function Newsletter() {

    const [values, setValues] = React.useState({
        email: '',
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Box className="newsletterJucci">
            <Container>
                <Grid container spacing={2} className="newsletterCenter">
                    <Grid item xs={12} className="newsletterTitle">
                        <Typography variant="h4" component="h4">
                            receba novidades da nossa área de produtos digitais.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="newsletterForm">
                        <FormControl fullWidth>
                            <Input id="standard-email" placeholder="Digite seu e-mail"
                                value={values.email} onChange={handleChange('email')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button>Cadastrar</Button>
                                    </InputAdornment>
                                }
                            >
                            </Input>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}