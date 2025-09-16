"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const RegistrationForm = () => {
  return (
    <div>
      <h2 className="text-[24px] pb-5 ">Make An Appointment</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Preferred Date */}
        <div>
          <label className="text-sm font-semibold mb-1 text-black">
            Preferred Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
          />
        </div>

        {/* Name */}
        <div>
          <label className="text-sm font-semibold mb-1 text-black">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="text-sm font-semibold mb-1 text-black">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold mb-1 text-black">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
          />
        </div>

        {/* Department */}
        <div className="relative">
          <label className="text-sm font-semibold mb-1 text-black">
            Department <span className="text-red-600">*</span>
          </label>
          <select
            className="w-full border border-gray-200 rounded-lg px-4 pr-10 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990] appearance-none"
          >
            <option>Select a department</option>
                  <option>Anaesthesiology</option>
                  <option>Cardiology</option>
                  <option>Cardiothoracic Surgery</option>
                  <option>Dentistry and Oral Surgery</option>
                  <option>Dermatology</option>
                  <option>ENT</option>
                  <option>Emergency Care</option>
                  <option>Gastroenterology</option>
                  <option>Radiology</option>
                  <option>General Medicine</option>
                  <option>General Surgery</option>
                  <option>ICU</option>
                  <option>Urology</option>
                  <option>Orthopaedics</option>
                  <option>Nephrology</option>
                  <option>Neurology</option>
                  <option>Diagnostics</option>
                  <option>Obstetrics & Gynaecology</option>
                  <option>Pulmonology</option>
                  <option>Paediatrics</option>
                  <option>Neonatology</option>
                  <option>Pain Medicine</option>
                  <option>Plastic Surgery</option>
                  <option>Oncology</option>
                  <option>Laryngology</option>
            {/* ...rest */}
          </select>
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Doctor */}
        <div className="relative">
          <label className="text-sm font-semibold mb-1 text-black">
            Doctor <span className="text-red-600">*</span>
          </label>
          <select
            className="w-full border border-gray-200 rounded-lg px-4 pr-10 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990] appearance-none"
          >
            <option>Select a doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. John</option>
          </select>
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Remarks */}
        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-semibold mb-1 text-black">
            Remarks <span className="text-red-600">*</span>
          </label>
          <textarea
            rows="3"
            placeholder="Enter your remarks…"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="md:col-span-2 mt-4">
          <button type="submit" className="btn-diagonal flex items-center gap-2">
            Book an Appointment
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
