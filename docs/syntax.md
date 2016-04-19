
# Syntax

The WML syntax is a Frankenstein of XML, HTML and a dash of ES2015 features.
The intention was to create a syntax for describing a user interface, that
could easily be turned into JavaScript, more specifically ES2015 and up valid syntax.

A successfully parsed and transpiled wml file will export a single array
which represents the tree of elements that will be used to create the user interface.

Example export:

```javascript

export default [

 'div', {class:'container'}, [[Input, {name:'inputs'}]]

];


```


