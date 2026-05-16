import { JourneyData } from "../types/journey";
import { JourneyStep } from "./JourneyStep";

interface Props {
  journeyData: JourneyData[];
}

export const JourneyTimeline = ({ journeyData }: Props) => {
  const leftSteps = journeyData.filter((item) => item.step % 2 === 1);
  const rightSteps = journeyData.filter((item) => item.step % 2 === 0);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-8 mt-16">
      {/* Odd steps */}
      <div className="flex flex-col gap-12">
        {leftSteps.map((step) => (
          <JourneyStep key={step.id} step={step} />
        ))}
      </div>

      {/* Center column */}
      <div className="w-24 bg-black rounded-full relative min-h-[800px]">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px border-l-2 border-dashed border-white" />
      </div>

      {/* Even steps */}
      <div className="flex flex-col gap-12">
        {rightSteps.map((step) => (
          <JourneyStep key={step.step} step={step} />
        ))}
      </div>
    </div>
  );
};
