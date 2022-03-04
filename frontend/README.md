# Nextjs - Typescript template

For ease and avoiding setting up code base everytime I started a project, I have created this template that can be used. It has many features set-up, feel free to use this as you will. :) 

`` This is a constant work in progress ``

* Please clone this and change it anyway you wish * :)

## REQUIREMENTS

- Node 16.13.2
- NPM 8.1.2 

Feel free to change to your versions by changing 'engines' in package.json. Beware, it could break other packages.

## TESTING

- Unit testing has Jest and React Testing Library configured. It will run test within `__test__` directories.
- E2E, I suggest installing Cypress and configuring it.

## PACKAGES / FEATURES

- styled-components
- jest / react-testing-library
- typescript

## STRUCTURE

The structure of the code base is open for interpretation, the way I have architected my components is the way I feel is best for the way I work, as below.

  ``` 
  \ components
    \ Header
      style.ts      --> styled components
      index.ts      --> default export 
      Header.tsx    --> component
  ```

The rest of the structure is what is suggested via Next documentation.

