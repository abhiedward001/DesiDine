import React from 'react'
import style from './About.module.css';
function About() {
  return (
    <div className='BODY'>
    <h1>Loding some top restuarants</h1>
    <p>Feeling Hungry? Checkout some best foods :)</p>
    <p className={style.small}>Hurry up! Add it to your cart</p>

    <div className={style.loader}>
    <div className={`${style['ls-particles']} ${style['ls-part-1']}`}></div>
      <div className={`${style['ls-particles']} ${style['ls-part-2']}`}></div>
      <div className={`${style['ls-particles']} ${style['ls-part-3']}`}></div>
      <div className={`${style['ls-particles']} ${style['ls-part-4']}`}></div>
      <div className={`${style['ls-particles']} ${style['ls-part-5']}`}></div>
      <div className={`${style.lightsaber} ${style['ls-left']} ${style['ls-green']}`}></div>
      <div className={`${style.lightsaber} ${style['ls-right']} ${style['ls-red']}`}></div>
    </div>

  </div>
  )
}

export default About