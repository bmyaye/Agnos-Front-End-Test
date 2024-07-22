import { Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultFingerImage from '../assets/default-finger.png';
import selectedFinger1Image from '../assets/dip-highlight.png';
import selectedFinger2Image from '../assets/pip-highlight.png';
import selectedFinger3Image from '../assets/mcp-highlight.png';
import selectedFinger4Image from '../assets/others-highlight.png';

import captionFinger1Image from '../assets/dip-active.png';
import captionFinger2Image from '../assets/pip-active.png';
import captionFinger3Image from '../assets/mcp-active.png';

import React, { useState, useRef } from 'react';
import './FingerSelector.css';

const FingerSelector = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/home');
    };

    const [activeImages, setActiveImages] = useState([]);
    const fingerImageRef = useRef(null);

    const positions = [
        { id: 1, set: 1, top: 144, left: 100, width: 30, height: 22 },
        { id: 2, set: 1, top: 80, left: 162.5, width: 30, height: 20 },
        { id: 3, set: 1, top: 54, left: 216, width: 32, height: 20 },
        { id: 4, set: 1, top: 69, left: 278, width: 31.5, height: 20 },
        { id: 5, set: 2, top: 188, left: 128, width: 30, height: 22 },
        { id: 6, set: 2, top: 142, left: 165, width: 35, height: 22 },
        { id: 7, set: 2, top: 120, left: 220, width: 34, height: 22 },
        { id: 8, set: 2, top: 128, left: 276, width: 36, height: 23 },
        { id: 9, set: 2, top: 247, left: 384, width: 31, height: 23 },
        { id: 10, set: 3, top: 243, left: 135, width: 43, height: 28 },
        { id: 11, set: 3, top: 223, left: 177, width: 43, height: 28 },
        { id: 12, set: 3, top: 210, left: 222, width: 42, height: 28 },
        { id: 13, set: 3, top: 210, left: 270, width: 42, height: 28 },
        { id: 14, set: 3, top: 315, left: 342, width: 37, height: 28 },
        { id: 15, set: 4, top: 540, left: 68, width: 352, height: 50 },
    ];

    const getImagesForSet = (set) => {
        switch (set) {
            case 1:
                return [selectedFinger1Image, captionFinger1Image];
            case 2:
                return [selectedFinger2Image, captionFinger2Image];
            case 3:
                return [selectedFinger3Image, captionFinger3Image];
            case 4:
                return [selectedFinger4Image];
            default:
                return [];
        }
    };

    const handlePositionClick = (e) => {
        const rect = fingerImageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const clickedPosition = positions.find(pos =>
            x >= pos.left &&
            x <= pos.left + pos.width &&
            y >= pos.top &&
            y <= pos.top + pos.height
        );

        if (clickedPosition) {
            const images = getImagesForSet(clickedPosition.set);
            setActiveImages(images);
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
                            จุดไหนที่คุณปวดนิ้วมากที่สุด ?
                        </div>
                        <div className="hand-image-container" onClick={handlePositionClick} ref={fingerImageRef}>
                            <CardMedia
                                component="img"
                                height="600"
                                image={defaultFingerImage}
                                alt="Default Finger"
                                style={{ width: '100%', position: 'relative' }}
                            />
                            {activeImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="selected-image-overlay"
                                    style={{
                                        backgroundImage: `url(${image})`,
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
                            ))}
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

export default FingerSelector;
