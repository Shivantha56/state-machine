import { Stack } from '@mui/material';
import StepHeader from '../ui/step-header';
import PrimaryButton from '../ui/primary-button';
import TextArea from '../ui/text-field';

export default function Step5({ send, currentState }: any) {

  const handleNext = () => {
    send({ type: 'NEXT' });
  }

  return (
    <div>
      <Stack spacing={3}>
        <StepHeader stepHeader='Step 5' />
        <TextArea placeholder="optional (keywords extra info)" />
        <div className='w-fit'>
          <PrimaryButton >
            Generate article title
          </PrimaryButton>
        </div>
        <TextArea placeholder="optional (keywords extra info)" />
        <div className='w-fit'>
          <PrimaryButton >
            Generate metadata
          </PrimaryButton>
        </div>
        <TextArea placeholder="optional (keywords extra info)" />
        <div className='w-fit'>
          <PrimaryButton >
            Generate Tags
          </PrimaryButton>
        </div>
        {/* {components} */}
        <div className='w-fit'>
          <PrimaryButton onClick={handleNext} color='secondary'>
            Publish
          </PrimaryButton>
        </div>
      </Stack>
    </div>
  );
}
