import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../HomePage/HomePage';
import Timeline from '../Timeline/Timeline';
import Stats from '../Stats/Stats';
import Friend from '../Friend/Friend';

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {index: true, Component: HomePage},
            {path: '/timeline' , Component: Timeline},
            {path: '/stats' , Component: Stats},
            {path: '/Friend/:id', loader: ()=> fetch('/data.json'),Component: Friend}
            //  {path: "/bookDetails/:id",loader: ()=> fetch('/booksData.json'), Component: BookDetails}
        ]
    }
])