import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const TimeUnit = ({ value, label }) => (
    <Paper
        elevation={0}
        component={motion.div}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            minWidth: { xs: 70, sm: 100 },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
        }}
    >
        <AnimatePresence mode="popLayout">
            <motion.div
                key={value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        fontWeight: 300,
                        color: 'primary.main',
                        fontSize: { xs: '2rem', sm: '3.5rem' },
                    }}
                >
                    {String(value).padStart(2, '0')}
                </Typography>
            </motion.div>
        </AnimatePresence>
        <Typography
            variant="caption"
            sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'text.secondary',
                mt: 1,
            }}
        >
            {label}
        </Typography>
    </Paper>
);

const CountdownClock = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <Box
            sx={{
                display: 'flex',
                gap: { xs: 1, sm: 3 },
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}
        >
            <TimeUnit value={timeLeft.days} label="Días" />
            <TimeUnit value={timeLeft.hours} label="Horas" />
            <TimeUnit value={timeLeft.minutes} label="Minutos" />
            <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </Box>
    );
};

export default CountdownClock;
