import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import ShirtContainerComponent from "../components/ShirtContainerComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <CarouselComponent />
      <ShirtContainerComponent />
    </>
  );
}
