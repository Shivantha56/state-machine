import { Stack } from '@mui/material';
import TextArea from '../ui/text-field';
import PrimaryButton from '../ui/primary-button';
import { useState } from 'react';
import StepHeader from '../ui/step-header';
import NextButton from '../ui/next-button';

export default function Step4({ send, currentState }: any) {

  const [components, setComponents] = useState<JSX.Element[]>([]);

  const handleGenerateClick = () => {
    const newComponent = <ChildComponent key={components.length} />;
    setComponents([...components, newComponent]);
  };

  const handleNext = () => {
    send({ type: 'NEXT' });
  }

  return (
    <div>
      <Stack spacing={3}>
        <StepHeader stepHeader='Step 4' />
        <div className='w-fit'>
          <PrimaryButton onClick={handleGenerateClick}>
            Generate Images
          </PrimaryButton>
        </div>
        {components}
        <div className='w-fit'>
          <NextButton className='bg-black' onNext={handleNext} disabled={!currentState.matches('step4')}>
            Next
          </NextButton>
        </div>
      </Stack>
    </div>
  );
}

function ChildComponent() {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const handleGenerateClick = () => {
    const newComponent = <ChildComponent key={components.length} />;
    setComponents([...components, newComponent]);
  };
  return (
    <div>
      <Stack spacing={3}>
        <TextArea placeholder="Enter text (optional)" />
        <div className='w-fit'>
          <PrimaryButton onClick={handleGenerateClick}>
            Generate Images
          </PrimaryButton>
        </div>
        {components}
      </Stack>
    </div>
  );
}