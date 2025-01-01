import React from 'react';

interface ProgressProps {
  name: string;
  target: string;
  progress: number;
  nextSession: string;
}

export const ProgressTracker = ({ name, target, progress, nextSession }: ProgressProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">目标: {target}</p>
      </div>
      <span className="text-sm text-gray-500">下次课程: {nextSession}</span>
    </div>
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-100">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                   bg-gradient-to-r from-blue-500 to-blue-600"
        />
      </div>
      <span className="text-xs text-gray-500 mt-1">{progress}% 完成</span>
    </div>
  </div>
);