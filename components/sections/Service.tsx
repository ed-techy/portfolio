import Link from 'next/link';

export default function Service() {
  return (
    <>
      <section id='services' className='section-service-2 pt-5'>
        <div className='container'>
          <div className='rounded-3 border border-1 position-relative overflow-hidden'>
            <div className='box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4'>
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
                      Cooperation{' '}
                    </span>
                  </div>
                  <h3>
                    Designing solutions{' '}
                    <span className='text-300'>
                      customized
                      <br />
                      to meet your requirements
                    </span>
                  </h3>
                </div>
                <div className='container mt-5'>
                  <div className='row g-4'>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='-10 0 394 512'
                          width={24}
                          height={24}
                        >
                          <path
                            fill='#1F1F24'
                            d='M64 448v-80h256v80c0 8.7998 -7.2002 16 -16 16h-224c-8.7998 0 -16 -7.2002 -16 -16zM64 320v-256c0 -8.7998 7.2002 -16 16 -16h224c8.7998 0 16 7.2002 16 16v256h-256zM16 64v384c0 35.2998 28.7002 64 64 64h224c35.2998 0 64 -28.7002 64 -64v-384 c0 -35.2998 -28.7002 -64 -64 -64h-224c-35.2998 0 -64 28.7002 -64 64zM192 392c-13.2549 0 -24 10.7451 -24 24s10.7451 24 24 24s24 -10.7451 24 -24s-10.7451 -24 -24 -24z'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>Mobile Development</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Developing fast, cross-platform mobile apps with smooth user
                          experiences using{' '}
                          <span className='text-secondary-2'>React Native</span>,{' '}
                          <span className='text-secondary-2'>Expo</span>, and{' '}
                          <span className='text-secondary-2'>Flutter</span>.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z'
                            fill='#1F1F24'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>Web Development</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Crafting visually appealing and user-friendly interfaces using{' '}
                          <span className='text-secondary-2'>HTML</span>,{' '}
                          <span className='text-secondary-2'>CSS</span>,{' '}
                          <span className='text-secondary-2'>JavaScript</span>, and modern
                          frameworks like <span className='text-secondary-2'>React</span>
                          {' and '}
                          <span className='text-secondary-2'>Next.js</span>.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z'
                            fill='#1F1F24'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>API Development</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Creating and integrating{' '}
                          <span className='text-secondary-2'>RESTful APIs</span> and{' '}
                          <span className='text-secondary-2'>GraphQL APIs</span> to enable
                          smooth communication between front-end and back-end systems.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='-10 0 522 512'
                          fill='none'
                        >
                          <path
                            d='M256 0c-17 0 -33.5996 1.7002 -49.7998 4.7998c-7.7998 1.59961 -21.7002 6.09961 -29.4004 20.0996c-2 3.59961 -3.59961 7.59961 -4.59961 11.7998l-9.2998 38.5c-1.40039 5.7998 -11.2002 11.5 -16.9004 9.7998l-38 -11.2002 c-4 -1.09961 -8.09961 -1.7998 -12.1992 -1.89941c-16 -0.5 -27 9.40039 -32.2998 15.4004c-22.0996 25.2002 -39.0996 54.6006 -49.8994 86.3008c-2.59961 7.5 -5.59961 21.7002 2.60059 35.2998c2.2002 3.59961 4.90039 7 8 10l28.7998 27.2998 c4.2002 4 4.2002 15.5 0 19.5l-28.7002 27.2998c-3.09961 3 -5.7998 6.40039 -8 10c-8.2998 13.5996 -5.2998 27.7998 -2.7002 35.3994c10.7998 31.7002 27.8994 61.2002 49.8994 86.2998c5.2998 6 16.2002 15.9004 32.2998 15.4004 c4.09961 -0.0996094 8.19922 -0.699219 12.1992 -1.89941l38 -11.2002c5.7002 -1.7002 15.5 4 16.9004 9.7998l9.2998 38.5c1 4.2002 2.59961 8.10059 4.59961 11.8008c7.59961 14 21.5 18.5996 29.4004 20.0996c16.2002 3.09961 32.7998 4.7998 49.7998 4.7998 s33.5996 -1.7002 49.7998 -4.7998c7.7998 -1.59961 21.7002 -6.09961 29.4004 -20.0996c2 -3.59961 3.59961 -7.59961 4.59961 -11.7998l9.2998 -38.5c1.40039 -5.7998 11.2002 -11.5 16.9004 -9.7998l38 11.2998c4 1.09961 8.09961 1.7998 12.1992 1.89941 c16 0.5 27 -9.40039 32.2998 -15.4004c22.0996 -25.2002 39.0996 -54.6006 49.8994 -86.3008c2.5 -7.59961 5.5 -21.7998 -2.7002 -35.3994c-2.2002 -3.59961 -4.90039 -7 -8 -10l-28.7002 -27.2998c-4.2002 -4 -4.2002 -15.5 0 -19.5l28.7002 -27.2998 c3.09961 -3 5.7998 -6.40039 8 -10c8.2998 -13.5996 5.2998 -27.7998 2.7002 -35.3994c-10.7998 -31.7002 -27.7998 -61.2002 -49.8994 -86.2998c-5.2998 -6 -16.2002 -15.9004 -32.2998 -15.4004c-4.09961 0.0996094 -8.19922 0.699219 -12.1992 1.89941l-38 11.2002 c-5.7002 1.7002 -15.5 -4 -16.9004 -9.7998l-9.2998 -38.5c-1 -4.2002 -2.59961 -8.10059 -4.59961 -11.8008c-7.59961 -14 -21.5 -18.5996 -29.4004 -20.0996c-16.2002 -3.09961 -32.7998 -4.7998 -49.7998 -4.7998zM218.1 51.4004h0.0996094 c24.5996 -4.5 51.2998 -4.5 75.8994 0l8.5 35.0996c7.7998 32.2998 45.3994 54 77.1992 44.5996l34.5996 -10.2002c16.5 19.2998 29.5 41.7002 38 65.7002l-26.2002 24.9004c-24 22.7998 -24 66.2002 0 89l26.2002 24.9004c-8.5 24 -21.5 46.4004 -38 65.7002 l-34.5996 -10.2002c-31.9004 -9.2998 -69.4004 12.2998 -77.2002 44.5996l-8.5 35.0996c-24.5996 4.5 -51.2998 4.5 -75.8994 0l-8.5 -35.0996c-7.7998 -32.2998 -45.3994 -54 -77.1992 -44.5996l-34.5996 10.2002c-16.5 -19.2998 -29.5 -41.7002 -38 -65.7002 l26.2002 -24.9004c24 -22.7998 24 -66.2002 0 -89l-26.2002 -24.9004c8.5 -24 21.5 -46.4004 38 -65.7002l34.5 10.2002c31.9004 9.2998 69.4004 -12.2998 77.2002 -44.5996zM208 256c0 -17.1484 9.14844 -32.9941 24 -41.5684s33.1494 -8.57422 48.001 0 s24 24.4199 24 41.5684s-9.14844 32.9941 -24 41.5684s-33.1494 8.57422 -48.001 0s-24 -24.4199 -24 -41.5684zM256 352c34.2979 0 65.9902 -18.2979 83.1387 -48s17.1484 -66.2969 0 -95.999s-48.8408 -48 -83.1387 -48s-65.9902 18.2979 -83.1387 48 s-17.1484 66.2969 0 95.999s48.8408 48 83.1387 48z'
                            fill='#1F1F24'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>DevOps & CI/CD</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Streamlining development workflows with{' '}
                          <span className='text-secondary-2'>automated testing</span>,{' '}
                          <span className='text-secondary-2'>continuous integration</span>
                          , and{' '}
                          <span className='text-secondary-2'>deployment pipelines</span>{' '}
                          for releases.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M12 13.3336L2.77735 19.482C2.54759 19.6352 2.23715 19.5731 2.08397 19.3434C2.02922 19.2612 2 19.1647 2 19.066V4.93457C2 4.65842 2.22386 4.43457 2.5 4.43457C2.59871 4.43457 2.69522 4.46379 2.77735 4.51854L12 10.6669V4.93457C12 4.65842 12.2239 4.43457 12.5 4.43457C12.5987 4.43457 12.6952 4.46379 12.7774 4.51854L23.376 11.5842C23.6057 11.7374 23.6678 12.0479 23.5146 12.2776C23.478 12.3325 23.4309 12.3797 23.376 12.4163L12.7774 19.482C12.5476 19.6352 12.2372 19.5731 12.084 19.3434C12.0292 19.2612 12 19.1647 12 19.066V13.3336ZM10.3944 12.0003L4 7.73734V16.2632L10.3944 12.0003ZM14 7.73734V16.2632L20.3944 12.0003L14 7.73734Z'
                            fill='#1F1F24'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>Performance Optimization</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Improving the speed and performance of mobile web applications
                          to provide a better user experience.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='card-servies-2 rounded-2 h-100 hover-up'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M16.9337 8.96494C16.426 5.03562 13.0675 2 9 2C4.58172 2 1 5.58172 1 10C1 11.8924 1.65707 13.6313 2.7555 15.0011C3.56351 16.0087 4.00033 17.1252 4.00025 18.3061L4 22H13L13.001 19H15C16.1046 19 17 18.1046 17 17V14.071L18.9593 13.2317C19.3025 13.0847 19.3324 12.7367 19.1842 12.5037L16.9337 8.96494ZM3 10C3 6.68629 5.68629 4 9 4C12.0243 4 14.5665 6.25141 14.9501 9.22118L15.0072 9.66262L16.5497 12.0881L15 12.7519V17H11.0017L11.0007 20H6.00013L6.00025 18.3063C6.00036 16.6672 5.40965 15.114 4.31578 13.7499C3.46818 12.6929 3 11.3849 3 10ZM21.1535 18.1024L19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001C21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001C23 14.2576 22.32 16.3562 21.1535 18.1024Z'
                            fill='#1F1F24'
                          />
                        </svg>
                        <h6 className='my-3 fw-medium'>Integrating AI</h6>
                        <p className='fs-7 text-300 fw-regular'>
                          Boost your applications with{' '}
                          <span className='text-secondary-2'>AI</span> for improved
                          efficiency, automation, and enhanced user experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center pt-60'>
                    <p className='text-300'>
                      Excited to take on <span className='text-dark'>new projects</span>{' '}
                      and collaborate. <br />
                      Let's chat about your ideas.{' '}
                      <Link href='#contact' className='text-primary-2'>
                        Reach out!
                      </Link>
                    </p>
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
