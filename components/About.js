import React from 'react'
import style from './About.module.css';
import Footer from './LandingPage/Footer';

function About() {
  // const handleDownload = () => {
  //   const pdfUrl = 'https://drive.google.com/file/d/1GZpAqhgxqAeBlk0JeYmUSiTaqJBmwQ8f/view?usp=sharing';
  //   const link = document.createElement('a');
  //   link.href = pdfUrl;
  //   link.download = 'Resume_Abhishek_Jaiswal.pdf'; // Specify the filename for the downloaded file
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <>
      <div className='cont h-auto'>
        <div className='h-auto'>
          <h1>Click on Restuarants and Add some awesome foods</h1>
          <p>Feeling Hungry? Checkout some best foods :)</p>
          <p className={style.small}>Hurry up!!! Add it to your cart</p>
        </div>
        <div className={`${style.loader} `}>
          <div className={`${style['ls-particles']} ${style['ls-part-1']}`}></div>
          <div className={`${style['ls-particles']} ${style['ls-part-2']}`}></div>
          <div className={`${style['ls-particles']} ${style['ls-part-3']}`}></div>
          <div className={`${style['ls-particles']} ${style['ls-part-4']}`}></div>
          <div className={`${style['ls-particles']} ${style['ls-part-5']}`}></div>
          <div className={`${style.lightsaber} ${style['ls-left']} ${style['ls-green']}`}></div>
          <div className={`${style.lightsaber} ${style['ls-right']} ${style['ls-red']}`}></div>
        </div>

        <div className='resume my-16 py-8 mx-auto w-6/12'>
          <h1 className='m-3 p-6 '>Portfolio is still under construction 😕</h1>
          <h1 className='m-4 p-6 text-gray-400'>We will update this soon.Till then you can download the resume 🧑🏻‍💻</h1>
          <div className=' ml-80'><button className='bg-gray-700 text-white p-2 rounded-md w-28  hover:bg-sky-800 '><a href='https://drive.google.com/file/d/1GZpAqhgxqAeBlk0JeYmUSiTaqJBmwQ8f/view?usp=sharing' target='_blank'>Resume ⬇</a> </button>
          </div>
        </div>


      </div>
      <Footer></Footer>
    </>

  )
}

export default About