# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a a JS library to help support UI development. It solves the problem of building scalable applications with data that changes dynamically. When data changes it changes the state of the application and React allows us to keep track of the change of states and be able to render correct data and elements accordingly. 

2. Describe component state.

Component state is the state of the component that can change over time. This allows us to keep track of the particular state of a particular component and get data as needed and render the correct elements to the UI based on the state change of the component. 

3. Describe props.

Props are properties passed to components which the component needs to render correctly. Props can be parameters for certain aspects of the component or component state or both. 

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are things that affect something outside the scope of the particular function being executed. Side effects tend to be fetching data from an API. To sync effects in a React component we pass in a dependency array as a second argument to the useEffect hook. This second argument tells the side effect when to render. For example putting [] as the second argument tells the side effect to render only during the first render. 