import React, { useState } from 'react';
import { QuoteFormData } from '../types';

export const QuotationSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    mobile: '',
    location: '',
    propertyType: '',
    area: '',
    service: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setIsSubmitting(true);
  //   setErrorMessage('');

  //   try {
  //     const response = await fetch('http://localhost:5000/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(
  //         data?.message || 'Failed to submit quotation request'
  //       );
  //     }

  //     console.log('API Response:', data);

  //     setIsSubmitted(true);
  //   } catch (error) {
  //     console.error('Submit Error:', error);

  //     if (error instanceof TypeError) {
  //       setErrorMessage(
  //         'Unable to connect to the server. Please make sure the backend is running on port 5000.'
  //       );
  //     } else if (error instanceof Error) {
  //       setErrorMessage(error.message);
  //     } else {
  //       setErrorMessage('Something went wrong. Please try again.');
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };



//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   setIsSubmitting(true);
//   setErrorMessage('');

//   try {
//   const response = await fetch(
//   `${import.meta.env.VITE_API_URL}/api/contact`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   }
// );

// const data = await response.json();

// if (!response.ok) {
//   throw new Error(data.message || "Something went wrong");
// }

// if (data.success) {
//   alert("Quotation submitted successfully!");
// }

//     console.log('API Response:', data);

//     setIsSubmitted(true);

//   } catch (error) {
//     console.error('Submit Error:', error);

//     if (error instanceof TypeError) {
//       setErrorMessage(
//         'Unable to connect to the server. Please try again later.'
//       );
//     } else if (error instanceof Error) {
//       setErrorMessage(error.message);
//     } else {
//       setErrorMessage('Something went wrong. Please try again.');
//     }

//   } finally {
//     setIsSubmitting(false);
//   }
// };


const API_URL = import.meta.env.VITE_API_URL;

