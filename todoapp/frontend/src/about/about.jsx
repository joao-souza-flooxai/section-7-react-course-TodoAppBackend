import React from 'react';
import PageHeader from '../template/pageHeader';

export default function About(props){

    return  (
        <div className='container'>
            <PageHeader name="About" small="us"/>
            <h2>Nossa História</h2>

            <p>Lorem ipsum dolor sit amet...</p>

            <h2>Missão e Visão</h2>

            <p>Lorem ipsum dolor sit amet...</p>

            <h2>Imprensa</h2>

            <p>Lorem ipsum dolor sit amet...</p>
        </div>
    );
}