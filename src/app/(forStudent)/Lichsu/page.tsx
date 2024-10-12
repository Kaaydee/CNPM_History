'use client'

import PrintHistory from "@/app/(forStudent)/Lichsu/H_component/Histable";

// import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"

import useSWR from "swr";
const Lichsu =()=>{
  const fetcher = (url:string)=>fetch(url).then((res)=>res.json());
  
  const {data, error,isLoading}=useSWR(
    "http://localhost:8000/blogs",fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if(!data){
    return <div className="text-red-700 text-center font-semibold">Loading...</div>
  }
  console.log('>>>>check res:', data);

  return (
    <PrintHistory blog={data}></PrintHistory>
  )
}
export default Lichsu;



// const router = useRouter()
// const handelButton=()=>{
//    router.push("/")
// }
{/* <ul>
    Lịch sử in
</ul>

<div>
    <Button onClick={()=>handelButton()}>trở lại</Button>
</div> */}
