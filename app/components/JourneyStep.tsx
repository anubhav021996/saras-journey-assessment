import Image from "next/image";
import { flagImages } from "../configs/flagImages";
import { JourneyData } from "../types/journey";

interface Props {
  step: JourneyData;
}

export const JourneyStep = ({ step }: Props) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-8 py-2 shadow-sm relative">
      <div className="absolute -top-8 left-2 w-12 h-12">
        <div className="relative w-full h-full">
          <Image
            alt={`Step ${step.step}`}
            src={flagImages[step.flag]}
            width={48}
            height={48}
          />
          <div className="absolute top-0.5 left-0 right-0 flex items-center justify-center text-white font-bold text-sm">
            {step.step}
          </div>
        </div>
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {step.title}
      </h3>

      <div className="flex gap-2">
        <span className="text-xs font-medium text-gray-700">Skills:</span>
        <div className="flex flex-wrap gap-2">
          {step.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
