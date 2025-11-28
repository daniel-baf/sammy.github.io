import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowBack, AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownClock from '../../components/CountdownClock';

function Year2026() {
    const navigate = useNavigate();
    const TARGET_DATE = '2026-11-29T00:00:00';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background decoration */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.05,
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #000 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        zIndex: 0,
                    }}
                />

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

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <AccessTime sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 300,
                                letterSpacing: '0.1em',
                                mb: 1,
                            }}
                        >
                            2026
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 300,
                                color: 'text.secondary',
                                mb: 8,
                                fontStyle: 'italic',
                            }}
                        >
                            El futuro nos espera
                        </Typography>
                    </motion.div>

                    <Box sx={{ mb: 8 }}>
                        <CountdownClock targetDate={TARGET_DATE} />
                    </Box>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.2rem',
                                color: 'text.secondary',
                                maxWidth: 600,
                                mx: 'auto',
                                lineHeight: 1.8,
                            }}
                        >
                            "El tiempo vuela, pero los recuerdos quedan. <br />
                            Nos vemos pronto para nuevas aventuras."
                        </Typography>
                    </motion.div>
                </Container>
            </Box>
        </motion.div>
    );
}

export default Year2026;
