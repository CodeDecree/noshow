"use client"
import { tree } from "next/dist/build/templates/app-page";
import { FormEvent, useState } from "react"

export default function () {

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Gender, setGender] = useState('1');
    const [WaitingDays, setWaitingDays] = useState('');
    const [SMS, setSMS] = useState(false);
    const [Scholarship, setScholarship] = useState(false);
    const [Hypertension, setHypertension] = useState(false);
    const [Alcoholism, setAlcoholism] = useState(false);
    const [Diabetes, setDiabetes] = useState(false);
    const [Handicap, setHandicap] = useState(false);
    const [chances, setChances] = useState('??');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('age', String(Age));
        formData.append('gender', String(Gender));
        formData.append('WaitingDays', String(WaitingDays));
        formData.append('sms_received', String(Number(SMS)));
        formData.append('scholarship', String(Number(Scholarship)));
        formData.append('hypertension', String(Number(Hypertension)));
        formData.append('alcoholism', String(Number(Alcoholism)));
        formData.append('diabetes', String(Number(Diabetes)));
        formData.append('handicap', String(Number(Handicap)));

        try {
            const res = await fetch('https://noshowpredictor.onrender.com/predict', {
                method: 'POST',
                body: formData
            });
            const result = await res.json();
            console.log(result)
            setChances(result.show_percentage)
        } catch (error) {
            console.error('There was a problem with your fetch operation:', await error);
        }
    }

    return <>
        <div className=" h-svh flex justify-center items-center flex-row gap-72 mt-2">
            <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3 flex-col z-50">
                <input required={true} className="border-2 border-gray-400 bg-white shadow-md pl-2 rounded-lg w-52 font-poppins pt-1 pb-1 outline-none" placeholder="Full Name" value={Name} onChange={(e) => setName(e.target.value)} />
                <input required={true} className="border-2 border-gray-400 bg-white shadow-md pl-2 rounded-lg w-52 font-poppins pt-1 pb-1 outline-none" placeholder="Age" type="number" value={Age} onChange={(e) => setAge(e.target.value)} />
                <select className="border-2 border-gray-400 bg-white shadow-md pl-2 rounded-lg w-52 font-poppins pt-1 pb-1 outline-none" onChange={(e) => e.target.value === "Male" ? setGender("1") : setGender("0")}>
                    <option value="Male" className="font-poppins">Male</option>
                    <option value="Female" className="font-poppins">Female</option>
                </select>
                <input required={true} className="border-2 border-gray-400 bg-white shadow-md pl-2 rounded-lg w-52 font-poppins pt-1 pb-1 outline-none" placeholder="Days Since booking" type="number" value={WaitingDays} onChange={(e) => setWaitingDays(e.target.value)} />
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${SMS ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setSMS(!SMS)}
                >
                    SMS Received
                </button>
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${Scholarship ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setScholarship(!Scholarship)}
                >
                    Scholarship
                </button>
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${Hypertension ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setHypertension(!Hypertension)}
                >
                    Hypertension
                </button>
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${Alcoholism ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setAlcoholism(!Alcoholism)}
                >
                    Alcoholism
                </button>
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${Handicap ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setHandicap(!Handicap)}
                >
                    Handicap
                </button>
                <button
                    type="button"
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-gray-400 shadow-md border-2 border-gray-400 ${Diabetes ? 'bg-slate-400 text-white' : 'bg-white hover:bg-slate-400 hover:text-white'}`}
                    onClick={() => setDiabetes(!Diabetes)}
                >
                    Diabetes
                </button>
                <button
                    type="submit"
                    style={{ backgroundColor: '#2F3C46' }}
                    className={`rounded-lg w-52 font-poppins pt-1 pb-1 text-white shadow-md border-2 border-gray-400`}
                >
                    Predict
                </button>
            </form>
            <div className="flex items-center flex-col z-50 justify-center">
                <span style={{ color: '#2F3C46', fontSize: '10rem' }} className="font-poppins font-bold pb-0">{chances}%</span>
                <h4 className="font-poppins font-bold text-xl">Chances  {Name}  will  show  up</h4>
            </div>
        </div>
    </>
}