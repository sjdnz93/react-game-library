# SEI Project 2: React Game Library

## Overview
For our second project, we were given the task of building a React application that pulled information through from a public API of our choice and displayed this on the page. We were given 1.5 days to complete this task, and worked in pairs to build the site out. We started this project in Week 6 of General Assembly’s Software Engineering Immersive course.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683805276/Project%202:%20React%20Game%20Library/hero-min_kz30qw.png)

## Brief
**Task:**

* Build a React application that consumes a public API

**Technical requirements:**

The app must:
* Consume a public API
* Have several components
* Have a router with several pages (optional)
* Include wireframes
* Be deployed online and accessible to the public

## Deployment link
<a href="https://react-game-library.netlify.app/" target="_blank" rel="noreferrer" >React Game Library - check it out here </a>

## Code installation
* Clone or download the repo
* Run ```npm i``` in the terminal to install dependencies
* Run ```npm run start``` in the terminal to launch app on local server

## Timeframe and working team
This was a group project. I worked in a pair with my coursemate Neya Omar, whose GitHub page can be found <a href="https://github.com/NeyaOmar" target="_blank" rel="noreferrer">here</a>.

We were given roughly 1.5 days to complete this project, covering the below dates.

**Dates:** March 9 - 10, 2023

## Technologies used
* React
* Bootstrap
* Sass
* Axios
* Chrome Developer Tools
* Excalidraw (wireframing)
* Insomnia
* API: <a href="https://www.freetogame.com/api-doc" target="_blank" rel="noreferrer">Free-To-Play Games Database API</a>

## Planning

### Wireframing the basic design:

The very first step in our planning was to sketch out a basic wireframe of the pages that the application would contain. I used Excalidraw to create this mockup, with input from Neya as to how the information was to be presented. This helped us to settle on a model that used two basic page structures: one that showed an overview of all the game information pulled down from the FreeToGame API, and then another page that displayed in-depth information on a specific game when that game’s link was clicked on. The basic wireframes below were our starting point.

**Overview page wireframe:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683805966/Project%202:%20React%20Game%20Library/wf1_atsebe.png)

**Single game page wireframe:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683806042/Project%202:%20React%20Game%20Library/wf2_v3sb7d.png)

* Once the wireframing was completed, Neya and I agreed on the steps we’d take to approach building this application out. We’d start by making sure we could access the information on the API, then we’d get the build to a point where we were displaying the information we wanted on each page and the page was working functionally. Following that, we’d add in the styling we wanted to make the application look presentable, and then finally would add in any additional functionality as a bonus deliverable.

* For this project it was agreed that I would write all of the code on my computer, with input from Neya throughout every step of the build process.

## Build process
The first task before any code was written was to use Insomnia to make sure we understood how our API worked, and that we could access the information that we needed easily. We got quite lucky with how straight-forward the structure of our chosen API was, and didn’t run into any problems on this front. If anything, the ease with which we were able to access and pull down this information was a good lesson on the importance of a user-friendly structure when building an API, which is definitely something to keep in mind when we start to build our own.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812305/Project%202:%20React%20Game%20Library/insomnia_v4wz8n.png)

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812305/Project%202:%20React%20Game%20Library/insomnia2_fywed9.png)

Once we understood how our API worked and how we’d go about accessing the information it contained, we then kicked-off the build process. Again, thanks to the user-friendly nature of our particular API, we didn’t run into any problems using it to populate our page. It didn’t take long for us to reach a point where we had a rough working version of our application.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812438/Project%202:%20React%20Game%20Library/shot-min_d0vfcq.png)

From this point on it was pretty smooth sailing in terms of building the page out. We arranged the games on our home page in alphabetical order, and then built out component pages that used different API endpoints. These pages showed games according to which platform they ran on, so the first page displayed all PC-based games, while the other page displayed all web-browser games. When a user clicks on a game card across any of these pages, they are then taken to a new page that uses an API endpoint specific to that game to display the required information. 

