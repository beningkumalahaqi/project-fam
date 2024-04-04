"use client"

import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";
import axios from "axios";



export default function CreatePost() {

    const [usersOptions, setUserOptions] = useState([])

    //Req state
    const [title, setTitle] =  useState("")
    const [content, setContent] = useState("")
    const [userSelect, setUserSelect] = useState()

    function refreshPage() {
        window.location.reload();
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post("/api/post", {
            title: content,
            content: content,
            userId: Number(userSelect)
        });

        setTitle("")
        setContent("")
        setUserSelect("")
        refreshPage()
      };

  useEffect(() => {

    const getUserOptions = async() => {
      try {
        const response = await axios.get("/api/user");
        setUserOptions(response.data.data)
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
    getUserOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="fixed bottom-0 z-50">
      <div>
        <a
          className="card w-80 bg-base-100 shadow-xl mt-10"
        >
          <div className="card-body p-5">
            <h2 className="card-title text-base">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <Image
                    height={100}
                    width={100}
                    src="/staticProfile/profileStatic.png"
                    alt="Profile picture"
                  />
                </div>
              </div>
              <div>
                <select className="select max-w-xs" value={userSelect} onChange={(e) => setUserSelect(e.target.value)}>
                  <option disabled selected>
                    User?
                  </option>
                  {usersOptions && usersOptions.map((userOp) => (
                    <option key={userOp.id} value={userOp.id} >{userOp.name}</option>
                  ))}
                </select>
              </div>
            </h2>
            <div className="flex">
            <textarea className="textarea" placeholder="What's Up?" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-14 ml-5" onClick={handleSubmit}><img src="/send (1).svg"></img></button>
            </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
