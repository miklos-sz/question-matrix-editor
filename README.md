![Question Matrix Editor](https://i.imgur.com/6jCIaq5.png)
# Question Matrix Editor  
#### by Miklรณs Szilas 
[szilas.miklos@gmail.com](mailto:szilas.miklos@gmail.com)

A question matrix editor **React application**

### 1. Install
The project was created with `create-react-app`.

To install the application and the dependencies, run  `$ yarn install`.



### 2. Run the app
Run `$ yarn start`.

...and there you go. ๐ [http://localhost:3000](http://localhost:3000)

***
### What is question matrix?

The question matrix is a popular tool for getting answers on a certain topic, 
where rows content the question, and columns content the answers or choices.

There are two major type of matrix questions, such as _single-selection_ (radio buttons) and 
_multiple-selection_ (checkboxes). In this app we can edit and answer questions only by 
single-selection.

### Specifications

#### 1. General features
- โ Question topic is editable
- โ Responsive design (works fine on mobile)
- โ Subtle animations
- โ Straightforward UI
- โ Favicon โจ

#### 2. Question Editor
- โ You can select images from the hard drive for every row and column
- โ You can set labels for every row and column
- โ You can add new rows and columns
- โ You can remove rows and columns

#### 3. Question Summary
You have some data displayed here realtime:
- โ Amount of rows created
- โ Amount of columns created
- โ Amount of images uploaded
- โ The string length of the longest label
- โ The string length of the shortest label
- โ Displays only relevant information - the currently unavailable info is not shown here

***
### Stack used
- React (Create-React-App)
- Context API
- SASS (SCSS)
- Bootstrap 5
- React-Bootstrap
- Font Awesome Icons
- Figma (for the favicon)
- StandardJS as linter

***

#### Preview

![Question Matrix Editor](https://i.imgur.com/8vJc9Ec.gif)

