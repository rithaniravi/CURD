import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Create=()=>{
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`,{name,email,age})
        .then(res=>{
            console.log(res)
            navigate("/")
        })
        .catch(err=> {
            console.log(err)})
    }

    return(
        <div class="container grid content-center justify-items-center py-20 mt-20 mx-auto my-auto">
            <div class="body grid content-center justify-items-center border-2 w-2/5 h-80">
                <form onSubmit={handleSubmit}>
                    <h2 class="font-blod text-4xl px-5">Add user</h2>
                    <div class="m-5">
                    <input
                    type="text"
                    required="required"
                    placeholder="Enter your name"
                    class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                    onChange={(e)=>setName(e.target.value)}
                    />
                    </div>
                    <div class="m-5">
                    <input
                    type="number"
                    required="required"
                    placeholder="Enter your Age"
                    class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                    onChange={(e)=>setAge(e.target.value)}
                    /></div>
                    <div class="m-5">
                    <input
                    type="text"
                    required="required"
                    placeholder="Enter your email"
                    class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                    onChange={(e)=>setEmail(e.target.value)}
                    /></div>
                    <div class="m-5">
                        <button class="bg-green-700 px-3 py-2 rounded text-white font-semibold ">Submit</button>
                    </div>

                </form>
                

            </div>
             
        </div>
    )
}

export default Create;