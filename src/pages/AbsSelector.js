import { Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultAbsImage from '../assets/default-abs.png';
import selectedAbs1Image from '../assets/epigastrium-highlight.png';
import selectedAbs2Image from '../assets/llq-highlight.png';
import selectedAbs3Image from '../assets/luq-highlight.png';
import selectedAbs4Image from '../assets/rlq-highlight.png';
import selectedAbs5Image from '../assets/ruq-highlight.png';
import selectedAbs6Image from '../assets/suprapubic-highlight.png';
import selectedAbs7Image from '../assets/umbilicus-highlight.png';
import selectedAbs8Image from '../assets/all-over-highlight.png';

import React, { useState, useRef } from 'react';
import './AbsSelector.css';

const AbsPainSelector = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/home');
    };

    const [activeImage, setActiveImage] = useState(null);
    const absImageRef = useRef(null);

    const positions = [
        { id: 1, set: 1, top: 215, left: 211.5, width: 58, height: 55 },
        { id: 2, set: 2, top: 252, left: 270, width: 55, height: 60 },
        { id: 3, set: 3, top: 320, left: 270, width: 55, height: 60 },
        { id: 4, set: 4, top: 355, left: 218, width: 48, height: 50 },
        { id: 5, set: 5, top: 322, left: 157, width: 53, height: 60 },
        { id: 6, set: 6, top: 252, left: 157, width: 53, height: 60 },
        { id: 7, set: 7, top: 295, left: 219, width: 45, height: 45 },
        { id: 8, set: 8, top: 525, left: 157, width: 165, height: 50 },
    ];

    const getImageForSet = (set) => {
        switch (set) {
            case 1:
                return selectedAbs1Image;
            case 2:
                return selectedAbs3Image;
            case 3:
                return selectedAbs2Image;
            case 4:
                return selectedAbs6Image;
            case 5:
                return selectedAbs4Image;
            case 6:
                return selectedAbs5Image;
            case 7:
                return selectedAbs7Image;
            case 8:
                return selectedAbs8Image;
            default:
                return null;
        }
    };

    const handlePositionClick = (e) => {
        const rect = absImageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const clickedPosition = positions.find(pos =>
            x >= pos.left &&
            x <= pos.left + pos.width &&
            y >= pos.top &&
            y <= pos.top + pos.height
        );

        if (clickedPosition) {
            const image = getImageForSet(clickedPosition.set);
            if (image !== activeImage) {
                setActiveImage(image);
            }
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="App">
                    <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
                    <Card style={{
                        maxWidth: 500,
                        margin: '20px auto',
                        fontFamily: 'Kanit',
                        borderRadius: 15,
                        textAlign: 'center',
                        padding: '20px',
                        fontSize: 25,
                        position: 'relative'
                    }}>
                        <div className="card-header" style={{ marginBottom: '20px' }}>
                            จุดไหนที่คุณปวดหน้าท้องมากที่สุด ?
                        </div>
                        <div className="abs-image-container" onClick={handlePositionClick} ref={absImageRef}>
                            <CardMedia
                                component="img"
                                height="600"
                                image={defaultAbsImage}
                                alt="Default Abs"
                                style={{ width: '100%', position: 'relative' }}
                            />
                            {activeImage && (
                                <div
                                    className="selected-image-overlay"
                                    style={{
                                        backgroundImage: `url(${activeImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1,
                                        pointerEvents: 'none'
                                    }}
                                />
                            )}
                        </div>
                    </Card>
                    <div style={{
                        maxWidth: 540,
                        margin: '20px auto',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        <button style={{
                            width: '100%',
                            fontFamily: 'Kanit',
                            backgroundColor: '#e0e0e0',
                            border: 'none',
                            color: '#b0b0b0',
                            padding: '15px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: 20,
                            borderRadius: 15,
                            cursor: 'pointer',
                        }}>
                            ต่อไป
                        </button>
                    </div>
                    <div style={{
                        maxWidth: 540,
                        margin: '20px auto',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        <button onClick={handleBackButtonClick} style={{
                            width: '100%',
                            fontFamily: 'Kanit',
                            backgroundColor: '#6db3ff',
                            border: 'none',
                            color: '#000000',
                            padding: '15px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: 20,
                            borderRadius: 15,
                            cursor: 'pointer',
                        }}>
                            ย้อนกลับ
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default AbsPainSelector;
