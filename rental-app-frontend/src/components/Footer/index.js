import React from 'react';
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer class="container border-top pt-5 mt-5">
            <div class="row">
                <div class="col-12 col-lg-4 mb-5 px-5">
                    <span class="h3 d-block primary-color">Resources</span>
                    <ul>
                        <li>
                            <Link to="/aboutus">About</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <a href="/">Legal</a>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                    <span class="h3 d-block primary-color">Search</span>
                    <ul>
                        <li>
                            <a href="/">Users</a>
                        </li>
                        <li>
                            <a href="/">Sites</a>
                        </li>
                        <li>
                            <Link to="/MapSearch">Map</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-4 mb-5 px-5">
                    <span class="h3 d-block primary-color">Social Media</span>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/rentvroom/">
                                <TiSocialInstagram />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rentvroom/">
                                <TiSocialFacebook />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Vroomrent">
                                <TiSocialTwitter />
                                Twitter
                            </a>
                        </li>
                    </ul>

                    {/* 
            Gmail ---
            Email - rentvroom@gmail.com
            Pass - vroom123!        //(This is the updated pass - latest)

            Instagram ---
            Username - rentvroom
            Pass - vroom123

            Twitter ---
            Username - Vroomrent
            Pass - vroom123

            Facebook page (add me up so I  can give admins) ---
            Link - https://www.facebook.com/Vroom-104576231830894
            Page created from my main account as an existing account is needed to create a business page/community. */}
                </div>
                <div class="col-12 col-lg-4 mb-5 px-5">
                    <span class="h3 d-block primary-color">Browse</span>
                    <ul>
                        <li>
                            <a href="/">Cheap Rentals</a>
                        </li>
                        <li>
                            <a href="/">Unique Rentals</a>
                        </li>
                        <li>
                            <a href="/">Luxurious Rentals</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1JSrdlWUPT_HR88jOU1J9lKApJLVLHxVh/view?usp=sharing">
                                Tenant-Landlord Term Agreement by Vroom
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>VroomVroom &copy; 2021. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
