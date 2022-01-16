import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function AsideBar(props) {
    return (
        <Container>
            <Sidebar>
                <Nav>
                {Object.entries(props.link_short).map(([ text, link ]) => (
                    <li>
                        <Link to={link}>{ text }</Link>
                    </li>
                ))}
                </Nav>
            </Sidebar>
        </Container>
    )
}

export default AsideBar


const Container = styled.aside`
    display: felx;
    width: 5%;
    margin: 0;

    a{
        text-decoration: none;
        color: white;
    }
`

const Nav = styled.div`
    margin: 0;
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
    margin: 0;
`