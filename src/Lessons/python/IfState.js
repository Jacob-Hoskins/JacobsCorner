import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'


function IfState() {
    return (
        <Container>
            <Nav />
            <Grabber>
                    <h1>If Else Statements</h1>
                    <h4>1/19/2022</h4>
                    <h3>Learn what a If Else statement is and how to use them in your code.</h3>
                </Grabber>
            <Lesson>
                <p>Sometimes when your'e creating a program, you might only want to 
                    do something if certian conditons are true, or maybe certian things
                    when conditions come out to false. The best way to do this is through 
                    if else statements. In the example code below I will show you the basic
                    syntax for creating a if else statement.
                </p>
                <ExampleCode>
                    <p>if True:</p>
                    <p>expressoion</p>
                    <p>else:</p>
                    <p>expression</p>
                </ExampleCode>
                <p>As you can see, if the if statement is true, then the code inside of it will run,
                    but if the if statement is not equal to true, it will run the code in the else block.
                    Maybe you want to see if x is equal to 5, and if its equal to 5 then you want to print true,
                    but if its not equal you dont want to print that its true when its not, so lets try putting some
                    real code inside of there
                </p>
                <ExampleCode>
                    <p>x=6</p>
                    <p>if x==5:</p>
                    <p>print('x is equal to 5')</p>
                    <p>else:</p>
                    <p>print('x is not equal to 5')</p>
                </ExampleCode>
                <p>So this is the very basics of if else statements... But wait, theres also a elif
                    statement that means if else in one. But that can be a bit confusing so I'll make that
                    its own lesson.
                </p>
            </Lesson>
        </Container>
    )
}

export default IfState

const Container = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    
       
`

const Lesson = styled.main`
    position: relative;
    display: block;
    font-size: 20px;
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

const Grabber = styled.div`
    position: relative;
    width: 75vw;
    margin: auto;
    text-align: center;
    padding: 0;
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