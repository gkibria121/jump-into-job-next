"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/alljobs.json');
      const data = await response.json();
      setJobs(data);

    };

    fetchData();
  }, []);
  const isClient = typeof window !== 'undefined';
  const storedUserData =isClient ? localStorage.getItem("userData") : null;
  const initialUserData = storedUserData ? JSON.parse(storedUserData) : null;

  const [userData, setUserData] = useState(initialUserData);
  console.log(userData);
  const [clickedFeaturedJob, setClickedFeaturedJob] = useState(null);
  useEffect(() => {
    if (userData === null) {
      localStorage.removeItem("userData");
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);
  // For Resume
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState(null);
  const handleSubmitResume = () => {
    useEffect(() => {
      localStorage.setItem("userResume", JSON.stringify(resumeData));
    }, [resumeData]);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        clickedFeaturedJob,
        setClickedFeaturedJob,
        currentStep,
        setCurrentStep,
        resumeData,
        setResumeData,
        handleSubmitResume,
        jobs
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
