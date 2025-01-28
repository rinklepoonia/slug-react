import React from 'react'
import { useParams } from 'react-router-dom';
import { BLOG_POST_DATA_LIST } from '../utils/helper'
import slugify from 'slugify';

const CardsDetail = () => {
    const { slug } = useParams();
    const filteredData = BLOG_POST_DATA_LIST?.filter(
        (obj) => slugify(obj.title, { lower: true }) === slug
    );

    if (filteredData.length === 0) {
        return <p>Blog post not found</p>;
    }

  return (
      <div className='max-w-[1140px] px-3 mx-auto'>
          {filteredData.map((obj, i) => (
              <div key={i}>
                  <p className='font-semibold text-3xl leading-126 text-black pb-6'>{obj.title}</p>
                  <p className='font-normal text-lg leading-155 text-light-grey pb-6 max-w-[1074px]'>{obj.description}
                  </p>
                  
                  {obj.para.map((para, index) => (
                      <div key={index} className='pt-6'>
                          <p className='font-normal text-lg leading-155 text-light-grey'>{para}</p>
                      </div>
                  ))}
              </div>
          ))}
    </div>
  )
}

export default CardsDetail