# Scoot - Rent a Scooter website

## Table of contents

- [Overview](#overview)
  - [Requirements](#Requirements)
  - [Behavior](#expected-behavior)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview
This project is built with HTML5, CSS, JavaScript(ES6), React, and is built in Next JS.

The HTML has:
- Four pages:
    - Home
        - process 
        - Feature cards
            - Easy-to-use
            - Coming-to-a-city-near-you
            - Zero-hassle

    - About
        - Feature cards
            - Mobility
            - Better-urban-living
        - Our values cards
            - Our-tech
            - Our integrity
            - Our community
        - FAQ drop-downs
            - How it works
                - download
                - find
                - license
            - Safe driving
                - helmet
                - rules
                - damage

    - Careers 
        - Feature card
            - Join our mission
        - Our values cards
            - Our-tech
            - Our integrity
            - Our community
        - Job listing cards
            - General Manager
            - UI/UX
            - Blog copywriter
            - Graphic Designer
            - Fleet Supervisor
            - UX analyst
        
    - Locations
        - Locations map
        - Not listed

- All pages will reuse the following components:
    - Header
        - Nav
        - Hero
    - Footer
        - SignUp
        - FooterNav

- Other reused components:
    - Feature card
    - Our values card
    - learn more btn

The CSS has:
- Modular style sheets
- Mobile first development
- BEM convention
- Prefers light or dark mode
- Variables
- The organization of all CSS modules will be (in descending order):
    - Variables
    - Resets
    - All typography
    - Media query for typography
    - General styles
    - Media query for General styles

The JavaScript has:
- All forms will use FormSpree for data collection
- Onclick to expand / hide nav for mobile
- ToggleClass function to toggle a transition for movement


### Requirements 

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Expected Behavior

#### All Pages

- When the "Get Scootin" call-to-action in the header is clicked, scroll down to the app download section at the bottom of the page

#### Home

- When the "Get Scootin" call-to-action in the intro section is clicked, scroll down to the app download section at the bottom of the page

- When the "Learn More" call-to-action is clicked in the "Easy to use riding telemetry" component navigate to the About page

- When the "Learn More" call-to-action is clicked in the "Coming to a city near you" component navigate to the Locations page

- When the "Learn More" call-to-action is clicked in the "Zero hassle payments" component navigate to the About page

#### Careers

- When the "Say Hello" call-to-action is clicked open modal to submit a form that sends to company email
    - FullName
    - Phone number
    - Email address
    - message
    - Subscribe to our newsletter box

- When the "Apply" call-to-action is clicked, open modal with form to apply:
    - Top of form will say the name of the Position clicked to apply for.
    - Full Name
    - Phone Number
    - Email address
    - Upload resume
    - Best time to contact you 
    - Subscribe to our newsletter box
#### Locations

- When the "Message Us" call-to-action is clicked open modal to submit a form that sends to company email
    - Full Name
    - Phone number
    - Email address
    - message
    - Subscribe to our newsletter box

### Screenshot

![screen shot of full screen webpage]()
![screen shot of mobile webpage]()
### Links

- Solution URL: [GitHub]()
- Live Site URL: [live site]()

### Built with

- [Semantic HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - HTML5 with clear and descriptive tags for better accessibility and search engine optimization
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A utility-first CSS framework
- Mobile-first workflow
- [JavaScript](https://js.org/) - JavaScript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [FormSpree](https://formspree.io/) - Form API with endpoint for submitted form to be sent to

## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)
- LinkedIn - [@Eileenpk](www.linkedin.com/in/eileen-dangelo)