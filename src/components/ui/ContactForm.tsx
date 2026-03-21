"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";

const options = [
    { label: "Commercial / Brand Film", value: "commercial" },
    { label: "Narrative / Short Film", value: "narrative" },
    { label: "Music Video", value: "music_video" },
    { label: "Documentary", value: "documentary" },
    { label: "Other Collaboration", value: "other" },
];

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const dropdownRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const validateForm = (data: FormData) => {
        const newErrors: Record<string, string> = {};
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;
        const project = selected;

        if (!name || name.trim().length < 2) newErrors.name = "Please enter your name";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";
        if (!project) newErrors.project = "Please select an inquiry type";
        if (!message || message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        
        // 1. Client-side validation for immediate feedback
        const clientErrors = validateForm(formData);
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            // 2. Call secure Server Action
            const result = await submitContactForm({}, formData);

            if (result.success) {
                setIsSuccess(true);
            } else if (result.errors) {
                // Handle server-side validation errors (even if client-side missed them)
                const formattedErrors: Record<string, string> = {};
                Object.entries(result.errors).forEach(([key, val]) => {
                    if (Array.isArray(val)) formattedErrors[key] = val[0];
                });
                setErrors(formattedErrors);
            } else if (result.message) {
                // Handle generic errors (e.g., bot detection)
                alert(result.message);
            }
        } catch (error) {
            setErrors({ global: "An unexpected error occurred. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectedLabel = options.find(opt => opt.value === selected)?.label || "SELECT INQUIRY TYPE";

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-left"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#db520d] block mb-6 font-bold">Successfully Sent</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight text-white">
                    Thank you <br /> for reaching out.
                </h2>
                <p className="text-zinc-500 text-sm uppercase tracking-widest max-w-sm leading-relaxed mb-12 font-medium">
                    Your vision has been received. I will review your inquiry and get back to you within 48 hours.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white pb-2 hover:opacity-50 transition-all duration-500 text-white"
                >
                    Back to Form
                </button>
            </motion.div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 w-full max-w-md" noValidate>
            {/* Honeypot field - completely hidden from humans */}
            <input 
                type="text" 
                name="display_none_email" 
                autoComplete="off" 
                style={{ display: 'none', position: 'absolute', opacity: 0, zIndex: -1 }} 
                tabIndex={-1}
            />

            <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-[#db520d] font-bold">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors duration-300 rounded-none placeholder:text-zinc-700
                        ${errors.name ? "border-[#db520d]" : "border-zinc-800 focus:border-[#db520d]"}
                    `}
                    placeholder="ENTER YOUR NAME"
                />
                <AnimatePresence>
                    {errors.name && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[9px] uppercase tracking-widest text-[#db520d] block mt-1"
                        >
                            {errors.name}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-[#db520d] font-bold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors duration-300 rounded-none placeholder:text-zinc-700
                        ${errors.email ? "border-[#db520d]" : "border-zinc-800 focus:border-[#db520d]"}
                    `}
                    placeholder="EMAIL ADDRESS"
                />
                <AnimatePresence>
                    {errors.email && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[9px] uppercase tracking-widest text-[#db520d] block mt-1"
                        >
                            {errors.email}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="space-y-2" ref={dropdownRef}>
                <label htmlFor="project" className="text-[10px] uppercase tracking-[0.2em] text-[#db520d] font-bold">
                    Inquiry Type
                </label>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full bg-transparent border-b py-3 text-left transition-all duration-300 flex justify-between items-center group
                            ${isOpen ? "border-white" : errors.project ? "border-[#db520d]" : "border-zinc-800"}
                            ${selected ? "text-white" : "text-zinc-500"}
                        `}
                    >
                        <span className="text-sm uppercase tracking-wide">
                            {selectedLabel}
                        </span>
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-[#db520d] text-[10px]"
                        >
                            ▼
                        </motion.span>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-zinc-800 overflow-hidden shadow-2xl"
                            >
                                <div className="py-2">
                                    {options.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                setSelected(option.value);
                                                setIsOpen(false);
                                                if (errors.project) {
                                                    setErrors(prev => {
                                                        const newErrors = { ...prev };
                                                        delete newErrors.project;
                                                        return newErrors;
                                                    });
                                                }
                                            }}
                                            className={`w-full px-6 py-4 text-left text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between group
                                                ${selected === option.value ? "text-white bg-zinc-900" : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"}
                                            `}
                                        >
                                            <span>{option.label}</span>
                                            {selected === option.value && (
                                                <motion.div
                                                    layoutId="selected-dot"
                                                    className="w-1 h-1 rounded-full bg-[#db520d]"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Hidden actual select for form data */}
                    <input type="hidden" name="project" value={selected} />
                </div>
                <AnimatePresence>
                    {errors.project && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[9px] uppercase tracking-widest text-[#db520d] block mt-1"
                        >
                            {errors.project}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-[#db520d] font-bold">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors duration-300 rounded-none resize-none placeholder:text-zinc-700
                        ${errors.message ? "border-[#db520d]" : "border-zinc-800 focus:border-white"}
                    `}
                    placeholder="TELL US ABOUT YOUR VISION"
                />
                <AnimatePresence>
                    {errors.message && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[9px] uppercase tracking-widest text-[#db520d] block mt-1"
                        >
                            {errors.message}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="pt-8">
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-200 transition-all duration-300 w-full md:w-auto relative overflow-hidden
                        ${isSubmitting ? "opacity-70 cursor-wait" : ""}
                    `}
                >
                    <span className={isSubmitting ? "opacity-0" : "opacity-100 transition-opacity"}>
                        Send Message
                    </span>
                    {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                            />
                        </div>
                    )}
                </motion.button>
            </div>
        </form>
    );
}



