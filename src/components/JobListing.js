import React from 'react'
import { JobListings } from './JobListings';
import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
const JobListing = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchjobs = async () => {

      const apiurl=isHome ? 'http://localhost:5000/jobs' : 'http://localhost:5000/jobs?_limit=3'

      try {
        const res = await fetch(apiurl);
        const data = await res.json();

        setJobs(data);

      } catch (error) {

    console.log(error);
       
      } finally {
        setLoading(false);
      }  
    }
    
    fetchjobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
            loading ? (
              
              <Spinner loading={loading} />
              
              )
              :(
              <>
              {
            jobs.map((job) => (
              <JobListings key={job.id} job={job} />

            )
            )

          }
              </>
            )

            }


         

        </div>
      </div>
    </section>
  )
}

export default JobListing;