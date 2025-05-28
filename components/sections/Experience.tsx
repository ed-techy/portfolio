import { useState, useMemo } from 'react';
import Link from 'next/link';
import employmentHistories from '@/data/Experience.json';

export default function Experience() {
  const [activeHistoryId, setActiveHistoryId] = useState(employmentHistories[0].id);

  const activeHistory = useMemo(
    () => employmentHistories.find((history) => history.id === activeHistoryId),
    [activeHistoryId],
  );

  return (
    <>
      <section id='experience' className='section-experience pt-5'>
        <div className='container'>
          <div className='rounded-3 border border-1 position-relative overflow-hidden'>
            <div className='box-linear-animation position-relative z-1'>
              <div className='p-lg-8 p-md-6 p-3 position-relative z-1'>
                <div className='d-flex align-items-center'>
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
                    Expericence{' '}
                  </span>
                </div>
                <h3>
                  +10 <span className='text-300'>years of </span>
                  passion{' '}
                  <span className='text-300'>
                    for <br />
                    programming techniques
                  </span>
                </h3>
                <div className='row mt-5'>
                  <div className='col-lg-4'>
                    <div className='d-flex flex-column gap-2'>
                      {employmentHistories.map((history) => (
                        <Link
                          href='javascript:void(0)'
                          key={history.id}
                          className='technology border border-1 rounded-3 p-3'
                          onClick={() => setActiveHistoryId(history.id)}
                        >
                          <div className='d-flex align-items-center gap-2'>
                            {/* <img
                              src='assets/imgs/home-page-2/experience/google.svg'
                              alt='portfolio'
                            /> */}
                            <div className='d-flex flex-column ms-2'>
                              <h5 className='mb-1'>{history.company}</h5>
                              <span className='text-300'>{history.duration}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className='col-lg-8 ps-lg-5 mt-5 mt-lg-0'>
                    <h6 className='text-linear-4'>{activeHistory?.role}</h6>
                    <ul className='mt-4'>
                      {activeHistory?.contributions.map((contribution) => (
                        <li className='text-dark mb-3' key={contribution}>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                    <div className='d-flex flex-wrap align-items-center gap-3 mt-7'>
                      {activeHistory?.skills.map((skill) => (
                        <Link
                          href='javascript:void(0)'
                          className='text-300 border border-1 px-3 py-1'
                          id={skill}
                        >
                          {skill}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <img
                className='position-absolute top-0 start-0 z-0'
                src='assets/imgs/home-page-2/services/bg.png'
                alt='portfolio'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
