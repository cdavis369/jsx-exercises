const Person = (props) => {
  const {age, hobbies} = props;
  const name = props.name.length > 8 ? props.name.slice(0,6) : props.name;
  return(
    <div>
      <p>Learn some information about this person:</p>
      <h3>
        { age > 17 ? "Please go vote!" : "You must be 18." }
      </h3>
      <p>{name} - {age} y/o</p>
      <label for="hobbies">Hobbies:</label>
      <ul name="hobbies">{hobbies.map(h => <li>{h}</li>)}</ul>
    </div>
  );
};