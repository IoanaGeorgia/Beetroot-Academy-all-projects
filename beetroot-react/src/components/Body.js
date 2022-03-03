import illustration from './uploading-illustration.png'
import responsive from './icon-ultra-responsive.png'
import design from './icon-award-winning-design.png'
import last from './icon-online-support.png'
function Body(){
    return (
        <div>
        <main>
            <div class="main_dv">
                <h4 class="small-title">An Agency That Helps You</h4>
                <h2 class="big-title">Grow Your Business</h2>
                <p>
                    Build an award winning website that grows your business with the help
                    of Last Door. Our 15+ years of experience in building websites have
                    grown businesses of 1000+ clients.
                </p>
                <button>Get Your Free Consultation Now</button>
            </div>
            <div>
                <img src= { illustration } />
            </div>
        </main><div class="secondmain">
                <div class="secondmain--agency">
                    <div class="insideWrapper">
                        <p>Our Services</p>
                        <p>Why choose Agency theme</p>
                        <div class="secondmain__details">
                            <div class="secondmain__details--inside">
                                <img src={ responsive } />
                                    <p>Ultra Responsive</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit in erat nec fermentum vestibulum.</p>
                                </div>
                            <div class="secondmain__details--inside">
                                <img src={ design } />
                                    <p>Award Winning Design</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit in erat nec fermentum. Aliquam rutrum vestibulum.</p>
                                </div>
                            <div class="secondmain__details--inside">
                                <img src={ last } />
                                    <p>Support & Updates</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas hendrerit in erat nec fermentum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="secondmain--stats">
                    <div class="secondmainstats__inside">
                        <div class="secondmainstats__inside--stats">
                            7.5K<span class="secondmain--pink">+</span>
                        </div>
                        <div class="secondmainstats__inside--description">
                            Websites, Software & Apps
                        </div>
                    </div>
                    <div class="secondmainstats__inside">
                        <div class="secondmainstats__inside--stats">
                            15YRS<span class="secondmain--pink">+</span>
                        </div>
                        <div class="secondmainstats__inside--description">
                            Years of Experience
                        </div>
                    </div>
                    <div class="secondmainstats__inside">
                        <div class="secondmainstats__inside--stats">
                            6.2K<span class="secondmain--pink">+</span>
                        </div>
                        <div class="secondmainstats__inside--description">
                            Customers Served
                        </div>
                    </div>
                </div>
                <div class="about-us">
                    <p class="small-title">Robust Agency</p>
                    <p class="medium-bold-title">About us</p>
                    <div class="about-us__inside">
                        <div class="about-us__inside-left">
                            <p>We specialise in website design, user interfaces, development & copywriting.</p>
                            <p>We’re a website development studio focussed on creating immersive digital strategies for your business that take established brands to new heights and launch ambitious start-ups towards their goals.</p>
                        </div>
                        <div class="about-us__inside-right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nisl vulputate justo consequat tempor. Nam gravida sed ipsum in pellentesque. Cras pellentesque placerat cursus. Ut ultrices ultricies finibus. Donec rutrum felis convallis, efficitur tellus sit amet, tristique metus. Integer eget sagittis urna.
                            </p><p>Aenean et facilisis mi, ut posuere eros. Vivamus nec velit at diam pretium blandit id nec urna. Aenean dignissim vehicula sapien ut vehicula. Aliquam gravida metus non ullamcorper vestibulum. Mauris lobortis purus at diam posuere, at molestie massa lobortis.</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                )
                }
export default Body;
                