import React from 'react'

function ContactSection() {
  return (
    <>
          <div class="contact-section main-wrapper">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-xl-7 col-lg-9">
                          <div class="contact-card">
                              <h4 class="contact-heading">Feel Free to Write Us Anytime</h4>
                              <form method="post" class="contact-form">
                                  <div class="row g-4">
                                      <div class="col-sm-6">
                                          <input type="text" class="form-control custom-input" placeholder="Enter Your Name" />
                                      </div>
                                      <div class="col-sm-6">
                                          <input type="email" class="form-control custom-input" placeholder="Enter Your Email" />
                                      </div>
                                      <div class="col-sm-6">
                                          <input type="tel" class="form-control custom-input" placeholder="Phone No." />
                                      </div>
                                      <div class="col-sm-6">
                                          <input type="text" class="form-control custom-input" placeholder="Select Subject" />
                                      </div>
                                      <div class="col-sm-12">
                                          <textarea class="form-control custom-textarea" rows="5" placeholder="Enter your message..."></textarea>
                                      </div>
                                  </div>
                                  <div className="mt-4">
                                    <button type='submit' className='btn send-btn'> Send Message </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="map-container">
                  <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.032679794494!2d91.7830955583486!3d24.90004376303309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1752619237327!5m2!1sen!2sin"
                      class="map-frame"
                      allowfullscreen=""
                      loading="lazy">
                  </iframe>
              </div>
          </div>
    </>
  )
}

export default ContactSection
