import hotelImage from "../../images/hotelImage.png";
import restuantImage from "../../images/resturantImage.png";
import carImage from "../../images/carImage.png";
import bookImage from "../../images/bookImage.png";
import bankImage from "../../images/bankImage.png";
import jeleryImage from "../../images/JeleryImage.png";
import furnitureImage from "../../images/furnitureImage.png";
import travelImage from "../../images/travelImage.png";
import { Box, Rating } from "@mui/material";

import Darty from "../../images/Darty.svg";
import automobile from "../../images/automible.png";
import cigale from "../../images/cigale.jpeg";
import bolt from "../../images/bolt.png";
import globalnet from "../../images/globalnet.jpg";
import Zara from "../../images/Zara.png";

export const HEADER_ITEM = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Catagories",
    route: "/catagories",
  },
  {
    id: 3,
    name: "About Us",
    route: "/about-us",
  },
  {
    id: 4,
    name: "Contact Us",
    route: "/contact-us",
  },
];

export const CATAGORIES_ITEM = [
  {
    id: 1,
    name: "Hotels and Guest Houses",
    image: hotelImage,
  },
  {
    id: 2,
    name: "Resturants",
    image: restuantImage,
  },
  {
    id: 3,
    name: "Car Rental Services",
    image: carImage,
  },
  {
    id: 4,
    name: "Online Booking",
    image: bookImage,
  },
  {
    id: 5,
    name: "Banking and Finance",
    image: bankImage,
  },
  {
    id: 6,
    name: "Jewelery Shop",
    image: jeleryImage,
  },
  {
    id: 7,
    name: "Furniture Stores",
    image: furnitureImage,
  },
  {
    id: 8,
    name: "Travel Agencies",
    image: travelImage,
  },
];

export const TOP_COMPANY = [
  {
    id: 1,
    name: "DARTY",
    details: "Retail business",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size="small"
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#43A047",
            },
          }}
        />
      </>
    ),
    image: Darty,
  },
  {
    id: 2,
    name: "Ennakl Automobiles",
    details: "Car Dealership",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#43A047",
          },
        }}
      />
    ),
    image: automobile,
  },
  {
    id: 3,
    name: "La Cigale Tabarka - Golf",
    details: "Hotels and Guest Houses",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#43A047",
          },
        }}
      />
    ),
    image: cigale,
  },
  {
    id: 4,
    name: "GlobalNet",
    details: "IT and Communications",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#43A047",
          },
        }}
      />
    ),
    image: globalnet,
  },
  {
    id: 5,
    name: "Bolt",
    details: "Taxi and VTC Services",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#43A047",
          },
        }}
      />
    ),
    image: bolt,
  },
  {
    id: 6,
    name: "Zara",
    details: "Clothing Store",
    score: "4.5/5",
    reviews: "250",
    rating: (
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#43A047",
          },
        }}
      />
    ),
    image: Zara,
  },
];
