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
                    if else statements.
                </p>
            </Lesson>
        </Container>
    )
}

export default IfState

const Container = styled.div`
`

const Lesson = styled.main`
`

const Grabber = styled.div`

`