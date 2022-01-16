import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import AsideBar from '../components/AsideBar'

function PythonFunc() {
    const links={'variables': "/pythonBasics", 'print()': '/printFunction','Math': '/pythonMath', 'Functions': "/functions"}

    return (
        <Container>
            <Nav />
            <AsideBar link_short={links} />
            <Main>
                <Grabber>
                    <h1>Functions</h1>
                    <h4>1/16/2022</h4>
                    <h3>Learn what a function is and how to use it in a Python program to make your
                        code easier to read and run better
                    </h3>
                </Grabber>
                <Lesson>
                    <p>The best way to think of a function, is to compare it to a set of instructions.
                        Everytime you need the program to complete a specific task, it will have the set
                        of instructions to do it properly whenever you call the function. And if that last
                        sentence confused you then its ok, that just means your learning! To call a function 
                        means to let the program know that you want it to use the function when it gets to a 
                        certian point.
                    </p>
                    <p>
                        In the code snippet below you can see we start a function off with the def keyword.
                        This is how we <bold>define</bold> a function, that is followed by the function name,
                        parenthesis(which we will use in a later example) and a colon. After that you have your
                        code! And last but not least, dont forget to indent 4 spaces or tab when writing code 
                        inside of your function.
                    </p>

                    <ExampleCode>
                        <p>def MyFunction():</p>
                        <p>print('hello world')</p>
                        <p>MyFunction()</p>
                    </ExampleCode>

                    <p>At the end you can see to call the function, all you do is type the name of it in with
                        parenthesis. Sometimes you want a function to take in data and do something with it.
                        A simple example of how to use parameters is to give a function two numbers and have 
                        your program solve math for you.
                    </p>

                    <ExampleCode>
                        <p>def DoMath(a, b):</p>
                        <p>return (print(a+b))</p>
                        <p>DoMath(5,7)</p>
                    </ExampleCode>
                </Lesson>
                <Next>
                    <Link to='/printFunction'><span>Next</span></Link>
                </Next>
            </Main>
        </Container>
    )
}

export default PythonFunc

const Container = styled.div`
    align-items: center;
    margin-left: 5px;
    height: 100vh;
    margin: auto;
    color: white;
    

`
const Main = styled.main`
    width: 75vw;
    position: relative;
    top: -95vh;
    align-self: center;
    margin: auto;
    text-align: center;

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
    position: absolute;
    display: block;
    font-size: 18px;
    width: 75vw;
    color: white;
    text-align: center;
    margin: auto;
    padding: 5px;
    background-color: rgb(17, 34, 64);
    border-radius: 25px;
    content: 75vw;
    
`

const ExampleCode = styled.div`
    margin: auto;
    border: solid black 2px;
    background-color: grey;
    color: white;
    width: 50%;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;
`
const Next = styled.div`
    position: absolute;
    top: 95vh;
    left: 35vw;
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


{/* <Sidebar>
    <Nav>
        <li>Variables</li>
        <Link to='/functions'><li>Functions</li></Link>
        <li>Data Types</li>
        <li>Math</li>
    </Nav>
</Sidebar> */}

// const Nav = styled.div`
    
//     padding: 10px;

//     li{
//         list-style: none;
//         margin: 25px;
//         font: 15px;
//         margin-top: 0;

//     }
// `

// const Sidebar = styled.aside`
//     cursor: pointer;
//     min-height: 100vh;
//     width: 15%;
// `