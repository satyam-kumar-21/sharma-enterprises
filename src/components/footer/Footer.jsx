import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl sm:text-4xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg sm:text-xl mt-2 mb-4 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex flex-wrap">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 sm:h-12 sm:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                                <FontAwesomeIcon icon={faTwitter} className="text-xl sm:text-2xl" />
                            </button>
                            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 sm:h-12 sm:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                                <FontAwesomeIcon icon={faFacebookSquare} className="text-xl sm:text-2xl" />
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 sm:h-12 sm:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                                <FontAwesomeIcon icon={faDribbble} className="text-xl sm:text-2xl" />
                            </button>
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 sm:h-12 sm:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-2" type="button">
                                <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-col lg:flex-row lg:space-x-8">
                            <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                                <span className="block uppercase text-blueGray-500 text-sm sm:text-base font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm sm:text-base font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://creative-tim.com/terms?ref=njs-profile">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm sm:text-base" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm sm:text-base text-blueGray-500 font-semibold py-1 flex items-center justify-center space-x-2">
                            <span>Copyright © 2024 Sharma Enterprises by HiTechJunction.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
