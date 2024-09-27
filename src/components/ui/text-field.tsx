import { TextareaAutosize as MUITextareaAutosize, TextareaAutosizeProps  } from '@mui/material';

interface TextAreaInterface extends TextareaAutosizeProps {

}

export default function TextArea(props:TextAreaInterface) {
  return (
    <>
        <MUITextareaAutosize  {...props} className='w-full border border-black p-2 rounded' minRows={3} />
    </>
  );
}
