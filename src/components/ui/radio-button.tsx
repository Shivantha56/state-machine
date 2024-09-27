import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface RadioButtonInterface {
    values:string[]
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void | undefined
}

export default function RadioButton({values,onChange}:RadioButtonInterface) {
    return (
        <>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={onChange}
            >
                {
                    values.map((element:string) => 
                        <FormControlLabel className='text-gray-600'  value={element} control={<Radio />} label={element} />
                    )
                }
                
            </RadioGroup>
        </>
    );
}
