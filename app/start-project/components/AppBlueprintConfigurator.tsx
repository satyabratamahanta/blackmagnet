"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAndroid, FaApple, FaLightbulb, FaPaintBrush, FaRocket, FaCompass } from "react-icons/fa";

type Props = {
  onPlatformChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStageChange: (value: string) => void;
};

export default function AppBlueprintConfigurator({
  onPlatformChange,
  onCategoryChange,
  onStageChange,
}: Props) {
  const [platform, setPlatform] = useState<"android" | "ios" | "both" | "">("");
  const [category, setCategory] = useState("");
  const [stage, setStage] = useState("Fresh");

  const platforms = [
    { id: "android", label: "Android", icon: <FaAndroid className="text-emerald-500" /> },
    { id: "ios", label: "iOS", icon: <FaApple className="text-slate-900" /> },
    { id: "both", label: "Both", icon: <span className="text-xs font-bold text-blue-600">AND+iOS</span> },
  ];

  const stages = [
    { id: "Fresh", label: "Start Fresh", icon: FaCompass, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "Idea", label: "Just an Idea", icon: FaLightbulb, color: "text-amber-500", bg: "bg-amber-50" },
    { id: "Design", label: "Design Ready", icon: FaPaintBrush, color: "text-purple-500", bg: "bg-purple-50" },
    { id: "MVP", label: "Existing App", icon: FaRocket, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const selectedStage = stages.find(s => s.id === stage);

  const categories = ["Education", "E-commerce", "Business", "Healthcare", "Other"];

  return (
    <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          1. Configure Your <span className="text-blue-600">App Blueprint</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Platform */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Choose Platform</h4>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setPlatform(p.id as any); onPlatformChange(p.id); }}
                    className={`p-4 rounded-2xl border-2 transition-all ${platform === p.id ? "border-blue-600 bg-blue-50 text-blue-600 shadow-md" : "border-white bg-white hover:border-slate-200"
                      }`}
                  >
                    <div className="text-2xl mb-2 flex justify-center">{p.icon}</div>
                    <span className="text-sm font-bold">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>





            {/* Stage */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Current Stage</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setStage(s.id); onStageChange(s.id); }}
                    className={`p-4 rounded-2xl border-2 transition-all ${stage === s.id ? "border-blue-600 bg-blue-50 shadow-md" : "border-white bg-white hover:border-slate-200"
                      }`}
                  >
                    <div className={`text-2xl mb-2 flex justify-center ${s.color}`}>
                      <s.icon />
                    </div>
                    <span className={`text-sm font-bold ${stage === s.id ? "text-blue-600" : "text-slate-900"}`}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">App Category</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCategory(cat); onCategoryChange(cat); }}
                    className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-all ${category === cat ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200 hover:border-slate-400"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center h-[400px]">
            <div className="flex justify-center items-center gap-6 min-h-[400px]">
              {/* Main Device: Handles Empty, Android, iOS (Single), and Android (Left in Both) */}
              <motion.div
                layout
                layoutId="main-device"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <DeviceMockup
                  label={category}
                  stage={stage}
                  stageColor={selectedStage?.color}
                  stageBg={selectedStage?.bg}
                  type={platform === "both" ? "Android" : (platform === "ios" ? "iOS" : platform ? "Android" : "")}
                />
              </motion.div>

              {/* Secondary Device: Only appears for 'Both' (Right side iOS) */}
              <AnimatePresence mode="popLayout">
                {platform === "both" && (
                  <motion.div
                    key="secondary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DeviceMockup
                      label={category}
                      stage={stage}
                      stageColor={selectedStage?.color}
                      stageBg={selectedStage?.bg}
                      type="iOS"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeviceMockup({ label, type, stage, stageColor = "text-blue-600", stageBg = "bg-blue-50" }: { label: string; type: string; stage: string; stageColor?: string; stageBg?: string }) {
  return (
    <div className="w-52 h-96 rounded-[3rem] bg-white border-[8px] border-slate-900 shadow-2xl relative overflow-hidden p-6 z-0">
      {/* Notch Logic: Android (Punch Hole) vs iOS (Dynamic Island) */}
      <div className={`absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-slate-100 rounded-full transition-all duration-300 ${type === "Android" ? "w-4 h-4 mt-1" : "w-16 h-4"
        }`} />

      <div className="h-full flex flex-col items-center justify-center gap-4 relative z-0">
        <AnimatePresence mode="popLayout">
          {stage && (
            <motion.div
              layout
              key="stage"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`${stageBg} px-3 py-1 rounded-full`}
            >
              <p className={`${stageColor} text-[10px] font-black uppercase tracking-widest leading-none`}>
                {stage}
              </p>
            </motion.div>
          )}

          {/* Platform Icon - Persists but adjusts size/position */}
          {(type || label) && (
            <motion.div
              layout
              key="icon"
              initial={{ scale: 0 }}
              animate={{ scale: label ? 0.7 : 1 }}
              className={`${!label && !type && "opacity-0"}`}
            >
              {type === "Android" ? (
                <FaAndroid className="text-6xl text-emerald-500" />
              ) : type === "iOS" ? (
                <FaApple className="text-6xl text-slate-900" />
              ) : null}
            </motion.div>
          )}

          {!type && !label && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Select Platform</span>
            </motion.div>
          )}

          {label && (
            <motion.div
              layout
              key="label"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <p className="text-slate-900 font-bold text-xl leading-tight mb-1">{label}</p>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto" />
            </motion.div>
          )}

          {type && (
            <motion.p
              layout
              key="type"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-[10px] font-medium uppercase tracking-wider absolute bottom-6"
            >
              {type} Version
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}