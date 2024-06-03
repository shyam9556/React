import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, password, email, phone, country, address, gender };
            if (IsValidate()) {
            console.log(regobj);
        
            fetch("http://localhost:7000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/Login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <>

<ToastContainer></ToastContainer>
   

        <div>
            <div className="lg:mx-1/4 lg:w-1/2 pr-4 pl-4">
                <form className="container mx-auto sm:px-4" onSubmit={handlesubmit}>
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                        <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="flex-auto p-6">

                            <div className="flex flex-wrap ">
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={country} onChange={e => countrychange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:w-full pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></textarea>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="mb-4">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="py-3 px-6 bg-gray-200 border-t-1 border-gray-300">
                            <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Register</button> |
                            <Link to={'/'} className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700">Close</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
        </>
    );
}

export default Register;