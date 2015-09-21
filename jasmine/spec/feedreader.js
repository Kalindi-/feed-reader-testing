/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('rss feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test loops through each feed in the allFeeds object
         * ensures it has a URL defined
         * ensures that the URL is not empty.
         */
        it('urls of feeds defined and not empty', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url).not.toBe(0);
            });
        });

        /* Test loops through each feed in the allFeeds object
         * ensures it has a name defined
         * ensures that the name is not empty.
         */
        it('names of feeds defined and not empty', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name).not.toBe(0);
            });
        });
    });

    /* This is our second test suite. This suite is about the menu.
     * It ensures the menu is hidden by default
     * and that it toggles like it should.
    */
    describe('The menu toggles', function() {

        // This test ensures the menu element is hidden by default.
        it('menu element hidden by default', function() {
            expect(document.body.className).toBe('menu-hidden');
        });

        /* Ensures the menu changes visibilit when the menu icon is clicked.
         * It shows when clicked once
         * it hides when clicked again
         */
        it('should toggle menu visibility when clicked', function() {

            // select the clickable menu icon
            var menu = $('.menu-icon-link');
            // click menu icon for the first time
            menu.trigger('click');
            expect(document.body.className).not.toBe('menu-hidden');
            // click second time
            menu.trigger('click');
            expect(document.body.className).toBe('menu-hidden');
        });
    });

    /* Third test suite. This suite is about the initial entries.
     * It ensures that when the loadFeed function is called and
     * completes its work, there is at least a single entry
     */
     describe('Initial Entries', function() {

        // Tests that at least one .entry is within the document.
        beforeEach(function(done) {
            loadFeed(0, done); // i dont understand what is happening here?
        });

        it("there is at least a single entry after loadFeed", function(done) {
            var feeds = document.getElementsByClassName('entry').length;
            expect(feeds).toBeGreaterThan(0);
            done();
        });
    });

    /* Fourth test suite. This suite is about the new feed selection.
     * It ensures that when a new feed is loaded by the loadFeed function
     * that the content actually changes.
     */
    describe('New Feed Selection', function() {

        beforeEach(function(done) {
            loadFeed(0, done); // still don't understand what is happening here
        });

        // checks if content is different between two different feeds
        it("content changes at each next load feed", function(done) {
            var feeds = document.getElementsByClassName('entry');
            expect(feeds[0]).not.toBe(feeds[1]);
            done();
        });
    });

    /* Fourth test suite. An additional test suite to check for functions
     * that are already implemented.
     * It ensures that when the number of menu options is the same as the urls
     * defined in app.js.
     */
    describe('The menu options and the app defined urls', function() {

        /* This test ensures the number of urls is the same as number of the
         * menu options.
         */
        it('amount of urls in app equals those in menu', function() {
            var definedUrls = allFeeds.length;
            var menuOptions = ( $('.feed-list li').length);
            expect(allFeeds.length).toBe(menuOptions);
        });


    });


    /* Sixth test suite: Test Driven Development.
     * There should be a link, to allow more articles to be loaded. Test
     * checks if clicking the button "GET MORE ARTICLES" gives more articles
     */

    describe('Get More Articles', function() {
        beforeEach(function(done) {
            loadFeed(0, done); // still don't understand what is happening here
        });

        /* checks if there are more entries after having clicked the more
         * articles link
         */
        it('should add content if "More Articles" is clicked', function() {
            // get the number of entries before clicking
            var feedsBefore = document.getElementsByClassName('entry').length;
            // define the more articles and click the option
            var moreArticles = $('.more-articles');
            moreArticles.trigger('click');
            // get the number of entries after clicking
            var feedsAfter = document.getElementsByClassName('entry').length;
            // excpect there to be less entities before
            expect(feedsBefore).toBeLessThan(feedsAfter);
         });
    });



}());
