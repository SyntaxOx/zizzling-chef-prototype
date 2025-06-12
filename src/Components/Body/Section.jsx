
import './Section.css'

import { useNavigate } from 'react-router-dom';

import { Element } from 'react-scroll';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Section() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500, /* Higher the Value Slower the Transition */
        slidesToShow: 3,
        slidesToScroll: 1, /* How many cards should it show every time you click next or prev buttons */
        initialSlide: 0,
        prevArrow: (
            <div className="slick-prev">
                <i className="fas fa-chevron-left" />
            </div>
        ),
        nextArrow: (
            <div className="slick-next">
                <i className="fas fa-chevron-right"/>
            </div>
        ),
        responsive: [
            {
            breakpoint: 1024, /* Size of the Screen  --- Responsive ---  */
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]};

    const GoTomenu = useNavigate();

    const StartOder = () => {
        GoTomenu('/menu');
    }    
    
    return (
        <>
            <Element name="home">
                <section id="Home">
                    <h1 className='HomeTitle'>Zizzling Chef</h1>
                    <h2 className='HomeSubHeading'>The Original and Traditional Restaurant</h2>
                    <button className='HomeButton' onClick={StartOder}>Order</button>
                </section>
            </Element>
            <Element name="blog">
                <section id="Blog">
                    <h1 className='FeaturesBlog'>Features Blog</h1>
                    <div className="containerBlog">
                        <div className="blogs">
                            <div className="BlogPost">
                                <img className="BlogImage" src="/zizzlingChef/Images/Antipolo-Church.jpg" alt="BlogPost"/>
                                <h2 className='BlogTitleItem'>Antipolo Church</h2>
                                <p className='BlogDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                            <div className="BlogPost">
                                <img className="BlogImage" src="/zizzlingChef/Images/Coffee.jpg" alt="BlogPost"/>
                                <h2 className='BlogTitleItem'>Coffee</h2>
                                <p className='BlogDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                            <div className="BlogPost">
                                <img className="BlogImage" src="/zizzlingChef/Images/pancit.jpg" alt="BlogPost"/>
                                <h2 className='BlogTitleItem'>Pancit</h2>
                                <p className='BlogDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                        </div>                    
                    </div>

                </section>
            </Element>
            <Element name="event">
                <section id="Event">
                    <h1 className='ComingEvent'>Coming Event</h1>
                    <div className="containerEvent">
                        <Slider {...settings}>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/valentines.jpg" alt="valentines" />
                                <h2 className='EventTitleItem'>Valentines</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/Halloween.jpg" alt="halloween" /> 
                                <h2 className='EventTitleItem'>Halloween</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>  
                            </div>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/GinderBread.jpg" alt="gingerBread" />
                                <h2 className='EventTitleItem'>Cristmas</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/RainRain.jpg" alt="rainy" />
                                <h2 className='EventTitleItem'>Rainy</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/winter.jpg" alt="winter" /> 
                                <h2 className='EventTitleItem'>Winter</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>  
                            </div>
                            <div className="events">
                                <img className="image" src="/zizzlingChef/Images/summer.jpg" alt="summer" />
                                <h2 className='EventTitleItem'>Summer</h2>
                                <p className='EventDescriptionItem'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic magni minima nam 
                                    animi sapiente molestiae laboriosam placeat inventore quos nesciunt, libero repudiandae, 
                                    facilis harum reprehenderit voluptates. Reiciendis, nam quos? Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam eos aliquid, ea atque laboriosam recusandae at delectus 
                                    dolore quod ratione quidem architecto, exercitationem a nam eligendi velit quasi magni minima!</p>
                            </div>
                        </Slider>            
                    </div>
                </section>
            </Element>
            <Element name="contact">
                <section id="Contact">
                    <h1 className='ContactUs'>Contact Us</h1>
                    <div className="ContactContainer">
                        <div className="location">
                            <FaLocationDot className="FaLocationDot"/>
                            Sambaville, Brgy. San Luis, Antipolo City, Rizal 
                        </div>
                        <div className="number">
                            <FaPhoneAlt className="FaPhoneAlt"/>
                            +6391-2345-6789
                        </div>
                        <div className="email">
                            <TfiEmail className="TfiEmail"/>
                            Zizzling.chef@gmail.com
                        </div>
                        <img className="BusinessImage" src="/zizzlingChef/Logo.jpg" alt="Zizzling Chef" />
                        <div className="BusinessName">Zizzling Chef</div>
                        <div className="ewankopa">&copy; 2021 Zizzling Chef. This Website is for PRACTICE PROJECT only</div>
                    </div>
                </section>
            </Element>
        </>
    )
}
