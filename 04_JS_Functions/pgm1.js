var movie1;
var movie2;
var blogPost;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};
//display movie1 information
console.log("Movie information for " +movie1.title);
console.log("-------------------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("-----------------------------------------");

//display movie2 information
console.log("Movie information for " +movie2.title);
console.log("-------------------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("-----------------------------------------");

var blogPost = {
    title: "Understanding JavaScript Objects",
    author: "John Doe",
    content: "In JavaScript,objects are key-value pairs...",
    publishDate: "July 1,2024"
};
console.log("BlogPost: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Publish Date: " + blogPost.publishDate);
console.log("----------------------------------------");
console.log("Content:\n" + blogPost.content);
console.log("-----------------------------------");




