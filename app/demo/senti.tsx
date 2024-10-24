"use client";
// app/demo/senti.tsx
import React, { useState } from 'react';
import ProgressBar from './progressbar';

const Senti: React.FC = () => {

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputText, setInputText] = useState('');
  const [progressValue, setProgressValue] = useState([0]);

    const handleAnalyzeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the default button behavior
        setIsAnalyzing(true);
        try {
            const response = await fetch(`/api/senti?text=${encodeURIComponent(inputText)}`);
            const data = await response.json();
            // Handle the response data as needed
            console.log(data);
            setProgressValue([data.compound]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsAnalyzing(false);
        }
    };


  return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                <h1 className="text-[#181610] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Sentiment Analysis</h1>
                <p className="text-[#181610] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Enter a sentence and we'll tell you the sentiment</p>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <textarea
                      placeholder="Enter a sentence"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181610] focus:outline-0 focus:ring-0 border border-[#e7e3da] bg-white focus:border-[#e7e3da] min-h-36 placeholder:text-[#8d805e] p-[15px] text-base font-normal leading-normal"
                      value={inputText} // Set the value to inputText state
                      onChange={(e) => setInputText(e.target.value)} // Update state on change
                    ></textarea>
                  </label>
                </div>
                <div className="flex px-4 py-3 justify-start">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ffbb00] text-[#181610] text-sm font-bold leading-normal tracking-[0.015em]"
                    onClick={handleAnalyzeClick}
                  >
                    <span className="truncate">Analyze</span>
                  </button>
                </div>

                <div className="flex px-4 py-3 justify-center">
                  <ProgressBar value={progressValue} />
                </div>



                <div className="flex flex-col gap-3 p-4">
                  <div className="flex gap-6 justify-between">
                    <p className="text-[#181610] text-base font-medium leading-normal">Neutral</p>
                    <p className="text-[#181610] text-sm font-normal leading-normal">50%</p>
                  </div>
                  <div className="rounded bg-[#e7e3da]"><div className="h-2 rounded bg-[#181610]" style={{ width: '50%' }}></div></div>
                  <p className="text-[#8d805e] text-sm font-normal leading-normal">50%</p>
                </div>
                <div className="p-4 @container">
                  <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#e7e3da] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#181610] text-base font-bold leading-tight">Results</p>
                      <p className="text-[#8d805e] text-base font-normal leading-normal">Neutral</p>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#ffbb00] text-[#181610] text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Senti;
