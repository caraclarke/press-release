# PressRelease

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This project uses Angular5 to displays the titles and publish dates of the news articles returned from the JSON API located at [Stellar Biotechnologies](http://www.stellarbiotechnologies.com/media/press-releases/json). The page initially displays 10 articles and as the user scrolls, adds 10 more articles at a time.

I chose to use Angular5 for this project for several reasons. First, when I was examining the requirements and looks at the API, I was struck by how services, pipes and directives could be used to work with this data and manipulate it. I still could have used AngularJS, but prefer the ability to use types and the better error messaging in Angular5. React paired with a state handler like Redux could have also worked for this project, but I felt the learning curve would have to change too quickly for the amount of time I had.


### Main files

`src/app/app.component.ts`: This component and its template get the data from the service calling the API, push it into a local array and control the offset paramater that it passes to the function in the service making the call to the API. 

`src/app/release-data.service.ts`: This service calls the API. Using limit it requests 10 responses at a time. It also uses offset, which is passed from the component, to get the next 10 articles after the initial page load which displays the first 10.

`node_modules/ngx-infinite-scroll`: This is an [imported infinite scroll directive](https://github.com/orizens/ngx-infinite-scroll) for Angular4 and above. By using it to track how far the user has scrolled down the page, I am able to call the function that makes a request to the service with the proper offset and get the next set of articles.
