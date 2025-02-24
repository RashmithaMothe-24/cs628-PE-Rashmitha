# CS628 PE04
# Analysis of Cities Application

Input: There are two main ways the application receives user input:
->By entering the city's name, nation, and population in the "Add City" form, users can create a new city.
->The "Cities List" allows users to view the details of a city by clicking on its name.

Process: React Router is used by the application to control page navigation.
->The list of cities is kept up to date by the useState hook.
->The user gets redirected to the "Cities List" page and the state is updated when they add a city.
->The useParams hook is triggered when a city is clicked, dynamically retrieving and displaying the city's data.

Output: All newly added cities are shown in the "Cities List".
->To maintain a consistent look, clicking on a city displays its details in a nested route manner.
->Users are taken back to the list after adding a city.


