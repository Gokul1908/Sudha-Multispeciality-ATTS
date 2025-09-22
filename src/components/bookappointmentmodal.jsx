"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import AppointmentImage from "@/assets/bookappointmentmodal/consultation-form.webp";
import toast, { Toaster } from "react-hot-toast";

const BookAppointmentModal = ({ open, onClose }) => {
  const modalRef = useRef(null);


  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    date: "",
    name: "",
    mobile: "",
    email: "",
    department: "",
    doctor: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  // Department → Doctors mapping
  const doctorsList = {
    Cardiology: ["Dr. Smith", "Dr. John"],
    Dermatology: ["Dr. Priya", "Dr. Ramesh"],
    Neurology: ["Dr. Kumar", "Dr. Anitha"],
    Orthopaedics: ["Dr. David", "Dr. Rajesh"],
  };
  if (!open) return null; // ✅ Now safe

  const validate = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.doctor) newErrors.doctor = "Doctor is required";
    if (!formData.remarks) newErrors.remarks = "Remarks are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const form = new FormData();
      form.append("date", formData.date);
      form.append("name", formData.name);
      form.append("mobile", formData.mobile);
      form.append("email", formData.email);
      form.append("department", formData.department);
      form.append("doctor", formData.doctor);
      form.append("remarks", formData.remarks);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyfAqPmwT117o8qJ2U_hEaSfh9cBlB6CjHbxtGUq7EnVQM9HzfNCen_d0JWq1Et5rVB/exec",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await res.json();

      if (result.result === "success") {
        toast.success("Appointment booked successfully!");
        setFormData({
          date: "",
          name: "",
          mobile: "",
          email: "",
          department: "",
          doctor: "",
          remarks: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error connecting to server!");
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

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            <Toaster />

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm"
              />
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date}</p>
              )}
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Name *</label>
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Mobile *</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email *</label>
              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Department */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Department *</label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                    doctor: "",
                  })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
              >
                <option value="">Select a department</option>
                {Object.keys(doctorsList).map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
              {errors.department && (
                <p className="text-red-500 text-xs">{errors.department}</p>
              )}
            </div>

            {/* Doctor */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Doctor *</label>
              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
                disabled={!formData.department}
                className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
              >
                <option value="">Select a doctor</option>
                {formData.department &&
                  doctorsList[formData.department]?.map((doc) => (
                    <option key={doc}>{doc}</option>
                  ))}
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-xs">{errors.doctor}</p>
              )}
            </div>

            {/* Remarks */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-1">Remarks *</label>
              <textarea
                rows="3"
                placeholder="Enter remarks"
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm"
              />
              {errors.remarks && (
                <p className="text-red-500 text-xs">{errors.remarks}</p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-1 mt-2">
              <button
                type="submit"
                className="btn-diagonal flex items-center gap-2"
              >
                Book an Appointment 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
