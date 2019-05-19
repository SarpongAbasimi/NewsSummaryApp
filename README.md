<h1 align='center'>
Makers week 7. News Summary challenge.
</h1>

> To my pair partner for code review.

- First of all, sorry that I am late today. I am coming to Makers from Birmingham.
- Secondly, I did the weekend challenge using ReactJs.
- Lastly , please give me a feedback on my test suite and how readable my codebase is.

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
- You might not see anything because the ``API`` key is not in your cloned folder.
- You can visit here **[here]('https://open-platform.theguardian.com/access/')**.
- Register to ket an apiKey.
- Inside of scr create a ``config.js`` file.
- create an object called ``apiKey``.
- Inside this object cteate a key called ``guardian``.
- The value of this key should be ``https://content.guardianapis.com/search?&page-size=30&show-fields=starRating,headline,trailText,thumbnail,short-url&`` plus your API key.
- Finally export the object that you created like so ``export const apiKey``.
- This is what you should see.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/37377831/57982986-7d4bdf80-7a44-11e9-82ec-0eae37e568da.gif)

<h1 align='center'>
Imporovements
</h1>

> I think the application currently has all the main features, but there are still lots to be done.

- Currently the app is not fully responsive as I would like it to be.
- This is becasue I can't predict the sizes of the images being provided by the guardian API.

> One would say, why not set the images to a smaller with in using css ?

- The problem is that, some of the images from the guardian API are originally really small, therefore setting the size to a small width would make the smaller images even smaller and that will affect the user experience.

- This is the problem I am currently facing with regards to responsiveness. (Solved)

<img width="809" alt="Screen Shot 2019-05-19 at 14 30 23" src="https://user-images.githubusercontent.com/37377831/57983318-2ea04480-7a48-11e9-8b0b-54f695b75823.png">

> I need to use css media query to resize some of the content on the page at certain breakpoints.

- Sunday 19th May 2019 (Update)

- The application is now fully responsive after a bit of refactoring and using media quries.

- How it looks like on mobile device now.

<img width="504" alt="Screen Shot 2019-05-19 at 16 11 40" src="https://user-images.githubusercontent.com/37377831/57984336-ba1ed300-7a52-11e9-8eb3-be64243f16cb.png">

> The issues regarding the div overflow was solved my doing this.

<img width="652" alt="Screen Shot 2019-05-19 at 16 12 04" src="https://user-images.githubusercontent.com/37377831/57984362-010cc880-7a53-11e9-8258-8e729fa69737.png">

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
