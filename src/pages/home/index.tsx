import { Divider, Stack, Typography } from "@mui/material";
import { useMachine } from "@xstate/react";
import stepsMachine from "./statate-mechanism";
import Step1 from "../../components/step/Step1";
import Step2 from "../../components/step/Step2";
import Step3 from "../../components/step/Step3";
import Step4 from "../../components/step/Step4";
import Step5 from "../../components/step/Step5";
import { useState } from "react";



export default function Home() {

  const [selectedTopic,setSelectedTopic] = useState('');
  const [current, send] = useMachine(stepsMachine);

  const handleTopicSelect = (topic:string) => {
    setSelectedTopic(topic);  // Save selected topic in Home component
  };

  const renderStep = (step: string) => {
    const components: { [key: string]: JSX.Element } = {
      step1: <Step1 send={send} currentState={current} onTopicSelect={handleTopicSelect} />,
      step2: <Step2 send={send} currentState={current} selectedTopic={selectedTopic}/>,
      step3: <Step3 send={send} currentState={current} />,
      step4: <Step4 send={send} currentState={current} />,
      step5: <Step5 send={send} currentState={current} />,
    };

    return components[step];
  };

  return (
    <>
      <div className="bg-white min-h-screen p-5 flex flex-col items-center">
        <Typography fontFamily={"Poppins"} py={4} fontWeight={'bold'} variant="h4">AI article writer</Typography>
        <Stack spacing={4} className="w-full md:max-w-lg">
          {Array.isArray(current.context.visibleSteps) && current.context.visibleSteps.map((step: string, index: number) => (
            <div key={step}>
              {renderStep(step)}
              {index < current.context.visibleSteps.length - 1 && <Divider className="py-3" />}
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
}
