import React from 'react'
import { useHomePageProducts } from '../../redux';
import { Grid } from '@mui/material'
import { ProductCard } from './ProductCard';

export const HomePageProducts = () => {
  const homePageProducts= useHomePageProducts();
  return (
    <Grid container spacing={12} sx={{width:"100%"}}>
      {homePageProducts.map((products)=>{
        return <ProductCard key={product._id} {...product}/>
      })}
    </Grid>
  )
}


