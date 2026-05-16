import { JourneyTimeline } from "./components/JourneyTimeline";
import { journeyData } from "./configs/journeyData";

export default function Home() {
  return (
    <div>
      <div className="max-w-xs mb-12">
        <p className="text-base font-semibold mb-2">
          Step 04 <span className="text-orange-500 text-xs">/ 05</span>
        </p>
        <div className="h-1.5 rounded-full bg-orange-100">
          <div className="h-full w-4/5 rounded-full bg-orange-500" />
        </div>
      </div>

      <JourneyTimeline journeyData={journeyData} />
    </div>
  );
}
