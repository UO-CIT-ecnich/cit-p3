# Description
In this project, I completed several tasks to create a "coinage" code module and update the "server" code file using Fastify to build a Node.js web server. Here's an overview of what I accomplished:

I started by ensuring that I had completed Lab 3 and Lab 4, saving the necessary files in the appropriate folders.

Next, I created the project files in the "cit281/p3" folder. These included "p3-module.js", "p3-server.js", and "index.html". I also created the "package.json" and ".gitignore" files later on.

After initializing the folder as a git repository, I made an initial commit with the empty files.

Moving on to the code module functions, I implemented and tested four functions in the "p3-module.js" file. These functions were responsible for validating coin denominations, calculating the value of a single coin object, calculating the value of an array of coin objects, and returning the total value of a given set of coins.

I created the "index.html" file, which served as the main web page for testing the "coinage" code. It contained HTML structure and links to different routes.

To set up the project as a Node.js folder, I used npm to initialize it and installed the Fastify package.

In the "p3-server.js" file, I imported the necessary packages, including Fastify and fs. I also imported the "coinCount" function from the code module.

I added the default route ("/") to the server code, which read and returned the contents of the "index.html" file using the fs package. Additionally, I set up the server to listen on localhost:8080.

Two additional routes were implemented: "/coin" and "/coins". The "/coin" route accepted query parameters for coin denomination and count, and returned the corresponding coin value using the "coinCount" function. The "/coins" route accepted an "option" query parameter and returned the correct coin value based on the provided options using the "coinCount" function.

Throughout the project, I used git to track my changes and made appropriate commits. This project provided valuable experience in interpreting specifications, breaking down tasks, writing Node.js code, creating code modules, refactoring, and using Fastify as a web server.
