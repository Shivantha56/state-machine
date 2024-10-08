import { Typography } from '@mui/material';
import PrimaryButton from '../ui/primary-button';
import RadioButton from '../ui/radio-button';
import TextArea from '../ui/text-field';
import { useFormik } from 'formik';
import { useState } from 'react';
import generateFakeTopics from '../../../fake-async-actions/generate-topic';
import StepHeader from '../ui/step-header';
import NextButton from '../ui/next-button';


export default function Step1({ send, onTopicSelect, currentState }: any) {

  const [generatedTopics, setGeneratedTopics] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleNext = () => {
    onTopicSelect(selectedTopic);
    send({ type: 'NEXT' });
  }

  // formik config withe the topic found form
  const formik = useFormik({
    initialValues: {
      topicFoundPrompt: ''
    },
    onSubmit: (values) => {
      console.log(values);
      generateFakeTopics().then((value: string[]) => setGeneratedTopics(value));

    }
  })

  const handleChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('', event.target.value)
    setSelectedTopic(event.target.value);
  };

  return (
    <div>
      <StepHeader stepHeader='Step 1' />
      <form onSubmit={formik.handleSubmit}>
        <TextArea onChange={formik.handleChange} name='topicFoundPrompt' value={formik.values.topicFoundPrompt} placeholder='Enter text you want to search about' />
        <PrimaryButton type='submit'>
          Generate
        </PrimaryButton>
      </form>

      {
        /* 
          here render the topics that generated by the user
          list of topics generated
          One topic can be selected
        */
      }
      {

        generatedTopics.length > 0 && <>
          <Typography fontFamily={'Poppins'} my={1} color='gray' variant='h6'>Select the topic you want to generate article</Typography>
          <RadioButton onChange={handleChangeRadioButton} values={generatedTopics} />
          <div className='w-fit mt-3'>
          {/* disabled={selectedTopic ? false : true} */}
            <NextButton className='bg-black' onNext={handleNext} disabled={currentState.matches('step1') && selectedTopic ? false : true}>
              Next
            </NextButton>
          </div>
        </>
      }

    </div>
  );
}
