import React, { useState, useRef, useEffect } from 'react';

type TooltipProps = {
  message: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
};

const Tooltip: React.FC<TooltipProps> = ({ message, children, position = 'top' }) => {
  const [tooltipPosition, setTooltipPosition] = useState(position);

  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePosition = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

      
        const spaceTop = rect.top;
        const spaceBottom = viewportHeight - rect.bottom;
        const spaceLeft = rect.left;
        const spaceRight = viewportWidth - rect.right;

        
        let newPosition: 'top' | 'bottom' | 'left' | 'right' = position;

        if (position === 'top' && spaceTop < rect.height && spaceBottom > spaceTop) {
          newPosition = 'bottom';
        } else if (position === 'bottom' && spaceBottom < rect.height && spaceTop > spaceBottom) {
          newPosition = 'top';
        } else if (position === 'left' && spaceLeft < rect.width && spaceRight > spaceLeft) {
          newPosition = 'right';
        } else if (position === 'right' && spaceRight < rect.width && spaceLeft > spaceRight) {
          newPosition = 'left';
        }

        setTooltipPosition(newPosition);
      }
    };

    handlePosition();
    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);

    return () => {
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, [position]);

  return (
    <div className="relative flex items-center group">
      {children}
      <div
        ref={tooltipRef}
        className={`absolute m-1 w-[10vw] z-60 ${
          tooltipPosition === 'top'
            ? 'bottom-full left-1/2 transform -translate-x-1/2'
            : tooltipPosition === 'bottom'
            ? 'top-full  transform -translate-x-20'
            : tooltipPosition === 'left'
            ? 'top-1/2 right-[80%] transform translate-y-1/2'
            : 'top-1/2 left-full transform -translate-y-1/2'
        } mb-2 hidden group-hover:flex justify-center`}
      >
        <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
