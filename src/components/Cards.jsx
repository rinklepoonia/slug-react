import React from 'react'
import { BLOG_POST_DATA_LIST } from '../utils/helper'
import slugify from 'slugify'

const Cards = () => {
  return (
      <div className='max-w-[1140px] px-5 mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
              {BLOG_POST_DATA_LIST.map((obj, i) => (
                  <a
                      href={`/data/${slugify(obj.title, { lower: true })}`}
                      key={i}>
                      <div className='border-[2px] border-solid border-pale-grey max-w-[368px] h-[508px] p-6 rounded-lg'>
          
                          <p className='font-semibold text-sm leading-142 text-blue pb-3 pt-8'>{obj.category}</p>
                          <div className='flex items-center justify-between pb-3'>
                              <p className='font-semibold text-2xl leading-133'>{obj.title}</p>
          
                          </div>
                          <p className='font-normal text-base leading-normal text-light-grey'>{obj.description}</p>
                      </div>
                  </a>
              ))}
              </div>
      </div>
  )
}

export default Cards