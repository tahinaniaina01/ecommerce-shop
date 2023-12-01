import image from '../assets/woman_hero.png';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (<section className='w-full h-[800px] bg-hero bg-cover bg-center flex items-center lg:items-end justify-center' id="home">
        <div className="container flex justify-around items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" data-aos="fade-right">Everything you need for your family, 
                    <br className="hidden lg:inline-block"/>in one place 
                </h1>
                <p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">Shop everything you need for the whole family, all in one place. We offer a wide selection of clothing and accessories for women, men and children, as well as a range of electronics for all ages.</p>
                <Link to="/Cart">
                    <div className="flex items-center group font-bold text-3xl" data-aos="fade-right" data-aos-delay="300">
                        <button className="inline-flex border-0 py-2 px-2 focus:outline-none rounded">View Cart</button>
                        <BsArrowRight className='text-3xl' />
                    </div>
                </Link>
            </div>        
            <div data-aos="fade-up" data-aos-duration="1000">
                <img src={image} alt="" className='hidden lg:block'/>
            </div>
        </div>
    </section>);
}