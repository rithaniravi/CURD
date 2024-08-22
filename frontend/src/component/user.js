import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const User=()=>{
    const[user,setUser]=useState([])

    useEffect(()=>{
        axios.get("https://curd-fea3.onrender.com")
        .then(res=>{setUser(res.data)
            } )
        .catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deleteUser/`+id)
        .then(res=>{console.log(res)
             window.location.reload()})
        .catch(err=>console.log(err))
      
    }
    return(
        <div class="w-screen h-screen bg-lime-200">
            
            <div class="container-body grid justify-items-center">
                    <h5 class="font-bold my-10">CURD Operation</h5>
                    <Link to="/create"><button class="px-7 py-3 bg-green-900 m-2 text-white font-semibold rounded">Add</button></Link>
                <table class="table border-collapse border border-slate-500 table-auto w-1/2 h-1/2 mx-auto rounded m-4">
                    
                    <thead>
                        <tr class="bg-lime-950 text-white">
                            <th class="border border-slate-600 text-center p-4">Name</th>
                            <th class="border border-slate-600 text-center p-6">Age</th>
                            <th class="border border-slate-600 text-center p-4">Email</th>
                            <th class="border border-slate-600 text-center p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        { 
                         user.map((user)=>{
                            return <tr>
                                <td class="border border-slate-700 text-center p-4">{user.name}</td>
                                <td class="border border-slate-700 text-center p-4">{user.age}</td>
                                <td class="border border-slate-700 text-center p-4">{user.email}</td>
                                <td class="border border-slate-700 text-center p-4">
                                    <Link to={`/update/${user._id}`} 
                                      class="px-3 py-2 bg-blue-700 m-2 text-white font-semibold rounded">Update 
                                    </Link>
                                   <button
                                    onClick={(e)=>handleDelete(user._id)}
                                   class="px-3 py-2 bg-red-700 m-2 text-white font-semibold rounded">Delete</button>
                                </td>
                                
                            </tr>

                                
                             
                        })}
                       

                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default User;