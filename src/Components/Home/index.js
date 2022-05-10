import React from 'react'
import './home.scss'

const Home = () => {
    return (
        <div>
            <section className='home'>
                <h1 className='home__title'>GABRIEL ROJAS</h1>
                <h2 className='home__subtitle'>Developer</h2>
                <img className='home__image' alt='gabriel rojas' />
                <p className='home__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </section>
        </div>
    )
}

export { Home }
