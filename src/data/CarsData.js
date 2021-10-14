import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import A4Silver from "../images/A4Silver.jpg";
import A4Black from "../images/A4Black.jpg";
import A4Blue from "../images/A4Blue.jpg";
import A4Red from "../images/A4Red.jpg";
import Q7Silver from "../images/Q7Silver.jpg";
import Q7Black from "../images/Q7Black.jpg";
import Q7Blue from "../images/Q7Blue.jpg";
import Q7Grey from "../images/Q7Grey.jpg";
import RS5Blue from "../images/RS5Blue.jpg";
import RS5Green from "../images/RS5Green.jpg";
import RS5Red from "../images/RS5Red.jpg";
import RS5Black from "../images/RS5Black.jpg";
import EtronSilver from "../images/EtronSilver.jpg";
import EtronBlack from "../images/EtronBlack.jpg";
import EtronBlue from "../images/EtronBlue.jpg";
import EtronGrey from "../images/EtronGrey.jpg";
import A5Red from "../images/A5Red.jpg";
import A5Green from "../images/A5Green.jpg";
import A5Blue from "../images/A5Blue.jpg";
import A5Black from "../images/A5Black.jpg";

import Q8Orange from "../images/Q8Orange.jpg";
import Q8Silver from "../images/Q8Silver.jpg";
import Q8Black from "../images/Q8Black.jpg";
import Q8Blue from "../images/Q8Blue.jpg";

const CarsData = [
  {
    id: "001",
    make: "Audi",
    model: "A4",
    category: "Sedan",
    year: 2021,
    priceMin: "79,364",
    priceMax: "85,155",
    image: A4Silver,
    options: [
      {
        exterior: "Floret Silver Metallic",
        color: "silver",
        image: A4Silver,
      },
      {
        exterior: "Manhattan Gray Metallic",
        color: "black",
        image: A4Black,
      },
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: A4Blue,
      },
      {
        exterior: "Tango Red Metallic",
        color: "red",
        image: A4Red,
      },
    ],
  },
  {
    id: "002",
    make: "Audi",
    model: "Q7",
    category: "SUV",
    year: 2021,
    priceMin: "119,604",
    priceMax: "139,721",
    image: Q7Blue,
    options: [
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: Q7Blue,
      },
      {
        exterior: "Floret Silver Metallic",
        color: "silver",
        image: Q7Silver,
      },
      {
        exterior: "Myth Black Metallic",
        color: "black",
        image: Q7Black,
      },
      {
        exterior: "Samurai Gray Metallic",
        color: "#8E8E8E",
        image: Q7Grey,
      },
    ],
  },
  {
    id: "003",
    make: "Audi",
    model: "RS5",
    category: "Sportback",
    year: 2021,
    priceMin: "175,739",
    priceMax: "195,840",
    image: RS5Green,
    options: [
      {
        exterior: "Sonoma Green Metallic",
        color: "#14903F",
        image: RS5Green,
      },
      {
        exterior: "Myth Black Metallic",
        color: "black",
        image: RS5Black,
      },
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: RS5Blue,
      },
      {
        exterior: "Tango Red Metallic",
        color: "red",
        image: RS5Red,
      },
    ],
  },
  {
    id: "004",
    make: "Audi",
    model: "e-tron",
    category: "Electric",
    year: 2021,
    priceMin: "149,065",
    priceMax: "169,905",
    image: EtronBlack,
    options: [
      {
        exterior: "Manhattan Gray Metallic",
        color: "black",
        image: EtronBlack,
      },
      {
        exterior: "Floret Silver Metallic",
        color: "silver",
        image: EtronSilver,
      },
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: EtronBlue,
      },
      {
        exterior: "Typhoon Gray Metallic",
        color: "#8E8E8E",
        image: EtronGrey,
      },
    ],
  },
  {
    id: "005",
    make: "Audi",
    model: "A5",
    category: "Convertible",
    year: 2021,
    priceMin: "94,906",
    priceMax: "105,874",
    image: A5Red,
    options: [
      {
        exterior: "Tango Red Metallic",
        color: "red",
        image: A5Red,
      },
      {
        exterior: "Myth Black Metallic",
        color: "black",
        image: A5Black,
      },
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: A5Blue,
      },
      {
        exterior: "District Green Metallic",
        color: "#14903F",
        image: A5Green,
      },
    ],
  },
  {
    id: "006",
    make: "Audi",
    model: "RS Q8",
    category: "SUV TFSI",
    year: 2021,
    priceMin: "229,100",
    priceMax: "241,139",
    image: Q8Orange,
    options: [
      {
        exterior: "Dragon Orange Metallic",
        color: "#F57513",
        image: Q8Orange,
      },
      {
        exterior: "Floret Silver Metallic",
        color: "silver",
        image: Q8Silver,
      },
      {
        exterior: "Myth Black Metallic",
        color: "black",
        image: Q8Black,
      },
      {
        exterior: "Navarra Blue Metallic",
        color: "blue",
        image: Q8Blue,
      },
    ],
  },
];

export default CarsData;
