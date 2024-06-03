import React from 'react'
import { Hero } from '../components/Hero'
import { HomeCards } from '../components/HomeCards.js'
import  JobListing  from '../components/JobListing.js'
import {ViewAllJobs} from '../components/ViewAllJobs'

export const HomePage = () => {
  return (
    <>  

   <Hero/>
   <HomeCards/> 
  <JobListing/>
  <ViewAllJobs/>

    </>
  )
}

