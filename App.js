/*
    HMR - Hot module replacement
    File Watcher algorithm  - C++
    BUNDLING
    MINIFY
    Cleaning our code 
    Dev and Production Build
    Super fast build algorithm
    Image Optimization
    caching while development
    Consistent Hashing Algorithms
    Zero config bundling
    Tree Shaking - Removing unused code



    Transitive Dependencies

*/   
   
   
   import React from "react";
    import ReactDOM from "react-dom/client";
   
   
   const heading1 =React.createElement("h1", {id : "title"}, "Heading 1");
        const heading2 = React.createElement("h2",{id : "title"},"heading 2");
        const heading = React.createElement("h1", {}, "Namaste Everyone!");
        console.log(heading);
        
        const container = React.createElement("div", {
            id: "container"
        },
        [heading1, heading2]
    )
        const root = ReactDOM.createRoot(document.getElementById("root"));
        console.log(root);
        
        //passing a react element inside the root

        //async defer
        root.render(container);