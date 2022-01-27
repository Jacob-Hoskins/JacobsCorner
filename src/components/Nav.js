import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Nav() {
    return (
        <NavBar>
            <NavMenu>
                 <Link to='/'><span>HOME</span></Link>
                 <Link to="/videos"><span>VIDEOS</span></Link>
                 <Link to='/articles'><span>ARTICLES</span></Link>
                 <Link to='/projects'><span>PROJECTS</span></Link>
                 <Link to='/social'><span>SOCIAL</span></Link>
             </NavMenu>

         </NavBar>
     )
 }

 export default Nav

 const NavBar = styled.div`
     background-color: #b1a296;
     position: relative;
     width: 100vw;
     align-items: center;
     border-bottom: 2px solid black;
     
     
     

 `

 const NavMenu = styled.div`
     cursor: pointer;
     padding-bottom: 10px;
     text-align: center;
     text-decoration: none;

     
     
     

     a{
         margin: 25px;
         text-decoration: none;
     }

     span{
         font-size: 20px;
         color: white;
     }

     @media (max-width: 700px){
         span{
             font-size: 10px;
             text-align: center;
             align-items: center;
             align-content: center;
             justify-content: center;
             margin-right: -4px;
         }
     }

 `  

