import { assign, createMachine } from 'xstate';

type FormContext = {
  visibleSteps: string[];
};

const stepsMachine = createMachine({
  id: 'steps',
  initial: 'step1',
  context: {
    visibleSteps: ['step1'],
  } as FormContext,
  states: {
    step1: {
      on: {
        NEXT: 'step2',
      },
    },
    step2: {
      entry: assign((context: any) => ({
        visibleSteps: ['step1', 'step2'],
      })),
      on: {
        NEXT: 'step3',
        PREVIOUS: 'step1',
      },
    },
    step3: {
      entry: assign((context: any) => ({
        visibleSteps: [ 'step1', 'step2', 'step3'],
      })),
      on: {
        NEXT: 'step4',
        PREVIOUS: 'step2',
      },
    },
    step4: {
      entry: assign((context: any) => ({
        visibleSteps: [ 'step1', 'step2', 'step3', 'step4'],
      })),
      on: {
        NEXT: 'step5',
        PREVIOUS: 'step3',
      },
    },
    step5: {
      entry: assign((context: any) => ({
        visibleSteps: [ 'step1', 'step2', 'step3', 'step4', 'step5'],
      })),
      on: {
        PREVIOUS: 'step4',
      },
    },
  },
});

export default stepsMachine;
