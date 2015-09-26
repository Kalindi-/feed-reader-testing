# How to run the feedfeeder application.

Double click on the index.html file, to be deliver with great feed content

## Extras:

### additional tests for the current functionality:
Checks if the options in the menu are the same number as the urls defined in the app.js
(does this test make sense?)


### test driven development

(I find this concept increadibly exciting)

I decided I'd want a link that would fetch more articles.

The *Get More Articles* test suite, checks if there are more articles after the link has been clicked.



## questions
Will the click trigger in the *Get More Articles*, once the get more articles link works,  actually get more articles upon load, and how can I prevent it from doing so? Is using loadFeed(0) in the afterEach going to solve it?