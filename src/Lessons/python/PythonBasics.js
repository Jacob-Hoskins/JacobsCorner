import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import AsideBar from '../../components/AsideBar'


//TODO make the nav section in this component its own component where you can insert the links when called 

function PythonBasics() {
    const links={'variables': "/pythonBasics", 'print()': '/printFunction','Math': '/pythonMath', 'Functions': "/functions"}
    return (
        
        <Container>
            <Nav />
            <AsideBar link_short={links}/>
            <Main>
                <Grabber>
                    <h1>Python Basics</h1>
                    <h4>1/16/2022</h4>
                    <h3>Learn about some of Pythons basic features such as variables,
                        built-in funciton, math, and concatination.
                    </h3>
                </Grabber>
                <Summary>
                    <p> In this lesson we will be learning</p>
                    
                    <li>Varibles</li>
                    <li>Some built-in function</li>
                    <li>Math</li>
                    <li>And last some data types</li>
                    
                </Summary>
                <Lesson>
                    <p>Python Is a Great language for someone learning programming to start out on, it has a easy to understand syntax (the way the language is phrased)
                    and a huge comminty base to help you along the way.</p>

                    <p>One of the first things you learn when studying a new lanugage is what a variable is. Simply, a variable is a container that you store data in.
                        Variables are used everywhere in programming and can be used to store whatever you want! Want to create a program to do your math homework for you?
                        Well you would need to be able to store the answer somewhere, and youd use a variable for that. Need to save user input? Again, a variable is there
                        to save the day. Now, lets look at how to create a variable.
                    </p>
                    <ExampleCode>
                        <p>//Variable = 5</p>
                        <p>//answer = 2 + 2</p>
                        <p>//name = 'Jacob'</p>
                    </ExampleCode>
                    <p>In later lessons we will use variable to store data, and use a special python tool to print the information/Data
                        inside of the variable onto the screen for us developers or a user to see.
                    </p>
                    
                </Lesson>
                <Next>
                    <Link to='/printFunction'><span>Next</span></Link>
                </Next>
            </Main>
        </Container>
    )
}

export default PythonBasics

const Container = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    
       
`
const Main = styled.main`
    margin-top: 55vh;
    position: relative;
    top: -95vh;
    width: 77vw;
    height: 35vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    vertical-align: center;

    @media (max-width: 500px){
        top: -500px;
    }

    @media (max-width: 800px){
        margin-top: 50vh;
    }
`

const Grabber = styled.div`
    align-self: center;
    margin: 0;
    text-align: center;
`

const Summary = styled.section`
    margin: auto;
    padding: 3px;
    font-size: 18px;
    width: 50%;

 
    li{
        padding: 3px;
        list-style: none;
        margin-top 0px;
        margin: 10px 0;
    }

`

const Sidebar = styled.aside`
    cursor: pointer;
    min-height: 100vh;
    width: 15%;
`

const Lesson = styled.article`
    padding: 10px;
    margin: auto;
    background-color: #7395ae;
    border-radius: 25px;
    align-self: center;
    text-align: center;
    width: 75vh;
    font-size: 25px;

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