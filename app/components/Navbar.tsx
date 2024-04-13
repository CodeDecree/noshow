"use client"
import { useRouter } from "next/navigation"

export default function Navbar() {

    const router = useRouter();

    return <>
        <div className="top-0 h-14 fixed w-full flex items-center justify-between" style={{backgroundColor : '#2F3C46'}}>
            <img src="Group 1.svg" className=" inline h-8 ml-6 mt-1"/>
            <div className="flex items-center flex-row gap-8">
                <button className="text-white font-poppins rounded-md p-2 hover:bg-slate-800" onClick={() => router.replace('/pages/UploadCSV')}>Upload CSV</button>
                <span className="text-white">|</span>
                <button className="text-white font-poppins rounded-md p-2 hover:bg-slate-800" onClick={() => router.replace('/')}>Predictor</button>
                <span className="text-white">|</span>
                <button className="text-white font-poppins rounded-md p-2 hover:bg-slate-800" onClick={() => router.replace('/pages/Analytics')}>View Analytics</button>
            </div>
            <div/>
        </div>
    </>
}