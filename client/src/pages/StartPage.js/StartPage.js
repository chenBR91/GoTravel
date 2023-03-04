import React, { useContext } from "react";
import UsersContext from "../../UsersContext";

function StartPage() {
  const {user} = useContext(UsersContext);
  return (
    <div>
      {user.username}
    </div>
  );
}

export default StartPage;
