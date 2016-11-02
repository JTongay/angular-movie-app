describe('Movie Search App FTW', function () {

  var searchBox = element(by.model('view.search'));
  var submitButton = element.all(by.tagName('input')).get(1);
  var results = element.all(by.repeater('movie in movies'));
  var firstResult = element(by.repeater('movie in movies').row(0).column('movie.Title'));

    beforeEach(function () {
      browser.get('http://localhost:8000');
    })


    it('should pass the test', function () {
      expect(true).toBe(true);
    })

    it('Should show the input box on page load', function () {
      expect(searchBox.isPresent()).toBe(true);
    })

    it('Should show a submit button', function () {
      expect(submitButton.isPresent()).toBe(true);
    })

    it('Should show the results after submit button is pressed', function () {

      searchBox.sendKeys('Snakes on a Plane');
      submitButton.click();

      expect(results.count()).toBe(5);
    })

    it('Should show the results after submit button is pressed', function () {

      searchBox.sendKeys('Snakes on a Plane');
      submitButton.click();
      firstResult.click();

      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/tt0417148');
    })


});

describe('Movie Search App FTW pt 2', function () {

  var singleMoviePoster = element.all(by.tagName('img')).get(0);
  var singleMoviePlot = element.all(by.tagName('h4')).get(1);
  var singleMovieTitle = element.all(by.tagName('h2')).get(0);
  var singleMovieScore = element.all(by.tagName('h4')).get(0);
  var singleMovieRating = element.all(by.tagName('h3')).get(0);
  var singleMovieWriters = element.all(by.tagName('h4')).get(2);
  var singleMovieActors = element.all(by.tagName('h4')).get(3);
  var searchBox = element(by.model('view.search'));
  var submitButton = element.all(by.tagName('input')).get(1);
  var results = element.all(by.repeater('movie in movies'));



  beforeEach(function () {
    browser.get('http://localhost:8000/#/tt0417148');
  })

  it('Should show the movie title', function () {

    expect(singleMovieTitle.getText()).toBe("Snakes on a Plane")

  })

 it('Should show the movie poster', function () {

   expect(singleMoviePoster.getAttribute('src')).toEqual("https://images-na.ssl-images-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg")

 })

 it('Should show the plot', function () {

   expect(singleMoviePlot.getText()).toBe("An FBI agent takes on a plane full of deadly and venomous snakes, deliberately released to kill a witness being flown from Honolulu to Los Angeles to testify against a mob boss.")

 })

 it('Should show the imdb score', function () {

   expect(singleMovieScore.getText()).toContain("IMDB Score: 5.6")

 })

 it('Should show the metacritic score', function () {

   expect(singleMovieScore.getText()).toContain("Metacritic Score: 58")

 })

 it('Should show the runtime', function () {

   expect(singleMovieScore.getText()).toContain("Runtime : 105 min")

 })

 it('Should show the rating', function () {

   expect(singleMovieRating.getText()).toContain("Rated: R")

 })

 it('Should show the date released', function () {

   expect(singleMovieRating.getText()).toContain("Date Released: 18 Aug 2006")

 })

 it('Should show all of the writers', function () {

   expect(singleMovieWriters.getText()).toContain("Written by: John Heffernan (screenplay), Sebastian Gutierrez (screenplay), David Dalessandro (story), John Heffernan (story)")

 })

 it('Should show all of the actors', function () {

   expect(singleMovieActors.getText()).toContain("Actors: Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard")

 })

 it('Should search a new movie on the single movie page, and go back to root page with results', function () {

   searchBox.sendKeys('Titanic');
   submitButton.click();

   expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/');
   expect(results.count()).toBe(10);

 })

})
