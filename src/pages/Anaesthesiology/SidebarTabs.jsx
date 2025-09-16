"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame from "@/assets/about/frame.png";
import doctorImg from "@/assets/about/doctorImg.png";
import aboutOverview from "@/assets/specialites/Anaesthesia/anaesthesiology-inner.webp";
import Accordion from "../../components/Accordion";
import DoctorSlider from "../../components/Slicksliderdoctor";
import Checklight from "@/assets/home/check-light.svg";
import Link from "next/link";
// ---------------- Accordion Data ----------------
const accordionData = [
  {
    title: <div className="flex gap-3">General Anaesthesia</div>,
    content: (
      <div className="space-y-4">
        <p>
          Our general anaesthesia services are designed to ensure complete
          patient safety, comfort, and optimal surgical conditions across a wide
          range of specialties. Recognised as one of the best anaesthesiology
          hospitals, our team delivers tailored care to patients undergoing
          complex and routine surgeries alike.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          Our General Anaesthesia services are provided for:
        </h4>
        <ul className="space-y-4">
          {[
            "General and Laparoscopic Surgeries",
            "Orthopaedic and Joint Replacement Procedures",
            "Paediatric and Neonatal Surgeries",
            "Urological and Gynaecological Interventions",
            "Neurosurgical and Spine Procedures",
            "Oncological Surgeries",
            "Emergency and Trauma Care",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[14px] font-semibold"
            >
              <Image src={Checklight} alt="tick" width={24} height={24} />
              {item}
            </li>
          ))}
        </ul>

        <p>
          Each patient receives a comprehensive pre-anaesthetic assessment, where
          our anaesthetists review medical history, conduct investigations, and
          plan the safest approach.
        </p>
        <p>
          During surgery, patients are continuously monitored using advanced
          haemodynamic and respiratory monitors. Our modern workstations ensure
          precise delivery and safety.
        </p>
        <p>
          Postoperatively, patients are transferred to our Post-Anaesthesia Care
          Unit (PACU) where recovery is closely monitored.
        </p>
      </div>
    ),
  },
  {
    title: <div className="flex gap-3">Cardiac Anaesthesia</div>,
    content: (
      <div className="space-y-4">
        <p>
          Sudha Multispeciality Hospital is a trusted name in Cardiac
          Anaesthesia, delivering advanced care for heart procedures for over 40
          years. Our team works closely with cardiologists and surgeons to
          ensure safe outcomes.
        </p>

        <h4 className="font-bold text-[16px] text-[#2B3990]">
          Specialised anaesthesia services for:
        </h4>
        <ul className="space-y-4">
          {[
            "Coronary Artery Bypass Grafting (CABG)",
            "Valve Repair and Replacement Surgeries",
            "Congenital Heart Defect Corrections",
            "Aortic Aneurysm Repairs",
            "Minimally Invasive Cardiac Procedures",
            "Cath Lab Interventional Cardiology Support",
            "Electrophysiology Procedures & Pacemaker Implantations",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[14px] font-semibold"
            >
              <Image src={Checklight} alt="tick" width={24} height={24} />
              {item}
            </li>
          ))}
        </ul>

        <p>
          Our theatres feature advanced workstations, invasive monitoring,
          transoesophageal echocardiography (TOE), and real-time haemodynamic
          tools.
        </p>
        <p>
          From pre-op evaluation to post-op intensive care, we provide vigilant,
          personalised cardiac anaesthesia care.
        </p>
        <p>
          With decades of expertise, Sudha continues to be recognised among the
          best Cardiac Anaesthesia Centres in Erode.
        </p>
      </div>
    ),
  },
];

// ---------------- Sidebar Tabs ----------------
const serviceSections = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
];

