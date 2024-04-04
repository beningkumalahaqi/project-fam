"use client"

import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";
import axios from "axios";

export default function PostList(){
    //Posts State
    const [posts, setPosts] = useState([])

  useEffect(() => {

    const getPost = async() => {
      try {
        const response = await axios.get("/api/post");
        setPosts(response.data.data)
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {posts && posts.map((p) => (
          <a
            key={p.id}
            className="card w-80 h-40 bg-base-100 shadow-xl hover:scale-90 ease-in-out duration-300 mt-10"
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
                {p.users.name}
              </h2>
              <p className="text-sm">{p.content}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}