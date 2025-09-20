"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/cardiology/cardiology.webp";
import Accordion from "@/components/Accordion";
import DoctorSlider from "@/components/Slicksliderdoctor";
import Faq from "@/components/Faq";
import Link from "next/link";
import Checklight from "@/assets/home/check-light.svg";



// Sidebar Sections
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "faqs", label: "FAQs" },
];

// Accordion Data (Services)
const accordionData = [
  {
    title: <>Adult Cardiology</>,
    content: (
      <div className="text-sm space-y-3">
        <p>
          A branch of cardiology focused on diagnosing and treating heart and
          blood vessel disorders in adults. Our expert cardiologists provide
          comprehensive care for conditions such as congenital heart disease,
          heart failure, coronary artery disease, valvular heart disease, and
          arrhythmias.
        </p>
        <p>
          Our hospital offers a full range of advanced diagnostics: ECG,
          Echocardiogram, TMT, Holter Monitoring, Ambulatory BP Monitoring,
          Tilt Table Testing, Cardiac CT, MRI, and Nuclear Heart Scanning.
        </p>
      </div>
    ),
  },
  {
    title: <>Interventional Cardiology</>,
    content: (
      <div className="text-sm space-y-3">
        <p>
          Our Interventional Cardiology Centre is renowned for its Primary
          Angioplasty Program – the gold standard in heart attack treatment.
          Coronary angiograms and elective stenting are performed daily with
          high success rates.
        </p>

        <p>
          We also perform advanced structural interventions like TAVI, BMV,
          TEVAR, EVAR, renal artery stenting, and subclavian artery stenting.
          Most patients are discharged within 1–2 days.
        </p>

        <div>
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-2">
            FFR / iFR
          </h4>
          <p>
            Used in cath labs to assess coronary artery narrowing and avoid
            unnecessary stenting.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[16px] text-[#2B3990] mb-2">
            IVUS / OCT
          </h4>
          <p>
            Advanced imaging for precise visualization of blood vessels during
            angioplasty.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: <>Electrophysiology</>,
    content: (
      <p className="text-sm mt-2">
        Focuses on diagnosing and treating abnormal heart rhythms. We provide
        3D mapping, RF ablation, pacemaker implantation, ICDs, and cardiac
        resynchronization therapy, performed by expert electrophysiologists.
      </p>
    ),
  },
  {
    title: <>Paediatric Cardiology</>,
    content: (
      <p className="text-sm mt-2">
        Specialized care for congenital heart defects, pediatric heart failure,
        and rhythm disturbances using both interventional and non-invasive
        methods.
      </p>
    ),
  },
  {
    title: <>Non-Invasive Cardiology</>,
    content: (
      <p className="text-sm mt-2">
        Includes diagnostic services like ECG, Echo, TMT, Holter monitoring,
        ambulatory BP monitoring, Dobutamine stress Echo, and TEE.
      </p>
    ),
  },
  {
    title: <>Cardiac Rehabilitation</>,
    content: (
      <p className="text-sm mt-2">
        Supports patients in regaining strength and independence post-surgery
        with guided exercise and recovery programs.
      </p>
    ),
  },
  {
    title: <>Preventive Cardiology</>,
    content: (
      <div className="text-sm space-y-3">
        <p>
          Helps reduce heart disease risk by managing diabetes, hypertension,
          cholesterol, obesity, and family history.
        </p>
        <p>
          Includes personalized diet, exercise, stress management, and regular
          screenings for long-term heart health.
        </p>
      </div>
    ),
  },
];

// FAQ Data
const faq = [
  {
    title: <>Which is the Best Heart Specialist Hospital in Erode?</>,
    content: (
      <p className="text-sm text-gray-700">
        Sudha Multispeciality Hospital is recognized as the best cardiology
        hospital in Erode, trusted for advanced technology, expert doctors, and
        24/7 cardiac care.
      </p>
    ),
  },
  {
    title: <>When to see a heart doctor?</>,
    content: (
      <p className="text-sm text-gray-700">
        If you have chest pain, irregular heartbeat, shortness of breath,
        dizziness, or risk factors like diabetes, high cholesterol, or obesity,
        consult a cardiologist.
      </p>
    ),
  },
  {
    title: <>How can I improve my heart health quickly?</>,
    content: (
      <p className="text-sm text-gray-700">
        Exercise regularly, eat healthy, avoid smoking/alcohol, and manage
        stress. Regular monitoring ensures better outcomes.
      </p>
    ),
  },
  {
    title: <>How can I prevent heart attacks?</>,
    content: (
      <p className="text-sm text-gray-700">
        Control blood pressure, manage diabetes, follow a heart-healthy diet,
        exercise, and undergo regular screenings.
      </p>
    ),
  },
  {
    title: <>Can heart diseases be cured?</>,
    content: (
      <p className="text-sm text-gray-700">
        Some can be managed with lifestyle changes, while others need lifelong
        care. Modern procedures like angioplasty and bypass improve quality of
        life significantly.
      </p>
    ),
  },
  {
    title: <>What is a normal heart rate?</>,
    content: (
      <p className="text-sm text-gray-700">
        For adults: 60–100 bpm. Athletes may have a lower rate. See a doctor if
        consistently outside this range.
      </p>
    ),
  },
  {
    title: <>What is the normal BP for heart patients?</>,
    content: (
      <p className="text-sm text-gray-700">
        Typically around 120/80 mmHg, but varies individually. Regular
        monitoring helps prevent complications.
      </p>
    ),
  },
];

export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");

  // Intersection Observer for Active Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    serviceSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Enable smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex md:mt-0 mt-4 flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl p-4 sm:p-6">
          <h3 className="text-[16px] text-center font-bold mb-5">
            Comprehensive Cardiology Care
          </h3>
          <ul className="space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : "false"}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${isActive ? "bg-[#2B3990]" : "bg-gray-300"
                          }`}
                      />
                      <span
                        className={`text-[15px] font-bold transition-colors ${isActive ? "text-[#2B3990]" : "text-black"
                          } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2B3990] transition transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>


        <div className="hidden md:block">
          {/* Sudha Hospital Info */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[20px] font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />
            <ul className="space-y-4 text-start mt-4">
              {[
                " 1,00,000+ successful cardiology surgeries with world-class surgeons and facilities.",
                "Your trusted partner for every medical need.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1 text-[14px] font-semibold"
                >
                  <Image
                    className="mt-1"
                    src={Checklight}
                    alt="tick"
                    width={12}
                    height={10}
                  />
                  {item}
                </li>
              ))}
            </ul>


            <button className="btn-white mt-5">
              Book an Appointment <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Find a Doctor */}
          <Link href="/find-a-doctor" >

            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3

                  className="text-[24px] sm:text-xl  font-bold leading-snug"
                >
                  Find a <br className="hidden sm:block" /> Doctor?
                </h3>
              </div>

              {/* Image Section */}
              <div className="">
                <Image
                  src={doctorImg}
                  alt="Doctor"
                  className="rounded-lg w-full customposition  h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        </div>


      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-0">
        {serviceSections.map(({ id, label }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="Cardiology Department"
                  loading="lazy"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-2">
                  <h2 className="text-[24px]">
                    Best Cardiology Hospital in{" "}
                    <span className="text-[#2B3990]">Erode</span>
                  </h2>
                  <p>
                    The cardiology department at Sudha Multispeciality Hospital
                    has treated lakhs of patients since being founded by
                    Dr. D. Kandaswamy. With the best cardiologists in Erode, we
                    remain a pioneer in heart care.
                  </p>
                  <p>
                    We specialize in everything from pediatric to adult heart
                    diseases, providing world-class care backed by
                    international facilities.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul className="space-y-3 mt-3 text-[#5E566A] text-[15px] font-semibold">
                  <li>
                    <span className="inline-block w-2 h-2 mr-2 rounded bg-[#2B3990]" />
                    World-class ICCUs Cardiac catheterization laboratories with advanced facilities and equipment for 24/7 emergency cardiovascular procedures.
                  </li>
                  <li>
                    <span className="inline-block w-2 h-2 mr-2 rounded bg-[#2B3990]" />
                    Best non-invasive diagnostic setup with (number) latest ECHO machines, Treadmill tests, Holter monitoring, ambulatory BP monitoring
                  </li>
                  <li>
                    <span className="inline-block w-2 h-2 mr-2 rounded bg-[#2B3990]" />
                    Nuclear Cardiac Imaging with myocardial perfusion imaging and Cardiac PET-CT
                  </li>
                  <li>
                    <span className="inline-block w-2 h-2 mr-2 rounded bg-[#2B3990]" />
                    Advanced electrophysiology lab with 3D mapping
                  </li>
                  <li>
                    <span className="inline-block w-2 h-2 mr-2 rounded bg-[#2B3990]" />
                    Advanced pediatric interventions
                  </li>
                </ul>
              </>
            )}

            {id === "services" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Services</h2>
                <Accordion accordionData={accordionData} />
              </div>
            )}

            {id === "doctors" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5">Doctors</h2>
                <DoctorSlider specialty="Cardiology" counter={3} />
              </div>
            )}

            {id === "faqs" && (
              <div className="space-y-2">
                <h2 className="text-[24px] mt-5 ">
                  Frequently Asked Questions
                </h2>
                <Faq faq={faq} />
              </div>
            )}
          </section>
        ))}
      </main>

      <div className="block md:hidden">
          {/* Sudha Hospital Info */}
          <div
            className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(42, 61, 144, 0.9), rgba(12, 18, 42, 0.9)), url(${Frame.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[20px] font-bold mb-2">
              Sudha Multispeciality Hospital
            </h3>
            <hr className="border-light" />
            <ul className="space-y-4 text-start mt-4">
              {[
                " 1,00,000+ successful cardiology surgeries with world-class surgeons and facilities.",
                "Your trusted partner for every medical need.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1 text-[14px] font-semibold"
                >
                  <Image
                    className="mt-1"
                    src={Checklight}
                    alt="tick"
                    width={12}
                    height={10}
                  />
                  {item}
                </li>
              ))}
            </ul>


            <button className="btn-white mt-5">
              Book an Appointment <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Find a Doctor */}
          <Link href="/find-a-doctor" >

            <div
              className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
              style={{
                background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
              }}
            >
              {/* Text Section */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
                <h3

                  className="text-[24px] sm:text-xl  font-bold leading-snug"
                >
                  Find a <br className="hidden sm:block" /> Doctor?
                </h3>
              </div>

              {/* Image Section */}
              <div className="">
                <Image
                  src={doctorImg}
                  alt="Doctor"
                  className="rounded-lg w-full customposition  h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
    </div>
  );
}
