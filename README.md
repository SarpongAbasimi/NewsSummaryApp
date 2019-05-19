<h1 align='center'>
Makers week 7. News Summary challenge.
</h1>

<h4 align='center'>
User Stories.
</h4>
- As a busy politician.
- So I know what the big stories of the day are (Done).
- I can click a link to see the original news article (Done).
- I can see a summary of a news article (Done).
- I can see a picture to illustrate each news article when I browse headlines (Done)
- I can read the site comfortably on my phone (In Progress)
- I can see whizzy animations in the app (Done)

<h4 align='center'>
How To Use Application.
</h4>

- ``Fork`` and ``clone`` this repo.
- In terminal cd into ``app``.
- To run test type ``npm run cypress``.
- To start server ``npm start``
- copy and paste this in the browser ``http://localhost:3000/``.
- You should see this.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/37377831/57982986-7d4bdf80-7a44-11e9-82ec-0eae37e568da.gif)

<h1 align='center'>
Imporovements
</h1>

> I think the application currently has all the main features, but there are still lots to be done.

- Currently the app is not fully responsive as I would like it to be.
- This is becasue I can't predict the sizes of the images being provided by the guardian API.

> One would say, why not set the images to a smaller with in using css ?

- The problem is that, some of the images from the guardian API are originally really small, therefore setting the size to a small width would make the smaller images even smaller and that will affect the user experience.

- This is the problem I am currently facing with regards to responsiveness.

<img width="809" alt="Screen Shot 2019-05-19 at 14 30 23" src="https://user-images.githubusercontent.com/37377831/57983318-2ea04480-7a48-11e9-8b0b-54f695b75823.png">

> I need to use css media query to resize some of the content on the page at certain breakpoints.



<h1 align='center'>
Challenges.
</h1>

- I know I can TDD anything, but I stggled to write atest for this application.
- I was able you use cypress as my testing framework for feature testing, but I did not do any unit testing which is bad.

<h1 align='center'>
To Dos.
</h1>

- Learn how to use jest and enzyme to test react applicaitons.
- Learn how to structure a react application properly.
- Connect react with Expressjs.

<h1 align='center'>
What I learnt.
</h1>

> I am always happy when I learn something new.😁

- I learnt how to build react components the right way.
- I learnt that a react component must only have one job. (SRP)
- I learnt how to user cypress.
- I learnt a lot about react state, props and component childeren.
- I learnt I to use react life cycle hooks and at which stage to featch an API.

> Lets just say , I learnt a lot.

<h1 align='center'>
Tech Stack.
</h1>

- ReactJs.
- Cypress.
- Boostrap4.
