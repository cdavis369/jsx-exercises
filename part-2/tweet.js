const Tweet = (props) => {
  return (
    <div class="container">
      <div class="user-info">
        <span class="username">{props.username}</span>
        <span class="name">{props.name}</span>
        <span class="date">{props.date}</span>
      </div>
      <div class="message">
        <span>{props.message}</span>
      </div>
    </div>
  );
}