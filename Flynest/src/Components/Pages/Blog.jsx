import React from 'react'
import vanimg from '../../assets/news-6.png'
import news1 from '../../assets/news-1.png';
import news2 from '../../assets/news-2.png';
import news3 from '../../assets/news-3.png';
import news4 from '../../assets/news-4.png';
import news5 from '../../assets/news-5.png';
import news6 from '../../assets/news-6.png';
import news7 from '../../assets/news-7.png';
import news8 from '../../assets/news-8.png';
import news9 from '../../assets/news-9.png';

function BlogSection() {
  return (
    <>
          <div class="blog-section main-wrapper text-white">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 mb-4">
                          <img src={vanimg} alt="" class="blog-section_main-img img-fluid rounded" />
                      </div>

                      <div class="col-lg-6">
                          <div class="blog-section_post mb-4">
                              <small class="blog-section_small-text">Tour Guide</small>
                              <h6 class="blog-section_card-title">
                                  The World is a Book and Those Who do not Travel Read Only One Page.
                              </h6>
                              <div class="d-flex justify-content-between blog-section_meta small">
                                  <span>Crish Jorden</span>
                                  <span><i class="ri-time-line-me-1"></i>10 Min Read</span>
                              </div>
                          </div>

                          <div class="blog-section_post mb-4">
                              <small class="blog-section_small-text">Tour Guide</small>
                              <h6 class="blog-section_card-title">
                                  We Travel, Some of us Forever, to Seek Other States, Other Souls.
                              </h6>
                              <div class="d-flex justify-content-between blog-section_meta small">
                                  <span>David Warner</span>
                                  <span><i class="ri-time-line-me-1"></i>10 Min Read</span>
                              </div>
                          </div>
                          <div class="blog-section_post mb-4">
                              <small class="blog-section_small-text">Tour Guide</small>
                              <h6 class="blog-section_card-title">
                                  We Travel, Some of us Forever, to Seek Other States, Other Souls.
                              </h6>
                              <div class="d-flex justify-content-between blog-section_meta small">
                                  <span>David Malan</span>
                                  <span><i class="ri-time-line-me-1"></i>10 Min Read</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="row pt-4">
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news1} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Travel</small>
                                  <h6 class="blog-section_card-title">
                                      Exploring the Mountains: A Journey into the Wild
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Sarah Lee</span>
                                      <span><i class="ri-time-line me-1"></i>8 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news2} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Culture</small>
                                  <h6 class="blog-section_card-title">
                                      Immersing in Local Traditions: The Heart of the City
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Michael Smith</span>
                                      <span><i class="ri-time-line me-1"></i>6 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news3} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Adventure</small>
                                  <h6 class="blog-section_card-title">
                                      Sailing the Seven Seas: Epic Tales from the Ocean
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Anna Wright</span>
                                      <span><i class="ri-time-line me-1"></i>9 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news4} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Nature</small>
                                  <h6 class="blog-section_card-title">
                                      Discovering Hidden Waterfalls: A Photographar's Paradise
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Jason Lee</span>
                                      <span><i class="ri-time-line me-1"></i>7 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news5} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Lifestyle</small>
                                  <h6 class="blog-section_card-title">
                                      Minimalist Travel: How to Pack Light and Smart
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Emma Davis</span>
                                      <span><i class="ri-time-line me-1"></i>5 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news6} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Exploration</small>
                                  <h6 class="blog-section_card-title">
                                      The Art of Solo Travel: Embracing the Journey
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Oliver Brown</span>
                                      <span><i class="ri-time-line me-1"></i>12 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news7} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Nature</small>
                                  <h6 class="blog-section_card-title">
                                      Wandering Through Time: Discovering Hidden Cultural Gems
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Lucas Read</span>
                                      <span><i class="ri-time-line me-1"></i>7 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news8} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Nature</small>
                                  <h6 class="blog-section_card-title">
                                      Into the Wilderness: Embracing Earth's Untamed Beauty
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Grace Palmer</span>
                                      <span><i class="ri-time-line me-1"></i>/8 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="blog-section_card rounded overflow-hidden">
                              <img src={news9} alt="Travel Post 1" class="img-fluid" />
                              <div class="p-3">
                                  <small class="blog-section_small-text">Exploration</small>
                                  <h6 class="blog-section_card-title">
                                      Beyond the Horizon: Stories of Bold Expeditions
                                  </h6>
                                  <div class="d-flex justify-content-between blog-section_meta small">
                                      <span><i class="ri-user-line me-1"></i>Oliver Chase</span>
                                      <span><i class="ri-time-line me-1"></i>/11 Min Read</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default BlogSection
