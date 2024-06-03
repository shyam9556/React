import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

//     useEffect(()=>{
// sessionStorage.clear();
//     },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            
           
            fetch("http://localhost:7000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('SuccessFully Login');
                          
                            usenavigate('/')
                        }else{
                            toast.error('Please Enter valid password');
                        }
                    
                    }
            }).catch((err) => {
                toast.error('Login Failed due to invalid details' );
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }


    return (
        <div className="flex flex-wrap ">
        <div className="lg:mx-1/4 lg:w-1/2 pr-4 pl-4" style={{ marginTop: '100px' }}>
            <form onSubmit={ProceedLogin} className="container mx-auto sm:px-4">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                    <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                        <h2>User Login</h2>
                    </div>
                    <div className="flex-auto p-6">
                        <div className="mb-4">
                            <label>User Name <span className="errmsg">*</span></label>
                            <input value={username} onChange={e => usernameupdate(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                        </div>
                        <div className="mb-4">
                            <label>Password <span className="errmsg">*</span></label>
                            <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"></input>
                        </div>
                    </div>
                    <div className="py-3 px-6 bg-gray-200 border-t-1 border-gray-300">
                        <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Login</button> |
                        <Link className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600" to={'/register'}>New User</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;