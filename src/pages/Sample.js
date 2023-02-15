import React from 'react';
import './Sample.css';
import './Home.css';

const Sample = () => {
    
    return  (
        <div className="wrapper">
            <div style={{textAlign: 'center', marginBottom: '5vh', fontWeight: '900', fontSize: '1.15rem'}}>
                <span className="sample_title">💙지뽀 유님 청첩장 샘플 고르기❤️</span>
            </div>
            
            <div>
                <div style={{textAlign: 'center', marginBottom: '1vh', fontWeight: '700', fontSize: '1rem'}}>
                    <span className="sample_title">배경 골라봐용😍</span>
                </div>
                <div className="container container1">1</div>
                <div className="container container2">2</div>
                <div className="container container3">3</div>
                <div className="container container4">4</div>
                <div className="container container5">5</div>
                <div className="container container6">6</div>
            </div>
        </div>
    )
}

export default Sample;