import React from "react";
import { Container, Flex, Text, Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} onClick={onClick} />;
}

export default function Carousel({ ...props }) {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "60px",
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    variableHeight: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          className: "",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          variableWidth: true,
          variableHeight: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} {...props}>
      <Box textAlign="center">
        <Image src="/assets/carousel/1.png" height={337} width={550} />
        <Heading color="brand.200" mb="2rem">
          spa
        </Heading>
      </Box>
      <Box textAlign="center">
        <Image src="/assets/carousel/2.png" height={337} width={550} />
        <Heading color="brand.200" mb="2rem">
          spa
        </Heading>
      </Box>
      <Box textAlign="center">
        <Image src="/assets/carousel/3.png" height={337} width={550} />
        <Heading color="brand.200" mb="2rem">
          spa
        </Heading>
      </Box>
    </Slider>
  );
}
