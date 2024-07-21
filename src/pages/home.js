import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleFingerPainButtonClick = () => {
        navigate('/finger');
    };

    const handleAbsPainButtonClick = () => {
        navigate('/abs');
    };

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'></link>
            <div style={{
                maxWidth: 540,
                margin: '20px auto',
                width: '100%',
                textAlign: 'center'
            }}>
                <button onClick={handleFingerPainButtonClick} style={{
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
                    มีอาการปวดนิ้ว
                </button>
            </div>
            <div style={{
                maxWidth: 540,
                margin: '20px auto',
                width: '100%',
                textAlign: 'center'
            }}>
                <button onClick={handleAbsPainButtonClick} style={{
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
                    มีอาหารปวดหน้าท้อง
                </button>
            </div>
        </div>
    );
}

export default Home;
