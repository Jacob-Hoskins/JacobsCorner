import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'

function DoMath() {
    return (
        <Container>
            <Nav />
            <Main>
                <Grabber>
                    <h1>Basic Python Calculator</h1>
                    <h4>1/17/2022</h4>
                    <h3>In this project we will be using what we learned from the Python basics lesson and 
                        add in one more thing to create a calculator. You will be able to run the 
                        calculator in the terminal and in the project, the goal is to pass two 
                        parameters to a function and have it return the desired answer.
                    </h3>
                </Grabber>
                <Lesson>
                    <p>To create our first app, we need to figure out what we are trying to solve.
                        I think we should try and solve some math problems and help someone using our
                        program solve their own addition problems. To start we have to figure out how we want
                        our code to work. First we will need to create two variables to store the two numbers
                        our user will enter.
                    </p>
                    <p>The first thing we are going to do is create a function that takes in two parameters
                        a, and b.
                    </p>
                    <ExampleCode>
                        <p>def solveMath(a, b):</p>
                        <p>return( print(a+b))</p>
                    </ExampleCode>
                    <p>Now that our function is created we need to call it and fill in the two </p>
                    <ExampleCode>
                        <p>solveMath(5+6)</p>
                        <p>>>11</p>
                    </ExampleCode>
                    <p>Congrats! You just used the fundamentals of python to make a calculator that can
                        solve your math problems for you! Soon you'll be programming things you never thought of.
                    </p>
                </Lesson>
            </Main>
        </Container>
    )
}

export default DoMath

const Container = styled.div`
    text-align: center;
    color: white;
`

const Main = styled.main`
    position: relative;
    margin: auto;
    width: 75vw;
    color: white;
`
const Grabber = styled.div`
    position: relative;
    margin: auto;
    content: 0;
    width: 75vw;
`

const Lesson = styled.div`
    position: absolute;
    display: block;
    font-size: 18px;
    width: 75vw;
    color: white;
    text-align: center;
    margin: auto;
    padding: 5px;
    background-color: #7395ae;
    border-radius: 25px;
    content: 75vw;
    padding: 10px;

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
`
