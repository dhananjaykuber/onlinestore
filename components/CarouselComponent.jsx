import React from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <Link href="#">
          <a>
            <img
              className="d-block w-100"
              src="/images/carousel/1.png"
              alt="First slide"
            />
          </a>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link href="#">
          <a>
            <img
              className="d-block w-100"
              src="/images/carousel/2.png"
              alt="Second slide"
            />
          </a>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link href="#">
          <a>
            <img
              className="d-block w-100"
              src="/images/carousel/3.png"
              alt="Third slide"
            />
          </a>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}
