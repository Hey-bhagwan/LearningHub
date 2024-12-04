import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface ContainerProps {
    Loged: boolean;
}

export default function Container({ Loged }: ContainerProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();

    return <div className="h-screen border-2 border-black flex flex-col items-center justify-center font-serif	font-family: ui-serif, Georgia, Cambria; bg-primary-page">
                <div className="mx-auto w-1/8 p-1 text-5xl font-semibold " >
                    {Loged ? "Login" : "Register"}
                </div>
                <div className="h-1/2 flex flex-col items-center justify-evenly ">
                    {Loged ? <></> :
                        <div className="flex justify-evenly">
                            <span>Name</span>
                            <input type="text" className="bg-gray-200 w-1/2" onChange={(e) =>{
                                setName(e.target.value);
                            }}/>
                        </div>
                    }
                    <div className="flex justify-evenly">
                        <span>Email</span>
                        <input type="email" className="bg-gray-200 w-1/2" onChange={(e) => {
                            setEmail(e.target.value);
                        }}/>
                    </div>
                    <div className="flex justify-evenly">
                        <span>Password</span>
                        <input type="password" className="bg-gray-200 w-1/2" onChange={(e) =>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    
                        <button type="submit" className="bg-primary-button text-white border rounded-2xl p-2 " onClick={() => {
                            if(Loged){
                                axios({
                                    method: 'POST',
                                    url:'http://16.171.173.120:8080/user/login',
                                    data: {
                                        password: password,
                                        email: email
                                    }
                                }).then((res) => {
                                    alert(res.data.mssg);
                                    navigate('/Dashboard');

                                }).catch((err) => {
                                    alert(err);
                                })
                            }else{
                               axios.post("http://16.171.173.120:8080/user/signup",{
                                    email: email,
                                    password: password,
                                    name: name
                                }).then((res) => {
                                     alert(res.data.mssg);
                                    navigate('/login');
                                }).catch((err) => {
                                    alert(err.response);
                                })
                            }
                        }}>
                            {Loged ? "Login" : "Register"}
                        </button>
                    
                    {Loged ?
                        <div className="text-sm">
                            New here? <a href="/Register" className="font-semibold">
                                            Register Here
                                        </a>
                        </div> :
                        <div className="text-sm">
                            Already have a account? <a href="/Login" className="font-semibold">
                                                        Login Here
                                                    </a>
                        </div>
                    }
                </div>
            </div>
}