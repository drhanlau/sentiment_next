import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const ProgressBar = ({ value: propValue }) => {
  const [value, setValue] = useState(propValue || [0]); // Use propValue or default to [0]

  // Calculate colors based on slider value
  const getColors = (val) => {
    const normalizedValue = val[0];
    const neutralGray = 'rgb(200, 200, 200)';

    // If value is 0, return gray for both sides
    if (normalizedValue === 0) {
      return {
        red: neutralGray,
        green: neutralGray
      };
    }

    if (normalizedValue < 0) {
      // Red intensity increases as value approaches -1
      const intensity = Math.abs(normalizedValue);
      return {
        red: `rgb(${Math.round(255 * intensity)}, 0, 0)`,
        green: neutralGray
      };
    } else {
      // Green intensity increases as value approaches 1
      const intensity = normalizedValue;
      return {
        red: neutralGray,
        green: `rgb(0, ${Math.round(255 * intensity)}, 0)`
      };
    }
  };

  const colors = getColors(value);

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Color indicator bar */}
          <div className="h-4 flex rounded-full overflow-hidden">
            <div
              className="w-1/2 transition-colors duration-200"
              style={{ backgroundColor: colors.red }}
            />
            <div
              className="w-1/2 transition-colors duration-200"
              style={{ backgroundColor: colors.green }}
            />
          </div>

          {/* Slider */}
          <Slider
            value={value}
            onValueChange={setValue}
            min={-1}
            max={1}
            step={0.01}
            className="w-full"
          />

          {/* Value display */}
          <div className="text-center font-medium">
            Value: {value[0].toFixed(1)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressBar;
