import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams} from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export  const JobPage = ({deletejob}) => {
   const { id } = useParams()
   const [job, setJob] = useState()
   
   const [loading, setLoading] = useState(true)
   
   const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;

    deletejob(jobId);
    
 
  };
   useEffect(() => {
      const fetchJob = async () => {

         try {
            const res = await fetch(`/api/jobs/${id}`);
            const data = await res.json();
            setJob(data);
         } catch (error) {
            console.log('Error to fetch the data', error);
         } finally {
            setLoading(false);
         }
      };

      fetchJob();

   }, [])


   return loading ? <Spinner /> :<>

<section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">Full Time</div>
              <h1 className="text-3xl font-bold mb-4">
                Senior React Developer
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700">Boston, MA</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               We are seeking Link talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">$70k - $80K / Year</p>
            </div>
          </main>

          
          <aside>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">Nstack Solutions</h2>

              <p className="my-2">
                NewTek Solutions is Link leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering Link collaborative and innovative work environment.
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                contact@newteksolutions.com
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                // to={`/jobs/edit/${job.id}`}
                to="/"
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button

              onClick={()=> onDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
   </> 

};
