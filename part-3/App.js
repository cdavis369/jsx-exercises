const App = () => {
  return (
    <div>
      <Person name="Corey Davis" age={33} hobbies={["Reading", "Running", "Coding"]} />
      <Person name="Bob Ross" age={17} hobbies={["Painting", "Cooking", "Hiking"]} />
      <Person name="Joe Johnson" age={30} hobbies={["Photography", "Coding", "Skiing"]} />
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
