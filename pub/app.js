(function(){
  'use strict';

  angular.module('readingList', [ ])
    .controller('ReadingListController', function(){
      this.books = books;

      this.genres = genres;

      this.addBook = function(book, form){
        this.books.push(book);

        form.reset().$setPristine();
      };
    })
    .directive('bookCover', function(){
      return {
        restrict: 'E',
        templateUrl: 'book-cover.html'
      };
    })
    .directive('bookGenres', function(){
      return {
        restrict: 'E',
        templateUrl: 'book-genres.html'
      };
    })
  ;

  var genres = [ 'non-fiction', 'fiction', 'fantasy' ];

  var books = [
    { title: 'Pragmatic Thinking & Learning',
      authors: [ 'Andy Hunt' ],
      isbn: '1934356050',
      review: "Loved this book!",
      rating: 4,
      genres: [ 'non-fiction' ],
    },
    { title: 'The Age of Spiritual Machines',
      authors: [ 'Ray Kurzweil' ],
      isbn: '0140282025',
      review: "Would not read again.",
      rating: 2,
      genres: [ 'non-fiction' ],
    },
    { title: 'Elven Star: The Death Gate Cycle',
      authors: [ 'Margaret Weiss', 'Tracy Hickman' ],
      isbn: '0553290983',
      review: "Best fantasy series EVAR",
      rating: 5,
      genres: [ 'fiction', 'fantasy' ],
    }
  ];
})();
