import React from 'react'

export default function Home() {
    return (
        <div>
            <section className='header'>
                <div class="container">
                    <nav class="navbar navbar-expand">
                        <div class="container">
                            <div className='logo'>
                                <h5>AUTO<span>ROAD</span></h5>
                            </div>
                            <div class="navbar-nav justify-content-center">
                                <a class="nav-link text-light">Home</a>
                                <a class="nav-link text-light">About</a>
                                <a class="nav-link text-light">Pricing</a>
                                <a class="nav-link text-light">Our Car</a>
                                <a class="nav-link text-light">Blog</a>
                                <a class="nav-link text-light">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='container'>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <h1>Now <br />it's easy for you<br /> rent a car</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            <div className='play-btn'>
                                <div class="play"></div>
                                <div>--Easy stapes for renting a car</div>
                            </div>
                        </div>
                        <div class="flex-item-right">
                            <div className='form-box'>
                                <h3>Make Your Trip</h3>
                                <form>
                                    <label for="fname">Pick-up location</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                                    <label for="lname">Drop-off location</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <div className='row'>
                                        <div className='col'>
                                            <label for="lname">Pick-up Date</label>
                                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                        </div>
                                        <div className='col'>
                                            <label for="lname">Drop-off Date</label>
                                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                        </div>
                                    </div>
                                    <label for="lname">Drop-off location</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dropdowns container mt-5'>
                <div className='row'>
                    <div className='col-xl-2 col-sm-6 col-6'>
                        <label for="lname">Drop-off Date</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-xl-2 col-sm-6 col-6'>
                        <label for="lname">Drop-off Date</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-xl-2 col-sm-6 col-6'>
                        <label for="lname">Drop-off Date</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-xl-2 col-sm-6 col-6'>
                        <label for="lname">Drop-off Date</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-xl-2 col-sm-12'>
                        <label for=""></label>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </section>

            <section className='services container'>
                <div>
                    <p className='text-danger' style={{ "font-weight": "bold" }}>OUR SERVICES</p>
                    <h1>Our services</h1>
                </div>
                <div className='row service-types'>
                    <div className='col-xl-3  col-sm-6'>
                        <p style={{ "font-weight": "bold" }}><i class="bi bi-tools"></i> &nbsp;&nbsp;24/7 Car Support</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                    <div className='col-xl-3 col-sm-6'>
                        <p style={{ "font-weight": "bold" }}><i class="bi bi-geo-fill"></i> &nbsp;&nbsp;LOst Of Location</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                    <div className='col-xl-3 col-sm-6'>
                        <p style={{ "font-weight": "bold" }}><i class="bi bi-journal-text"></i> &nbsp;&nbsp; Reservatin</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                    <div className='col-xl-3 col-sm-6'>
                        <p style={{ "font-weight": "bold" }}><i class="bi bi-car-front"></i> &nbsp;&nbsp; Rental Cars</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                </div>
            </section>

            <section className='cars'>
                <div>
                    <p className='text-danger' style={{ "font-weight": "bold" }}>WHAT WE OFFER</p>
                    <h1>Choose  Your Car</h1>
                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbuctzAP1J4l-VNdX4Hir0Ohmi0-60tmHQsOnvrdK_Q&s" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Ford</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexWuW7-J3aSVWL2NQQ7dD4Ie3NQrQf2_XMpCeo50Hdg&s" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://live.staticflickr.com/4344/36060206920_6c95c06fed_b.jpg" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://static.autox.com/uploads/2023/09/Mercedes-Benz-AMG-G63-Special-edition.jpg" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/ezgif-sixteen_nine_514.jpg?size=948:533" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://www.livemint.com/lm-img/img/2023/10/16/600x338/jnjnnjnj_1697443437380_1697443449958.jpg" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://static.autox.com/uploads/2023/03/Mahindra-Thar-4WD.jpg" alt="Image" />
                                <div class="price-box">
                                    <div class="price">$99</div>
                                    <div>
                                        <div class="additional-text">From</div>
                                        <div class="day">/day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="card-title">Product Title</h2>
                                <p>Audi</p>
                                <div class="buttons">
                                    <button class="btn">Book Now</button>
                                    <button class="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-work'>
                <div className='container'>
                    <div>
                        <p>Work Flow</p>
                        <h1>How It Works</h1>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <div class="circle">
                                <i class="bi bi-geo-fill"></i>
                            </div>
                            <div className='circle-contant'>
                                <h5>Pick Destination</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <div class="circle">
                                <i class="bi bi-hand-index"></i>
                            </div>
                            <div className='circle-contant'>
                                <h5>Select Term</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <div class="circle">
                                <i class="bi bi-car-front"></i>
                            </div>
                            <div className='circle-contant'>
                                <h5>Choose A Car</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <div class="circle">
                                <i class="bi bi-person-arms-up"></i>
                            </div>
                            <div className='circle-contant'>
                                <h5>Enjoy The Ride</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='clients'>
                <div className='container'>
                    <p className='text-danger' style={{ "font-weight": "bold" }}>TESTIMATION</p>
                    <h1>Happy Clients</h1>
                    <div class="row mt-5">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                                </div>
                                <div class="team-content">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><i class="bi bi-facebook"></i></li>
                                    <li><i class="bi bi-twitter"></i></li>
                                    <li><i class="bi bi-google"></i></li>
                                    <li><i class="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=839" />
                                </div>
                                <div class="team-content">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                    <h3 class="name">Patricia Knott</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><i class="bi bi-facebook"></i></li>
                                    <li><i class="bi bi-twitter"></i></li>
                                    <li><i class="bi bi-google"></i></li>
                                    <li><i class="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=856" />
                                </div>
                                <div class="team-content">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                    <h3 class="name">Justin Ramos</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><i class="bi bi-facebook"></i></li>
                                    <li><i class="bi bi-twitter"></i></li>
                                    <li><i class="bi bi-google"></i></li>
                                    <li><i class="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-us mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-lg-6'>
                            <img className='about-img' src='https://as1.ftcdn.net/v2/jpg/02/95/78/94/1000_F_295789421_Ah3ciCGIAPf1y8LBVwxxJq5xlF6sZfTa.jpg'></img>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-6 mt-4'>
                            <p className='text-danger' style={{ "font-weight": "bold" }}>About US</p>
                            <h3>Choose A Parfect Car</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, </p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered  </p>
                            <button className='btn'>Search Vehical</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog mt-5'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" alt="Image" />
                            </div>
                            <div class="card-content">
                                <p><small>july 24, 2019 Admin</small></p>
                                <h6>Why Lead Generation Is Key for Business Growth</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/640px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg" alt="Image" />
                            </div>
                            <div class="card-content">
                                <p><small>july 24, 2019 Admin</small></p>
                                <h6>Why Lead Generation Is Key for Business Growth</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
                        <div class="card">
                            <div class="card-image">
                                <img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=80" alt="Image" />
                            </div>
                            <div class="card-content">
                                <p><small>july 24, 2019 Admin</small></p>
                                <h6>Why Lead Generation Is Key for Business Growth</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Site footer */}
            <footer className="site-footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <h6>About</h6>
                            <p className="text-justify mt-5">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code.  Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                            <ul className="social-icons mt-5">
                                <li><a className="facebook" href="#"><i class="bi bi-0-circle-fill"></i></a></li>
                                <li><a className="twitter" href="#"><i class="bi bi-0-circle-fill"></i></a></li>
                                <li><a className="dribbble" href="#"><i class="bi bi-0-circle-fill"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>information</h6>
                            <ul className="footer-links mt-5">
                                <li><a href="http://scanfcode.com/category/c-language/">About</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">Service</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Term and connection</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Best price Guarantee</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Privacy & cookies Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Customer Supports</h6>
                            <ul className="footer-links mt-5">
                                <li><a href="http://scanfcode.com/category/c-language/">FAQ</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">Payment Option</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Booking Tips</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">How It Works</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <p className='mt-5'><i class="bi bi-geo-alt-fill"></i> 203 Fake at vfdvd vvfdfd fdfdv fd fdgfddf df- gujarat</p>
                            <p><i class="bi bi-telephone-forward-fill"></i> +91 7046216701</p>
                            <p><i class="bi bi-envelope-arrow-down-fill"></i> vijayjinjala@gmial.com</p>
                        </div>
                    </div>
                    <div className='copyright-text mt-5'>
                        <p>copyright <i class="bi bi-c-circle"></i> all right reserved | This template is made with <i class="bi bi-heart-fill"></i> by coloriid</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
