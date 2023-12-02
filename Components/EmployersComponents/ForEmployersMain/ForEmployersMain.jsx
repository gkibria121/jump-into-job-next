import React from 'react';
import ForEmployersHeader from '../ForEmployersLayout/ForEmployersHeader/ForEmployersHeader';
import ForEmployersFooter from '../ForEmployersLayout/ForEmployersFooter/ForEmployersFooter';
import ForEmployersHome from '../ForEmployersHome/ForEmployersHome';
import { Outlet } from 'next/link';

const ForEmployersMain = () => {
    return (
        <div>
            <ForEmployersHeader></ForEmployersHeader>
            <Outlet></Outlet>
            <ForEmployersFooter></ForEmployersFooter>
            
        </div>
    );
};

export default ForEmployersMain;