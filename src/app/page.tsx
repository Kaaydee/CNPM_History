'use client'
// import { useEffect } from "react";
// import { json } from "stream/consumers";
// import useSWR from "swr";
export default function Home() {
  // const fetcher = (url:string)=>fetch(url).then((res)=>res.json());
  
  // const {data, error,isLoading}=useSWR(
  //   "http://localhost:8000/blogs",fetcher, {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false
  //   }
  // );
  // if(!data){
  //   return <div>Loading...</div>
  // }
  // console.log('>>>>check res:', data);



  return (
    <main >
      <div>
      <p style={{ textAlign: 'justify' }}>Welcome to Home Page </p>
      </div>
    </main>
  );
}

// useEffect(()=>{
//   const fetchData= async()=>{
//     const res= await fetch("http://localhost:8000/blogs");
//     const data = await res.json();
//     console.log('check res:', data);
    
//   }
//   fetchData();
// },[])