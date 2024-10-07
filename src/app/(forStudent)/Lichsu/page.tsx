'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Lichsu =()=>{
    const router = useRouter()
    const handelButton=()=>{
       router.push("/")
    }
    return (
        <div>
            <ul>
                Lịch sử in
            </ul>

            <div>
                <Button onClick={()=>handelButton()}>trở lại</Button>
            </div>
      </div>
    )
}
export default Lichsu;