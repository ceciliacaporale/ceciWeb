import React from "react";
import { MainWindowTabletWrapper, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContainerSocialMedia } from "./MainWindowTablet.styles";
import Ceci from "../../assets/ceci.png?url"; 
import Star from "../../assets/star.png?url"; 
import StarPink from "../../assets/starpink.png?url"; 
import WindowImage from "../WindowImage/WindowImage";
import SocialMedia from "../SocialMedia/SocialMedia";

interface MainWindowTabletProps {
  title?: string;
}

const MainWindowTablet: React.FC<MainWindowTabletProps> = () => {
  return (
      <><MainWindowTabletWrapper>
      <WindowHeader>
        <WindowButtons>
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </WindowButtons>
      </WindowHeader>
      <Container>
        <ContentWrapper>
          <WindowImage
            title=""
            imageSrc={Ceci}
            width="auto"
            height="253px"
            $headerColor="#FFF982" />
          <ContainerText>
            <h1>Hello World!</h1>
            <p>
              Sou Maria Cecília, desenvolvedora front-end.
              Adoro transformar ideias em código e criar experiências interativas. Quando não estou programando, provavelmente estou rabiscando alguma ilustração por aí.
              Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto. Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
              Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
            </p>
          </ContainerText>
        </ContentWrapper>
        <div className="star-green">
          <img src={Star} width={40} height={40} />
        </div>
        <div className="star-pink">
          <img src={StarPink} width={40} height={40} />
        </div>
      </Container>
    </MainWindowTabletWrapper>
    <ContainerSocialMedia>
        <SocialMedia />
    </ContainerSocialMedia></>
  );
};

export default MainWindowTablet;