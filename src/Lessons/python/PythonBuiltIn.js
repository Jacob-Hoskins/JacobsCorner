import React from 'react'
import styled from 'styled-components'
import AsideBar from '../../components/AsideBar'
import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'


function PythonBuiltIn() {
    const links={'variables': "/pythonBasics", 'print()': '/printFunction','Math': '/pythonMath', 'Functions': "/functions"}
    return (
        <Container>
            <Nav />
            <AsideBar link_short={links}/>
            <Main>
                <Grabber>
                    <h1>print() Function</h1>
                    <h4>1/16/2022</h4>
                    <h3>Learn the built-in Print() function Python has, and how you can use it
                        to show users data, and debug your code.
                    </h3>
                </Grabber>
                <Lesson>
                    <p>print() is a built-in Python function that lets you display data or information
                        to the console running the program. This can be used in a function to show a output,
                        or if you have a error in your code somewhere you can use this function to try and figure
                        out where in your code something isnt working.
                    </p>

                    <ExampleCode>
                        <p>numbers = 3, 5, 72</p>
                        <p>Name = 'Jacob'</p>
                        <p>print(numbers)</p>
                        <p>print(Name)</p>
                        <p>>>>(3, 4, 72) </p>
                        <p>>>>Jacob</p>
                    </ExampleCode>
                    <p>Now This is a simple example of print and in the next lesson we will
                        see how to use print to show us the answer to different math problesm.
                    </p>
                </Lesson>
                <Next>
                    <Link to='/pythonMath'><span>Next</span></Link>
                </Next>
            </Main>
        </Container>
    )
}

export default PythonBuiltIn

const Container = styled.div`
    color: white;
`
const Main = styled.main`
    position: relative;
    top: -95vh;
    align-self: center;
    margin: auto;
    text-align: center;
    width: 75vw;
    color: white;

    @media (max-width: 800px){
        margin-top: 50vh;
    }
`

const Grabber = styled.div`
    width: 75vw;
    align-self: center;
    margin: auto;
    padding: 0;
    text-align: center;
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