"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LoadingContextType {
  appReady: boolean;
  setAppReady: (ready: boolean) => void;
  introFinished: boolean;
  setIntroFinished: (finished: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [appReady, setAppReadyState] = useState(false);
  const [introFinished, setIntroFinishedState] = useState(false);

  const setAppReady = useCallback((ready: boolean) => {
    setAppReadyState(ready);
  }, []);

  const setIntroFinished = useCallback((finished: boolean) => {
    setIntroFinishedState(finished);
  }, []);

  return (
    <LoadingContext.Provider value={{ appReady, setAppReady, introFinished, setIntroFinished }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
