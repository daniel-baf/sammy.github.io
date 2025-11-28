import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Fase1Crucigrama from './components/Fase1Crucigrama';
import Fase2Sudoku from './components/Fase2Sudoku';
import Fase3Criptograma from './components/Fase3Criptograma';
import FinalMessage from './components/FinalMessage';

function Year2023() {
    const navigate = useNavigate();
    const [phase, setPhase] = useState('landing');
    const [errorMessage, setErrorMessage] = useState('');

    const errorMessages = [
        "Estas bobita mi amor, ese valor no es correcto",
        "Te quiero Sam, pero tas mal",
        "Me woa ofender porque pusiste algo malo",
        "Cóooooomoooo, de verdad pusiste eso, potente",
        "La de contestar bien te la sabes?"
    ];

    const getRandomError = () => {
        const randomIndex = Math.floor(Math.random() * errorMessages.length);
        return errorMessages[randomIndex];
    };

    const handleStartEscapeRoom = () => {
        setPhase('fase1');
    };

    const handleFase1Complete = (password) => {
        if (password === 'hermosa') {
            setErrorMessage('');
            setPhase('fase2');
        } else {
            setErrorMessage(getRandomError());
        }
    };

    const handleFase2Complete = (date) => {
        if (date === '2023-09-12') {
            setErrorMessage('');
            setPhase('fase3');
        } else {
            setErrorMessage('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    };

    const handleFase3Complete = (password) => {
        if (password === 'tulipanes') {
            setErrorMessage('');
            setPhase('final');
        } else {
            setErrorMessage(getRandomError());
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa', py: 4 }}>
                <IconButton
                    onClick={() => navigate('/')}
                    sx={{
                        position: 'fixed',
                        top: 16,
                        left: 16,
                        backgroundColor: 'white',
                        boxShadow: 2,
                        zIndex: 10,
                        '&:hover': {
                            backgroundColor: 'grey.100',
                        },
                    }}
                >
                    <ArrowBack />
                </IconButton>

                {phase === 'landing' && <LandingPage onStart={handleStartEscapeRoom} />}
                {phase === 'fase1' && (
                    <Fase1Crucigrama onComplete={handleFase1Complete} errorMessage={errorMessage} />
                )}
                {phase === 'fase2' && (
                    <Fase2Sudoku onComplete={handleFase2Complete} errorMessage={errorMessage} />
                )}
                {phase === 'fase3' && (
                    <Fase3Criptograma onComplete={handleFase3Complete} errorMessage={errorMessage} />
                )}
                {phase === 'final' && <FinalMessage />}
            </Box>
        </motion.div>
    );
}

export default Year2023;
