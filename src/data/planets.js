import p0 from "../assets/planets/sun.png";
import p1 from "../assets/planets/mercury.png";
import p2 from "../assets/planets/venus.png";
import p3 from "../assets/planets/earth.png";
import p4 from "../assets/planets/mars.png";
import p5 from "../assets/planets/jupiter.png";
import p6 from "../assets/planets/saturn.png";
import p7 from "../assets/planets/uranus.png";
import p8 from "../assets/planets/neptune.png";

const data = [
    {
        "name": "The Sun",
        "moons": [],
        "size": "Large",
        "material": "Plasma",
        "physical_characteristics": "Nuclear fusion, emits light and heat",
        "orbit_time": "N/A",
        "fun_fact": "The Sun is a star, not a planet, and it is the center of our solar system.",
        "image": p0,
        "sizeCSS": "20"
    },
    {
        "name": "Mercury",
        "moons": [],
        "size": "Small",
        "material": "Rocky",
        "physical_characteristics": "No atmosphere, extreme temperatures",
        "orbit_time": "88 Earth days",
        "fun_fact": "Mercury has the greatest temperature range of any planet in our solar system.",
        "image": p1,
        "sizeCSS": "16"
    },
    {
        "name": "Venus",
        "moons": [],
        "size": "Medium",
        "material": "Rocky",
        "physical_characteristics": "Thick atmosphere, extreme temperatures",
        "orbit_time": "225 Earth days",
        "fun_fact": "Venus rotates in the opposite direction to most other planets.",
        "image": p2,
        "sizeCSS": "20"
    },
    {
        "name": "Earth",
        "moons": [
            "Moon"
        ],
        "size": "Medium",
        "material": "Rocky",
        "physical_characteristics": "Life-supporting atmosphere, water, diverse ecosystems",
        "orbit_time": "365.25 Earth days",
        "fun_fact": "Earth is the only planet known to support life.",
        "image": p3,
        "sizeCSS": "16"
    },
    {
        "name": "Mars",
        "moons": [
            "Phobos",
            "Deimos"
        ],
        "size": "Medium",
        "material": "Rocky",
        "physical_characteristics": "Thin atmosphere, polar ice caps, evidence of water",
        "orbit_time": "687 Earth days",
        "fun_fact": "Mars has the largest volcano and the deepest canyon in the solar system.",
        "image": p4,
        "sizeCSS": "16"
    },
    {
        "name": "Jupiter",
        "moons": [
            "Io",
            "Europa",
            "Ganymede",
            "Callisto"
        ],
        "size": "Large",
        "material": "Gas Giant",
        "physical_characteristics": "Giant storm, strong magnetic field",
        "orbit_time": "12 Earth years",
        "fun_fact": "Jupiter has the shortest day of all the planets.",
        "image": p5,
        "sizeCSS": "20"
    },
    {
        "name": "Saturn",
        "moons": [
            "Titan",
            "Rhea",
            "Iapetus",
            "Dione",
            "Tethys",
            "Enceladus",
            "Mimas"
        ],
        "size": "Large",
        "material": "Gas Giant",
        "physical_characteristics": "Rings made of ice and rock particles",
        "orbit_time": "29.5 Earth years",
        "fun_fact": "Saturn's rings are made mostly of ice particles, with some rock debris and dust.",
        "image": p6,
        "sizeCSS": "20"
    },
    {
        "name": "Uranus",
        "moons": [
            "Miranda",
            "Ariel",
            "Umbriel",
            "Titania",
            "Oberon"
        ],
        "size": "Medium",
        "material": "Ice Giant",
        "physical_characteristics": "Tilted axis, blue-green color",
        "orbit_time": "84 Earth years",
        "fun_fact": "Uranus is the only planet that rotates on its side.",
        "image": p7,
        "sizeCSS": "20"
    },
    {
        "name": "Neptune",
        "moons": [
            "Triton",
            "Proteus",
            "Nereid",
            "Larissa",
            "Galatea",
            "Despina",
            "Thalassa",
            "Naiad"
        ],
        "size": "Medium",
        "material": "Ice Giant",
        "physical_characteristics": "Blue color, strong winds",
        "orbit_time": "165 Earth years",
        "fun_fact": "Neptune has the strongest winds in the solar system.",
        "image": p8,
        "sizeCSS": "20"
    },
]

export default data;