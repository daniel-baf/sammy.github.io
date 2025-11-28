import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Alert,
    List,
    ListItem,
    ListItemText,
    Grid,
    Paper
} from '@mui/material';
import { Download, ArrowForward } from '@mui/icons-material';

function Fase1Crucigrama({ onComplete, errorMessage }) {
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onComplete(password.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const horizontales = [
        '1. Nombre de un baboso',
        '2. Nombre de una persona que te estresa',
        '3. Una ridícula de 3 sonrisas lindas',
        '4. Té aromático originario de la India',
        '5. Si fuera una persona, sería rosa, de pecas y con el pelo pintado',
    ];

    const verticales = [
        '1. Fibra suave, a menudo cara, que se puede encontrar como nombre de algunos lácteos',
        '2. Fecha especial en septiembre, en la que por primera vez me abrí contigo y te prometí hacerlo más',
        '3. Gigante prehistórico, antes era temido, ahora entra en la palma de nuestra mano',
        '4. Es un pan / emparedado que te gusta, y en su nombre lleva una pieza de ajedrez',
        '5. Me gusta llamarte de esa manera, no sé si lo sepas, pero es mi sobrenombre favorito',
    ];

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
                Crucigrama
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
                Tengo sueño, y buscar un api para renderizar un crucigrama lo veo complica'o, hay que descargarlo :p
            </Typography>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Button
                    variant="contained"
                    color="info"
                    startIcon={<Download />}
                    href="/assets/2023/fase1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Descargar crucigrama
                </Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 6 }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 400, color: 'secondary.main', mb: 3 }}>
                            Horizontales
                        </Typography>
                        <List dense>
                            {horizontales.map((pista, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={pista}
                                        primaryTypographyProps={{
                                            variant: 'body1',
                                            color: 'text.secondary',
                                            sx: { mb: 1 }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 400, color: 'secondary.main', mb: 3 }}>
                            Verticales
                        </Typography>
                        <List dense>
                            {verticales.map((pista, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={pista}
                                        primaryTypographyProps={{
                                            variant: 'body1',
                                            color: 'text.secondary',
                                            sx: { mb: 1 }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            {errorMessage && (
                <Alert severity="error" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
                    {errorMessage}
                </Alert>
            )}

            <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
                <Typography variant="body1" gutterBottom sx={{ mb: 2, color: 'text.secondary' }}>
                    Introduce la contraseña:
                </Typography>
                <TextField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 3 }}
                    placeholder="Escribe aquí..."
                />
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={handleSubmit}
                    fullWidth
                    sx={{
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1rem'
                    }}
                >
                    Continuar
                </Button>
            </Box>
        </Container>
    );
}

export default Fase1Crucigrama;
