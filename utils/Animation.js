import React from 'react';
import style from './Animation.module.css';

function Animation() {
	return (
		<>
			<div className='my-16'>
				<p >Feeling Hungry? Checkout some best foods :)</p>
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
		</>

	);
}

export default Animation;
