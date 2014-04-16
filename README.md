# The Reading List in AngularJS

## Installation

This project was generated using [Yeoman](http://yeoman.io)! To run the app, clone this repository and run the following:

1. `npm install` (go get a drink)
2. `bower install` (blow your nose)
3. `grunt serve`

You should now have a window open in your default browser pointing to `http://localhost:9000`. Changes that you make should automatically trigger a reload... Go ahead, try it!

## Specifications

### When I have read or want read a Book, I can add it to a Reading List so that I won't forget about it.

A Book should have:

* **title** - a text field
* **authors** - a list of names
* **ain** - the AIN from Amazon.com (optional)
* **link** - a link to the book on Amazon.com (optional)

### When I have read a Book from my Reading List, I can add a Review and Rating to it so that I can publish my thoughts.

A Book additionally needs:

* **review** - a few paragraphs of text
* **rating** - an integer 1 to 5, 5 being the best

### I can edit a Book on my Reading List so that I can add or update the information about it.

### I can mark a Book as "READ" or "READING" so that I can remind myself which ones I've already read.

A Book additionally needs:

* **currently** - a state indicator of "UNREAD", "READ" or "READING"

Reminders:

* Don't forget to update the "Edit Book" form!
* Maybe provide an easier way to update than editing it?

### I can view a list of all the Books on my Reading List so that I can see which ones I've added.

### I can _sort_ the list of Books so that I can see which ones to read next.

The list of Books can be _sorted_ by:

* date added e.g. oldest to newest
* alpha by title
* rating e.g. higest first, unrated first

## I can _filter_ the list of Books so that I can

The list of Books can be _filtered_ by:

* state e.g. "only UNREAD" or "not READ yet"
* reviewed e.g. "review" is not empty
* "good reads" e.g. ratings greater than "3"

