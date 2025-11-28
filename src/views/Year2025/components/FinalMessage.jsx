import { Container, Typography, Box, Paper, Alert } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function FinalMessage() {
    const { width, height } = useWindowSize();

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                gravity={0.2}
            />
            <Paper
                elevation={0}
                sx={{
                    p: 6,
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'secondary.main',
                    backgroundColor: '#fffdf9'
                }}
            >
                <Favorite sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />

                <Typography variant="h3" gutterBottom sx={{ fontWeight: 300, color: 'text.primary' }}>
                    ¡Felicidades mi amor!
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mb: 4, color: 'secondary.main', fontStyle: 'italic' }}>
                    Has completado todos los desafíos del 2025
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                    Mi amor,
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                    Sé que últimamente hemos tenido menos tiempo para vernos, y que el próximo año probablemente será aún más difícil coincidir. Aun así, quiero que sepas que <Box component="span" sx={{ color: 'success.main', fontWeight: 600 }}>mi cariño por ti no disminuye</Box>; al contrario, <Box component="span" sx={{ color: 'warning.main', fontWeight: 600 }}>cada día crece más</Box>. Me encanta tenerte en mi vida, y por eso mismo me adapto a ti, a tus horarios, a tus responsabilidades, porque para mí <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>cada momento contigo vale la pena</Box>. Adoro con todo el corazon la idea de almorzar juntos a la 1, después de mis clases y cuando tú sales de trabajar. <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>Te amo, mi ingeniera</Box>.
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                    Me llena de alegría recordar todo lo que hemos vivido este año: <Box component="span" sx={{ color: 'info.main', fontWeight: 600 }}>nuestras visitas a los hostales</Box>, las personas que conocimos en el camino, todas las experiencias que compartimos. No pudimos ir al zoológico, es cierto, pero <Box component="span" sx={{ color: 'success.main', fontWeight: 600 }}>iremos el próximo año</Box>. También está pendiente el viaje a Decameron, la playa y tantas otras cosas que aún nos esperan. Todo eso me ilusiona, porque quiero seguir construyendo recuerdos a tu lado. <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>Te amo demasiado, hermosa</Box>.
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right', mt: 4 }}>
                    Con todo mi cariño,<br />
                    Mi niña hermosa, siempre tuyo.
                </Typography>

                <Box sx={{ mt: 6 }}>
                    <Alert severity="success" icon={<Favorite fontSize="inherit" />} sx={{ justifyContent: 'center' }}>
                        Te amo muchísimo, Sammy.
                    </Alert>
                </Box>
            </Paper>
        </Container>
    );
}

export default FinalMessage;
