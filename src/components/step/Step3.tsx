import { Stack, Typography } from "@mui/material";
import PrimaryButton from "../ui/primary-button";
import TextArea from "../ui/text-field";
import { useState } from "react";
import StepHeader from "../ui/step-header";
import NextButton from "../ui/next-button";

export default function Step3({ send, currentState }: any) {
  // const []
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
        <StepHeader stepHeader='Step 3' />
        <TextArea placeholder="Focus keywords (optional)" />
        <div className="w-fit">
          <PrimaryButton onClick={handleGenerateClick}>Generate</PrimaryButton>
        </div>

        <Typography>
         
          {/* Overview Content */}
        </Typography>

        {/* Render all generated components */}
        {components}
      </Stack>
      <div className="w-fit">
        <NextButton className='bg-black' onNext={handleNext} disabled={!currentState.matches('step3')}>
          Next
        </NextButton>
      </div>
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
    <div style={{ marginTop: "20px" }}>
      <Stack spacing={3}>
        <TextArea placeholder="Re create with more simple terms (optional)" />
        <div className="w-fit">
          <PrimaryButton onClick={handleGenerateClick}>Generate</PrimaryButton>
        </div>
        <Typography>
          Starlink is a satellite internet constellation project developed by
          SpaceX, the aerospace company founded by Elon Musk. The project aims to
          provide global broadband internet coverage, especially in remote and
          underserved areas where traditional internet infrastructure is
          challenging or expensive to install. Below is an overview of Starlink,
          including its goals, technology, and current status.
          {/* Overview Content */}
        </Typography>
        {components}
      </Stack>
    </div>
  );
}
