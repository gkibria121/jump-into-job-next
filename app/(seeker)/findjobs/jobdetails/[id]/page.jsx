'use client';
import React from 'react';
import JobDetails from '@/Components/JobDetails/JobDetails';
import { useUserContext } from '@/UserContext/UserContext';
import { useParams } from 'next/navigation';



function Page({params}) {

    const {jobs} = useUserContext();

  return (<JobDetails props={{ id: params.id, jobs : jobs}} />);
}

export default Page;
