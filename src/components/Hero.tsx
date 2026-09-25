import React, { useEffect, useState } from 'react';
import heroImage from '../assets/images/hero_pune_home_1789142498839.jpg';
import offerImage from '../assets/images/Painting_offer1.jpeg';

export const Hero: React.FC = () => {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------

  const whatsappMessage = encodeURIComponent(
    'Hello Soham Painting Services, I want to avail the limited-time painting offer. Please share the offer details.'
  );

  const whatsappUrl =
    `https://wa.me/918793600635?text=${whatsappMessage}`;

  // --------------------------------------------------
  // Close modal with Escape key
  // --------------------------------------------------
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOfferOpen(false);
      }
    };

    if (isOfferOpen) {
      document.addEventListener(
        'keydown',
        handleEscape
      );

      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape
      );

      document.body.style.overflow = '';
    };
  }, [isOfferOpen]);

  return (
    <>
      {/* ==================================================
          HERO SECTION
      ================================================== */}
      <section
        id="hero"
        className="
          relative
          overflow-hidden
          border-b border-slate-100
          bg-white
          pt-8
          pb-16
          md:pt-14
          md:pb-24
        "
      >
        {/* Hero Background Image */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Subtle Pattern */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.04]
            bg-[radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:16px_16px]
          "
        />

        {/* ==================================================
            DESKTOP OFFER TAB
        ================================================== */}
        <button
          type="button"
          onClick={() => setIsOfferOpen(true)}
          aria-label="View special painting offer"
          className="
            group
            fixed
            right-0
            top-[42%]
            z-50
            hidden
            items-center
            gap-3
            rounded-l-2xl
            bg-brand-orange
            px-4
            py-3
            text-white
            shadow-2xl
            transition-all
            duration-300
            hover:pr-6
            md:flex
          "
        >
          {/* Pulse Indicator */}
          <span className="relative flex h-3 w-3">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-white
                opacity-70
              "
            />

            <span
              className="
                relative
                inline-flex
                h-3
                w-3
                rounded-full
                bg-white
              "
            />
          </span>

          {/* Text */}
          <div className="text-left">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-widest
                text-white/80
              "
            >
              Limited Time
            </p>

            <p className="text-sm font-extrabold">
              Special Offer
            </p>
          </div>

          <i
            className="
              fa-solid
              fa-chevron-left
              text-xs
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />
        </button>

        {/* ==================================================
            MOBILE BOTTOM OFFER BAR
        ================================================== */}
        <button
          type="button"
          onClick={() => setIsOfferOpen(true)}
          aria-label="View special painting offer"
          className="
            fixed
            bottom-0
            left-0
            right-0
            z-50
            flex
            items-center
            justify-between
            gap-3
            border-t
            border-slate-200
            bg-white
            px-4
            py-3
            shadow-[0_-8px_30px_rgba(0,0,0,0.18)]
            md:hidden
          "
        >
          {/* Gift Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              animate-bounce
              items-center
              justify-center
              rounded-full
              bg-orange-100
              text-brand-orange
            "
          >
            <i className="fa-solid fa-gift text-lg" />
          </div>

          {/* Offer Text */}
          <div className="min-w-0 flex-1 text-left">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-widest
                text-brand-orange
              "
            >
              Limited Time Offer
            </p>

            <p
              className="
                truncate
                text-sm
                font-extrabold
                text-slate-900
              "
            >
              Special Painting Offer
            </p>
          </div>

          {/* CTA */}
          <span
            className="
              whitespace-nowrap
              rounded-lg
              bg-brand-orange
              px-3
              py-2.5
              text-[10px]
              font-extrabold
              text-white
              sm:px-4
              sm:text-xs
            "
          >
            VIEW OFFER
          </span>
        </button>

        {/* ==================================================
            HERO CONTENT
        ================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-10
              lg:grid-cols-12
              lg:gap-12
            "
          >
            {/* Left Content */}
            <div
              className="
                space-y-6
                text-center
                lg:col-span-7
                lg:text-left
              "
            >
              {/* Main Heading */}
              <h1
                className="
                  text-[28px]
                  font-extrabold
                  leading-[1.15]
                  tracking-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                PAINTING SERVICES
                <br className="hidden sm:inline" />

                <span
                  className="
                    relative
                    inline-block
                    text-brand-orange
                  "
                >
                  IN PUNE & SOLAPUR

                  {/* Underline */}
                  <svg
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-2
                      w-full
                      text-brand-orange/60
                    "
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10, 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              {/* Service Tags */}
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                  pt-1
                  lg:justify-start
                "
              >
                {[
                  {
                    icon: 'fa-brush',
                    label: 'Interior Painting',
                  },
                  {
                    icon: 'fa-house-chimney',
                    label: 'Exterior Painting',
                  },
                  {
                    icon: 'fa-shield-halved',
                    label: 'Waterproofing',
                  },
                  {
                    icon: 'fa-border-top-left',
                    label: 'False Ceiling',
                  },
                  {
                    icon: 'fa-palette',
                    label: 'Texture Painting',
                  },
                  {
                    icon: 'fa-couch',
                    label: 'Wooden Polish',
                  },
                ].map((service) => (
                  <span
                    key={service.label}
                    className="
                      rounded-lg
                      bg-slate-100
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    <i
                      className={`fa-solid ${service.icon} mr-1.5 text-brand-orange`}
                    />

                    {service.label}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="
                  flex
                  flex-col
                  items-stretch
                  justify-center
                  gap-3.5
                  pt-3
                  sm:flex-row
                  sm:items-center
                  lg:justify-start
                "
              >
                {/* Enquiry */}
                <a
                  id="hero-quote-cta"
                  href="#quotation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-brand-orange
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-orange-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-brand-orangeHover
                    hover:shadow-orange-sm
                    sm:text-base
                  "
                >
                  <i className="fa-solid fa-calculator" />
                  <span>Enquiry Now</span>
                </a>

                {/* Call */}
                <a
                  id="hero-call-cta"
                  href="tel:8793600635"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    transition-colors
                    hover:bg-slate-800
                    sm:text-base
                  "
                >
                  <i className="fa-solid fa-phone text-brand-orange" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp */}
                <a
                  id="hero-whatsapp-cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-emerald-600
                    px-5
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    transition-colors
                    hover:bg-emerald-700
                    sm:text-base
                  "
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          OFFER MODAL
      ================================================== */}
      {isOfferOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            px-4
            py-6
            backdrop-blur-sm
          "
          onClick={() => setIsOfferOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-title"
            className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
              animate-[offerScaleIn_0.3s_ease-out]
              max-h-[92vh]
              overflow-y-auto
            "
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {/* ==================================================
                OFFER IMAGE
            ================================================== */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                bg-slate-50
              "
            >
              <img
                src={offerImage}
                alt="Special Painting Offer - Soham Painting Services"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-black/10
                "
              />

              {/* Limited Time Badge */}
              <div
                className="
                  absolute
                  left-4
                  top-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-brand-orange
                  px-3.5
                  py-1.5
                  text-[10px]
                  font-black
                  tracking-widest
                  text-white
                  shadow-lg
                  sm:text-xs
                "
              >
                <i className="fa-solid fa-bolt" />
                LIMITED TIME OFFER
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOfferOpen(false)}
                aria-label="Close offer"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/40
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-black/60
                "
              >
                <i className="fa-solid fa-xmark" />
              </button>

              {/* Animated Gift */}
              <div
                className="
                  absolute
                  bottom-[-25px]
                  left-1/2
                  h-16
                  w-16
                  -translate-x-1/2
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-brand-orange/40
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    animate-bounce
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-brand-orange
                    shadow-xl
                  "
                >
                  <i className="fa-solid fa-gift text-2xl" />
                </div>
              </div>
            </div>

            {/* ==================================================
                OFFER CONTENT
            ================================================== */}
            <div className="px-5 pb-7 pt-10 sm:px-7">
              {/* Heading */}
              {/* <div className="text-center">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  Exclusive Website Offer
                </p>

                <h2
                  id="offer-title"
                  className="
                    mt-1
                    text-2xl
                    font-black
                    text-slate-900
                    sm:text-3xl
                  "
                >
                  Special Painting Offer
                </h2>

                <p
                  className="
                    mt-1
                    text-base
                    font-bold
                    text-brand-orange
                  "
                >
                  On Selected Painting Services
                </p>
              </div> */}

              {/* ==================================================
                  BENEFITS
              ================================================== */}
              {/* <div className="mt-6 space-y-3">
                {[
                  {
                    icon: 'fa-house',
                    text: 'Free Site Inspection',
                  },
                  {
                    icon: 'fa-palette',
                    text: 'Professional Painting Consultation',
                  },
                  {
                    icon: 'fa-circle-check',
                    text: 'Quality Workmanship',
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-50
                        text-brand-orange
                      "
                    >
                      <i
                        className={`fa-solid ${item.icon} text-xs`}
                      />
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div> */}

              {/* ==================================================
                  WHATSAPP CTA
              ================================================== */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-emerald-600
                  px-5
                  py-4
                  text-base
                  font-extrabold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-emerald-700
                "
              >
                <i className="fa-brands fa-whatsapp text-xl" />

                <span>
                  Get This Offer
                </span>

                <i className="fa-solid fa-arrow-right text-sm" />
              </a>

              {/* Disclaimer */}
              <p
                className="
                  mt-3
                  text-center
                  text-[10px]
                  text-slate-400
                "
              >
                You will be redirected to WhatsApp
                to claim this offer.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          CUSTOM ANIMATION
      ================================================== */}
      <style>
        {`
          @keyframes offerScaleIn {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(10px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};