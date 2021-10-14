import React, { useEffect } from 'react';
import Header from './components/Header';
import Royalties from './components/Royalties';
import Video from './components/Video';
import Story from './components/Story';
import FAQ from './components/FAQ';
import LogoType from './components/LogoType';
import CaptainTrashPanda from './components/CaptainTrashPanda';

import oneFourOne from './images/raccoons/141.png';
import oneSevenSix from './images/raccoons/176.png';
import oneNineOne from './images/raccoons/191.png';
import threeFourSeven from './images/raccoons/347.png';
import fourNineTwo from './images/raccoons/492.png';
import fiveSixNine from './images/raccoons/569.png';
import nineOneTwo from './images/raccoons/912.png';
import nineThreeFive from './images/raccoons/935.png';
import skeleton from './images/raccoons/skeleton.png';

import { PageView, Event } from './utils/tracking';

const App = () => {
  useEffect(() => {
		Event('Raccoons', 'Homepage visited', 'Homepage');
		PageView();
	}, []);

  return (
    <>
      <CaptainTrashPanda />
      {/* <LightSwitch /> */}
      <div className="App h-screen" style={{ backgroundColor: '#ACC551'}}>
        <Header />
        <div className="container mx-auto flex flex-col justify-between h-full overflow-hidden">
          <header className="mt-24 flex flex-col sm:flex-row sm:flex-wrap md:justify-around">

            <div className="ml-12 flex flex-col w-3/4 md:w-1/3">
              <LogoType type="Raccoon Kingdom" fontColor="text-black" fontSize="text-6xl" fontWeight="font-bold" />
            </div>

            <div className="mt-6 md:mt-24 md:w-5/12 flex flex-row justify-end flex-wrap ">
              <img src={oneFourOne} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={oneSevenSix} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={oneNineOne} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={threeFourSeven} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={fourNineTwo} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={fiveSixNine} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={nineOneTwo} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={nineThreeFive} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
              <img src={skeleton} alt="solRaccoon" className="h-16 w-16 md:h-32 md:w-32 m-1" />
            </div>
          </header>
        </div>

      </div>

      <Royalties />

      <Video />

      <FAQ />
      
      <Story />
      
    </>
  );
}

export default App;