import Image from 'next/image'
import React from 'react';
import Senthur from "@/assets/home/doc/senthur.webp";
import Chitra from "@/assets/renal/chitra.png";
import Link from 'next/link';



const Faculties = () => {

    const team = [
        { image: Senthur, post: "Senior Medical Resident", name: "Dr.C.Senthur Raj", specilist: "MBBS" },
        { image: Chitra, post: "Professional Transplant Coordinator", name: "Mrs.G.Chitra", specilist: "Dialysis Tech" },
       
    ]

    return (
        <div className="grid grid-cols-12 gap-8 ">
            {team.map((value, index) => {
                const isLast = index === team.length - 2; // last item
                return (
                    <div
                        key={index}
                        className={`flex flex-col text-start items-center bg-white rounded-3xl
                    col-span-12 
                    ${isLast ? 'md:col-span-3 md:col-start-4' : 'md:col-span-3'} 
                `}
                    >
                        <div className="executeimg relative w-full">
                            <Image
                                src={value.image}
                                alt="Doctor"
                                width={295}
                                height={200}
                                className="rounded-t-2xl z-10 object-cover w-full h-[300px]"
                            />
                        </div>
                        <div className="text-start p-4 w-full">
                            <span className="text-[#000000] font-bold text-[14px] ">{value.post}</span>
                            <h3 className="text-[#2B3990]  text-[16px] mt-2 mb-2">{value.name}</h3>
                            <p className="mb-2 text-[14px]">{value.specilist}</p>
                        </div>
                    </div>
                );
            })}
        </div>




    )
}

export default Faculties;