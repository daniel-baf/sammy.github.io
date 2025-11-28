import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Paper, Grid, Alert } from '@mui/material';
import { ArrowForward, Refresh, Flag } from '@mui/icons-material';

function Fase2Buscaminas({ onComplete }) {
    const GRID_SIZE = 8;
    const NUM_MINES = 10;

    const [grid, setGrid] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [flagMode, setFlagMode] = useState(false);

    useEffect(() => {
        initializeGrid();
    }, []);

    const initializeGrid = () => {
        // Create empty grid
        let newGrid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill({
            isMine: false,
            isRevealed: false,
            isFlagged: false,
            neighborCount: 0
        }));

        // Place mines
        let minesPlaced = 0;
        while (minesPlaced < NUM_MINES) {
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * GRID_SIZE);
            if (!newGrid[row][col].isMine) {
                newGrid[row][col] = { ...newGrid[row][col], isMine: true };
                minesPlaced++;
            }
        }

        // Calculate neighbor counts
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (!newGrid[r][c].isMine) {
                    let count = 0;
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            if (r + i >= 0 && r + i < GRID_SIZE && c + j >= 0 && c + j < GRID_SIZE) {
                                if (newGrid[r + i][c + j].isMine) count++;
                            }
                        }
                    }
                    newGrid[r][c] = { ...newGrid[r][c], neighborCount: count };
                }
            }
        }

        setGrid(newGrid);
        setGameOver(false);
        setGameWon(false);
    };

    const handleCellClick = (row, col) => {
        if (gameOver || gameWon || grid[row][col].isRevealed) return;

        if (flagMode) {
            toggleFlag(row, col);
            return;
        }

        if (grid[row][col].isFlagged) return;

        const newGrid = [...grid.map(row => [...row])];

        if (newGrid[row][col].isMine) {
            revealAllMines(newGrid);
            setGameOver(true);
        } else {
            revealCell(newGrid, row, col);
            checkWin(newGrid);
        }
        setGrid(newGrid);
    };

    const toggleFlag = (row, col) => {
        if (grid[row][col].isRevealed) return;
        const newGrid = [...grid.map(row => [...row])];
        newGrid[row][col] = { ...newGrid[row][col], isFlagged: !newGrid[row][col].isFlagged };
        setGrid(newGrid);
    };

    const revealCell = (currentGrid, row, col) => {
        if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE || currentGrid[row][col].isRevealed || currentGrid[row][col].isFlagged) return;

        currentGrid[row][col].isRevealed = true;

        if (currentGrid[row][col].neighborCount === 0) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    revealCell(currentGrid, row + i, col + j);
                }
            }
        }
    };

    const revealAllMines = (currentGrid) => {
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (currentGrid[r][c].isMine) {
                    currentGrid[r][c].isRevealed = true;
                }
            }
        }
    };

    const checkWin = (currentGrid) => {
        let unrevealedSafeCells = 0;
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (!currentGrid[r][c].isMine && !currentGrid[r][c].isRevealed) {
                    unrevealedSafeCells++;
                }
            }
        }
        if (unrevealedSafeCells === 0) {
            setGameWon(true);
        }
    };

    const getCellColor = (cell) => {
        if (!cell.isRevealed) return '#e0e0e0';
        if (cell.isMine) return '#ef5350';
        return '#ffffff';
    };

    const getTextColor = (count) => {
        const colors = ['transparent', '#1976d2', '#388e3c', '#d32f2f', '#7b1fa2', '#ff8f00', '#0097a7', '#424242', '#212121'];
        return colors[count] || 'black';
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, color: 'secondary.main' }}>
                    Buscaminas
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                    Despeja el campo sin detonar ninguna mina.
                    <br />
                    <Box component="span" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                        Tip: Tienes intentos infinitos.
                    </Box>
                </Typography>

                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                        variant={flagMode ? "contained" : "outlined"}
                        color="secondary"
                        startIcon={<Flag />}
                        onClick={() => setFlagMode(!flagMode)}
                    >
                        {flagMode ? "Modo Bandera: ON" : "Modo Bandera: OFF"}
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Refresh />}
                        onClick={initializeGrid}
                    >
                        Reiniciar
                    </Button>
                    <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={onComplete}
                        sx={{ opacity: 0.5 }}
                    >
                        Saltar (Debug)
                    </Button>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gap: 0.5,
                    maxWidth: 400,
                    mx: 'auto',
                    mb: 4,
                    p: 1,
                    backgroundColor: '#eeeeee',
                    borderRadius: 1
                }}>
                    {grid.map((row, rIndex) => (
                        row.map((cell, cIndex) => (
                            <Box
                                key={`${rIndex}-${cIndex}`}
                                onClick={() => handleCellClick(rIndex, cIndex)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    toggleFlag(rIndex, cIndex);
                                }}
                                sx={{
                                    aspectRatio: '1/1',
                                    backgroundColor: getCellColor(cell),
                                    border: '1px solid #bdbdbd',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    color: cell.isRevealed && !cell.isMine ? getTextColor(cell.neighborCount) : 'black',
                                    '&:hover': {
                                        filter: 'brightness(0.9)',
                                    }
                                }}
                            >
                                {cell.isFlagged && !cell.isRevealed && <Flag sx={{ fontSize: '1rem', color: 'error.main' }} />}
                                {cell.isRevealed && cell.isMine && '💣'}
                                {cell.isRevealed && !cell.isMine && cell.neighborCount > 0 && cell.neighborCount}
                            </Box>
                        ))
                    ))}
                </Box>

                {gameOver && (
                    <Alert severity="error" sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
                        ¡Boom! Has perdido. Inténtalo de nuevo.
                    </Alert>
                )}

                {gameWon && (
                    <Box sx={{ mt: 2 }}>
                        <Alert severity="success" sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
                            ¡Felicidades! Has despejado el campo.
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
            </Paper>
        </Container>
    );
}

export default Fase2Buscaminas;
