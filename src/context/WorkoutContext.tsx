"use client";

import React, {useState, createContext, ReactNode,  Dispatch, SetStateAction,}from "react";

import { Iworkout } from "@/types/workout.type";

interface IWorkoutContext {
  todaysPlan: Iworkout[];
  setTodaysPlan: Dispatch<SetStateAction<Iworkout[]>>;

  saveForLater: Iworkout[];
  setSaveForLater: Dispatch<SetStateAction<Iworkout[]>>;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

export const WorkoutsContext = createContext<IWorkoutContext>(
  {} as IWorkoutContext
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<Iworkout[]>([]);
  const [saveForLater, setSaveForLater] = useState<Iworkout[]>([]);

  // Add to Today's Plan
  const addToTodaysPlan = (workout: Iworkout) => {
    setTodaysPlan((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Add to Saved
  const addToSaveForLater = (workout: Iworkout) => {
    setSaveForLater((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setTodaysPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const removeFromSaved = (id: number) => {
    setSaveForLater((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    saveForLater,
    setSaveForLater,
    addToTodaysPlan,
    addToSaveForLater,
    removeFromPlan,
    removeFromSaved,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutProvider;