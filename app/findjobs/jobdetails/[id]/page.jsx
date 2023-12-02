'use client';
import React,{useState,useEffect} from 'react';
import JobDetails from '@/Components/JobDetails/JobDetails';
import { useUserContext } from '@/UserContext/UserContext';



function Page({ params}) {

    const {jobs} = useUserContext();
    useEffect(() => {
      console.log(jobs)
    }, [jobs])
    


  return (<JobDetails props={{ id: params.id , jobs : jobs}} />);
}

export default Page;
