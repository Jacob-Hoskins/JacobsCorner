import React from 'react'
import styled from 'styled-components'
import AsideBar from '../../components/AsideBar'
import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'

function PythonMath() {
    const links={'variables': "/pythonBasics", 'print()': '/printFunction','Math': '/pythonMath', 'Functions': "/functions"}

    return (
        <Container>
            <Nav />
            <AsideBar link_short={links}/>
            <Main>
                <Grabber>
                    <h1>Python Math</h1>
                    <h4>1/16/2022</h4>
                    <h3>Learn how to use Python to solve math problems</h3>
                </Grabber>
                <Lesson>
                    <p>Python is a great tool for programmers to solve complex math problems
                        and is one of the most popular data science tools. So with that being said
                        Python makes math simple, and I'll show you how we can do simple math using 
                        variables and the print() function we learned in previous lessons
                    </p>
                    <ExampleCode>
                        <p>add = 2 + 2</p>
                        <p>multiply = 2 * 2</p>
                        <p>divide = 2 / 2</p>
                        <p>subtract = 2 - 2</p>
                        <p>print(add)</p>
                        <p>>>>4</p>
                        <p>print(multiply)</p>
                        <p>>>>4</p>
                        <p>print(divide)</p>
                        <p>>>>1</p>
                        <p>print(subtract)</p>
                        <p>>>>0</p>
                    </ExampleCode>
                </Lesson>
                <Next>
                    <Link to='/functions'><span>Next</span></Link>
                </Next>
            </Main>
        </Container>
    )
}

export default PythonMath

const Container = styled.div`

`

const Main = styled.main`
    position: relative;
    width: 75vw;
    top: -95vh;
    align-self: center;
    margin: auto;
    text-align: center;
    color: white;

    @media (max-width: 800px){
        margin-top: 50vh;
    }
`

const Grabber = styled.div`
    position: relative;
    margin: auto;
    content: 0;
    width: 75vw;
`

const Lesson = styled.div`
    margin: auto;
    background-color: #7395ae;
    border-radius: 25px;
    align-self: center;
    text-align: center;
    justify-content: center;
    width: 75vh;
    font-size: 20px;
    padding: 10px;


    @media (max-width: 500px){
        width: 80%;
    }

`

const ExampleCode = styled.div`
    margin: auto;
    border: solid black 2px;
    background-color: #557a95;
    color: white;
    width: 50%;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 500px){
        width: 80%;
    }
`

const Next = styled.div`
    cursor: pointer;
    border: solid white 2px;
    padding: 10px 30px;
    width: 30px;
    text-align: center;
    margin: auto;
    margin-top: 5px;

    a{
        text-decoration: none;
        color: white;
    }
`