"use client";

import { useRef } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const certificates = [
  {
    title: "EPG In DS AI and ML",
    issuer: "IIT Roorkee, Intellipaat, Bangalore",
    date: "Feb 2024 to Present",
    skills: ["Python", "MSSQL", "EDA", "PowerBI", "ML", "DL", "AI"],
    credentialUrl:
      "https://drive.google.com/file/d/1ri3mfJ_4tbVd7r-GE2yOfOks4ot874xy/view?usp=sharing",
  },
  {
    title: "Google Data Analysis",
    issuer: "Coursera, Google",
    date: "May 2023",
    skills: ["Python", "Excel", "SQL"],
    credentialUrl:
      "https://drive.google.com/file/d/1tWV_db3PoNV3PAnE48cl50Xm157s_xRz/view",
  },
  {
    title: "IBM Data Science",
    issuer: "Coursera, IBM",
    date: "November 2023",
    skills: ["Python", "R", "SQL", "EDA", "ML"],
    credentialUrl:
      "https://drive.google.com/file/d/1r1a2AXQk77fgPZkJxx8B-POY2SzbCFqn/view",
  },
  {
    title: "Mathematics for ML",
    issuer: "Coursera, Imperial College of London",
    date: "January 2024",
    skills: ["Python", "Algebra", "Calculus", "PCA"],
    credentialUrl:
      "https://drive.google.com/file/d/1ZBMAWZoriarOppCJvnm1jZKnCDz3C2yT/view",
  },
  {
    title: "Prompt Engineering",
    issuer: "Coursera, Vanderbilt University",
    date: "October 2023",
    skills: ["ChatGPT", "Prompting", "Context"],
    credentialUrl:
      "https://drive.google.com/file/d/17H3T9PLwFdT2ZvejXpsnQBvbE_nUl3Vy/view",
  },
  {
    title: "Internship Certificate",
    issuer: "IPCR Kolkata",
    date: "September 2024",
    skills: ["Python", "Research", "Collaboration"],
    credentialUrl:
      "https://drive.google.com/file/d/1RUdEpdNwzWT-5zPwbsX6A3SXB1kofFgl/view",
  },
];

function CertificateCard({ certificate }) {
  return (
    <article
      className="flex h-full w-full flex-col rounded-[10px] border border-yellow-200 bg-white p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition-all duration-700 sm:p-6"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white text-[#16a34a] ring-1 ring-yellow-200">
          <TbCertificate className="h-8 w-8" />
        </div>
        <p className="text-right text-xs font-semibold uppercase tracking-[0.22em] text-[#ca8a04]">
          {certificate.date}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="wrap-break-word text-2xl font-black leading-tight tracking-normal text-[#111111] drop-shadow-[0_3px_0_rgba(250,204,21,0.12)] sm:text-3xl">
          {certificate.title}
        </h3>
        <p className="mt-3 wrap-break-word text-sm font-semibold tracking-[0.12em] text-[#16a34a] sm:text-base">
          {certificate.issuer}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {certificate.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[3px] border border-yellow-200 bg-white px-2.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#166534]"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto flex h-12 items-center justify-center gap-3 border border-[#16a34a] text-sm font-medium uppercase tracking-[0.14em] text-[#16a34a] transition hover:bg-[#facc15] hover:text-[#111111]"
      >
        View Credential
        <FiExternalLink className="h-5 w-5" />
      </a>
    </article>
  );
}

export default function Certificates() {
  const swiperRef = useRef(null);

  return (
    <section
      id="certificates"
      className="relative z-10 mx-auto flex min-h-svh w-full scroll-mt-20 flex-col justify-center overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)] px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(250,204,21,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="text-center">
        <h2 className="text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
          <span className="text-[#facc15]">Professional Credentials</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-semibold leading-6 text-white sm:text-base">
          Verified expertise in artificial intelligence and neural architectures
        </p>
      </div>

      <div className="relative mx-auto mt-7 h-110 w-full max-w-7xl">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          spaceBetween={18}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 42,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="certificates-coverflow h-full w-full overflow-visible pb-20"
        >
          {certificates.map((certificate) => (
            <SwiperSlide
              key={certificate.title}
              className="flex !h-[calc(100%-5rem)] items-stretch"
            >
              <CertificateCard certificate={certificate} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous certificate"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[10px] border border-yellow-300/70 bg-white text-[#16a34a] shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition hover:bg-[#facc15] hover:text-[#111111] sm:h-14 sm:w-14"
        >
          <FiChevronLeft className="h-9 w-9" />
        </button>

        <button
          type="button"
          aria-label="Next certificate"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[10px] border border-yellow-300/70 bg-white text-[#16a34a] shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition hover:bg-[#facc15] hover:text-[#111111] sm:h-14 sm:w-14"
        >
          <FiChevronRight className="h-9 w-9" />
        </button>
      </div>

    </section>
  );
}
