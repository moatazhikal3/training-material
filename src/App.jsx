import React, { useState } from 'react'

// Navigation Dropdown Component
function SectionDropdown({ currentSection, onNavigateToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionSelect = (sectionNumber) => {
    onNavigateToSection(sectionNumber);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
                  <span>
                    {currentSection === "quiz-break" ? "Quiz Break #1" : 
                     currentSection === "quiz-break-2" ? "Quiz Break #2" : 
                     currentSection === "quiz-break-3" ? "Quiz Break #3" : 
                     currentSection === "quiz-break-4" ? "Quiz Break #4" : 
                     currentSection === "quiz-break-5" ? "Quiz Break #5" : 
                     `Section ${currentSection}`}
                  </span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 z-20 w-64 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
            <div className="py-1">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                Navigate to Section
              </div>
              {Array.from({ length: 45 }, (_, i) => i + 1).map((sectionNumber) => (
                <div key={sectionNumber}>
                  <button
                    onClick={() => handleSectionSelect(sectionNumber)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                      currentSection === sectionNumber 
                        ? 'bg-red-50 text-red-700 font-medium' 
                        : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Section {sectionNumber}</span>
                      {currentSection === sectionNumber && (
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {getSectionTitle(sectionNumber)}
                    </div>
                  </button>
                  
                  {/* Insert Quiz Break after Section 5 */}
                  {sectionNumber === 5 && (
                    <button
                      onClick={() => handleSectionSelect("quiz-break")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-200 mt-2 ${
                        currentSection === "quiz-break" 
                          ? 'bg-red-50 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Quiz Break #1</span>
                        {currentSection === "quiz-break" && (
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getSectionTitle("quiz-break")}
                      </div>
                    </button>
                  )}
                  
                  {/* Insert Quiz Break #2 after Section 19 */}
                  {sectionNumber === 19 && (
                    <button
                      onClick={() => handleSectionSelect("quiz-break-2")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-200 mt-2 ${
                        currentSection === "quiz-break-2" 
                          ? 'bg-red-50 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Quiz Break #2</span>
                        {currentSection === "quiz-break-2" && (
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getSectionTitle("quiz-break-2")}
                      </div>
                    </button>
                  )}
                  
                  {/* Insert Quiz Break #3 after Section 21 */}
                  {sectionNumber === 21 && (
                    <button
                      onClick={() => handleSectionSelect("quiz-break-3")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-200 mt-2 ${
                        currentSection === "quiz-break-3" 
                          ? 'bg-red-50 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Quiz Break #3</span>
                        {currentSection === "quiz-break-3" && (
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getSectionTitle("quiz-break-3")}
                      </div>
                    </button>
                  )}
                  
                  {/* Insert Quiz Break #4 after Section 27 */}
                  {sectionNumber === 27 && (
                    <button
                      onClick={() => handleSectionSelect("quiz-break-4")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-200 mt-2 ${
                        currentSection === "quiz-break-4" 
                          ? 'bg-red-50 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Quiz Break #4</span>
                        {currentSection === "quiz-break-4" && (
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getSectionTitle("quiz-break-4")}
                      </div>
                    </button>
                  )}
                  
                  {/* Insert Quiz Break #5 after Section 30 */}
                  {sectionNumber === 30 && (
                    <button
                      onClick={() => handleSectionSelect("quiz-break-5")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-200 mt-2 ${
                        currentSection === "quiz-break-5" 
                          ? 'bg-red-50 text-red-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Quiz Break #5</span>
                        {currentSection === "quiz-break-5" && (
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getSectionTitle("quiz-break-5")}
                      </div>
                    </button>
                  )}
                                  </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to get section titles
function getSectionTitle(sectionNumber) {
  const titles = {
    1: "Who is a Truck Dispatcher?",
    2: "The Trucking Industry & Its Players", 
    3: "Types of Trucks & Trailers: Standard Equipment",
    4: "Specialized Equipment: Beyond Dry Van, Reefer, and Flatbed",
    5: "Carrier Documentation & Vetting",
    "quiz-break": "🎯 Quiz Time! Sections 1-5 Recap",
    6: "Responsibilities & Tools of a Dispatcher",
    7: "Step 1 — Planning: Know Your Carrier & Shape the Day",
    8: "Step 2 — Posting Your Trucks on the Load Board",
    9: "Step 3 — Finding Loads on the Loadboard: Active Search, Parameters, and Rate Analysis",
    10: "Sample Dispatcher Call on a Posted Load: Communication Strategy and Negotiation",
    11: "Mock Call — Posted Load Negotiation: Complete Transcript",
    12: "Step 4 — Booking Loads and Filling Out Documents",
    13: "Step 5 — Rate Confirmation and Driver Instructions",
    14: "Step 6 — Cargo in Transit: Tracking, Updates, and Detention",
    15: "Step 7 — Delivery & Unloading: Arrival, Lumpers, and the BOL/POD",
    16: "Step 8 — Invoicing: The 3 Most Common Payment Methods",
    17: "Step 8 — Invoicing: How to Create and Submit an Invoice",
    18: "Step 9 — Accounting: Record Keeping for Professional Dispatchers",
    19: "Step 10 — Repeat! Mastering the Dispatch Cycle and Professional Excellence",
    "quiz-break-2": "🎯 Quiz Time! Sections 6-19 Recap",
    20: "ELD Mandate and Hours of Service: Introduction and Brief Description",
    21: "Advanced Information on Hours of Service and Regulations",
    "quiz-break-3": "🎯 Quiz Time! Sections 20-21 Recap",
    "quiz-break-4": "🎯 Quiz Time! Sections 22-27 Recap",
    22: "How to Set the Right Price and Please the Carrier",
    23: "Market Analysis: How to Load Customers at Top Prices",
    24: "Advanced Load Board Tools and Analysis",
    25: "Strategic Load Selection Approaches",
    26: "Everything is Negotiable - Sample Conversations",
    27: "Everything is Negotiable - Sample Conversations",
    28: "Loadboards Overview and How to Use Them - Part 1",
    29: "Loadboards Overview and How to Use Them - Part 2",
    30: "Building Relationships with Brokers",
    "quiz-break-5": "🎯 Quiz Time! Sections 28-30 Recap"
    
    // Add more titles as sections are developed
  };
  return titles[sectionNumber] || `Section ${sectionNumber} Content`;
}

// Import all sections
import LoadisticsSection1 from './LoadisticsSection1.jsx'
import LoadisticsSection2 from './LoadisticsSection2.jsx'
import LoadisticsSection3 from './LoadisticsSection3.jsx'
import LoadisticsSection4 from './LoadisticsSection4.jsx'
import LoadisticsSection5 from './LoadisticsSection5.jsx'
import LoadisticsSection6 from './LoadisticsSection6.jsx'
import LoadisticsSection7 from './LoadisticsSection7.jsx'
import LoadisticsSection8 from './LoadisticsSection8.jsx'
import LoadisticsSection9 from './LoadisticsSection9.jsx'
import LoadisticsSection10 from './LoadisticsSection10.jsx'
import LoadisticsSection11 from './LoadisticsSection11.jsx'
import LoadisticsSection12 from './LoadisticsSection12.jsx'
import LoadisticsSection13 from './LoadisticsSection13.jsx'
import LoadisticsSection14 from './LoadisticsSection14.jsx'
import LoadisticsSection15 from './LoadisticsSection15.jsx'
import LoadisticsSection16 from './LoadisticsSection16.jsx'
import LoadisticsSection17 from './LoadisticsSection17.jsx'
import LoadisticsSection18 from './LoadisticsSection18.jsx'
import LoadisticsSection19 from './LoadisticsSection19.jsx'
import LoadisticsSection20 from './LoadisticsSection20.jsx'
import LoadisticsSection21 from './LoadisticsSection21.jsx'
import LoadisticsSection22 from './LoadisticsSection22.jsx'
import LoadisticsSection23 from './LoadisticsSection23.jsx'
import LoadisticsSection24 from './LoadisticsSection24.jsx'
import LoadisticsSection25 from './LoadisticsSection25.jsx'
import LoadisticsSection26 from './LoadisticsSection26.jsx'
import LoadisticsSection27 from './LoadisticsSection27.jsx'
import LoadisticsSection28 from './LoadisticsSection28.jsx'
import LoadisticsSection29 from './LoadisticsSection29.jsx'
import LoadisticsSection30 from './LoadisticsSection30.jsx'
import LoadisticsSection31 from './LoadisticsSection31.jsx'
import LoadisticsSection32 from './LoadisticsSection32.jsx'
import LoadisticsSection33 from './LoadisticsSection33.jsx'
import LoadisticsSection34 from './LoadisticsSection34.jsx'
import LoadisticsSection35 from './LoadisticsSection35.jsx'
import LoadisticsSection36 from './LoadisticsSection36.jsx'
import LoadisticsSection37 from './LoadisticsSection37.jsx'
import LoadisticsSection38 from './LoadisticsSection38.jsx'
import LoadisticsSection39 from './LoadisticsSection39.jsx'
import LoadisticsSection40 from './LoadisticsSection40.jsx'
import LoadisticsSection41 from './LoadisticsSection41.jsx'
import LoadisticsSection42 from './LoadisticsSection42.jsx'
import LoadisticsSection43 from './LoadisticsSection43.jsx'
import LoadisticsSection44 from './LoadisticsSection44.jsx'
import LoadisticsSection45 from './LoadisticsSection45.jsx'
import LoadisticsQuizBreak1 from './LoadisticsQuizBreak1.jsx'
import LoadisticsQuizBreak2 from './LoadisticsQuizBreak2.jsx'
import LoadisticsQuizBreak3 from './LoadisticsQuizBreak3.jsx'
import LoadisticsQuizBreak4 from './LoadisticsQuizBreak4.jsx'
import LoadisticsQuizBreak5 from './LoadisticsQuizBreak5.jsx'

export default function App() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNavigateToSection = (sectionNumber) => {
    // Handle special quiz-break or ensure section number is within valid range
    if (sectionNumber === "quiz-break" || sectionNumber === "quiz-break-2" || sectionNumber === "quiz-break-3" || sectionNumber === "quiz-break-4" || sectionNumber === "quiz-break-5" || (sectionNumber >= 1 && sectionNumber <= 45)) {
      setCurrentSection(sectionNumber);
    }
  };

  // Component mapping for all sections
  const sectionComponents = {
    1: LoadisticsSection1,
    2: LoadisticsSection2,
    3: LoadisticsSection3,
    4: LoadisticsSection4,
    5: LoadisticsSection5,
    "quiz-break": LoadisticsQuizBreak1,  // Quiz Break after Section 5
    6: LoadisticsSection6,  // Back to original LoadisticsSection6
    7: LoadisticsSection7,
    8: LoadisticsSection8,
    9: LoadisticsSection11,  // Step 3 — Finding Loads (was Section 11)
    10: LoadisticsSection12, // Sample Dispatcher Call (was Section 12)
    11: LoadisticsSection13, // Mock Call (was Section 13)
    12: LoadisticsSection14, // Step 4 — Booking Loads (was Section 14)
    13: LoadisticsSection15, // Step 5 — Rate Confirmation (was Section 15)
    14: LoadisticsSection9,  // Step 6 — Cargo in Transit (was Section 9)
    15: LoadisticsSection10, // Step 7 — Delivery & Unloading (was Section 10)
    16: LoadisticsSection16, // Step 8 — Payment Methods
    17: LoadisticsSection17, // Step 8 — Invoice Creation
    18: LoadisticsSection18, // Step 9 — Accounting
    19: LoadisticsSection19,
    "quiz-break-2": LoadisticsQuizBreak2,  // Quiz Break #2 after Section 19
    20: LoadisticsSection20,
    21: LoadisticsSection21,
    "quiz-break-3": LoadisticsQuizBreak3,
    "quiz-break-4": LoadisticsQuizBreak4,  // Quiz Break #4 after Section 27
    "quiz-break-5": LoadisticsQuizBreak5,  // Quiz Break #5 after Section 30
    22: LoadisticsSection22,
    23: LoadisticsSection23,
    24: LoadisticsSection24,
    25: LoadisticsSection25,
    26: LoadisticsSection26,
    27: LoadisticsSection27,
    28: LoadisticsSection28,
    29: LoadisticsSection29,
    30: LoadisticsSection30,
    31: LoadisticsSection31,
    32: LoadisticsSection32,
    33: LoadisticsSection33,
    34: LoadisticsSection34,
    35: LoadisticsSection35,
    36: LoadisticsSection36,
    37: LoadisticsSection37,
    38: LoadisticsSection38,
    39: LoadisticsSection39,
    40: LoadisticsSection40,
    41: LoadisticsSection41,
    42: LoadisticsSection42,
    43: LoadisticsSection43,
    44: LoadisticsSection44,
    45: LoadisticsSection45
  };

  const CurrentSectionComponent = sectionComponents[currentSection] || LoadisticsSection1;
  
  return (
    <CurrentSectionComponent 
      onNavigateToSection={handleNavigateToSection}
      sectionDropdown={<SectionDropdown currentSection={currentSection} onNavigateToSection={handleNavigateToSection} />}
    />
  );
}
