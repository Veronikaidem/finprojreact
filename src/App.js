import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { RoutesComponent } from './Routes';
import { Box } from '@mui/system';
import { Header } from './components/header';
import { instance } from './application';
import { useDispatch } from 'react-redux';
import { fetchHomePageProducts } from './redux';


const styledContentContainer= styled(Box)(()=>({
marginTop: "100px",
}));

const App = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchHomePageProducts());

  },[])
  
  return (
  <Box>
    <Header/>
    <Box> 
      <RoutesComponent/>
      </Box>
    
  </Box>

  );
};



export default App;
