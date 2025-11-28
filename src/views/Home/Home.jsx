import { Container, Grid, Card, CardContent, Typography, Button, Box, Grow, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite, CalendarToday, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import InteractiveAnimals from '../../components/InteractiveAnimals';

function Home() {
    const navigate = useNavigate();

    const years = [
        {
            year: 2023,
            title: '2023',
            subtitle: 'El comienzo',
            description: 'Donde todo empezó',
            path: '/2023',
        },
        {
            year: 2025,
            title: '2025',
            subtitle: 'Nuevas aventuras',
            description: 'Lo que está por venir',
            path: '/2025',
        },
        {
            year: 2026,
            title: '2026',
            subtitle: 'El Futuro',
            description: 'Próximamente...',
            path: '/2026',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    alignItems: 'center',
                    py: 10,
                }}
            >
                <Container maxWidth="md">
                    <Fade in timeout={800}>
                        <Box sx={{ textAlign: 'center', mb: 10 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    fontWeight: 300,
                                    mb: 2,
                                    color: 'text.primary',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Para mi Sammy
                            </Typography>
                            <Box
                                sx={{
                                    width: 60,
                                    height: 2,
                                    backgroundColor: 'secondary.main',
                                    mx: 'auto',
                                    my: 3,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 300,
                                    fontSize: '1.1rem',
                                }}
                            >
                                Cada año, una nueva historia
                            </Typography>
                        </Box>
                    </Fade>

                    <Grid container spacing={4} justifyContent="center">
                        {years.map((item, index) => (
                            <Grid item xs={12} md={4} key={item.year}>
                                <Grow in timeout={1000 + index * 200}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: item.disabled ? 'default' : 'pointer',
                                            backgroundColor: 'white',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            opacity: item.disabled ? 0.7 : 1,
                                            '&:hover': !item.disabled ? {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                                                borderColor: 'secondary.main',
                                            } : {},
                                        }}
                                        onClick={() => !item.disabled && navigate(item.path)}
                                    >
                                        <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 6, px: 4 }}>
                                            <Typography
                                                variant="h3"
                                                gutterBottom
                                                sx={{
                                                    fontWeight: 300,
                                                    mb: 2,
                                                    color: 'text.primary',
                                                    letterSpacing: '0.1em',
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 1,
                                                    backgroundColor: 'secondary.main',
                                                    mx: 'auto',
                                                    my: 2,
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                                sx={{
                                                    fontWeight: 400,
                                                    mb: 1,
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    mb: 4,
                                                    fontSize: '0.95rem',
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                disabled={item.disabled}
                                                sx={{
                                                    borderColor: 'text.primary',
                                                    color: 'text.primary',
                                                    px: 4,
                                                    py: 1,
                                                    fontSize: '0.75rem',
                                                    '&:hover': {
                                                        borderColor: 'secondary.main',
                                                        backgroundColor: 'secondary.main',
                                                        color: 'white',
                                                    },
                                                    '&.Mui-disabled': {
                                                        borderColor: 'text.disabled',
                                                        color: 'text.disabled',
                                                    }
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!item.disabled) navigate(item.path);
                                                }}
                                            >
                                                {item.disabled ? 'Próximamente' : 'Explorar'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grow>
                            </Grid>
                        ))}
                    </Grid>

                    <InteractiveAnimals />
                </Container>
            </Box>
        </motion.div>
    );
}

export default Home;
