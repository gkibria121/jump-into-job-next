'use client'
import React from 'react';
import AllJobs from '@/Components/AllJobs/AllJobs';

function RootLayout({ children }) {
  console.log('no render')

  return (
    <AllJobs>
      {console.log('dont re render')}
        {children}
    </AllJobs>
  );
}

export default RootLayout;
