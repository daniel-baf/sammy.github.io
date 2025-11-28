import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Paper, Grid, Alert } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function Fase1Wordle({ onComplete }) {
    const TARGET_WORD = "HOSTALES";
    const WORD_LENGTH = 8;
    const MAX_ATTEMPTS = 6;

    const [attempts, setAttempts] = useState([]);
    const [currentAttempt, setCurrentAttempt] = useState('');
    const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost
    const [message, setMessage] = useState('');

    const handleKeyPress = (key) => {
        if (gameStatus !== 'playing') return;

        if (key === 'ENTER') {
            if (currentAttempt.length !== WORD_LENGTH) {
                setMessage('La palabra debe tener 8 letras');
                return;
            }

            const newAttempts = [...attempts, currentAttempt];
            setAttempts(newAttempts);
            setCurrentAttempt('');
            setMessage('');

            if (currentAttempt === TARGET_WORD) {
                setGameStatus('won');
            } else if (newAttempts.length >= MAX_ATTEMPTS) {
                setGameStatus('lost');
                setMessage(`La palabra era: ${TARGET_WORD}`);
            }
        } else if (key === 'BACKSPACE') {
            setCurrentAttempt(prev => prev.slice(0, -1));
            setMessage('');
        } else {
            if (currentAttempt.length < WORD_LENGTH) {
                setCurrentAttempt(prev => prev + key);
            }
        }
    };

    // Physical keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameStatus !== 'playing') return;

            const key = e.key.toUpperCase();
            if (key === 'ENTER') {
                handleKeyPress('ENTER');
            } else if (key === 'BACKSPACE') {
                handleKeyPress('BACKSPACE');
            } else if (/^[A-Z]$/.test(key)) {
                handleKeyPress(key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentAttempt, attempts, gameStatus]);

    const getLetterColor = (letter, index, attempt) => {
        if (attempt[index] === TARGET_WORD[index]) return '#6aaa64'; // Green
        if (TARGET_WORD.includes(letter)) return '#c9b458'; // Yellow
        return '#787c7e'; // Grey
    };

    const renderGrid = () => {
        const rows = [];
        for (let i = 0; i < MAX_ATTEMPTS; i++) {
            const isCurrentRow = i === attempts.length;
            const attempt = attempts[i] || (isCurrentRow ? currentAttempt : '');
            const cells = [];

            for (let j = 0; j < WORD_LENGTH; j++) {
                const letter = attempt[j] || '';
                let backgroundColor = 'white';
                let borderColor = '#d3d6da';
                let color = 'black';

                if (i < attempts.length) {
                    backgroundColor = getLetterColor(letter, j, attempts[i]);
                    borderColor = backgroundColor;
                    color = 'white';
                } else if (letter) {
                    borderColor = '#878a8c';
                }

                cells.push(
                    <Box
                        key={j}
                        sx={{
                            width: { xs: 30, sm: 40 },
                            height: { xs: 30, sm: 40 },
                            border: '2px solid',
                            borderColor,
                            backgroundColor,
                            color,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 'bold',
                            m: 0.5,
                        }}
                    >
                        {letter}
                    </Box>
                );
            }
            rows.push(
                <Box key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {cells}
                </Box>
            );
        }
        return rows;
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, color: 'secondary.main' }}>
                    Wordle
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                    Adivina la palabra de 8 letras.
                    <br />
                    <Box component="span" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                        Tip: "UN VIAJE CON SU AMORCITO"
                    </Box>
                </Typography>

                <Box sx={{ mb: 4 }}>
                    {renderGrid()}
                </Box>

                {message && (
                    <Alert severity={gameStatus === 'lost' ? 'error' : 'info'} sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
                        {message}
                    </Alert>
                )}

                {gameStatus === 'won' && (
                    <Box sx={{ mt: 2 }}>
                        <Alert severity="success" sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
                            ¡Correcto! La palabra era HOSTALES.
                        </Alert>
                        <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<ArrowForward />}
                            onClick={onComplete}
                        >
                            Siguiente Fase
                        </Button>
                    </Box>
                )}

                {gameStatus === 'lost' && (
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            setAttempts([]);
                            setCurrentAttempt('');
                            setGameStatus('playing');
                            setMessage('');
                        }}
                        sx={{ mt: 2 }}
                    >
                        Intentar de nuevo
                    </Button>
                )}
            </Paper>
        </Container>
    );
}

export default Fase1Wordle;
