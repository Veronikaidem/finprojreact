import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { isUserAdmin } from '../application';
import { HomePageProducts } from '../components/products';
import { setSelectedProduct, useUserInfo } from '../redux';

export const HomePage = () => {

  return (
    <HomePageProducts/>
  )
}


