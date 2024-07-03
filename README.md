# Full Stack Web Development Assignment

## Objective
The objective of this assignment is to check the technical skills in building a web application using the full stack (SQLite, C#, React.js, three.js) and integrating Three.js for 3D graphics. The specific focus will be the CRUD operation of cases. Create a case with a specific name with length, width, and height as per the user input. Also, when you update the value, it needs to save these values in the database.

## Requirements

### 1. Setup C# Project
- Set up a new C# project with SQLite as the database, C# as the backend framework, React.js for the frontend.

### 2. Draw Case with Three.js
- Add a simple case (box) image with a label on it.
- Add the same brown color to this box.

### 3. CRUD Operation
- Create one dialog box add button with input for the case name. When clicked on add, it needs to add the name to the case and create its ID and save the data.
- After that, as shown in the above image, the page will open through this page where the user can add length, width, and mass to the case and it will save the data for the created case.
- After reloading, the same updated case value needs to come with a drawing of the updated image of the case in Three.js.
- When the user updates the value in the text field on blur, it needs to save in the database, and as per that, it needs to reflect in the Three.js cube.
- Add one delete button. When the user clicks on the delete button, the created case needs to delete and again the dialog box will open for the create case button.

### 4. Integration with SQLite DB
- Set up the SQLite DB and create a schema for case names and case data.
- Implement CRUD (Create, Read, Update, Delete) operations for this data in the SQLite database.

### 5. User Interface
- Create a user-friendly interface for the web application using React.js.
- Make this page responsive.
