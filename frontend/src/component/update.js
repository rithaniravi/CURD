import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from"axios"

const Update=()=>{
    const{id} =useParams()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUser/`+id)
        .then(res=>{console.log(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
            setAge(res.data.age)
        })
        .catch(err=>console.log(err))
    },[])
    const handleSubmit=(e)=>{  e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/updateUser/`+id,{name,email,age})
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
                <h2 class="font-blod text-4xl px-5">Update user</h2>
                <div class="m-5">
                <input
                type="text"
                required="required"
                placeholder="Enter your name"
                class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <div class="m-5">
                <input
                type="number"
                required="required"
                placeholder="Enter your Age"
                class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                /></div>
                <div class="m-5">
                <input
                type="text"
                required="required"
                placeholder="Enter your email"
                class="w-64 h-10 bg-gray-200 rounded pl-3 outline-none"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                /></div>
                <div class="m-5">
                    <button class="bg-green-700 px-3 py-2 rounded text-white font-semibold ">Update</button>
                </div>

            </form>
            

        </div>
         
    </div>
    )
}

export default Update;