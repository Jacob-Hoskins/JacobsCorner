import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function AsideBar(props) {
    return (
        <Container>
            {/* <Sidebar>
                <Nav>
                    {for (const property in props.link_short){
                        <Link='{props.link_short[property]}'><li>property</li></Link>
                    }}

                    {/* <li>Variables</li>
                    <Link to='/functions'><li>Functions</li></Link>
                    <li>Data Types</li>
                    <li>Math</li> */}
                {/* </Nav>
            </Sidebar> */}
        </Container>
    )
}

export default AsideBar


const Container = styled.aside`

`

const Nav = styled.div`
    
    padding: 10px;

    li{
        list-style: none;
        margin: 25px;
        font: 15px;
        margin-top: 0;

    }
`

const Sidebar = styled.aside`
    cursor: pointer;
    min-height: 100vh;
    width: 15%;
`