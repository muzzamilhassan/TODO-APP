'use client'
import axios from 'axios'
import React, { useState } from 'react'

const Rest = () => {
    const [data,setData]= useState([])


    
    let datashow = async () => {
       let response = await axios.get('https://api.github.com/users/mojombo')
       setData(response.data)
    }
    return (
        <div>
          <h1>name:{data.login}</h1>
            <button onClick={datashow}>Click Here</button>
        </div>
    )
}

export default Rest
