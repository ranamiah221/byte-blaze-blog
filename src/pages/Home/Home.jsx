import React from 'react';
import Banner from '../../components/Banner/Banner';
import myImg from "../../assets/wave.svg"
const Home = () => {
    return (
        <div className='relative flex flex-col items-center justify-center min-h-[calc(100vh-123px)]'>
             <Banner></Banner>
             <img className='absolute bottom-0 w-full' src={myImg}></img>
        </div>
    );
};

export default Home;