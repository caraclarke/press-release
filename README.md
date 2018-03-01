# PressRelease

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This project uses Angular5 to displays the titles and publish dates of the news articles returned from the JSON API located at [Stellar Biotechnologies](http://www.stellarbiotechnologies.com/media/press-releases/json). The page initially displays 10 articles and as the user scrolls, adds 10 more articles at a time.

When deciding on what framework to use for this project, it came down to a library vs. framework decision. React is a library, meaning I would have also had to make decisions about what supporting libraries I needed and wanted to use. However with Angular5 those decisions had been made, I was familiar with it and I enjoy employing TypeScript in my project. I think this project is flexible enough that any of the multitude of JS frameworks and libaries could work for it but the time I had to complete the project in also played into the decision. It was easier to go with a framework, Angular5, that I was already familiar with instead of adding additional learnng time to the time I had to work on the project.

## Main files

`src/app/app.component.ts`: This component and its template get the data from the service calling the API, push it into a local array and control the offset paramater that it passes to the function in the service making the call to the API. 

`src/app/release-data.service.ts`: This service calls the API. Using limit it requests 10 responses at a time. It also uses offset, which is passed from the component, to get the next 10 articles after the initial page load which displays the first 10.

`node_modules/ngx-infinite-scroll`: This is an [imported infinite scroll directive](https://github.com/orizens/ngx-infinite-scroll) for Angular4 and above. By using it to track how far the user has scrolled down the page, I am able to call the function that makes a request to the service with the proper offset and get the next set of articles.

## To Run

To run the project locally, from the root run `$ npm start` which will serve the project at `localhost:4200`.
