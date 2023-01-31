import React, { useEffect } from 'react'
import HomeCarousel from './HomeCarousel'
import HomeLogo from './HomeLogo'
import HomeMarket from './HomeMarket'
import HomeService from './HomeService'
import HomeServiceDetail from './HomeServiceDetail'
import HomeSlickItem from './HomeSlickItem'

const Home = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  },[])
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    const inputcheck = document.body.querySelector('.inputcheck')
    const backgroundcheck = document.body.querySelector('.backgroundcheck')
    const subcheck = document.body.querySelector('.subcheck')
    const headersection = document.body.querySelector('.header-section')    
    headersection.style.position = 'fixed';
    if (scrollTop === 0 ) {
      inputcheck.style.display = 'none';
      subcheck.style.display = 'none';
      backgroundcheck.style.backgroundColor = 'transparent';
    } else if (scrollTop !== 0) {
     if(scrollTop >=100 && scrollTop <= 250){
      inputcheck.style.display = 'block';
      backgroundcheck.style.backgroundColor = 'white';
      subcheck.style.display = 'none';
     }else if(scrollTop>=291){
      inputcheck.style.display = 'block';
      backgroundcheck.style.backgroundColor = 'white';
      subcheck.style.display = 'block';
     }
    }
  };

  return (
    <div>
      <HomeCarousel />
      <HomeLogo />
      <HomeService />
      <HomeServiceDetail />
      <HomeSlickItem />
      <HomeMarket />
    </div>
  )
}

export default Home