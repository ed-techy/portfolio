import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import skills from '@/data/Skills.json';

export default function Home() {
  return (
    <>
      <section id='about' className='section-hero-2 position-relative pt-130 pb-3'>
        <div className='container hero-2'>
          <div className='border border-1 rounded-3'>
            <div className='box-linear-animation position-relative z-1'>
              <div className='row align-items-center py-60'>
                <div className='col-lg-5 ps-lg-5'>
                  <div className='position-relative mb-lg-0 mb-5 mt-8 photo-container'>
                    <img src='assets/imgs/home-page-2/hero-1/people.png' alt='photo' />
                    <div className='position-relative d-flex icon-decorate'>
                      <img
                        className='translate-middle-y m-auto'
                        src='assets/imgs/home-page-2/hero-1/icon.svg'
                        alt='photo'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 mx-lg-auto col-md-12'>
                  <div className='p-lg-0 p-md-8 p-3'>
                    <div className='text-secondary-2 d-flex align-items-center'>
                      &lt;span&gt;
                      <div className='text-dark'>
                        <div className='typewriter'>
                          <h1 className='fs-6 fw-medium'>Hey, I’m Eduardo Diaz</h1>
                        </div>
                      </div>
                      &lt;/span&gt;
                    </div>
                    <h1 className='fs-50 my-3'>
                      Senior{' '}
                      <span className='text-linear-4'>
                        {'{'}Full Stack{'} '}
                      </span>
                      Mobile &amp; Web developer<span className='flicker'>_</span>
                    </h1>
                    <p className='mb-6 text-secondary-2'>
                      &lt;p&gt;
                      <span className='text-dark'>
                        With expertise in cutting-edge technologies such as
                      </span>{' '}
                      <span className='text-secondary-2'>React Native</span>,{' '}
                      <span className='text-secondary-2'>Flutter</span>,{' '}
                      <span className='text-secondary-2'>React</span>,{' '}
                      <span className='text-secondary-2'>Node.js</span>,{' '}
                      <span className='text-secondary-2'>Supabase</span>, and{' '}
                      <span className='text-secondary-2'>AWS</span>
                      <span className='text-dark'>
                        ... I deliver mobile and web solutions that are both innovative
                        and robust.
                      </span>
                      &lt;/p&gt;
                    </p>
                    <div className='row'>
                      <div className='col-7'>
                        {/* Carausel Scroll */}
                        <Marquee className='carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8'>
                          <ul className='carouselTicker__list '>
                            {skills.map((skill) => (
                              <li className='carouselTicker__item' key={skill.name}>
                                <Link
                                  href='javascript:void(0)'
                                  className='brand-logo icon_60 icon-shape rounded-3'
                                >
                                  <img src={skill.image} alt={skill.name} />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Marquee>
                      </div>
                      <div className='col-5 d-flex align-items-end'>
                        <span className='fs-6 text-300 mb-2'>...and more</span>
                      </div>
                    </div>
                    <Link
                      href='assets/Eduardo_Diaz_FullStackMobileDeveloper.pdf'
                      className='btn me-2 text-300 ps-0 mt-4'
                      target='_blank'
                    >
                      <i className='ri-download-line text-primary-2' />[ Download my CV ]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='background position-absolute top-0 start-0 w-100 h-100'>
          <img
            className='bg-w'
            src='assets/imgs/home-page-2/hero-1/bg.png'
            alt='portfolio'
          />
          <img
            className='bg-d'
            src='assets/imgs/home-page-2/hero-1/bg-dark.png'
            alt='portfolio'
          />
        </div>
      </section>
    </>
  );
}
