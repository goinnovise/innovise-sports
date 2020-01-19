# Innovise Sports

Thank you for taking a look at the Innovise Angular Interview Project.  This is a very simple application designed to show rosters for teams.  There are some design patterns that are intentionally inconsistent and sloppy.  Please take a look at the source code and refactor it in a way that you best prefer.  Specfically, take a look at the how `app.component.ts` interacts with the services. And consider binding to the `select` lists and load data without events.  Also please address the bugs listed below.

## To run the App

Git clone the application to your local machine and run with `ng serve`. Please avoid a git fork for this project.

## Bugs

- When you change a sport, you can still see the old players

## Notes

- Please don't touch the lines of code where there are inline comments mentioning so.
- You might notice `delay()` calls in the code. These are in place to simulate an HTTP call that may not be instant.
- When page initially loads, no players are shown for the first team.
- Feel free to reach out to Innovise with any concerns, questions, or ideas.

## When you're finished

Commit your changes to a public git repository and send the link to your contact at Innovise.  Include a list of additional changes that you might make if you had more time or were in charge of "hardening" this application.

## What's Next

Innovise will review your work. If Innovise decides to take the interview process farther you'll be contacted to have a short discussion about the work that you did and possibly do some further live refactoring of your project.
