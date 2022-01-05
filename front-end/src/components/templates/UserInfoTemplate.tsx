import { useState } from "react";
import Footer from "../common/Footer";
import Poster from "../molecules/Poster";
import InformationInput from "../organisms/InformationInput";

const UserInfoTemplate = () => {
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState({
    name: false,
    phoneNum: false,
    birthNum: false,
    uniqueNum: false,
  });

  return (
    <div>
      <Poster />
      <InformationInput isConditionMet={isConditionMet} setIsConditionMet={setIsConditionMet} />
      <Footer
        isJoinButtonDisabled={isJoinButtonDisabled}
        setIsJoinButtonDisabled={setIsJoinButtonDisabled}
        isConditionMet={isConditionMet}
      />
    </div>
  );
};

export default UserInfoTemplate;
