"use client";
import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px]"></div>
          <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-blue-200/40 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-8 animate-bounce">
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-sm font-semibold text-slate-700">
              Next-Gen PDF AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
            Understand your <span className="text-indigo-600">PDFs</span> <br />
            in seconds.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Upload your documents and let our AI summarize key points, extract
            insights, and answer your toughest questions instantly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/SignUpForm"
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="max-w-6xl mx-auto px-6 pt-5 pb-10 sm:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Summary</h3>
            <p className="text-slate-500 leading-relaxed">
              Transform massive reports into concise, actionable summaries in
              one click.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Chatbot</h3>
            <p className="text-slate-500 leading-relaxed">
              Talk to your document. Ask questions and get answers with page
              citations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Secure</h3>
            <p className="text-slate-500 leading-relaxed">
              Your data is encrypted. We never share your files with anyone.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-12 border-t border-slate-200">
        <p className="text-slate-400 text-sm">
          Built for high-speed document analysis.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
