import React from 'react';
import StatusBar from '../Components/StatusBar';
import Gallery from '../Components/Gallery';
import LeadingContent from '../Components/LeadingContent';
import HomeIndicator from '../Components/HomeIndicator';

const OnboardingPage = () => {
  return (
      <div className='flex justify-center'>
        <div className='flex flex-col items-center font-inter'>
          <StatusBar />
          <div className="relative w-full h-full">
            <div className='flex pt-4 h-full'>
              <Gallery />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-57 to-93">
              {/* <span className="text-black">Hello, I'm an overlay!</span> */}
            </div>
            <div className='absolute top-530 left-0 w-full h-full bg-white'>
              <LeadingContent />
            </div>
            <div className='absolute bottom-0 left-0 w-full h-34 bg-white'>
              <HomeIndicator />
            </div>
          </div>
        </div>
        <div className='fixed bottom-0 left-0 w-full h-34 bg-white'>
          <HomeIndicator />
        </div>
      </div>
     
  );
};

export default OnboardingPage;
