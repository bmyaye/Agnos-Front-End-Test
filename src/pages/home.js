import { Card, CardMedia } from '@mui/material';
import defaultHandImage from '../assets/default-finger.png';
// import defaultAbsImage from '../assets/default-abs.png';

function Home() {
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
                        padding: '20px'
                    }}>
                        <div className="card-header" style={{ marginBottom: '20px', fontSize: 30, }}>
                            จุดไหนที่คุณปวดนิ้วมากที่สุด ?
                        </div>
                        <CardMedia
                            component="img"
                            height="700"
                            image={defaultHandImage}
                            alt="Default Hand"
                        />
                    </Card>
                    {/* <Card style={{
                        maxWidth: 550,
                        margin: '20px auto',
                        fontFamily: 'Kanit',
                        borderRadius: 15,
                    }}>
                        <br />
                        <div class="card-header">จุดไหนที่คุณปวดหน้าท้องมากที่สุด ?</div>
                        <CardMedia
                            component="img"
                            height="700"
                            image={defaultAbsImage}
                            alt="Default Abs"
                        />
                    </Card> */}
                    <div style={{ textAlign: 'center' }}>
                        <button onClick="" style={{
                            maxWidth: 500,
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
                </div>
            </header>
        </div>
    );
}

export default Home;