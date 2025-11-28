import { Container, Typography, Box, Button, Paper, Divider } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

function LandingPage({ onStart }) {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 4, md: 6 },
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: 300,
                        textAlign: 'center',
                        mb: 1,
                        color: 'text.primary',
                        letterSpacing: '0.05em',
                    }}
                >
                    Bienvenida al 2025
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 300,
                        textAlign: 'center',
                        mb: 4,
                        color: 'secondary.main',
                    }}
                >
                    Nuevas Aventuras
                </Typography>

                <Divider sx={{ mb: 4, borderColor: 'secondary.main', opacity: 0.3 }} />

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 2, color: 'text.secondary' }}>
                    ¡Hola de nuevo mi <Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>amor</Box>!
                    Para este año 2025, he preparado nuevos desafíos para ti. Sé que te gustan los retos mentales,
                    así que espero que disfrutes de estos pequeños juegos que he programado con mucho cariño.
                </Typography>

                <Typography variant="body1" sx={{ mb: 5, lineHeight: 2, color: 'text.secondary' }}>
                    Tendrás que superar 3 pruebas: un juego de palabras, un desafío de lógica y un acertijo final.
                    ¿Estás lista para demostrar tu ingenio una vez más?
                </Typography>

                <Box
                    component="img"
                    src="/assets/2025/IMG_20251012_091916.jpg"
                    alt="Imagen de inicio"
                    sx={{
                        width: '100%',
                        maxWidth: 450,
                        height: 'auto',
                        mb: 5,
                        mx: 'auto',
                        display: 'block',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                />

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={onStart}
                        startIcon={<PlayArrow />}
                        sx={{
                            fontSize: '0.75rem',
                            px: 6,
                            py: 1.5,
                            borderColor: 'text.primary',
                            color: 'text.primary',
                            letterSpacing: '0.15em',
                            '&:hover': {
                                borderColor: 'secondary.main',
                                backgroundColor: 'secondary.main',
                                color: 'white',
                            }
                        }}
                    >
                        Comenzar Aventura
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default LandingPage;
