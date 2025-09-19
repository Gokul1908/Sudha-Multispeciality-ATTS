"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import AppointmentImage from "@/assets/bookappointmentmodal/consultation-form.webp";

const BookAppointmentModal = ({ open, onClose }) => {
  const modalRef = useRef(null);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-2 sm:px-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative bg-[#EEF6FF] rounded-3xl shadow-lg w-full max-w-lg sm:max-w-2xl md:max-w-6xl mx-auto 
             overflow-hidden grid md:grid-cols-2 
             max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Left Side Image (hidden on mobile) */}
        <div className="relative hidden md:block">
          <Image
            src={AppointmentImage}
            alt="Appointment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-8 md:p-12 bg-white relative">
          <h2 className="text-[22px] font-extrabold mb-6 md:mt-0 mt-4 sm:mb-8 text-center md:text-left">
            Book an Appointment for Comprehensive Medical Care
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Preferred Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-black">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-black">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-black">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-black">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-black">
                Department <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 pr-10 h-11 text-sm
              focus:outline-none focus:ring-1 focus:ring-[#2B3990] 
              appearance-none hover:bg-gray-50 cursor-pointer"
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
                </select>
                <svg
                  className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Doctor */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-black">
                Doctor <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 pr-10 h-11 text-sm
              focus:outline-none focus:ring-1 focus:ring-[#2B3990] 
              appearance-none hover:bg-gray-50 cursor-pointer"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Remarks */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-1 text-black">
                Remarks <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="Enter your remarks…"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm 
            focus:outline-none focus:ring-1 focus:ring-[#2B3990]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <Link href="/">
                <button type="submit" className="btn-diagonal">
                  Book an Appointment
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
