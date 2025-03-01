# Math Learning App

## Project Overview

This is a web-based React application that allows users to learn and take quizzes on various math topics. 
The app dynamically fetches data from JSON files and provides short explanations of topics such as Vectors and Calculus, along with multiple-choice 
questions. It also supports LaTeX rendering using KaTeX for mathematical expressions.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (latest LTS version recommended)

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Simongotera11/Math_Learning.git 
   cd Math_Learning
   cd math-learning
   ```

2. Install dependencies:

   ```bash
   npm install
   ```


3. Start the development server:

   ```bash
   npm run dev
   ```

 

4. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## Technologies Used

- **React.js** – For building the user interface.
- **React Router** – For navigation between pages.
- **KaTeX** – For rendering LaTeX mathematical expressions.
- **JSON** – To store and retrieve data.
- **TailwindCSS** – For styling the application.
- **React-Icons** - For Icons.

## Challenges Faced 

1. **Dynamic Topic Selection**

   - Challenge: Finding a way to make all pages dynamically.
   - Solution: Stored all data in JSON files and used `useParams()` from React Router, replacing hyphens with spaces to find the correct topic and build pages accordingly.

2. **Rendering LaTeX in Questions**

   - Challenge: Since the content of the page is math, I needed to find a way to properly display math equations and content.
   - Solution: Inside the data, I added `$$` whenever math was in the text. I then implemented a function to split question text at `$$` and render the LaTeX parts using KaTeX.


3. **Styling and UX Enhancements**

   - Challenge: Ensuring the app looked clean and was easy to use.
   - Solution: Applied structured Tailwind CSS for layout, interactive elements, and reusable components.

## Future Improvements

- Expand lessons to include more detailed content.
- Implement a timer for quiz completion.
- Store user responses and quiz progress using local storage or a database.
- Enhance UI with animations and improved styling.


---

**Author:** Simon Gotera Vargas



