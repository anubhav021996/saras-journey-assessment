import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { flagImages } from "../configs/flagImages";
import { JourneyData } from "../types/journey";

interface Props {
  step: JourneyData;
}

export const JourneyStep = ({ step }: Props) => {
  return (
    <div className="relative">
      <div
        className={twMerge(
          "bg-white rounded-lg border px-8 py-4 shadow-sm relative",
          step.flag === "orange" && "bg-orange-50 border-orange-200",
          step.flag === "red" && "bg-red-50 border-red-200",
          step.flag === "purple" && "bg-purple-50 border-purple-200",
        )}
      >
        <div className="absolute -top-8 left-2">
          <div className="relative w-12 h-12">
            <Image
              alt={`Step ${step.step}`}
              src={flagImages[step.flag]}
              width={48}
              height={48}
            />
            <div className="absolute left-0 top-0.5 right-0 flex items-center justify-center text-white font-bold text-sm">
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

      <div
        className={twMerge(
          "absolute top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dotted",
          step.step % 2 === 1
            ? "-right-[52px] w-[40px]"
            : "-left-[52px] w-[40px]",
          step.flag === "orange" && "border-orange-400",
          step.flag === "red" && "border-red-400",
          step.flag === "purple" && "border-purple-400",
        )}
      >
        <div
          className={twMerge(
            "absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
            step.step % 2 === 1 ? "right-0" : "left-0",
            step.flag === "orange" && "bg-orange-400",
            step.flag === "red" && "bg-red-400",
            step.flag === "purple" && "bg-purple-400",
          )}
        />
      </div>
    </div>
  );
};
