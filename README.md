# Turt Time!

Sean has misplaced of his turts (again) and need your help to organize them.

All the information about Sean's turts can be found in the 'db.json' file, which you will need to fire up, using the following command in your terminal:

`npm install`
`npm install -g json-server`

`json-server --watch db.json`
`npm start`

Before you start building out the application, the first step that you should take is to draw out your app hierarchy. This will tell you how components can speak to each other as well as where that information should be stored.

# Deliverables

1. After drawing out the app hierarchy, you should hook up the data from the 'db.json' file to your React components, using fetch. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the TurtCard component on the page.

2. After the TurtCard components are on the page, consider building out the functionality for the TurtForm. Using the ideas of controlled form and inverse data-flow, think about how to render a new TurtCard for the turt that you created.

3. After you have the create functionality built out, consider building out the delete functionality. When you click on the `Donate to Goodwill` button, the TurtCard that you clicked on should be removed from the DOM as well as the backend.

4. After that, consider building out the like functionality. Clicking on the button should increase the number of likes on the DOM as well as the backend.
