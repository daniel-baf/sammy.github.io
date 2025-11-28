import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Fase1Wordle from './components/Fase1Wordle';
import Fase2Buscaminas from './components/Fase2Buscaminas';
import Fase3Password from './components/Fase3Password';
import FinalMessage from './components/FinalMessage';

function Year2025() {
    const navigate = useNavigate();
    const [currentPhase, setCurrentPhase] = useState('landing');

    const handleStart = () => setCurrentPhase('fase1');
    const handleFase1Complete = () => setCurrentPhase('fase2');
    const handleFase2Complete = () => setCurrentPhase('fase3');
    const handleFase3Complete = () => setCurrentPhase('final');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 4 }}>
                <IconButton
                    onClick={() => navigate('/')}
                    sx={{
                        position: 'fixed',
                        top: 16,
                        left: 16,
                        backgroundColor: 'white',
                        boxShadow: 1,
                        zIndex: 10,
                        '&:hover': {
                            backgroundColor: 'grey.100',
                        },
                    }}
                >
                    <ArrowBack />
                </IconButton>

                {currentPhase === 'landing' && <LandingPage onStart={handleStart} />}
                {currentPhase === 'fase1' && <Fase1Wordle onComplete={handleFase1Complete} />}
                {currentPhase === 'fase2' && <Fase2Buscaminas onComplete={handleFase2Complete} />}
                {currentPhase === 'fase3' && <Fase3Password onComplete={handleFase3Complete} />}
                {currentPhase === 'final' && <FinalMessage />}
            </Box>
        </motion.div>
    );
}

export default Year2025;
