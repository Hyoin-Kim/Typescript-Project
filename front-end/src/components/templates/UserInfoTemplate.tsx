import { useState } from "react";
import Footer from "../common/Footer";
import Poster from "../molecules/Poster";
import InformationInput from "../organisms/InformationInput";

const UserInfoTemplate = () => {
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(false);
  return (
    <div>
      <Poster />
      <InformationInput setIsJoinButtonDisabled={setIsJoinButtonDisabled} />
      <Footer isJoinButtonDisabled={isJoinButtonDisabled} />
    </div>
  );
};

export default UserInfoTemplate;
