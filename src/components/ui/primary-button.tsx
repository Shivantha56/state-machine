import React from 'react';
import { Button, ButtonPropsColorOverrides } from '@mui/material';

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children:string
}

export default function PrimaryButton({children, onClick, type, color, disabled, ...props}:ButtonInterface) {
  return (
    <>
        <Button disabled={disabled} color={color} type={type} onClick={onClick} variant='contained' className='w-full bg-blue-600 text-white'>{children}</Button> 
    </>
  );
}
