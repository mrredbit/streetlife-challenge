The code in this repository is to solve the front end news feed challenge of streetlife.com  
The description of news feed challenge can be found in this [Gist](https://gist.github.com/jorgebastida/650bf8775ccd65bb2c3c)  
A demonstration for the news feed is shown in http://mrredbit.github.io/streetlife-challenge/

## Check List ##
* Responsive Layout (including desktop, tablet and mobile)
* Skeleton screen (with loading placeholders)
* Animation (loading placeholder on initial news feed loading and at the end of news feed)
* One-way data flow
* Immutable data structure
* Error handling on comment loading (click the **Check it out!** button on the right hand side)

## Tools / Skills Used ##
* ReactJs 
* Redux (in Container Components pattern)
* Webpack
* Npm
* ES6
* CSS3
* SCSS
* Babel
* ESlint
* Responsive Layout

## Build ##
```
npm install
npm run dist
```

## Assumption ##
* Code are implemented base on an assumption that api will only return data with all mandatory fields. I found that some of the comment bodys are missed.I have handled data rendering to ensure the outlook are "correct", but there is no handling in client side for filtering out corrupted data, as I assume the backend will handle them.
* The comment api is assumed to be designed as accepting a date of the oldest fetched comment and returning a certain number of latest comments just earlier than the oldest fetched comment, in descending order. Since there is no actual api for me to call, and the comments.json is not correlated with newsfeed.json, a client side function is used for mocking the api response, it will return last 5 comments earlier than latest fetehed comment by accepting comment id.

## Remarks ##
* 1.5 second of delay is added to demostrated the skeleton screen at the beginning. If can be turn off or adjust in /src/config/base.js  
`LOAD_MESSAGE_DELAY: 1500`

## Todo List ##
* Infinite scrolling of news feed message (designed to trigger a fetch news feed message action when the user scrolled nearly to the bottom of news feed, a loading placeholder will be seen when user scrolled to the bottom but the response is returned. If the response failed, the loading placeholder will turn into a retry button, user can fetch message again by clicking that button)
* Testing (Testing framework are setup already, test cases are not done yet)
