import React, { useState } from 'react'

import TailwindStats from './Components/TailwindStats';
import TailwindStatsBrandIcon from './Components/TailwindStatsBrandIcon';

import { ReactComponent as StatLogo } from './Assets/SVGs/Stat.svg';

export default function App() {

  const [basicStats, setBasicStats] = useState([
    {
      title: "Total Subscribers",
      text: "71,897",
    },
    {
      title: 'Avg. Open Rate',
      text: '58.16%',
    },
    {
      title: 'Avg. Click Rate',
      text: '24.57%',
    }
  ]);

  const [advStats, setAdvStats] = useState([
    {
      logo: StatLogo,
      title: "Total Subscribers",
      text: "71,897",
      percent: 122,
      link: "http://www.google.com"
    },
    {
      logo: StatLogo,
      title: 'Avg. Open Rate',
      text: '58.16%',
      percent: 5.4,
      link: "http://www.google.com"
    },
    {
      logo: StatLogo,
      title: 'Avg. Click Rate',
      text: '24.57%',
      percent: -3.2,
      link: "http://www.google.com"
    }
  ]);

  return (
    <div className='w-screen h-screen bg-gray-200'>
        <TailwindStats stats={basicStats} title='Last 30 days' />
        <TailwindStatsBrandIcon stats={advStats} title='Last 30 days' />
    </div>
  )
}