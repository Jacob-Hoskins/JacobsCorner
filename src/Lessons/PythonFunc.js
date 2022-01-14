import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import AsideBar from '../components/AsideBar'

function PythonFunc() {
    return (
        <Container>
            <Nav />
            <AsideBar />
            hello world
        </Container>
    )
}

export default PythonFunc

const Container = styled.div`
    color: white;
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