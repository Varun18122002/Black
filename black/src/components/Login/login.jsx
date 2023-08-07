
import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Input } from '@mui/material';



function Loginpage()
{

  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

 return(

  <Box>
    <form>
      <label>Name: <input type='text' className='user_name'/></label><br/>
      <label>Password: <input type='password' className='password'/> </label> <br/>
      <label><input type='submit' value="Submit"/></label>
    </form>
  </Box>
 ) 
}

export default Loginpage