// ---------------- Component ----------------
export default function SidebarTabs() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 lg:sticky top-24 h-fit space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl p-4 sm:p-6">
          <h3 className="text-[16px] text-center font-bold mb-5">
            Quality Anaesthetic Care
          </h3>
          <ul className="space-y-3">
            {serviceSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="flex justify-between items-center group transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${isActive ? "bg-[#2b3990]" : "bg-gray-300"
                          }`}
                      />
                      <span
                        className={`text-[15px] font-bold transition-colors ${isActive ? "text-[#2b3990]" : "text-black"
                          } group-hover:text-[#2A3D90]`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#2A3D90] flex items-center justify-center transition-all transform group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2b3990] transition-all transform group-hover:scale-110" />
                    )}
                  </a>
                  <hr className="my-3 border-t border-gray-100" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hospital Info Box */}
        <div
          className="relative rounded-2xl overflow-hidden text-white text-center px-8 py-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(42,61,144,0.9), rgba(12,18,42,0.9)), url(${Frame.src})`,
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
              "Experienced anaesthesiologists for all surgical specialties",
              "World-class equipment and advanced anaesthesia workstations",
              "24/7 anaesthesia support across all specialties",
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
          <button className="btn-white mt-5 flex items-center gap-2 mx-auto">
            Book an Appointment <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Find a Doctor */}
        <div
          className="mt-2 rounded-2xl md:px-6 px-6 md:py-6 py-6  flex flex-col md:flex-row flex-row items-center justify-between text-white"
          style={{
            background: "radial-gradient(circle, #9EB36A 0%, #333C22 100%)",
          }}
        >
          {/* Text Section */}
          <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
            <Link
              href="/find-a-doctor"
              className="text-[22px] sm:text-xl  font-bold leading-snug"
            >
              Find a <br className="hidden sm:block" /> Doctor?
            </Link>
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

      </aside>

      {/* Content Sections */}
      <div className="flex-1 space-y-0">
        {serviceSections.map(({ id }) => (
          <section key={id} id={id} className="scroll-mt-32 rounded-xl">
            {id === "overview" && (
              <>
                <Image
                  src={aboutOverview}
                  alt="Anaesthesiology Overview"
                  className="w-full h-[380px] rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-4">
                  <h2 className="text-[24px]">
                    Best Anaesthesiology Hospital in{" "}
                    <span className="text-[#2B3990]">Erode</span> with Four
                    Decades of Experience
                  </h2>
                  <p>
                    At Sudha Multispeciality Hospital, our Department of
                    Anaesthesia delivers round-the-clock perioperative care:
                    pre-anaesthetic evaluation, expert intraoperative management
                    & attentive postoperative monitoring.
                  </p>
                  <p>
                    Beyond the OT, our team provides anaesthesia for
                    interventional pulmonology, radiology, obstetric pain relief
                    & assisted reproductive techniques.
                  </p>
                  <p>
                    Our theatres support General Surgery, Paediatrics,
                    Orthopaedics, Urology, Oncology, Obstetrics & Neurosurgery —
                    each equipped with advanced monitoring & ultrasound-guided
                    access tools.
                  </p>
                  <p>
                    With a strong focus on safety and excellence, Sudha stands
                    as the best Anaesthesiology Hospital in Erode.
                  </p>
                </div>
              </>
            )}

            {id === "facilities" && (
              <>
                <h2 className="text-[24px] mt-5">Facilities</h2>
                <ul>
                  {[
                    "Pre-Anaesthesia Evaluation Clinic (PAC) for risk assessment",
                    "Modern Operating Theatres with advanced machines & ventilators",
                    "Post-Anaesthesia Care Unit (PACU) for safe recovery",
                    "Central Gas Supply System (O2, N2O, Air, Suction)",
                    "Latest Anaesthesia Workstations",
                    "Ultrasound for regional anaesthesia & vascular access",
                    "Non-Operating Room Anaesthesia (NORA) for radiology, pulmonology & more",
                  ].map((facility, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[#5E566A] text-[15px] font-semibold mt-3"
                    >
                      <div className="w-2 h-2 mt-1 rounded-lg bg-[#2B3990]"></div>
                      {facility}
                    </li>
                  ))}
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
              <div className="space-y-2 md:mb-0 mb-10">
                <h2 className="text-[24px] mt-5 ">Doctors</h2>
                <DoctorSlider specialty="Anaesthesia" max={4} counter={3} />
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
