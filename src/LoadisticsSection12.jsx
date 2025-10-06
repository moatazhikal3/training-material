import React, { useMemo, useState, useEffect } from "react";import { SlideNavigation } from "./components/ui/SlideNavigation";

import loadisticsLogo from "./assets/Loadistics-Logo.jpg";

// ===== Minimal UI primitives (no external deps) =====
function Button({ children, onClick, disabled, variant = "solid", className = "" }) {
  const base = "px-4 py-2 rounded-xl text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";
  const style = variant === "outline"
    ? "border border-gray-300 bg-white hover:bg-gray-50"
    : "bg-[#C8102E] text-white hover:opacity-90";
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${style} ${className}`}>{children}</button>
  );
}
function Card({ children, className = "", style }) {
  return <div className={`rounded-2xl shadow-xl border border-gray-100 bg-white ${className}`} style={style}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={`p-6 md:p-10 ${className}`}>{children}</div>;
}
function Switch({ checked, onCheckedChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <span className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={e => onCheckedChange?.(e.target.checked)} />
        <span className={`block h-6 w-10 rounded-full transition ${checked ? "bg-[#C8102E]" : "bg-gray-300"}`}></span>
        <span className={`dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${checked ? "translate-x-4" : ""}`}></span>
      </span>
    </label>
  );
}

// ===== Inline icons (simple SVG) =====
const Icon = {
  Truck: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M3 7h10v7h1.5a3.5 3.5 0 1 0 0 2H16v1a1 1 0 0 1-1 1h-1a3 3 0 0 1-6 0H7a1 1 0 0 1-1-1H5a3 3 0 1 1 0-2h1V7Zm10 2v5h2.764l1.8-3H16V9h-3Zm5 3h1.5V9H20l-2-2h-2v3h2.764Z"/>
    </svg>
  ),
  ListChecks: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M3 5h9v2H3V5Zm0 6h9v2H3v-2Zm0 6h9v2H3v-2Zm14.5-9L19 9l3.5-3.5L21 3l-3 3-1.5-1.5L15 6l2.5 2Zm0 6L19 15l3.5-3.5L21 9l-3 3-1.5-1.5L15 12l2.5 2Z"/>
    </svg>
  ),
  CheckCircle: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm-1 15l-5-5 1.414-1.414L11 13.172l5.586-5.586L18 9l-7 8Z"/>
    </svg>
  ),
  Users: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4h-2v5H6v-5H4zM10 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
    </svg>
  ),
  BookOpen: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  )
};

// ===== Brand palette =====
const brand = { red: "#C8102E", black: "#0F1115", gray: "#4A4A4A", lightGray: "#F3F4F6" };

// ===== Slides data =====
const slides = [
  {
    sectionLabel: "Section 12",
    title: "Sample Dispatcher Call on a Posted Load: Communication Strategy and Negotiation",
    layout: "title",
    icon: <Icon.BookOpen className="w-12 h-12" style={{ color: brand.red }} />,
    trainerNotes: [
      "This section analyzes a real dispatcher-broker phone call to understand communication strategy.",
      "We focus on WHY certain questions are asked and HOW to improve negotiation techniques.",
      "The goal is strategic thinking, not memorizing scripts.",
      "Students will learn to analyze conversations for improvement opportunities.",
      "",
      "QUESTIONS:",
      "What's the difference between reading a script and strategic communication?",
      "Why do we analyze real calls instead of perfect examples?",
      "",
      "ANSWERS:",
      "Answer: Strategic communication adapts to each situation vs. rigid scripting.",
      "Answer: Real calls show common mistakes and improvement opportunities that perfect scripts don't reveal."
    ]
  },
  {
    title: "Call Transcript Analysis",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Availability Check: Dispatcher confirms load status and basic details first",
      "Detail Verification: Shipper address, reference number, dock requirements confirmed",
      "Risk Assessment: Temperature control, weight, lumper requirements identified",
      "Terms Clarification: Detention policy and fuel requirements established",
      "Strategic Ask: $3,000 request with specific justification provided",
      "Counter Negotiation: Broker offers $2,600, dispatcher counters at $2,900",
      "Final Agreement: $2,750 with detailed rate confirmation terms specified"
    ],
    trainerNotes: [
      "This condensed transcript shows the complete flow from opening to closing.",
      "Notice how each phase builds on the previous - no skipping steps.",
      "The dispatcher asks operational questions before negotiating rates.",
      "Specific justifications are provided for the higher rate request.",
      "Final agreement includes detailed terms to prevent future disputes."
    ]
  },
  {
    title: "Information Verification Techniques",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Shipper Details: Address and reference number confirmed for driver instructions",
      "Equipment Requirements: Dock type and door compatibility verified",
      "Operational Concerns: Lumper payment method and fuel requirements clarified",
      "Temperature Control: Continuous vs start/stop reefer operation specified",
      "Detention Terms: Free time and hourly rates documented before negotiation"
    ],
    trainerNotes: [
      "Smart sequence: operational details first, then negotiate rates.",
      "Each question serves a specific purpose for successful load execution.",
      "Detention terms discussion prevents future payment disputes.",
      "Temperature specifications are critical for reefer loads.",
      "Professional approach builds broker confidence in your capability."
    ]
  },
  {
    title: "Negotiation Math and Value Analysis",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Base Rate Analysis: $2,500 for Dallas-Charlotte = approximately $2.08 per mile",
      "Temperature Premium: 0°F continuous reefer adds operational complexity and fuel cost",
      "Weight Factor: 41,500 lbs approaching legal limits requires experienced driver",
      "Appointment Risk: Wednesday 10:00 AM set appointment creates schedule pressure",
      "Lumper Costs: EFS payment system adds administrative handling",
      "Market Justification: Combined factors support $3,000 ask ($2.50/mile target)"
    ],
    trainerNotes: [
      "Always calculate RPM (revenue per mile) to evaluate rate fairness.",
      "Each operational challenge justifies rate premiums above base freight.",
      "Set appointments create delivery pressure that increases risk.",
      "Temperature-controlled freight typically commands 10-20% premium.",
      "Professional dispatchers can articulate value beyond just 'I need more money'."
    ]
  },
  {
    title: "Counter-Offer and Response Pattern",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Initial Counter: Broker moves from $2,500 to $2,600 (partial concession)",
      "Continued Pressure: Dispatcher requests $2,900 (maintains upward momentum)",
      "Broker Testing: 'Can you make pickup by 5:00 PM?' - confirms capability",
      "External Constraint: 'My carrier won't take it at $2,700' - shifts responsibility",
      "Final Negotiation: Meet at $2,800 request leads to $2,750 compromise"
    ],
    trainerNotes: [
      "Good negotiation maintains momentum: $2,500 → $2,600 → $2,900 → $2,700 → $2,800 → $2,750.",
      "Broker's timing question tests dispatcher's seriousness and capability.",
      "Using carrier as constraint removes personal conflict from negotiation.",
      "Each counter-offer should have logical justification behind it.",
      "",
      "QUESTIONS:",
      "Why does the broker ask about pickup timing during negotiation?",
      "What's the advantage of using external constraints in negotiation?",
      "",
      "ANSWERS:",
      "Answer: Tests if dispatcher is serious or just fishing for rates.",
      "Answer: Removes personal conflict and provides face-saving excuses for both parties."
    ]
  },
  {
    title: "Final Negotiation and Rate Confirmation Terms",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Broker Consultation: 'Hold on while I check' - escalation or negotiation tactic",
      "Final Compromise: $2,750 represents 10% increase from original $2,500",
      "Terms Documentation: Specific RC language requested for key operational details",
      "Payment Options: Quickpay 2% in two business days offered and declined",
      "Professional Closing: Contact exchange and immediate action confirmation"
    ],
    trainerNotes: [
      "Final rate $2,750 achieved 10% increase - successful negotiation result.",
      "Smart move: requesting specific language in rate confirmation prevents disputes.",
      "Quickpay option awareness shows professional knowledge of payment terms.",
      "Immediate action confirmation 'We're already set up' builds broker confidence.",
      "Professional closing with driver details and ETA demonstrates capability."
    ]
  },
  {
    title: "Communication Strengths Analysis",
    layout: "bullets",
    icon: <Icon.CheckCircle className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Professional Tone: Respectful and collaborative throughout entire call",
      "Systematic Approach: Operational details confirmed before rate negotiation",
      "Strategic Patience: Persistent without being aggressive or demanding",
      "Value Articulation: Specific justifications provided for rate requests",
      "Relationship Focus: Maintained positive broker relationship while negotiating"
    ],
    trainerNotes: [
      "This call demonstrates excellent negotiation fundamentals and professional communication.",
      "The dispatcher achieved significant rate increase while maintaining broker relationship.",
      "Systematic approach prevents operational problems and builds broker confidence.",
      "Strategic use of external constraints was effective without being confrontational.",
      "",
      "QUESTIONS:",
      "What was the most effective negotiation technique demonstrated in this call?",
      "How important is maintaining the broker relationship during negotiation?",
      "",
      "ANSWERS:",
      "Answer: Systematic information gathering before negotiation combined with value-based justification.",
      "Answer: Critical - you'll work with the same brokers repeatedly, relationship is long-term asset."
    ]
  },
  {
    title: "Pop Quiz: Key Negotiation Concepts",
    layout: "bullets",
    icon: <Icon.CheckCircle className="w-12 h-12" style={{ color: brand.red }} />,
    quiz: {
      questions: [
        "What three terms must be included in the rate confirmation for this reefer load?",
        "What signals in this call justified the dispatcher's higher rate request?",
        "Why should operational details be confirmed before negotiating rates?",
        "What's the advantage of using external constraints during negotiation?",
        "How did the dispatcher maintain professionalism while being persistent?"
      ],
      answers: [
        "0°F continuous temperature, EFS lumper code at receiver, detention $50/hr after 2 hours",
        "Continuous reefer operation, heavy weight, set appointment, lumper requirements",
        "Builds broker confidence, prevents operational problems, establishes capability before asking for money",
        "Removes personal conflict, provides face-saving excuses, makes negotiation less confrontational",
        "Respectful tone, collaborative language, logical justifications, relationship-focused approach"
      ]
    },
    trainerNotes: [
      "This quiz reinforces the key learning objectives from the call analysis.",
      "Focus on practical application rather than memorizing specific phrases.",
      "Encourage students to develop their own authentic communication style.",
      "Emphasize that every call is practice for developing these skills.",
      "Next section will cover the booking process and documentation requirements."
    ]
  },
  {
    title: "Practice Applications and Video Demo",
    layout: "bullets",
    icon: <Icon.ListChecks className="w-12 h-12" style={{ color: brand.red }} />,
    bullets: [
      "Role-Play Exercise: Practice similar calls with different load scenarios",
      "Negotiation Development: Create your own professional language patterns",
      "Value Articulation: Build logical arguments for rate justifications",
      "Objection Handling: Prepare responses to common broker pushbacks",
      "Relationship Building: Focus on long-term broker partnerships and repeat business"
    ],
    video: "/training-material/section12/links/dispatcher-broker-mockup.mp4",
    trainerNotes: [
      "The goal is developing authentic communication style, not memorizing scripts.",
      "Practice these techniques with different load types and market conditions.",
      "Remember: every call is practice for the next one - continuous improvement mindset.",
      "Focus on building genuine relationships rather than just winning individual negotiations.",
      "Show the video demo to reinforce the concepts covered in this section.",
      "Next section will cover the booking process and documentation requirements that follow successful negotiations."
    ],
    isMaterialsSlide: true
  }
];

// ===== Utility components =====
function EmphasisText({ text }) {
  const formattedText = useMemo(() => {
    // Handle bold text with **text** - remove asterisks and make bold
    if (text.includes('**')) {
      const parts = [];
      const segments = text.split(/(\*\*.*?\*\*)/g);
      
      segments.forEach(segment => {
        if (segment.startsWith('**') && segment.endsWith('**')) {
          // Remove the asterisks and mark as bold
          const boldContent = segment.slice(2, -2);
          if (boldContent) {
            parts.push({ type: 'bold', content: boldContent });
          }
        } else if (segment) {
          parts.push({ type: 'text', content: segment });
        }
      });
      
      return parts;
    }

    // If no bold text found, handle colon/dash emphasis as before
    const idxColon = text.indexOf(":");
    const idxDash = text.indexOf(" — ") !== -1 ? text.indexOf(" — ") : text.indexOf("—");
    const idx = [idxColon, idxDash].filter((n) => n > -1).sort((a, b) => a - b)[0] ?? -1;
    if (idx > -1 && idx < 80) {
      return [
        { type: 'bold', content: text.slice(0, idx) },
        { type: 'text', content: text.slice(idx) }
      ];
    }
    
    return [{ type: 'text', content: text }];
  }, [text]);

  return (
    <span>
      {formattedText.map((part, index) => (
        part.type === 'bold' ? (
          <strong key={index} className="font-semibold text-gray-900">{part.content}</strong>
        ) : (
          <span key={index}>{part.content}</span>
        )
      ))}
    </span>
  );
}

// ===== Slide schema validation (runtime tests) =====
function validateSlides(sl) {
  const issues = [];
  if (!Array.isArray(sl) || sl.length === 0) issues.push("slides must be a non-empty array");
  sl.forEach((s, i) => {
    if (!s.title) issues.push(`slide[${i}] missing title`);
    if (!s.layout) issues.push(`slide[${i}] missing layout`);
    if (s.layout === "table") {
      if (!s.table) issues.push(`slide[${i}] table layout missing table`);
      else {
        if (!Array.isArray(s.table.headers)) issues.push(`slide[${i}] table.headers must be an array`);
        if (!Array.isArray(s.table.rows)) issues.push(`slide[${i}] table.rows must be an array`);
      }
    }
    if (s.layout === "bullets" && !s.bullets && !s.quiz) {
      issues.push(`slide[${i}] bullets layout requires bullets[] or quiz{}`);
    }
    if (s.quiz) {
      if (!Array.isArray(s.quiz.questions) || s.quiz.questions.length === 0) issues.push(`slide[${i}] quiz.questions must be non-empty array`);
      if (!Array.isArray(s.quiz.answers) || s.quiz.answers.length === 0) issues.push(`slide[${i}] quiz.answers must be non-empty array`);
    }
  });
  return issues;
}

// ===== Tests =====
function runUnitTests() {
  const cases = [];
  // Case 1: Happy path (current slides)
  cases.push({ name: "current slides compile", issues: validateSlides(slides), expectPass: true });
  // Case 2: Broken slide (missing title) — intentionally broken, must be detected
  const bad = [{ layout: "title" }];
  cases.push({ name: "missing title detected", issues: validateSlides(bad), expectPass: false, expectContains: "missing title" });
  // Case 3: Table layout missing table
  const badTable = [{ title: "T", layout: "table" }];
  cases.push({ name: "table layout missing table", issues: validateSlides(badTable), expectPass: false, expectContains: "table layout missing table" });
  return cases;
}

// ===== Main App =====
export default function LoadisticsSection12({ onNavigateToSection, sectionDropdown }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [trainerMode, setTrainerMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  const slide = slides[slideIndex];
  const tests = useMemo(() => runUnitTests(), []);

  useEffect(() => {
    setMounted(true);
    function onResize() { setDims({ width: window.innerWidth, height: window.innerHeight }); }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideIndex]);

  function prev() { setSlideIndex((i) => Math.max(0, i - 1)); }
  function next() {
    setSlideIndex((i) => {
      if (i + 1 >= slides.length) { setShowConfetti(true); return i; }
      return Math.min(slides.length - 1, i + 1);
    });
  }

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col relative" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" }}>
      {/* Confetti (triggered on last slide) */}
      {mounted && showConfetti && (
        <div className="fixed inset-0 pointer-events-none grid place-items-center text-6xl animate-bounce">🎉</div>
      )}

      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur p-3">
        <div className="max-w-6xl mx-auto flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded grid place-items-center text-white font-bold" style={{ backgroundColor: brand.red }}>L</div>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-wide text-gray-500">{slides[0].sectionLabel || "Section"}</div>
              <div className="font-semibold">Loadistics Training</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Section Navigation Dropdown */}
            {sectionDropdown}
            
            <label className="text-sm flex items-center gap-2">
              <Switch checked={trainerMode} onCheckedChange={setTrainerMode} />
              <span className="font-medium">Trainer Mode</span>
            </label>
            {/* Logo */}
            <div className="hidden md:block">
              <img src={loadisticsLogo} alt="Loadistics Logo" className="h-12 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide area */}
      <div className="relative flex-1">
        {/* Watermark overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 z-0">
          <img src={loadisticsLogo} alt="" className="max-w-lg max-h-80" />
        </div>

        <div className="max-w-6xl mx-auto p-6">
          <Card style={{ borderColor: "#F3F4F6" }}>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  {slides[0].sectionLabel && (
                    <div className="text-xs uppercase tracking-wider text-gray-500">{slides[0].sectionLabel}</div>
                  )}
                  <h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3" style={{ color: brand.black }}>
                    <span style={{ width: 48, height: 48 }} className="grid place-items-center">{slide.icon}</span>
                    {slide.title}
                  </h1>
                  <div className="text-xs text-gray-500">Slide {slideIndex + 1} of {slides.length}</div>
               
                  <SlideNavigation 
                    currentSlide={slideIndex} 
                    totalSlides={slides.length} 
                    onSlideChange={setSlideIndex}
                    sectionNumber={12}
                  /> </div>
              </div>

              <div className="space-y-6">
                {slide.layout === "title" && (
                  <div className="text-gray-700"><p className="text-lg md:text-xl">Loadistics LLC Training – Presentation Version</p></div>
                )}

                {slide.layout === "bullets" && !slide.quiz && slide.bullets && (
                  <ul className="list-disc pl-6 text-lg md:text-xl leading-8">
                    {slide.bullets.map((t, i) => (<li key={i} className="mb-3"><EmphasisText text={t} /></li>))}
                  </ul>
                )}

                {/* Video display for slides with video property */}
                {slide.video && (
                  <div className="mt-6">
                    <div className="text-lg font-semibold mb-3">Video Demo: Dispatcher-Broker Call Example</div>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <video 
                        controls 
                        className="w-full max-w-4xl mx-auto"
                        style={{ maxHeight: '400px' }}
                      >
                        <source src={slide.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      Click play to watch a demonstration of professional dispatcher-broker negotiation
                    </p>
                  </div>
                )}

                {slide.layout === "bullets" && slide.quiz && slide.quiz.questions && (
                  <ol className="list-decimal pl-6 text-lg md:text-xl leading-8 space-y-3">
                    {slide.quiz.questions.map((q, i) => (<li key={i} className="mb-2"><p><EmphasisText text={q} /></p></li>))}
                  </ol>
                )}

                {slide.layout === "table" && slide.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-base md:text-lg">
                      <thead style={{ backgroundColor: brand.red, color: "white" }}>
                        <tr>
                          {slide.table.headers.map((h, i) => (<th key={i} className="text-left font-semibold px-4 md:px-5 py-3 md:py-4">{h}</th>))}
                        </tr>
                      </thead>
                      <tbody>
                        {slide.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`align-top px-4 md:px-5 py-3 md:py-4 ${cIdx === 0 ? "font-semibold text-gray-900" : "text-gray-800"}`} style={{ wordBreak: "break-word" }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Section Navigation - show on first and last slides */}
                {(slideIndex === 0 || slide.isMaterialsSlide) && onNavigateToSection && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border">
                    <div className="text-sm font-semibold mb-3">Section Navigation</div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        onClick={() => onNavigateToSection(11)} 
                        disabled={false}
                        className="rounded-xl"
                      >
                        ← Previous Section (Section 11)
                      </Button>
                      <Button onClick={() => onNavigateToSection(13)} className="rounded-xl">
                        Next Section (Section 13) →
                      </Button>
                    </div>
                  </div>
                )}

                {/* Trainer-facing panels when Trainer Mode is ON */}
                {trainerMode && slide.quiz && slide.quiz.answers && (
                  <div className="mt-4 p-4 rounded-xl border bg-white" style={{ borderColor: "#F3F4F6" }}>
                    <div className="text-sm font-semibold mb-2">Model Answers (Trainer Only)</div>
                    <ol className="list-decimal pl-6 text-base md:text-lg space-y-2 font-bold">
                      {slide.quiz.answers.map((a, i) => (<li key={i} className="mb-1"><p>{a}</p></li>))}
                    </ol>
                  </div>
                )}

                {trainerMode && slide.trainerNotes && slide.trainerNotes.length > 0 && (
                  <div className="p-4 rounded-2xl border bg-amber-50/60" style={{ borderColor: "#F3F4F6" }}>
                    <div className="text-sm font-semibold mb-1">Trainer Notes (Slide {slideIndex + 1})</div>
                    <ul className="list-disc pl-5 text-base md:text-lg space-y-1 font-bold">
                      {slide.trainerNotes.map((n, i) => (<li key={i}>{n}</li>))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <Button variant="outline" onClick={prev} disabled={slideIndex === 0} className="rounded-xl">Prev</Button>
                <div className="text-xs text-gray-500">Slide {slideIndex + 1} / {slides.length}</div>
                <Button onClick={next} disabled={slides.length === 0} className="rounded-xl">Next</Button>
              </div>
            </CardContent>
          </Card>

          {/* Diagnostics */}
          <details className="max-w-6xl mx-auto mt-4 text-sm text-gray-600">
            <summary className="cursor-pointer select-none">DEV: Diagnostics & Tests</summary>
            <div className="mt-2 space-y-2">
              {tests.map((t, i) => {
                const passed = t.expectPass ? t.issues.length === 0 : (t.expectContains ? t.issues.some((m) => String(m).includes(t.expectContains)) : t.issues.length > 0);
                return (
                  <div key={i}>
                    <div className="font-medium">{t.name}</div>
                    {passed ? (
                      <div className="text-green-600">✔ All checks passed</div>
                    ) : (
                      <ul className="list-disc pl-5 text-red-600">
                        {t.issues.map((m, j) => (<li key={j}>{m}</li>))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      </div>

      <div className="p-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} Loadistics LLC — Section 12</div>
    </div>
  );
}
