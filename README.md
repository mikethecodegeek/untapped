<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mikethecodegeek/untapped">
    <img src="https://i.imgur.com/tB5ANo7.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UnTappd</h3>

  <p align="center">
    Share and discover you're next favorite beer!
    <br />
    <br />
    <a href="https://intense-caverns-51880.herokuapp.com/">View Demo</a>
  
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a clone of UnTappd.com. It was created with React and contains many of the same features of the original site.


### Built With

* React
* Redux
* ExpressJS
* NodeJS
* PostgreSQL



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https:https://github.com/mikethecodegeek/untapped.git
   ```
2. Install Express NPM packages
   ```sh
   cd auth-backend  
   npm install  
   ```
3. Create DB owner and database (PSQL)
   ```sh
   use the .envexample to setup your database   
   ```
3. Seed the database
   ```sh
   npx dotenv -- sequelize db:migrate
   npx dotenv -- sequelize db:seed:all
   ```
3. Install Front-End NPM packages
   ```sh
   cd auth-front-end 
   npm install  
   ```
3. Start the Express Server
   ```sh
   cd auth-back-end 
   npm start  
   ```
3. Install Front-End NPM packages
   ```sh
   cd auth-front-end 
   npm start  
   ```  



<!-- USAGE EXAMPLES -->
## Usage
#### Demo User
Click on the Sign-In button to bring up a modal. Use the Demo User button to login

#### Home Page
Browse trending beers and breweries

#### Search Beers and Breweries
Use the search box to locate specific beers / breweries
Search examples: Bud, IPA, Lager

#### Checkin / Rate a beer (Logged in user only)
Once you find a beer you're interested in just hit the checkin button. You can now give the beer a star rating and a review for others to see.

#### Profile
Click on the user icon in the navbar to locate you're profile page. Here you can see all you're activity.





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Michael Sanford - mikethecodegeek@gmail.com  
Portfolio: [michaelsanford.me](http://michaelsanford.me)  
Project Link: [UnTappd](https://intense-caverns-51880.herokuapp.com/)








<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
