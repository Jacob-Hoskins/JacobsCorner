import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PythonBasics from '../Lessons/PythonBasics';

function Content(props) {
    return (
        <Container>
            <Link to='/pythonBasics'>
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <h3>{props.description}</h3>
            </Link>
            
        </Container>
    )
}

export default Content


const Container = styled.div`
    border: solid white 2px;
    margin: 25px;
    text-align: center;
    

    a{
        text-decoration: none;
        color: white;
    }

    @media (max-width: 500px){
        width: 80%;
    }

`
