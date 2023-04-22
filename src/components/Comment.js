import React from "react";

function Comment({ author, text}) {
  return (
  <div>
    <p>{author}: {text}</p>
  </div>
  );
}


export default Comment;
