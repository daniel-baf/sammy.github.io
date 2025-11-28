import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Alert
} from '@mui/material';
import { Download, ArrowForward } from '@mui/icons-material';

function Fase2Sudoku({ onComplete, errorMessage }) {
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        onComplete(date);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
                ¿Sudoku?
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Ahora, como me di cuenta que te gustan los sudokus, a cada momento te veo resolviendo uno,
                pos te toca resolver uno, espeeeero que valore que yo hice todo esto, asi que minimo un mi besito, preciosa.{' '}
                <Box component="span" sx={{ backgroundColor: 'warning.light', px: 0.5 }}>
                    Igual que en la anterior,
                </Box>{' '}
                hay{' '}
                <Box component="span" sx={{ backgroundColor: 'info.light', px: 0.5 }}>
                    3 celdas en otro color,
                </Box>{' '}
                con esa celda formarás una fecha, y esa es la contraseña, la fecha que debes seleccionar para pasar a la fase 3.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
                En esa fecha, para mí, es una importante, fué la primera vez que me sinceré y te conté cosas mías, te quiero.{' '}
                <Box component="span" sx={{ backgroundColor: 'success.light', px: 0.5 }}>
                    (Fin del mensaje)
                </Box>
            </Typography>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Button
                    variant="contained"
                    color="info"
                    startIcon={<Download />}
                    href="/assets/2023/fase2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Descargar Sudoku
                </Button>
            </Box>

            {errorMessage && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {errorMessage}
                </Alert>
            )}

            <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
                <Typography variant="body1" gutterBottom sx={{ mb: 2, color: 'text.secondary' }}>
                    Introduce la contraseña para la fase 2:
                </Typography>
                <TextField
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onKeyPress={handleKeyPress}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 3 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
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

export default Fase2Sudoku;
