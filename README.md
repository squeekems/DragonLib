# About
# Jack R Kern's  
## SBA/HTML/JavaScript SBA - DragonLib  
The file should include technical specifications and a description of your website.  
Include the link to your GitHub account in the README file(optional)  
  - <a href="https://squeekems.github.io/DragonLib" target="_blank">Click here to see DragonLib on GitHub</a>
##
### Motivation  
MadLibs are such a fun way to play with strings. String manipulation is how I "learn to walk" in unfamiliar languages. I would have preferred to work towards my capstone given the nature of this SBA, but I realized the scopes did not match. Given the time limit, and the amount of learning I need for my capstone, I settled for a fun game to play with my family.

You may have noticed a difficult to read font in parts of the site. There are no parts where you will*need*to be able to read it. It is a fictional language that has an almost 1 to 1 relationship to the alphabet. It is called dragonscript and it is based on anglo-saxon runes.
You may find dragonscript, or very similar scripts, in works of fiction like:  
<a href="https://youtu.be/rcrZlzPJDzs" target="_blank">How to Train Your Dragon</a>
<iframe width="300" height="auto" src="https://www.youtube.com/embed/rcrZlzPJDzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  
### Challenges
- My original plan for my three page requirement was to have a dropdown menu page, a form page, and a story page.
  - This plan was failing at the start because my script file was reloading between pages. I could not read the value of my dropdown menu from the first page to generate the form I wanted on the form page.
  - I decided to abandon my website layout in favor of functionality. All three of my pages would be condensed onto one home page.
- I decided to make my about page populated with my [README.md](#).
  - This involved importing a markdown parsing app into my website.
  - Modifications to their javascript files needed to be made since the default setup was to print the markdown file to the body of the index.
    - To solve this problem, I created a new HTML tag inside my body of the about.html.
- Getting all of the forms to show up and disappear with appropriate spacing on the Home page was kind of difficult. I think I will be able to figure that out faster in the future. Certainly a learning curve.
##  
### Technical requirements:  
#### HTML  
1. Have at least 3 pages, keep the grid system consistent as much as possible
  - Here are links to my three pages:
    1. [Login](../index.html)
    2. [Home](../HTML/home.html)
    3. [About](#)
2. Use at least 10 different HTML tags
  - Here is a list of a lot of the tags used in my HTML files.
    - html
    - head
    - meta
    - link
    - title
    - body
    - div
    - h1
    - h2
    - nav
    - button
    - script
    - img
    - p
    - form
    - label
    - input
    - select
    - option
    - table
    - tr
    - td
    - readme

3. Use HTML tables
  - Each of the forms generated on the Home page use tables.
4. Implement at least two uses for forms
  - Each of the forms generated on the home page use forms.
  - My Login page uses a form tag too.
5. Dropped Down Menu
  - The subject selector on the Home page is a dropped down menu.
  ``` 
  <select
    name = "cmbSubjects"
    class = "cmbSubjects">
    <option
    </option>
    <option
    </option>
    etc...
  </select>
  ```
6. Use web fonts
  ```
  <link
  href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap"
  rel="stylesheet">
  ```
7. Use different types of content in the form of text, images, videos, and GIFs
  - I have plenty of text.
  - This is a README.md file.
  - I added different images
    - sparkle.gif
    - Dragon.png
    - Dragon2.png
    - princess.png
8. Use regex validation
  - My Login page uses regex in the input for email.
  ```
  <input
    type ="email"
    class = "txtEmail"
    name = "email"
    placeholder = "example@gmail.com"
    pattern = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}" required>
  </input>
  ```
#### CSS  
1. Inline, internal, and external styling
  - Ezra told us that we did not need to us all of these types of styling unless we used Spring.
  - I did not use Spring.
  - I most stuck to using external styling. There are some Inline.
2. Use five different CSS selectors
  - Check my style.css file. There is a lot of selectors. I used visual basic naming conventions because that is what I am use to, but I will probably change this in future projects.
3. Don’t use too many fonts
  - List of Fonts used:
    1. Source Code Pro
    2. DragonScript-Regular.ttf
  - Backup font:
    - serif
4. Use colors that complement each other
  - black used for most backgrounds
  - white used for most colors
  - blue used for most borders

#### Javascript  
1. External scripts
  - I imported display-markdown to parse my README.md onto my About page.
  - I have a script.js file.
2. Use variables, if statements, loops, at least one form of collections, functions/call back, and events
  - Inside my script.js file, you will find
    - variables as early as line 2.
    - if statements on line 8.
    - loops on line 154.
    - collection on line 144.
    - function on line 84.
    - call back on 124.
    - event on line 10.