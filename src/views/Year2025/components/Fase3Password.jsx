import { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Paper, Alert } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function Fase3Password({ onComplete }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (password.toLowerCase() === 'cheros') {
            onComplete();
        } else {
            setError('Contraseña incorrecta. Intenta de nuevo.');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, color: 'secondary.main' }}>
                    Fase Final
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Para desbloquear el mensaje final, necesitas una última clave.
                    <br />
                    <Box component="span" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                        Tip: "momento fav. segun mi amorcito este año"
                    </Box>
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 3, maxWidth: 400, mx: 'auto' }}>
                        {error}
                    </Alert>
                )}

                <Box sx={{ maxWidth: 400, mx: 'auto' }}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Contraseña"
                        variant="outlined"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError('');
                        }}
                        onKeyPress={handleKeyPress}
                        sx={{ mb: 3 }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<ArrowForward />}
                        onClick={handleSubmit}
                        sx={{ py: 1.5 }}
                    >
                        Ver Mensaje Final
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Fase3Password;
