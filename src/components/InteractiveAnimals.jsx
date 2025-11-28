import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const InteractiveAnimals = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate pupil position based on the STATIC eye background (sclera)
    const calculatePupilPosition = (scleraRef, scleraRadius, pupilRadius) => {
        if (!scleraRef.current) return { x: 0, y: 0 };

        const scleraRect = scleraRef.current.getBoundingClientRect();
        const eyeCenterX = scleraRect.left + scleraRect.width / 2;
        const eyeCenterY = scleraRect.top + scleraRect.height / 2;

        const dx = mousePos.x - eyeCenterX;
        const dy = mousePos.y - eyeCenterY;
        const angle = Math.atan2(dy, dx);

        // Max distance the pupil can move from center
        const maxDistance = scleraRadius - pupilRadius - 1; // -1 for padding

        // Current distance to mouse
        const mouseDistance = Math.hypot(dx, dy);

        // Limit movement to within the eye
        const moveDistance = Math.min(mouseDistance / 15, maxDistance); // /15 to dampen the speed/range slightly

        return {
            x: Math.cos(angle) * moveDistance,
            y: Math.sin(angle) * moveDistance,
        };
    };

    const Cat = () => {
        const leftScleraRef = useRef(null);
        const rightScleraRef = useRef(null);

        const scleraRadius = 12;
        const pupilRadius = 5;

        const leftPupilPos = calculatePupilPosition(leftScleraRef, scleraRadius, pupilRadius);
        const rightPupilPos = calculatePupilPosition(rightScleraRef, scleraRadius, pupilRadius);

        return (
            <svg width="140" height="140" viewBox="0 0 120 120">
                {/* Ears */}
                <path d="M30 40 L10 10 L50 30 Z" fill="#333" />
                <path d="M90 40 L110 10 L70 30 Z" fill="#333" />

                {/* Head */}
                <circle cx="60" cy="70" r="45" fill="#333" />

                {/* Eyes Background (Sclera) */}
                <circle ref={leftScleraRef} cx="42" cy="65" r={scleraRadius} fill="white" />
                <circle ref={rightScleraRef} cx="78" cy="65" r={scleraRadius} fill="white" />

                {/* Pupils */}
                <circle
                    cx={42 + leftPupilPos.x}
                    cy={65 + leftPupilPos.y}
                    r={pupilRadius}
                    fill="black"
                />
                <circle
                    cx={78 + rightPupilPos.x}
                    cy={65 + rightPupilPos.y}
                    r={pupilRadius}
                    fill="black"
                />

                {/* Nose */}
                <path d="M56 80 L64 80 L60 86 Z" fill="pink" />

                {/* Mouth */}
                <path d="M60 86 Q50 96 45 90" stroke="white" fill="none" strokeWidth="2" />
                <path d="M60 86 Q70 96 75 90" stroke="white" fill="none" strokeWidth="2" />
            </svg>
        );
    };

    const Dog = () => {
        const leftScleraRef = useRef(null);
        const rightScleraRef = useRef(null);

        const scleraRadius = 11;
        const pupilRadius = 4.5;

        const leftPupilPos = calculatePupilPosition(leftScleraRef, scleraRadius, pupilRadius);
        const rightPupilPos = calculatePupilPosition(rightScleraRef, scleraRadius, pupilRadius);

        return (
            <svg width="140" height="140" viewBox="0 0 120 120">
                {/* Ears */}
                <path d="M15 50 Q5 90 30 90" fill="#8b5a2b" />
                <path d="M105 50 Q115 90 90 90" fill="#8b5a2b" />

                {/* Head */}
                <circle cx="60" cy="70" r="42" fill="#d2b48c" />

                {/* Eyes Background (Sclera) */}
                <circle ref={leftScleraRef} cx="42" cy="65" r={scleraRadius} fill="white" />
                <circle ref={rightScleraRef} cx="78" cy="65" r={scleraRadius} fill="white" />

                {/* Pupils */}
                <circle
                    cx={42 + leftPupilPos.x}
                    cy={65 + leftPupilPos.y}
                    r={pupilRadius}
                    fill="black"
                />
                <circle
                    cx={78 + rightPupilPos.x}
                    cy={65 + rightPupilPos.y}
                    r={pupilRadius}
                    fill="black"
                />

                {/* Nose */}
                <circle cx="60" cy="80" r="6" fill="#3e2723" />

                {/* Mouth */}
                <path d="M60 86 Q50 94 50 88" stroke="#3e2723" fill="none" strokeWidth="2" />
                <path d="M60 86 Q70 94 70 88" stroke="#3e2723" fill="none" strokeWidth="2" />
            </svg>
        );
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 6,
                mt: 8,
                mb: 4,
                opacity: 1,
                pointerEvents: 'none'
            }}
        >
            <Cat />
            <Dog />
        </Box>
    );
};

export default InteractiveAnimals;
