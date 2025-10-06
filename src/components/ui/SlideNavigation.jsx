import React from 'react';
import { Button } from './button';

/**
 * Reusable Slide Navigation Component
 * Provides quick navigation between slides with centered controls
 */
export function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onSlideChange, 
  sectionNumber 
}) {
  if (totalSlides <= 1) return null;

  const goToFirst = () => onSlideChange(0);
  const goToLast = () => onSlideChange(totalSlides - 1);
  const goToPrevious = () => onSlideChange(Math.max(0, currentSlide - 1));
  const goToNext = () => onSlideChange(Math.min(totalSlides - 1, currentSlide + 1));

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {/* First Slide Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToFirst}
        disabled={isFirstSlide}
        className="h-8 px-2 text-xs"
        title="Go to first slide"
      >
        ⏮️
      </Button>

      {/* Previous Slide Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToPrevious}
        disabled={isFirstSlide}
        className="h-8 px-2 text-xs"
        title="Previous slide"
      >
        ◀️
      </Button>

      {/* Slide Counter with Navigation */}
      <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg">
        <span className="text-sm font-medium text-gray-700">
          Slide {currentSlide + 1} of {totalSlides}
        </span>
        {totalSlides > 10 && (
          <div className="flex gap-1">
            <input
              type="number"
              min="1"
              max={totalSlides}
              value={currentSlide + 1}
              onChange={(e) => {
                const slideNum = parseInt(e.target.value);
                if (slideNum >= 1 && slideNum <= totalSlides) {
                  onSlideChange(slideNum - 1);
                }
              }}
              className="w-12 h-6 text-xs text-center border border-gray-300 rounded px-1"
              title="Jump to slide number"
            />
          </div>
        )}
      </div>

      {/* Next Slide Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToNext}
        disabled={isLastSlide}
        className="h-8 px-2 text-xs"
        title="Next slide"
      >
        ▶️
      </Button>

      {/* Last Slide Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToLast}
        disabled={isLastSlide}
        className="h-8 px-2 text-xs"
        title="Go to last slide"
      >
        ⏭️
      </Button>
    </div>
  );
}

export default SlideNavigation;
