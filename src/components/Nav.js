import React from 'react'
import styled from 'styled-components'

// ToDo: the nav bar text doesnt show up right for mobile view

function Nav() {
    return (
        <NavBar>
            <NavMenu>
                 <a href="#"><span>VIDEOS</span></a>
                 <a href="#"><span>ARTICLES</span></a>
                 <a href="#"><span>PROJECTS</span></a>
                 <a href="#"><span>SOCIAL</span></a>
             </NavMenu>

         </NavBar>
     )
 }

 export default Nav

 const NavBar = styled.div`
     margin: 25px;
     border-bottom: 2px solid black;
    

 `

 const NavMenu = styled.div`
     cursor: pointer;
     padding-bottom: 10px;
     text-align: center;
     justify-content: center;

     a{
         margin: 25px;
         text-decoration: none;
     }

     span{
         font-size: 20px;
     }

     @media (max-width: 500px){
         span{
             font-size: 9px;
             text-align: center;
             justify-content: center;
         }
     }

 `  