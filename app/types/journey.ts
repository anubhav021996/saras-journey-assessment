export type Flag = "red" | "purple" | "orange";

export type JourneyData = {
  id: number;
  step: number;
  title: string;
  skills: string[];
  flag: Flag;
};
