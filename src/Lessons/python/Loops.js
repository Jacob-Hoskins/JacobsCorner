import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'

function loops() {
    return (
        <Container>
            <Nav />
            <Grabber>
                <h1>Python Loops</h1>
                <h4>1/17/2022</h4>
                <h3>Learn how to ITERATE over a object until that object is complete.</h3>
            </Grabber>
            <Lesson>
                <p>In Python, you might want a function or a certian piece of code
                    to run until you have a specific outcome, or the user ends the loop.
                    Loops in python can be used to look through variables to search for a 
                    certian value, they can be used to keep repeating a task until the user is
                    done, and you can even use it to help you automate certian actions. In the below
                    example you will be able to see the basic syntax for a while loop.

                </p>
                <ExampleCode>
                    <p>while expression:</p>
                    <p>statement(s)</p>                
                </ExampleCode>
                <p>Following after the while keyword is where you would put your expression, this can
                    be something along the lines of while True, while 1 == 1, or whatever your expression
                    is that evaluates out to true. If you have a expression following the while loop that
                    evaluates out to false, the code in the loop will also keep running until the expression
                    comes out to true. So, if your expression is permenatly true, or never changes, then your
                    while loop will keep on running forever. If you run the code below in your IDE and terminal,
                    then you will see that it goes on forever and you have to force stop it.
                </p>
                <ExampleCode>
                    <p>while True:</p>
                    <p>print(hello world)</p>
                </ExampleCode>
                <p>As you can see, the code will run until you exit the program. Now lets create a while loop
                    that will stop itself once the variable X is equal to 3 
                </p>
                <ExampleCode>
                    <p>x = 0</p>
                    <p>while x&lt;=3</p>
                    <p>print(x)</p>
                    <p>x+=1</p>
                </ExampleCode>
                <p>So as you can see, our expression will evaluate out to true, but only until our
                    created variable is less than or equal to 3 (&lt;= is Pythons version of less than
                    or equal to).
                    In the loop, each time it starts we print out x so we can see what the value of x is. After that
                    we add 1 to x each time (+= is the same as saying x + 1).
                </p>
                <p>Now that you know the fundamentals of a while loop, try and use it in your own program!
                    If you wanna know more about how to iterate through a object, check out my Python For loop article!
                </p>
            </Lesson>
        </Container>
    )
}

export default loops

const Container = styled.div`
    font-size: 20px;
    color: white;
    margin-bottom: 50px;
`

const Grabber = styled.div `
    position: relative;
    width: 75vw;
    margin: auto;
    text-align: center;
    padding: 0;
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