import React from 'react'

export default function TailwindHeader({ title, stats }) {
    return (
        <div className="w-full p-12">
            <h3 class="text-lg leading-6 font-medium text-gray-900">{title || ''}</h3>
            <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats && stats.map((stat, index) => <Box title={stat.title} text={stat.text} key={index} />)}
            </div>
        </div>
    )
}

const Box = ({ title, text }) => (
    <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
            <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">{title}</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">{text}</dd>
            </dl>
        </div>
    </div>
)