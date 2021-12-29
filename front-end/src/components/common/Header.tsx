import React from "react";

const Header = () => {
  const now = new Date();
  const currHour = now.getHours();
  const currMinutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  return (
    <div>
      {currHour}:{currMinutes}
    </div>
  );
};

export default Header;
