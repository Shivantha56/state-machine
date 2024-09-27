import { Typography } from '@mui/material';


export default function StepHeader({stepHeader}:{stepHeader:string}) {
    return (
        <div className='flex'>
            <Typography className='' fontFamily={'Poppins'} fontWeight={'bold'} my={1} color='gray' variant='h6'>{stepHeader}</Typography>
        </div>
    );
}
