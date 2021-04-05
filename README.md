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
  <a href="https://pangaea-interviews.now.sh/fe">
    <img src="./images.readme/lumin_logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">LUMIN CART CLONE ASSESMENT</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Landing Page][product-screenshot]](https://store.luminskin.com/products?language=en)

### Instructions

Pangaea FE Coding Challenge
For this challenge we'll be recreating the luminskin.com product page and cart using a GraphQL API. You can use any framework you feel comfortable with, we recommend ReactJS or Vue.js. You dont need to worry about a pixel-perfect recreation, the main thing we care about is functionality (but if it looks nice we won't hold that against your).

#### Product Page Reqiurements

Should query from
https://pangaea-interviews.now.sh/api/graphql, retrieve the products and display them in a grid. Feel free to use graphql client libraries such as Apollo Client
Each item should display the image, title, price and a "Add to Cart" button.
For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.
There is no need to implement the page navbar, or filter dropdown as shown in the screenshot .

#### Cart Reqiurements

When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
If the item already exists it should increment the quantity.
Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.
In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.
It should sum the items in the cart and display them in the correct selected currency.
Ignore anything related to subscriptions.

#### Submission

Push your code to a version control service such as github or gitlab and send a link to the shared repository to jordan@menskin.co


### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Vue](https://vuejs.org/)
* [Vue-test-utils](https://vue-test-utils.vuejs.org/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation using NPM

1. Get to  [https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea](https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea)
2. Clone the repo
   ```sh
   git clone https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run unit test 
   ```sh
   npm run test:unit
   ```
5. Run lint 
   ```sh
   npm run lint
   ```
6. get the dist production build 
   ```sh
   npm run build
   ```

### Installation using Yarn

1. Get to  [https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea](https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea)
2. Clone the repo
   ```sh
   git clone https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Run unit test 
   ```sh
   yarn run test:unit
   ```
5. Run lint 
   ```sh
   yarn run lint
   ```
6. get the dist production build 
   ```sh
   yarn run build
   ```


<!-- USAGE EXAMPLES -->
## Usage
To Get the Flat run command below:
### Building dist folder for deployment
 production build 
   ```sh
   npm run build
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- CONTACT -->
## Contact

Jefferson . Ofobrukweta . O - [@https://www.linkedin.com/in/ofobrukweta-jeff-207506136/](https://www.linkedin.com/in/ofobrukweta-jeff-207506136/) - oghenerukevwejeff@gmail.com

Project Link: [https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea](https://github.com/jeff-ofobrukweta/Take_Home_Test-from_Pangaea)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://www.linkedin.com/in/ofobrukweta-jeff-207506136/
[product-screenshot]: images.readme/Lumin.png
[product-precaching-config]: images/workbox_precaching.png
