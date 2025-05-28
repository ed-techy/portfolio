import { Formik } from 'formik';

interface FormValues {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  return (
    <>
      <section
        id='contact'
        className='section-contact-2 position-relative pt-60 pb-60 overflow-hidden'
      >
        <div className='container position-relative z-1'>
          <div className='row align-items-center'>
            <div className='col-lg-7 pb-5 pb-lg-0'>
              <div className='position-relative'>
                <div className='position-relative z-2'>
                  <h3 className='text-primary-2 mb-3'>Let’s connect</h3>
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                    }}
                    validate={(values: FormValues) => {
                      const errors: FormErrors = {};

                      if (!values.name.trim()) {
                        errors.name = 'Name is required';
                      }

                      if (!values.email) {
                        errors.email = 'Email is required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address';
                      }

                      if (!values.message?.trim()) {
                        errors.message = 'Message is required';
                      }

                      console.log('errors: ', errors);

                      return errors;
                    }}
                    onSubmit={(values: FormValues, { setSubmitting, resetForm }) => {
                      const form = document.getElementById(
                        'contactForm',
                      ) as HTMLFormElement;
                      const status = document.getElementById(
                        'contactFormStatus',
                      ) as HTMLElement;
                      const data = new FormData();

                      data.append('name', values.name);
                      data.append('email', values.email);
                      if (values.phone) {
                        data.append('phone', values.phone);
                      }
                      if (values.subject) {
                        data.append('subject', values.subject);
                      }
                      data.append('message', values.message);

                      fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: { Accept: 'application/json' },
                      })
                        .then((response) => {
                          if (response.ok) {
                            status.innerHTML =
                              '<p class="text-primary-2">Thanks, your message is sent successfully.</p>';
                            resetForm();
                          } else {
                            response.json().then((data) => {
                              if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data['errors']
                                  .map((error: any) => error['message'])
                                  .join(', ');
                              } else {
                                status.innerHTML =
                                  '<p class="text-dark">Oops! There was a problem submitting your message.</p>';
                              }
                            });
                          }
                        })
                        .catch((_) => {
                          status.innerHTML =
                            '<p class="text-dark">Oops! There was a problem submitting your message.</p>';
                        })
                        .finally(() => {
                          setSubmitting(false);
                        });
                    }}
                  >
                    {({
                      values,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form
                        action='https://formspree.io/f/mjkwnplv'
                        onSubmit={handleSubmit}
                        id='contactForm'
                      >
                        <div className='row g-3'>
                          <div className='col-md-6 '>
                            <input
                              type='text'
                              className='form-control bg-3 border border-1 rounded-3'
                              id='name'
                              name='name'
                              placeholder='Your name *'
                              aria-label='username'
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              type='text'
                              className='form-control bg-3 border border-1 rounded-3'
                              id='phone'
                              name='phone'
                              placeholder='Phone'
                              aria-label='phone'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              type='email'
                              className='form-control bg-3 border border-1 rounded-3'
                              id='email'
                              name='email'
                              placeholder='Emaill *'
                              aria-label='email'
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              type='text'
                              className='form-control bg-3 border border-1 rounded-3'
                              id='subject'
                              name='subject'
                              placeholder='Subject'
                              aria-label='subject'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subject}
                            />
                          </div>
                          <div className='col-12'>
                            <textarea
                              className='form-control bg-3 border border-1 rounded-3'
                              id='message'
                              name='message'
                              placeholder='Message *'
                              aria-label='With textarea'
                              defaultValue={''}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                          </div>
                          <div className='col-12'>
                            <button
                              type='submit'
                              className='btn btn-primary-2 rounded-2'
                              disabled={isSubmitting}
                            >
                              Send Message
                              <i className='ri-arrow-right-up-line' />
                            </button>
                          </div>
                        </div>

                        <div id='contactFormStatus' />
                      </form>
                    )}
                  </Formik>
                </div>
                <div className='z-0 bg-primary-dark rectangle-bg z-1 rounded-3' />
              </div>
            </div>
            <div className='col-lg-5 d-flex flex-column ps-lg-8'>
              {/* <div className='d-flex align-items-center mb-3 position-relative d-inline-flex'>
                <div className='d-inline-block'>
                  <div className='icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3'>
                    <i className='ri-phone-fill text-primary-2 fs-26' />
                  </div>
                </div>
                <div className='ps-3 h-100'>
                  <span className='text-400 fs-6'>Phone Number</span>
                  <h6 className='mb-0'>+52 1234567890</h6>
                </div>
                <a
                  href='tel:+52 1234567890'
                  className='position-absolute top-0 start-0 w-100 h-100'
                />
              </div> */}
              <div className='d-flex align-items-center mb-3 position-relative d-inline-flex'>
                <div className='d-inline-block'>
                  <div className='icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3'>
                    <i className='ri-mail-fill text-primary-2 fs-26' />
                  </div>
                </div>
                <div className='ps-3 h-100'>
                  <span className='text-400 fs-6'>Email</span>
                  <h6 className='mb-0'>eduardod8108@gmail.com</h6>
                </div>
                <a
                  href='mailto:eduardod8108@gmail.com'
                  className='position-absolute top-0 start-0 w-100 h-100'
                />
              </div>
              <div className='d-flex align-items-center mb-3 position-relative d-inline-flex'>
                <div className='d-inline-block'>
                  <div className='icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3'>
                    <i className='ri-skype-fill text-primary-2 fs-26' />
                  </div>
                </div>
                <div className='ps-3 h-100'>
                  <span className='text-400 fs-6'>Skype</span>
                  <h6 className='mb-0'>eduardo.dev</h6>
                </div>
                <a
                  href='skype:SKYPENAME?add'
                  className='position-absolute top-0 start-0 w-100 h-100'
                />
              </div>
              <div className='d-flex align-items-center mb-3 position-relative d-inline-flex'>
                <div className='d-inline-block'>
                  <div className='icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3'>
                    <i className='ri-map-2-fill text-primary-2 fs-26' />
                  </div>
                </div>
                <div className='ps-3 h-100'>
                  <span className='text-400 fs-6'>Address</span>
                  <h6 className='mb-0'>Rioverde, SLP, Mexico 79625</h6>
                </div>
                <a
                  href='https://maps.app.goo.gl/5DJtJKqvD1k2xmsd7'
                  className='position-absolute top-0 start-0 w-100 h-100'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
