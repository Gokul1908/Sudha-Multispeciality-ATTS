"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundIMage from "../../assets/ourteam/find-doctor.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import "../Finddoctor/finddoc.css";
import { doctorsData } from "@/constants/doctorDetails";
import Accordion from "../../components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Find a Doctor", href: "/find-a-doctor" },
];

const accordionData = [
  {
    title: <>Who is the best ENT specialist in Erode?</>,
    content: (
      <p className="text-sm">
        The team of doctors in the ENT department at Sudha Multispeciality
        Hospital is regarded as the best ENT specialists in Erode, offering
        expert diagnosis and treatment for all ear, nose, and throat conditions.
      </p>
    ),
  },
  {
    title: <>Who is the best cardiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The cardiology team at Sudha Multispeciality Hospital is recognised as
        the best cardiologists in Erode, providing preventive, diagnostic, and
        interventional heart care services.
      </p>
    ),
  },
  {
    title: <>Who is the best anesthesiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The anaesthesiology team at Sudha Multispeciality Hospital is considered
        the best anaesthesiologists in Erode, ensuring safe and effective
        anaesthesia management for surgeries.
      </p>
    ),
  },
  {
    title: <>Who is the leading doctor for general medicine in Erode?</>,
    content: (
      <p className="text-sm">
        The general medicine specialists at Sudha Multispeciality Hospital are
        recognised as leaders in treating acute and chronic medical conditions.
      </p>
    ),
  },
  {
    title: <>How can I book an appointment at the Sudha Hospital in Erode?</>,
    content: (
      <p className="text-sm">
        Appointments can be booked via the hospital website’s "Book Appointment"
        option or by calling the helpline at 042-424-54545.
      </p>
    ),
  },
];

export default function Finddoctor() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // ✅ Filter doctors
  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      return (
        (!selectedSpeciality || doc.speciality === selectedSpeciality) &&
        (!selectedDoctor || doc.name === selectedDoctor)
      );
    });
  }, [selectedSpeciality, selectedDoctor]);

  // ✅ Group doctors by speciality
  const groupedBySpeciality = useMemo(() => {
    const map = new Map();
    filteredDoctors.forEach((doc) => {
      if (!map.has(doc.speciality)) map.set(doc.speciality, []);
      map.get(doc.speciality).push(doc);
    });
    return map;
  }, [filteredDoctors]);

  // ✅ Doctor names (based on selected speciality)
  const uniqueDoctors = useMemo(() => {
    const filtered = selectedSpeciality
      ? doctorsData.filter((doc) => doc.speciality === selectedSpeciality)
      : doctorsData;
    return [...new Set(filtered.map((doc) => doc.name))];
  }, [selectedSpeciality]);

  // ✅ Specialities
  const uniqueSpecialities = [
    ...new Set(doctorsData.map((doc) => doc.speciality)),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-3"
            >
              Find a Doctor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              A Heartfelt Care For Your Heart Care
            </motion.p>
          </div>

          {/* Side Info Box */}
          <div className="absolute bottom-0 right-0 z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">
                  40+
                </h3>
                <p className="text-[16px] text-black font-bold">
                  Years of Trusted <br />
                  Expertise in <br />
                  Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto pt-16">
        <div className="bg-white z-20 w-full md:w-[70%] lg:w-[50%] absolute p-8 rounded-3xl -mt-28">
          <h5 className="mb-4 text-[20px]">
            Find top specialists by department and book your appointment now.
          </h5>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Speciality Filter */}
            <select
              onChange={(e) => {
                setSelectedSpeciality(e.target.value);
                setSelectedDoctor("");
              }}
              className="border px-4 py-2 rounded-md w-full"
              value={selectedSpeciality}
            >
              <option value="">All Specialities</option>
              {uniqueSpecialities.map((speciality, i) => (
                <option key={i} value={speciality}>
                  {speciality}
                </option>
              ))}
            </select>

            {/* Doctor Filter */}
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
              disabled={!selectedSpeciality}
            >
              <option value="">
                {selectedSpeciality ? "All Doctors" : "Select Speciality First"}
              </option>
              {uniqueDoctors.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="max-w-7xl mx-auto pt-20 sm:py-16">
        {filteredDoctors.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No doctors found. Please adjust your filters.
          </p>
        ) : selectedDoctor ? (
          // ✅ Single doctor view
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="rounded-3xl w-[300px] text-start bg-white  relative">
                <Image
                  src={doc.image}
                  alt={doc.name}

                  className="mx-auto w-[100%] h-[300px]  rounded-t-2xl object-cover"
                />
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#2B3990] truncate">
                      {doc.name}
                    </h3>
                    <p className="text-sm mt-1 truncate">
                      {doc.degrees}
                    </p>
                    <p className="text-sm mt-1 line-clamp-2">
                      {doc.qualification}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href="#contactus"
                      className="btn-diagonal-outline px-6 w-full mt-4 inline-flex items-center justify-center"
                    >
                      Book an Appointment
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* <Link
                  href={`/doctor-detail/${doc.id}`}
                  className="text-[#2B3990] text-[14px] mt-4 font-semibold inline-block"
                >
                  Book an Appointment
                </Link> */}
              </div>
            ))}
          </div>
        ) : (
          // ✅ Grouped by speciality view
          [...groupedBySpeciality.entries()].map(([speciality, doctors]) => {
            const specialitySliderSettings = {
              dots: false,
              infinite: doctors.length > 4, // only infinite if enough doctors
              speed: 500,
              slidesToShow: Math.min(doctors.length, 4), // never show more than doctors available
              slidesToScroll: 1,
              centerMode: false, // ❌ prevents stretching single card
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: Math.min(doctors.length, 2),
                    infinite: doctors.length > 2,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    infinite: doctors.length > 1,
                  },
                },
              ],
            };

            return (
              <div key={speciality} className="mb-8">
                <h2 className="text-[24px] text-[#2B3990] mb-4 mt-16">
                  {speciality}
                </h2>
                <Slider {...specialitySliderSettings}>
                  {doctors.map((doc) => (
                    <div key={doc.id} className="px-2">
                      <div
                        className="w-[300px] h-auto bg-white rounded-xl"
                      >
                        {/* Image Section */}
                        <div className="w-full">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            width={300}
                            height={300}
                            className="mx-auto w-[100%] h-[300px]  rounded-t-2xl object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-[#2B3990] truncate">
                              {doc.name}
                            </h3>
                            <p className="text-sm mt-1 truncate">
                              {doc.degrees}
                            </p>
                            <p className="text-sm mt-1 line-clamp-2">
                              {doc.qualification}
                            </p>
                          </div>

                          <div className="mt-4">
                            <Link
                              href={`/doctor-detail/${doc.id}`}
                              className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2"
                            >
                              View Profile <ArrowUpRight className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })
        )}
      </div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-8 px-0 px-4">
        <h2 className="text-center text-[30px] mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion accordionData={accordionData} />
      </section>
    </>
  );
}
