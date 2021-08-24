import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import ShirtContainerComponent from "../components/ShirtContainerComponent";
import TaglineComponent from "../components/TaglineComponent";
import StoreInformationComponent from "../components/StoreInformationComponent";
import FooterComponent from "../components/FooterComponent";
import CopyrightComponent from "../components/CopyrightComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <CarouselComponent />
      <ShirtContainerComponent />
      <TaglineComponent />
      <StoreInformationComponent />
      <FooterComponent />
      <CopyrightComponent />
    </>
  );
}
