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
                    Feliz cumpleaños
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
                    Sammy
                </Typography>

                <Divider sx={{ mb: 4, borderColor: 'secondary.main', opacity: 0.3 }} />

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 2, color: 'text.secondary' }}>
                    ¡Hola mi <Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>amor</Box>!
                    Hoy es tu <Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>cumpleaños</Box>,
                    y quería dedicarte unas palabras especiales. Sé que aprecias los detalles, así que decidí
                    expresarlo de una manera diferente, con esta página web.
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 2, color: 'text.secondary' }}>
                    Mi intención es recordarte lo{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>importante</Box> que eres para mí.
                    Si hubo momentos de silencio durante nuestra llamada, no fue por falta de amor o palabras,
                    sino porque me preocupaba pensar que pudiera lastimarte. Me afecta pensar que lastimo a las
                    personas que quiero, y lo que menos quiero es causarte dolor.
                </Typography>

                <Typography variant="body1" sx={{ mb: 5, lineHeight: 2, color: 'text.secondary' }}>
                    Ya te he dado un regalo, pero además, he preparado algunos{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>mini juegos</Box> para entretenerte.
                    ¡Cuando llegues al final, quiero saberlo! No quiero que hagas trampa inspeccionando el código,
                    confío en que serás honesta. No estoy levantando un servidor para ocultar las respuestas, así que,
                    cuando estés lista, presiona el botón de abajo.
                </Typography>

                <Box
                    component="img"
                    src="/assets/2023/landing_image.jpg"
                    alt="Imagen de inicio"
                    sx={{
                        width: '100%',
                        maxWidth: 450,
                        height: 'auto',
                        mb: 5,
                        mx: 'auto',
                        display: 'block',
                        filter: 'grayscale(10%) contrast(1.05)',
                    }}
                />

                <Divider sx={{ mb: 4, borderColor: 'secondary.main', opacity: 0.3 }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={onStart}
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
                        Iniciar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default LandingPage;
