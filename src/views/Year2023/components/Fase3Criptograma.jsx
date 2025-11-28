import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Alert,
    Paper
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function Fase3Criptograma({ onComplete, errorMessage }) {
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onComplete(password.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
                Criptograma
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Me gusta mucho este tema, la idea de hacer un criptograma, y como usan la matematica para que
                se oculten mensajes, una forma muy simple de encriptar algo es cambiando letras, por ejemplo,
                decir que la a es una x, entonces HOLA seria HOLX, obviemante esto no es algo eficiente, pero
                ya es una forma de encriptar.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
                De cualquier manera, haremos un juego asi, si adivinas la contraseña, te woa dar una clave SHA256
                para que obtengas un texto, a un documento
            </Typography>

            <Paper elevation={3} sx={{ p: 3, mb: 3, backgroundColor: 'grey.100' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    FRASE: XMAENTUSI
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                    CONDICIONAL: n → u, a → t, t → ?, i → e, e → s, p → n, l → ?, u → m, s → i
                </Typography>
            </Paper>

            {errorMessage && (
                <Alert severity="error" sx={{ mb: 3 }}>
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
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    Una vez tengas la clave, ingresala aca abajo
                </Typography>
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

export default Fase3Criptograma;
