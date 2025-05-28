import { useMemo } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import skills from '@/data/Skills.json';

export default function Skills() {
  const firstSkillsCount = Math.ceil(skills.length / 2);

  const firstSkills = useMemo(() => skills.slice(0, firstSkillsCount), [skills]);

  const secondSkills = useMemo(() => skills.slice(firstSkillsCount), skills);

  return (
    <>
      <section id='skills' className='section-skills-2 pt-5'>
        <div className='container'>
          <div className='rounded-3 bg-3 border border-1 position-relative overflow-hidden'>
            <div className='position-relative z-1 py-60'>
              <div className='position-relative z-1'>
                <div className='text-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <svg
                      className='text-primary-2 me-2'
                      xmlns='http://www.w3.org/2000/svg'
                      width={5}
                      height={6}
                      viewBox='0 0 5 6'
                      fill='none'
                    >
                      <circle cx='2.5' cy={3} r='2.5' fill='#A8FF53' />
                    </svg>
                    <span className='text-linear-4 d-flex align-items-center'>
                      {' '}
                      Skills{' '}
                    </span>
                  </div>
                  <h3>Languages, Frameworks, and Tools</h3>
                </div>
                <div className='container mt-8'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='row'>
                        <div className='col-lg-10 col-md-9 mx-auto overflow-hidden'>
                          {/* Carausel Scroll */}
                          <Marquee
                            className='carouselTicker carouselTicker-right position-relative z-1'
                            direction='right'
                          >
                            <ul className='carouselTicker__list m-0'>
                              {firstSkills.map((skill) => (
                                <li
                                  className='carouselTicker__item mt-6'
                                  key={skill.name}
                                >
                                  <Link
                                    href='javascript:void(0)'
                                    className='brand-logo icon_80 icon-shape rounded-3'
                                  >
                                    <img src={skill.image} alt={skill.name} />
                                  </Link>
                                  <span className='tool-tip'>{skill.name}</span>
                                </li>
                              ))}
                            </ul>
                          </Marquee>
                        </div>
                        <div className='col-lg-8 col-md-7 col-10 mx-auto overflow-hidden'>
                          {/* Carausel Scroll */}
                          <Marquee className='carouselTicker carouselTicker-left position-relative z-1'>
                            <ul className='carouselTicker__list m-0 '>
                              {secondSkills.map((skill) => (
                                <li
                                  className='carouselTicker__item mt-6'
                                  key={skill.name}
                                >
                                  <Link
                                    href='javascript:void(0)'
                                    className='brand-logo icon_80 icon-shape rounded-3'
                                  >
                                    <img src={skill.image} alt={skill.name} />
                                  </Link>
                                  <span className='tool-tip'>{skill.name}</span>
                                </li>
                              ))}
                            </ul>
                          </Marquee>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 border-start-md mt-lg-0 mt-5'>
                      <div className='row'>
                        <div className='col-md-10 mx-auto'>
                          <div className='h-100 position-relative'>
                            <ul className='ps-3 d-flex flex-column justify-content-between h-100 position-relative'>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>Mobile:</p>
                                  <span className='text-300'>
                                    React Native, Expo, Flutter, Swift, Java
                                  </span>
                                </div>
                              </li>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>Web:</p>
                                  <span className='text-300'>
                                    React, Next.js, HTML5, CSS3, Tailwind CSS
                                  </span>
                                </div>
                              </li>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>Backend:</p>
                                  <span className='text-300'>
                                    Node.js, Python, Django, RESTful, GraphQL
                                  </span>
                                </div>
                              </li>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>Databases:</p>
                                  <span className='text-300'>
                                    MongoDB, MySQL, PostgreSQL, Redis
                                  </span>
                                </div>
                              </li>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>Cloud:</p>
                                  <span className='text-300'>
                                    Supabase, Firebase, AWS, GCP, Vercel, Netlify
                                  </span>
                                </div>
                              </li>
                              <li className='mb-3'>
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                  <p className='text-dark text-nowrap mb-0'>DevOps:</p>
                                  <span className='text-300'>
                                    GitHub Actions, Bitrise, Fastlane, Docker
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='position-absolute d-none d-md-block decorate'>
              <div className='rotateme'>
                <div className='circle-1-1' />
                <div className='circle-1-2 position-absolute top-50 start-50 translate-middle'>
                  <svg
                    className='mb-5 position-absolute bottom-0 start-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width={9}
                    height={9}
                    viewBox='0 0 9 9'
                    fill='none'
                  >
                    <circle cx='4.5' cy='4.5' r='4.5' fill='#636366' />
                  </svg>
                </div>
                <div className='circle-1-3 position-absolute top-50 start-50 translate-middle '>
                  <svg
                    className='mb-3 position-absolute bottom-0 end-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width={9}
                    height={9}
                    viewBox='0 0 9 9'
                    fill='none'
                  >
                    <circle cx='4.5' cy='4.5' r='4.5' fill='#636366' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