We used routing to facilitate the navigation from page to page, which again was a relatively straightforward process. The biggest challenge here was implementing the ```useParams()``` hook so that when an individual game card was clicked, the API endpoint for that specific game was accessed so that its information could then be rendered on a new component. At the time, this was a relatively new concept that had been introduced to us in class, and I think it’s safe to say Neya and I were a bit intimidated. But with a bit of research and referral to notes from class, we were able to successfully introduce this, and in reality it proved to be super easy to make work. Images with notes below:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812625/Project%202:%20React%20Game%20Library/note_a4vppp.png)

* Here, in the JSX for our Home.js component, we wrapped each individual game that was returned from our ```GET``` request to the ```‘/api/games/’``` end point in a link. By mapping over all of the games that we’d saved to state on page load, at the point these components were rendered we were able to use the value saved to that game’s ```id``` key in the link path.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812679/Project%202:%20React%20Game%20Library/note2_mfosce.png)

* Here, in our App.js component, we defined the individual game page route, passing in the path as ```‘/games/:gameID’```, with ```gameID``` being a placeholder for the actual ID.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812771/Project%202:%20React%20Game%20Library/note3_xtyhcl.png)

* Finally, in our GamePage.js component, we destructure the object returned by calling ```useParams()```, and save the value associated with the ```gameID``` key to a variable that can then be used in our targeted API request.

Once we got to the point where the information was being rendered successfully on each of our components, we then used a combination of Sass and Bootstrap to style the app

When we were happy with the styling, we then began the process of implementing a search/filter function that would dynamically update the page’s content based on the user searching for a game by title. I think this was the biggest challenge that we faced during the course of the build. I’ll detail this more in a further section, but it turned out that the solution to our problem was a relatively simple one, and we’d been applying our filter to the wrong state. Solution with notes below:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683812908/Project%202:%20React%20Game%20Library/solution_rg8dki.png)

* Here you can see that we had initially tried to filter through the ```filteredGames``` state to return the title of the game that we were looking for. This would work the first time around, and show us the result, but we quickly realised that upon pressing backspace, we’d be left with a blank screen! After attempting a couple of different solutions, we realised that by filtering through the ```filteredGames``` state, and then updating that state each time the ```useEffect()``` was triggered was the reason we were left with an effectively blank screen on deletion. There was nothing left to filter through!

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813004/Project%202:%20React%20Game%20Library/solution2_ydatfm.png)

* After clocking this error (which, admittedly, seemed like an extremely obvious error as soon as we spotted it), we swapped out ```filteredGames``` for the original ```pcGame``` state, and then filtered through this to update the ```filteredGames``` state, which was then used to render content on the page.

After getting our filter working across our Home, PC Games, and Browser Games components, we worked to improve the styling of the component for each individual game. From drilling into the API endpoint for each game, we knew that we’d be able to access a series of screenshots of game footage. I had the idea that we could introduce these images to the page in slideshow format. 

This required a little bit of thinking as we wanted the first image in the slideshow to be the game’s thumbnail, followed by the screenshots. As these images were separate items within the API endpoint, we had to figure out how we could set state in such a way that we’d be able to access them from the same place. I ended up coming up with the following solution, which I think works pretty nicely (explanation with below pics). Neya then found the JSX code required to render the slideshow on our page.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813100/Project%202:%20React%20Game%20Library/api1_lw8ll2.png)

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813123/Project%202:%20React%20Game%20Library/api2_qlsplu.png)

* In the above images, you can see that the object returned by sending a ```GET``` request to the individual game endpoint contains a ‘thumbnail’ key-value pair (KVP), and a ‘screenshots’ KVP. The latter is an array of images. I wanted the image URLs associated with all pictures to be easily accessible on the front end, so they could be used to render our slideshow from one place.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813199/Project%202:%20React%20Game%20Library/slide_ufh94g.png)

* To solve this, I knew I’d need to use state. Here I set up a state for ‘pictures’, which eventually  would contain image URLs for both thumbnail pictures and screenshot pictures.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813262/Project%202:%20React%20Game%20Library/state_rzsz2u.png)

