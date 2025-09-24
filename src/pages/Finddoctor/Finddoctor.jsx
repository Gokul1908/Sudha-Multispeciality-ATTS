"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundIMage from "../../assets/ourteam/find-doctor.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "../Finddoctor/finddoc.css";
import { doctorsData } from "@/constants/doctorDetails";
import Accordion from "../../components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb & FAQ Data
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Find a Doctor", href: "/find-a-doctor" },
];

const accordionData = [
  {
    title: <>Who is the best ENT specialist in Erode?</>,
    content: (
      <p className="text-sm">
        The team of doctors in the ENT department at Sudha Multispeciality Hospital is regarded as the best ENT specialists in Erode, offering expert diagnosis and treatment for all ear, nose, and throat conditions using advanced facilities.
      </p>
    ),
  },
  {
    title: <>Who is the best cardiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The team of doctors in the cardiology department at Sudha Multispeciality Hospital is recognised as the best cardiologists in Erode, providing comprehensive heart care, including preventive, diagnostic, and interventional cardiology services.
      </p>
    ),
  },
  {
    title: <>Who is the best anesthesiologist in Erode?</>,
    content: (
      <p className="text-sm">
        The team of doctors in the anaesthesiology department at Sudha Multispeciality Hospital is considered the best anaesthesiologists in Erode, ensuring safe and effective anaesthesia management for all types of surgical procedures.
      </p>
    ),
  },
  {
    title: <>Who is the leading doctor for general medicine in Erode?</>,
    content: (
      <p className="text-sm">
        The team of specialists in general medicine department at Sudha Multispeciality Hospital is recognised as the leading general medicine doctors in Erode, delivering expert care for a wide range of acute and chronic medical conditions.
      </p>
    ),
  },
  {
    title: <>How can I book an appointment at the Sudha Hospital in Erode?</>,
    content: (
      <p className="text-sm">
        Appointments at Sudha Multispeciality Hospital in Erode can be booked conveniently via the hospital website using the "Book Appointment" option or by calling the dedicated helpline at 042-424-54545.
      </p>
    ),
  },
];

// ✅ Custom Bottom-Right Slider Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute bottom-[-50px] right-0 z-10 w-9 h-9 bg-[#2B3990] flex justify-center items-center rounded-full cursor-pointer text-white"
  >
    <ChevronRight className="w-4 h-4" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute bottom-[-50px] right-12 z-10 w-9 h-9 bg-white border border-[#2B3990] flex justify-center items-center rounded-full cursor-pointer text-[#2B3990]"
  >
    <ChevronLeft className="w-4 h-4" />
  </div>
);

export default function Finddoctor() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const filteredDoctors = useMemo(() => {
    if (selectedDoctor) return doctorsData.filter((doc) => doc.name === selectedDoctor);
    if (selectedSpeciality) return doctorsData.filter((doc) => doc.speciality === selectedSpeciality);
    return doctorsData;
  }, [selectedSpeciality, selectedDoctor]);

  const groupedBySpeciality = useMemo(() => {
    const map = new Map();
    filteredDoctors.forEach((doc) => {
      if (!map.has(doc.speciality)) map.set(doc.speciality, []);
      map.get(doc.speciality).push(doc);
    });
    return map;
  }, [filteredDoctors]);

  const uniqueDoctors = useMemo(() => {
    const filtered = selectedSpeciality
      ? doctorsData.filter((doc) => doc.speciality === selectedSpeciality)
      : doctorsData;
    return [...new Set(filtered.map((doc) => doc.name))];
  }, [selectedSpeciality]);

  const uniqueSpecialities = [...new Set(doctorsData.map((doc) => doc.speciality))];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-[400px]"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-sm mb-4">
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl mb-3">
              Find a Doctor
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-white text-sm sm:text-base">
              A Heartfelt Care For Your Heart Care
            </motion.p>
          </div>

          {/* Side Info Box */}
          <div className="absolute bottom-0 right-0 z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">40+</h3>
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
      <div className="max-w-7xl mx-auto pt-16 relative px-4 sm:px-0 z-20">
        <div className="bg-white w-full md:w-[70%] lg:w-[50%] p-6 md:p-8 rounded-3xl -mt-28 mx-auto shadow-lg relative z-20">
          <h5 className="mb-4 text-[18px] sm:text-[20px] text-center md:text-left">
            Find top specialists by department and book your appointment now.
          </h5>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              onChange={(e) => { setSelectedSpeciality(e.target.value); setSelectedDoctor(""); }}
              className="border px-4 py-2 rounded-md w-full"
              value={selectedSpeciality}
            >
              <option value="">All Specialities</option>
              {uniqueSpecialities.map((speciality, i) => (
                <option key={i} value={speciality}>{speciality}</option>
              ))}
            </select>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
              disabled={!selectedSpeciality}
            >
              <option value="">{selectedSpeciality ? "All Doctors" : "Select Speciality First"}</option>
              {uniqueDoctors.map((name, i) => <option key={i} value={name}>{name}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="max-w-7xl mx-auto pt-20 sm:py-16 px-4 sm:px-0">
        {filteredDoctors.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No doctors found. Please adjust your filters.
          </p>
        ) : selectedDoctor ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="rounded-3xl w-full max-w-[300px] text-start bg-white mx-auto">
                <Image src={doc.image} alt={doc.name} className="mx-auto w-full h-[300px] rounded-t-2xl object-cover" />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#2B3990] truncate">{doc.name}</h3>
                    <p className="text-sm mt-1 truncate">{doc.degrees}</p>
                    <p className="text-sm mt-1 line-clamp-2">{doc.qualification}</p>
                  </div>
                  <div className="mt-4">
                    <Link href="#contactus" className="btn-diagonal-outline px-6 w-full mt-4 inline-flex items-center justify-center">
                      Book an Appointment <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          [...groupedBySpeciality.entries()].map(([speciality, doctors]) => {
            const specialitySliderSettings = {
              dots: false,
              infinite: doctors.length > 1,
              speed: 500,
              slidesToShow: Math.min(doctors.length, 4),
              slidesToScroll: 1,
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: Math.min(doctors.length, 2), infinite: doctors.length > 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1, infinite: doctors.length > 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1, infinite: doctors.length > 1, arrows: false } },
              ],
            };

            return (
              <div key={speciality} className="mb-8 relative">
                <h2 className="text-[24px] text-[#2B3990] mb-4 mt-16">{speciality}</h2>
                <Slider {...specialitySliderSettings}>
                  {doctors.map((doc) => (
                    <div key={doc.id} className="px-2">
                      <div className="w-full max-w-[300px] h-auto bg-white rounded-xl mx-auto">
                        <Image src={doc.image} alt={doc.name} width={300} height={300} className="mx-auto w-full h-[300px] rounded-t-2xl object-cover" />
                        <div className="p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-[#2B3990] truncate">{doc.name}</h3>
                            <p className="text-sm mt-1 truncate">{doc.degrees}</p>
                            <p className="text-sm mt-1 line-clamp-2">{doc.qualification}</p>
                          </div>
                          <div className="mt-4">
                            <Link href={`/doctor-detail/${doc.id}`} className="btn-diagonal-outline px-8 w-full mt-6 flex items-center justify-center gap-2">
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
      <section className="max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h2 className="text-center text-[30px] mb-8">Frequently Asked Questions</h2>
        <Accordion accordionData={accordionData} />
      </section>
    </>
  );
}
