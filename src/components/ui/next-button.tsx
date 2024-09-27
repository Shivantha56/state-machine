import { Button } from '@mui/material';
import React from 'react';

interface NextButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    onNext: () => void
}

export default function NextButton({children, onNext, type, color, disabled, ...props}: NextButtonInterface) {
    return (
        <>
            <Button {...props} disabled={disabled} type={type} onClick={onNext} variant='contained' color='success' className='w-full bg-blue-600 text-white'>{children}</Button>
        </>
    );
}