* To set the ‘pictures’ state, I added the above to our initial ```axios.get``` request to the individual game page’s API endpoint. The thumbnail image was accessed and saved to its own variable, as were the individual screenshot objects. Then, I created the ```picsToUse``` variable, which mapped through the ```picsArray```, returning the actual image URL (not the image ID). Finally, I used the ```unshift``` array method to push the thumbnail to the front of this newly created array, before setting the pictures state.

Implementing the slideshow was the last aspect of the app that we implemented before the deadline. Ultimately I’m pretty happy with how the project came out, though of course there are further cosmetic tweaks I’d like to introduce, as well as a bit more functionality, which I’ll outline in a later section of this ReadMe.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813600/Project%202:%20React%20Game%20Library/game_l3cx19.png)

## Challenges

### Getting the filter by title function to work properly
This was arguably the biggest technical challenge that we ran into over the course of the build. Initially, our filter function worked, but it wasn’t particularly seamless. The games would filter down as you searched by title, but then when you pressed backspace the full list of games wouldn’t reappear. We found a work around by resetting the state of ```filteredGames``` within our ```handleChange()``` function (as shown by the comment in the image below), but this wasn’t perfect.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813714/Project%202:%20React%20Game%20Library/filter_n7mmjd.png)

As you typed in the name of a game, the results would show up in the way that we expected but immediately before they displayed all of the games would momentarily reappear on the page. We did some error handling and analysed the output of each function to make sure they were working as they should. Eventually we stumbled across the problem: we were filtering through our ```filteredGames``` state array, instead of the original ```games``` state array. As soon as we clocked this and updated the code accordingly, the search feature worked perfectly. We were then able to add it into both the All PG Games and All Browser Games pages.

* **The problem:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813845/Project%202:%20React%20Game%20Library/problem_yngxil.png)

* **The solution:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683813870/Project%202:%20React%20Game%20Library/problem2_gtd6rg.png)

## Wins
**Win 1:** 

Getting the filter function to work as it should (mentioned above)

**Win 2:** 

Getting the slideshow feature on the individual game page to work as it should (mentioned above)

**Win 3:** 

Very positive first experience coding as a pair. Was great to be able to analyse problems we came across together, and bounce ideas/solutions off of one another until we achieved what we set out to do. Neya and I also had a very calm team atmosphere, which helped to keep us cool under pressure and focussed on the task at hand.

## Key learnings/takeaways
* Definitely feel more comfortable using React, particularly with regards to my understanding of using asynchronous functions and state to render information on the page. My solution for rendering the slideshows on the individual game pages by really drilling into the API response, and manipulating the data before setting state, felt really natural as I was working on it. It perhaps might not be the most elegant solution to this problem, but it was still super satisfying to take this from a spark of inspiration to reality!

* I also feel far more comfortable with using React to set filters, to allow a user to search through information being pulled down from an API. After our admittedly rather obvious mistake in filtering through the filtered games state (and then wondering why we had nothing showing up on our page), this is certainly not a mistake that I’ll be in a hurry to make again! Although it was a slightly frustrating error to pick up on, it’s errors like this that can really help you learn and move forward. So I guess, at the end of the day, I’m actually pretty happy we made this mistake in the first place.

* Bootstrap is also something that seemed fairly complex when we were first introduced to it, but now that I’ve been able to build a project of my own out I feel I’m much more confident with how it all works. That said, I still have a lot of learning to do in order to feel properly comfortable with it. Still, this is an exciting opportunity to do more learning, and really put my skills to the test in future builds.

* I’ve always felt very comfortable working in a group environment in my previous career, but having the opportunity to work in this way for the first time in a software engineering capacity was really engaging. I loved being able to collaborate and bounce ideas/solutions off one another. I think it made the problem solving aspect of programming even more enjoyable than when I’m doing it solo.

## Future improvements
* The first improvement I’d like to add in future is a more in-depth filter functionality. At the moment, you can only filter the games by their title. I’d like to add a drop down that enables you to filter by game genre, publisher, publishing date, etc, which works in conjunction with the text search feature.

* I would also like to touch up the styling a bit more. I think it looks pretty good at the moment, but there’s certainly room for improvement.

* The code could do with a bit of tidying up to make it tighter, too. I think a few more components could be built out to save repetition.













                                                                       
                                                                  
