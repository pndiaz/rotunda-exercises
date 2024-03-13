# rotunda-exercises
Rotunda interview excercises

## Zoo

We are building a zoo inside a computer. Each animal species in our zoo has lots of different, particular, behaviors, but all animals talk to each other in a similar way. Specifically, they all implement a ​speak​ method, the output of which is the arbitrary input string interspersed with an "animal sound" that is particular to that type of animal. For example, the lion's ​speak​ function behaves like so:
- lion.speak( ​"I'm a lion"​ ); <​ ​"I'm roar a roar lion roar"
The tiger's speak function behaves similarly but with a different sound:
- tiger.speak( ​"Lions suck"​ ); <​ ​"Lions grrr suck grrr"

Please write logic and classes to support our zoo in JavaScript (using whatever class model you like) ​with attention to code structure and readability​.

## Error-Alarm

Suppose we have a web application that runs on a single server. Errors that occur from time to time during normal operation of the application are logged to a text file that is stored in the file system on the server.
We are not concerned about these errors when their frequency is low. However, when lots of errors occur in a short period of time, there may be a problem with the application and we want to be notified immediately. Specifically, ​when more than ten errors occur in one minute, we want to receive an email notification.
In general terms or pseudo code, how would you implement such an alarm? Please assume:
1. The general paradigm of logging errors to a text file will be kept in place.
2. There exists a function
     function logError( error )
This function is called each time there is an error and appends the error to the end of the log file.
3. We never want to receive more than one email notification per minute.

## URL-Parser

We need some logic that extracts the variable parts of a url into a hash. The keys of the extract hash will be the "names" of the variable parts of a url, and the values of the hash will be the values. We will be supplied with:
1. A url format string, which describes the format of a url. A url format string can contain constant parts and variable parts, in any order, where "parts" of a url are separated with "/". All variable parts begin with a colon. Here is an example of such a url format string:
'/:version/api/:collection/:id'
2. A particular url instance that is guaranteed to have the format given by the url format string. It may also contain url parameters. For example, given the example url format string above, the url instance might be:
'/6/api/listings/3?sort=desc&limit=10'
Given this example url format string and url instance, the hash we want that maps all the variable parts of the url instance to their values would look like this:
{
version: 6,
     collection: 'listings',
     id: 3,
     sort: 'desc',
     limit: 10
}

Please implement a solution to this problem in JavaScript (or your programming language of choice, if applying for a DevOps position) with attention to code structure and readability. Feel free to use low-level libraries like Lodash.

## How to run

- Inside each excercise folder use `npm start`. (Except error-alarm since it's pseudocode)