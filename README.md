# README

Thank you for visiting Senior Pet Finder! Senior Pet Finder is inspired by Pet Finder, but only for pets over the age of 6. As a logged out user, you have the ability to view the full list of pets, as well as each pet's profile page. As a logged in user, you have the additional ability to adopt and unadopt pets, as well as view your list of adopted pets. 


***
Technologies Used
-----------------

* Backend
    - PostgreSQL
    - Ruby on Rails
* Frontend
    - React.js
    - Redux
    - HTML5
    - CSS3
* Storage 
    - AWS
***
Features
--------
- ### User Authenication
   - Users can securely create an account and log in/log out
        - User Auth created using BCrypt 
        - Certain actions/pages (i.e. adoption) only available through a protected route to ensure a user is logged-in
   - Demo user log in available for guests
 - ### Pets index page
   - Views clickable profile cards with limited information and an image for each pet
 - ### Pet show page
   - View multiple images for each pet
   - Adopt/unadopt pet
        - If a pet is adopted by a different user, the current user will not be able to adopt/unadopt
   - View information regarding the pet's shelter
        - Send a prefilled email to said shelter to request more information regarding (real life) adoption!
 - ### User show page
   - Current (logged-in) user can view their adopted pets

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
