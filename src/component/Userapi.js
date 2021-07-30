import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Card from './Card';
import  './userapi.css';

function Userapi() {

    const [names, setNames] = useState([])
    const [user, setuser] = useState([])

    useEffect(() =>{
        axios.get("https://randomuser.me/api/?results=10").then(
               response => {
                   const username= response.data.results
                   console.log("1",username)
                   setNames(username)
                   setuser(username)
               }
           )
            },[])

                const changehandle = (e) =>{
                    const value = e.target.value;
                    const filtered = user.filter((item) =>{
                        return `${item.name.first} ${item.name.last}`.toLowerCase()
                        .includes(value.toLowerCase())
                        console.log("3",filtered) 
                    })
                     setNames(filtered)      
                }

    return (
        <div className='userapiheader'>
            <div className='user-inner'>
            <h1>USER CARD</h1>
            <input type="text" placeholder="search..."  onChange={changehandle}/>
            </div>
            <div className="userapi">
            {names.map((users, index) => (
                <Card users={users} key={index}/>
            ))}
            </div>
        </div>
    );
}

export default Userapi
