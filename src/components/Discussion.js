import React from 'react'

const Discussion = ({discussion}) => {
    const {time,title,author} = discussion;
  return (
     <li className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap'>
      <div>
        <p className='text-sm font-semibold leading-6 text-gray-900'>
          <a href='#' className='hover:underline'>
            {title}
          </a>
        </p>
        <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
          <p>
            <a href='#' className='hover:underline'>
            {author}
            </a>
          </p>
          <svg viewBox='0 0 2 2' className='h-0.5 w-0.5 fill-current'>
            <circle cx={1} cy={1} r={1} />
          </svg>
          <p>
            <time>{time}</time>
          </p>
        </div>
      </div>
    </li>
  )
}

export default Discussion
