"use client";
import React from 'react';
import RegistrationForm from './Appointment';
import Image from "next/image";
import { motion } from 'framer-motion';
import Checklight from "@/assets/home/check-light.svg";

const Personalinfo = ({ doctor }) => {
  if (!doctor) {
    return <p className="p-5">Doctor info not available.</p>;
  }

  return (
    <div className="p-5">
      {/* Personal Details */}
      {doctor.personalDetails && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h3 className="text-[24px] ">{doctor.personalDetails.title}</h3>
          <p className=" mt-4">{doctor.personalDetails.description}</p>
        </motion.div>
      )}

      {/* Clinical Expertise */}
      {doctor.clinicalExpertise && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-[24px]">{doctor.clinicalExpertise.title}</h1>
          <ul className="mt-4 font-semibold text-[#5E566A] text-[15px]">
            {doctor.clinicalExpertise.list.map((item, index) => (
              <li key={index} className="flex items-start gap-5 pb-3 mt-2">
                <Image src={Checklight} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Research and Publications */}
      {doctor.researchandpublications && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-[24px]">{doctor.researchandpublications.title}</h1>
          <ul className="mt-4 font-semibold text-[#5E566A] text-[15px]">
            {doctor.researchandpublications.list.map((item, index) => (
              <li key={index} className="flex items-start gap-5 pb-3 mt-2">
                <Image src={Checklight} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Awards */}
      {doctor.awards && (
        <motion.div className="pb-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false }}>
          <h1 className="text-[24px]">{doctor.awards.title}</h1>
          <ul className=" mt-4 font-semibold text-[#5E566A] text-[15px]">
            {doctor.awards.list.map((item, index) => (
              <li key={index} className="flex items-start gap-5 pb-3 mt-2 ">
                <Image src={Checklight} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Appointment Form */}
      <div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Personalinfo;
