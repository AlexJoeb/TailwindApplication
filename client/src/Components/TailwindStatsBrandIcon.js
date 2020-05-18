import React from 'react';

export default function TailwindStatsBrandIcon({ title, stats }) {
    return (
        <div className="w-full p-12">
            <h3 class="text-lg leading-6 font-medium text-gray-900">{title}</h3>
            <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats && stats.map((stat, index) => 
                    <Box 
                        key={index} 
                        logo={stat.logo} 
                        title={stat.title} 
                        text={stat.text} 
                        percent={stat.percent} 
                        link={stat.link} 
                    />)}
            </div>
        </div>
    )
}

const Box = ({ logo: Logo, title, text, percent, link }) => {

    return (
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <Logo className='h-6 w-6 text-white' />
                    </div>
                    <div class="ml-5 w-0 flex-1">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">{title}</dt>
                            <dd class="flex items-baseline">
                                <div class="text-2xl leading-8 font-semibold text-gray-900">{text}</div>
                                {percent !== null && (<div class={`ml-2 flex items-baseline text-sm leading-5 font-semibold text-${percent >= 0 ? 'green' : 'red'}-600`}>
                                    <svg class={`self-center flex-shrink-0 h-5 w-5 text-${percent >= 0 ? 'green' : 'red'}-500`} fill="currentColor" viewBox="0 0 20 20">
                                        {percent >= 0 ? (<UpArrow />) : (<DownArrow/>)}
                                    </svg>
                                    <span class="sr-only">{percent >= 0 ? 'Increased' : 'Decreased'} by</span>{percent.toString().replace('-', '')}
                                </div>)}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:px-6">
                <div class="text-sm leading-5">
                    <a href={link} class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                        View all
                    </a>
                </div>
            </div>
        </div>
    )
}

const UpArrow = () => (<path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>);
const DownArrow = () => (<path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"/>);