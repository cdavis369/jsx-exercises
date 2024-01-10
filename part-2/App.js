const App = () => {
  return (
    <div>
      <Tweet
        username="TheRock"
        name="Dwayne Johnson"
        date="July 5, 2024"
        message="Just finished another insane workout! 💪 Focus, dedication, and a little bit of sweat. #FitLife"
      />
      <Tweet
        username="ScarlettQueen"
        name="Scarlett Johansson"
        date="July 6, 2024"
        message="Exciting day on set, bringing a powerful character to life. Can't wait for you to meet her! 🎥 #ActorsLife"
      />
      <Tweet
        username="WeirdAlOfficial"
        name="Weird Al Yankovic"
        date="July 7, 2024"
        message="Accordion lessons on a roller coaster? Why not! Life is too short to be normal. 🎶😜 #WeirdLife"
      />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
