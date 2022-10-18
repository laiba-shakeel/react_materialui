import { AppBar, styled, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:"space-around"
})

  return (
    <AppBar position='stick'>
      <Toolbar>
      Navbar
      </Toolbar>
      </AppBar>
   
  )
}

export default Navbar
