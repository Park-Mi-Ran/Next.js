import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/reset.css';

//pages들의 공통된 것을 처리(pages의 부모) 
//pages의 index.js등등 return이 component
const NodeBird = ({Component}) => {
    return(
        <>
        <Head>
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    )
}

NodeBird.porpType = {
    Component : PropTypes.elementType.isRequired,
}

export default NodeBird;