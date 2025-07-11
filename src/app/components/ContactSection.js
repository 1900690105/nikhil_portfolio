"use client";
import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  User,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  // Only run client-side effects after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) {
    return (
      <section id="contact" className="relative  py-20 px-6 sm:px-10 lg:px-24 ">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">
                Let&#39;s Connect
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I&#39;d love to
              hear from you. Let&#39;s create something amazing together.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 sm:px-10 lg:px-24 text-gray-200 overflow-hidden">
      {/* Static background elements (no dynamic positioning) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">
              Let&#39;s Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&#39;d love to hear
            from you. Let&#39;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:nikhilkandhare22@gmail.com"
                      className="text-lg font-medium hover:text-cyan-400 transition-colors"
                    >
                      nikhilkandhare22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-medium">+91 9112430021</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-medium">Nanded, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Try Response Time</p>
                    <p className="text-lg font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/nikhilkandhare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://github.com/1900690105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://unstop.com/u/nikhikan37944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send me a message
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">
                    Message sent successfully! I&#39;ll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">
                    Failed to send message. Please try again.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20"
                    />
                    <User className="absolute top-4 right-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20"
                    />
                    <Mail className="absolute top-4 right-4 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20 resize-none"
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Try to responds within a few hours if not then call me.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Mail,
//   Phone,
//   Linkedin,
//   Github,
//   Send,
//   User,
//   MessageCircle,
//   MapPin,
//   Clock,
//   Sparkles,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
//   const [mounted, setMounted] = useState(false);

//   // Only run client-side effects after component mounts
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.name.trim()) {
//       errors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Please enter a valid email";
//     }

//     if (!formData.message.trim()) {
//       errors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       errors.message = "Message must be at least 10 characters";
//     }

//     return errors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (formErrors[name]) {
//       setFormErrors({ ...formErrors, [name]: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.prphotosDefault();

//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate form submission
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       console.log("Message sent:", formData);
//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Don't render anything until mounted (prphotoss hydration mismatch)
//   if (!mounted) {
//     return (
//       <section
//         id="contact"
//         className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 sm:px-10 lg:px-24 text-gray-200"
//       >
//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
//               <Sparkles className="w-4 h-4 text-cyan-400" />
//               <span className="text-sm font-medium text-gray-300">
//                 Let&#39;s Connect
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//               Have a project in mind or want to collaborate? I&#39;d love to
//               hear from you. Let&#39;s create something amazing together.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 sm:px-10 lg:px-24 text-gray-200 overflow-hidden">
//       {/* Static background elements (no dynamic positioning) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce"
//           style={{ animationDuration: "3s" }}
//         />
//         <div
//           className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-2xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
//             <Sparkles className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm font-medium text-gray-300">
//               Let&#39;s Connect
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Have a project in mind or want to collaborate? I&#39;d love to hear
//             from you. Let&#39;s create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-12 items-start">
//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
//               <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 Contact Information
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Email</p>
//                     <a
//                       href="mailto:your.email@example.com"
//                       className="text-lg font-medium hover:text-cyan-400 transition-colors"
//                     >
//                       nikhilkandhare22@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Phone</p>
//                     <p className="text-lg font-medium">+91 9112430021</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Location</p>
//                     <p className="text-lg font-medium">Nanded, Maharashtra</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Clock className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Try Response Time</p>
//                     <p className="text-lg font-medium">Within 24 hours</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="mt-8 pt-6 border-t border-white/10">
//                 <p className="text-sm text-gray-400 mb-4">Follow me on</p>
//                 <div className="flex gap-4">
//                   <a
//                     href="https://linkedin.com/in/nikhilkandhare"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
//                   >
//                     <Linkedin className="w-6 h-6 text-white" />
//                   </a>
//                   <a
//                     href="https://github.com/1900690105"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all"
//                   >
//                     <Github className="w-6 h-6 text-white" />
//                   </a>
//                   <a
//                     href="https://unstop.com/u/nikhikan37944"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all"
//                   >
//                     <MessageCircle className="w-6 h-6 text-white" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-3">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
//               <h3 className="text-2xl font-semibold mb-6 text-white">
//                 Send me a message
//               </h3>

//               {/* Success/Error Messages */}
//               {submitStatus === "success" && (
//                 <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span className="text-green-400">
//                     Message sent successfully! I&#39;ll get back to you soon.
//                   </span>
//                 </div>
//               )}

//               {submitStatus === "error" && (
//                 <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
//                   <AlertCircle className="w-5 h-5 text-red-400" />
//                   <span className="text-red-400">
//                     Failed to send message. Please try again.
//                   </span>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20"
//                     />
//                     <User className="absolute top-4 right-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
//                     {formErrors.name && (
//                       <p className="text-red-400 text-sm mt-1">
//                         {formErrors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="relative group">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20"
//                     />
//                     <Mail className="absolute top-4 right-4 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
//                     {formErrors.email && (
//                       <p className="text-red-400 text-sm mt-1">
//                         {formErrors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="relative group">
//                   <textarea
//                     name="message"
//                     placeholder="Tell me about your project or just say hello..."
//                     rows={6}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 transition-all group-hover:border-white/20 resize-none"
//                   />
//                   {formErrors.message && (
//                     <p className="text-red-400 text-sm mt-1">
//                       {formErrors.message}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="relative flex items-center gap-3">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5" />
//                         Send Message
//                       </>
//                     )}
//                   </div>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             <span className="text-sm text-gray-300">
//               Try to responds within a few hours if not then call me.
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
