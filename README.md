# Capco Project

This application displays images that dynamically resize and change color when hovered over, while the surrounding images shift to fill the empty space. 

[Dynamic Images Application](https://erin.d1t42uonzvpaf2.amplifyapp.com/)

# Technologies

* React
* TypeScript
* CSS
* AWS Amplify
* Cypress (Currently troubleshooting)

# Development

Images are obtained through an Axios request to a JSON file within the application via My JSON Server. The images are placed in an array, and then from there are placed into one of two rows. The images are passed through an Image wrapper component, which holds functions to control the color and size changes for the hovered images. The application is automatically built and deployed with AWS Amplify via GitHub, and uses Cypress for E2E testing.

# Moving Forward

* This application is optimized for a 1920 x 1080 display. Despite using variable heights and widths - which adjust automatically to the height and width of the viewport - there are still certain screen heights that trigger the images not to wrap as they should. I would like to fix this by adding @media screen CSS constraints, or building the application within a more standard-sized div (such as the resolution of a 14" laptop) so that larger resolutions would not disrupt the flow of the flex.
* The application does not account for wrapping images from the left inward towards the hovered image. As a quick, hacky "fix" for this, I used a screenshot of the untouched, unhovered application as a background image, so at the very least there would be no "empty space." This, however, adds to the granularity of the application that makes it optimized (perhaps only) for a 1920 x 1080 display.
* Some of the animations snap back to place rather than making a smooth transition; moving forward I would provide a few more keyframes that would account for several movement patterns.

<p align="center">
![Cat](http://pngimg.com/uploads/cat/cat_PNG50526.png)
  </p>
