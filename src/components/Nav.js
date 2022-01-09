import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Nav() {
    return (
        <NavBar>
            <NavMenu>
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
     margin: 25px;
     border-bottom: 2px solid black;
     
     

 `

 const NavMenu = styled.div`
     cursor: pointer;
     padding-bottom: 10px;
     text-align: center;
     
     

     a{
         margin: 25px;
         text-decoration: none;
     }

     span{
         font-size: 20px;
         
     }

     @media (max-width: 500px){
         span{
             font-size: 7px;
             text-align: center;
             justify-content: center;
         }
     }

 `  

