import React from "react";
import MainWindowMobile from "./MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea } from "./styles/Mobile.styles";

const Mobile: React.FC = () => {
  return (
    <MobileWrapper>
     <ContentArea>
    <MainWindowMobile />
     </ContentArea>
    </MobileWrapper>
  );
};

export default Mobile;