console.log("========== API DEBUG ==========");
console.log("API_URL:", API_URL);
console.log("ENV:", import.meta.env);
console.log("===============================");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);
  setErrorMessage("");

  try {
    console.log("API URL:", API_URL);

    if (!API_URL) {
      throw new Error("API URL is not configured.");
    }

    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    if (data.success) {
      alert("Quotation submitted successfully!");
      setIsSubmitted(true);
    }

  } catch (error) {
    console.error("Submit Error:", error);

    if (error instanceof TypeError) {
      setErrorMessage(
        "Unable to connect to the server. Please try again later."
      );
    } else if (error instanceof Error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }

  } finally {
    setIsSubmitting(false);
  }
};



  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      location: '',
      propertyType: '',
      area: '',
      service: '',
      requirements: '',
    });

    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section
      id="quotation"
      className="py-16 md:py-24 bg-[#1E232A] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT SECTION */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left max-w-xl mx-auto lg:max-w-none w-full">

            <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-brand-orange/30 inline-block">
              Fast Free Estimation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Get Your Free Painting Quotation
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
             Get a free quote for <strong>house painting, interior painting, exterior painting, texture painting, waterproofing</strong>, and commercial painting services in <strong> Pune and Solapur</strong>. Share your property details and our professional <strong>painters in Pune</strong> will contact you for an estimate and free site inspection.
            </p>

            {/* mobile */}
            <div className="space-y-3 pt-2 text-left">

              <a
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-brand-orange transition-colors"
                href="tel:8793600635"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <i className="fa-solid fa-mobile text-lg"></i>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Direct Helpline
                  </p>

                  <p className="text-sm font-bold text-white">
                    +91 87936 00635
                  </p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 transition-colors"
                href="https://wa.me/918793600635"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    WhatsApp Instant Quote
                  </p>

                  <p className="text-sm font-bold text-white">
                    87936 00635 (Tap to Chat)
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">

                <div className="w-10 h-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Operational Base
                  </p>

                  <p className="text-sm font-bold text-white">
                    Mundhwa - Kharadi Rd, Pune, Maharashtra 411036
                  </p>
                </div>

              </div>

            </div>

            {/* FEATURES */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-slate-400">

              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check text-brand-orange"></i>
                100% Free Site Visit
              </span>

              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check text-brand-orange"></i>
                Fixed Price Guarantee
              </span>

              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check text-brand-orange"></i>
                Verified Crew
              </span>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 max-w-2xl mx-auto lg:max-w-none w-full">

            <div className="bg-white text-slate-900 p-5 sm:p-8 rounded-3xl shadow-2xl border border-slate-200">

              <div className="border-b border-slate-100 pb-4 mb-6">

                <h3 className="text-lg sm:text-xl font-bold">
                  Request Painting Estimate
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Please provide basic details about your painting requirement.
                </p>

              </div>

              {/* SUCCESS */}
              {isSubmitted ? (

                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">

                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>

                  <div>

                    <h4 className="text-base font-bold text-emerald-950">
                      Thank you, {formData.name || 'Valued Customer'}!
                    </h4>

                    <p className="text-xs text-emerald-800 mt-2 leading-relaxed">
                      We have received your quotation request for{' '}
                      {formData.location || 'Pune'}.
                      A Soham Painting representative will contact you
                      shortly at{' '}
                      <strong>
                        {formData.mobile || 'your number'}
                      </strong>
                      .
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <span>Submit Another Request</span>
                    <i className="fa-solid fa-arrow-rotate-right"></i>
                  </button>

                </div>

              ) : (

                <form
                  id="quote-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* ERROR */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      <i className="fa-solid fa-circle-exclamation mr-2"></i>
                      {errorMessage}
                    </div>
                  )}

                  {/* NAME + mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Your Name *
                      </label>

                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Shinde"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-mobile"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Mobile Number *
                      </label>

                      <input
                        id="form-mobile"
                        name="mobile"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                  </div>

                  {/* LOCATION + PROPERTY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label
                        htmlFor="form-location"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Location / Area in Pune *
                      </label>

                      <input
                        id="form-location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Kharadi, Hadapsar, Baner"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-property"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Property Type *
                        {/* Property Type */}
                      </label>

                      <select
                        id="form-property"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="">
                          Select Property Type
                        </option>

                        <option value="1BHK">
                          1 BHK Apartment
                        </option>

                        <option value="2BHK">
                          2 BHK Apartment
                        </option>

                        <option value="3BHK">
                          3 BHK Apartment
                        </option>

                        <option value="Villa">
                          Independent Villa / Row House
                        </option>

                        <option value="Commercial">
                          Office / Commercial Space
                        </option>

                        <option value="ExteriorOnly">
                          Exterior Building
                        </option>
                      </select>
                    </div>
                    
                  </div>

                  {/* AREA + SERVICE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label
                        htmlFor="form-area"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Approx. Carpet Area (Sq. Ft)
                      </label>

                      <input
                        id="form-area"
                        name="area"
                        type="text"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g. 950 sq.ft"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-service"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Service Required *
                      </label>

                      <select
                        id="form-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="">
                          Select Primary Service
                        </option>

                        <option value="Interior">
                          Interior Painting
                        </option>

                        <option value="Exterior">
                          Exterior Painting
                        </option>

                        <option value="Waterproofing">
                          Waterproofing Treatment
                        </option>

                        <option value="FalseCeiling">
                          False Ceiling Painting
                        </option>

                        <option value="Texture">
                          Texture / Accent Painting
                        </option>

                        <option value="WoodPolish">
                          Wooden Polish
                        </option>

                        <option value="Complete">
                          Complete Home Makeover
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* requirements */}
                  <div>

                    <label
                      htmlFor="form-requirements"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Additional Requirements / requirements
                    </label>

                    <textarea
                      id="form-requirements"
                      name="requirements"
                      rows={3}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Mention any dampness, seepage, preferred start date or paint brand preference..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    id="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-sm shadow-orange-md transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-slate-700 cursor-not-allowed'
                        : 'bg-brand-orange hover:bg-brand-orangeHover'
                    }`}
                  >

                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </>
                    )}

                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
