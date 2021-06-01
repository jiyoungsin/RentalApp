import React from "react";

export default function Footer() {
  return (
    <footer class="container border-top pt-5 mt-5">
      <div class="row">
        <div class="col-12 col-lg-4 mb-5 px-5">
          <span class="h3 d-block primary-color">Resources</span>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Legal</a>
            </li>
            <li>
              <a href="/">User levels</a>
            </li>
            <li>
              <a href="/">Community Rules</a>
            </li>
            <li>
              <a href="/">Moderator Team</a>
            </li>
            <li>
              <a href="mailto:sins0113@gmail.com">Contact Us</a>
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
              <a href="/">Map</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-4 mb-5 px-5">
          <span class="h3 d-block primary-color">Social Media</span>
          <ul>
            <li>
              <a href="https://www.instagram.com/rentvroom/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/rentvroom/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/Vroomrent">Twitter</a>
            </li>
          </ul>

          {/* 
            Gmail ---
            Email - rentvroom@gmail.com
            Pass - vroom123

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
