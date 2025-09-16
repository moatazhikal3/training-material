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
        <span>Section {currentSection}</span>
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
                <button
                  key={sectionNumber}
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
    6: "Responsibilities & Tools of a Dispatcher",
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

export default function App() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNavigateToSection = (sectionNumber) => {
    // Ensure section number is within valid range
    if (sectionNumber >= 1 && sectionNumber <= 45) {
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
    6: LoadisticsSection6,
    7: LoadisticsSection7,
    8: LoadisticsSection8,
    9: LoadisticsSection9,
    10: LoadisticsSection10,
    11: LoadisticsSection11,
    12: LoadisticsSection12,
    13: LoadisticsSection13,
    14: LoadisticsSection14,
    15: LoadisticsSection15,
    16: LoadisticsSection16,
    17: LoadisticsSection17,
    18: LoadisticsSection18,
    19: LoadisticsSection19,
    20: LoadisticsSection20,
    21: LoadisticsSection21,
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
