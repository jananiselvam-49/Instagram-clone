import React, { useState } from 'react'
import './Viewstory.css'
import text from './assets/black.jpeg';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



function Viewstory() {

    const [Vstory, setVstory] = useState([]);

    const location = useLocation();
    const startIndex = location.state?.startIndex || 0;
    const [index, setIndex] = useState(startIndex);

    useEffect(() => {
        fetch("http://localhost:3000/Stories")
            .then((response) => response.json())
            .then((data) => setVstory(data))
            .catch((err) => console.log(err));
    }, []
    )

    // ===============================================================================

    useEffect(() => {
        if (Vstory.length > 0 && startIndex < Vstory.length) {
            setIndex(startIndex);
        }
    }, [Vstory, startIndex])

    // =============================================================================================

    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause || Vstory.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prev) =>
                prev < Vstory.length - 1 ? prev + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [pause, Vstory]);

    // ==================================================================================

    return (
        <div className='bbody'>
            <img src={text} className='instatext' />
            <Link to="/" className='closeStory'> X </Link>

            <div
                className="grey-bg"
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
            >
                <div className="progress-container" key={index}>
                    <div
                        className="progress-fill"
                        style={{
                            animation: !pause ? "fill 5s linear forwards" : "none"
                        }}
                    ></div>
                </div>
                {Vstory.length > 0 && (
                    <>
                        <div className='Vdn'>
                            <img src={Vstory[index].user.profile_pic} className='Vdb' alt="" />
                            <p className='Vusername'>{Vstory[index].user.username}</p>
                        </div>

                        <img src={Vstory[index].image} alt="" className='Simg' />
                    </>
                )}

                <button
                    className="next-btn"
                    onClick={() => {
                        if (index < Vstory.length - 1) {
                            setPause(true);              // stop current timer
                            setIndex(index + 1);         // go next
                            setTimeout(() => setPause(false), 50); // restart timer
                        }
                    }}
                >
                    ❯
                </button>

                <button
                    className="prev-btn"
                    onClick={() => {
                        if (index > 0) {
                            setPause(true);
                            setIndex(index - 1);
                            setTimeout(() => setPause(false), 50);
                        }
                    }}
                >
                    ❮
                </button>
                <div className="bottom-bar">
    
    <input 
        type="text" 
        placeholder={`Reply to ${Vstory[index]?.user.username}...`}
        className="reply-input"
    />

    <div className="right-icons">
        <span className="icon">
            <i className="icon bi bi-heart"></i>
        </span>
        <span className="icon">
             <i className="icon bi bi-send"></i>
        </span>
    </div>

</div>
            </div>
        </div>
    )
}

export default Viewstory