const mainContainer = document.querySelector('.main_container');
const cardContainer = document.querySelector('.card_container');
const naturalContainer = document.querySelector('.natural_container');

var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseover', function () {
        this.querySelector('.dropdown-content').style.display = "block";
    });
    dropdown.addEventListener('mouseout', function () {
        this.querySelector('.dropdown-content').style.display = "none";
    });
});

// login
function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

// scroll down on about click
let aboutLink = document.querySelector('.navbar-nav a[href="#about"]');
let contactLink = document.querySelector('.navbar-nav a[href="#contact"]');
let footerSection = document.querySelector('.footer-content');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    footerSection.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    footerSection.scrollIntoView({ behavior: 'smooth' });
});


const cardData = [
    // CULTURAL
    // Ajanta Cave
    {
        title: "Ajanta Caves",
        imageUrl: "https://source.unsplash.com/random/600×400?ajantacave",
        description: "The first Buddhist cave monuments at Ajanta date from the 2nd and 1st centuries B.C. During the Gupta period.",
        location: "Maharastra",
        century: "1st B.C",
        tags: "Caves"


    },
    // Nalanda Mahavihara
    {
        title: "Nalanda Mahavihara",
        imageUrl: "images/nalanda_mahavihara.png",
        description: "Nalanda Mahavihara was a large Buddhist monastery and an important center of learning in ancient India. It flourished . ",
        location: "Bihar",
        century: "10th C.E",
        tags: "University"

    },
    //sanchi stupa
    {
        title: "Sanchi Stupa",
        imageUrl: "https://source.unsplash.com/random/600×400?sanchi",
        description: "The Buddhist monuments at Sanchi are a group of stupas, monasteries, temples, and pillars located in the town of Sanchi, Madhya Pradesh.",
        location: "Madhya Pradesh",
        century: "3rd BCE",
        tags: "Religious"

    },
    // champaner
    {
        title: "Champaner-Pavagadh Archaeological Park",
        imageUrl: "https://source.unsplash.com/random/600×400?champaner",
        description: "Champaner-Pavagadh Archaeological Park is a UNESCO World Heritage Site located in Gujarat, India.",
        location: "Gujarat",
        century: "8th - 14th C.E",
        tags: "Archae"

    },
    // shivaji terminus
    {
        title: "Chhatrapati Shivaji Terminus",
        imageUrl: "https://source.unsplash.com/random/600×400?victoriaterminus",
        description: "Chhatrapati Shivaji Terminus (CST), formerly known as Victoria Terminus (VT), is a historic railway station .",
        location: " Maharashtra",
        century: "19th C.E",
        tags: " Railway "

    },
    // churches 
    {
        title: "Churches and Convents of Goa",
        imageUrl: "https://source.unsplash.com/random/600×400?goachurches",
        description: "The Churches and Convents of Goa are a group of Catholic religious buildings located in the former Portuguese colony of Goa",
        location: "Goa",
        century: "17th C.E",
        tags: "Religious"

    },
    // dholvira
    {
        title: "Dholavira: a Harappan City",
        imageUrl: "https://source.unsplash.com/random/600×400?dholavira",
        description: "Dholavira is an archaeological site belonging to the ancient Indus Valley Civilization, also known as the Harappan.",
        location: "Kutch, Gujarat",
        century: "3rd BCE",
        tags: "Archae"

    },
    // elephanta cave
    {
        title: "Elephanta Caves",
        imageUrl: "https://source.unsplash.com/random/600×400?elephantacaves",
        description: "The Elephanta Caves  located on Elephanta Island in Mumbai.where Lord Shiva is worshipped",
        location: " Maharashtra",
        century: "5th - 6th C.E",
        tags: "Caves"

    },
    // ellora cave
    {
        title: "Ellora Caves",
        imageUrl: "https://source.unsplash.com/random/600×400?elloracaves",
        description: "The Ellora Caves represent a remarkable example of Indian rock-cut architecture. located in maharasthra",
        location: "Maharashtra",
        century: "8th C.E",
        tags: "Cave "

    },
    // fatehpursikri
    {
        title: "Fatehpur Sikri",
        imageUrl: "https://source.unsplash.com/random/600×400?fatehpursikri",
        description: "Mughal architectural complex in Uttar Pradesh, India. Constructed in the 16th century by Akbar.",
        location: "Uttar Pradesh",
        century: "16th C.E",
        tags: "Archae"

    },
    // chola temples
    {
        title: "Great Living Chola Temples",
        imageUrl: "https://source.unsplash.com/random/600×400?cholatemples",
        description: "Temples in Tamil Nadu, showcasing Chola architecture from 11th C.E",
        location: "Tamil Nadu",
        century: "11th C.E",
        tags: "Temple"
    },
    {
        title: "Jaipur City",
        imageUrl: "https://source.unsplash.com/random/600×400?jaipur",
        description: "Capital of Rajasthan, known as the 'Pink City' for its pink-hued buildings and historic splendor.",
        location: "Rajasthan",
        century: "18th C.E",
        tags: "Capital"
    },
    {
        title: "Jantar Mantar, Jaipur",
        imageUrl: "https://source.unsplash.com/random/600×400?jantarmantarjaipur",
        description: "An astronomical observatory built by Maharaja Jai Singh II in the 18th century.",
        location: "Rajasthan",
        century: "18th C.E",
        tags: " Astronomy"
    },
    {
        title: "Sun Temple, Konârak",
        imageUrl: "https://source.unsplash.com/random/600×400?suntemple",
        description: "A UNESCO World Heritage Site in Odisha, India, known for its stunning architecture. located in Konark",
        location: "Odisha",
        century: "13th C.E",
        tags: "Temple"
    },
    {
        title: "Taj Mahal",
        imageUrl: "https://source.unsplash.com/random/600×400?tajmahal",
        description: "A UNESCO World Heritage Site in Agra, India, known as a symbol of love and beauty.",
        location: "U.P",
        century: "17th C.E",
        tags: "Monument"
    }







    // 

    // Cultural has finished now turn for Natural
];

const cardDataNatural = [
    {
        title: "Great Himalayan National Park ",
        imageUrl: "https://source.unsplash.com/random/600×400?rhino",
        description: "A UNESCO World Heritage Site in Himachal Pradesh, India, known for its biodiversity and stunning landscapes.",
        location: "Himachal",
        century: "20th C.E",
        tags: "Park"
    },
    {
        title: "Keoladeo National Park",
        imageUrl: "https://source.unsplash.com/random/600×400?nationalpark",
        description: "A UNESCO World Heritage Site in Rajasthan, India, renowned for its bird sanctuary. which is National Park",
        location: "Rajasthan",
        century: "20th C.E",
        tags: "Sanctuary"
    },
    {
        title: "Manas Wildlife Sanctuary",
        imageUrl: "https://source.unsplash.com/random/600×400?wildlife",
        description: "A UNESCO World Heritage Site in Assam, India, known for its rich biodiversity and conservation efforts. for the Safety of Animals",
        location: "Assam",
        century: "20th C.E",
        tags: "Sanctuary"
    },
    {
        title: "Nanda Devi and Valley of Flowers National Parks",
        imageUrl: "https://source.unsplash.com/random/600×400?nandadevi-valleyofflowers",
        description: "UNESCO World Heritage Sites in Uttarakhand, India, renowned for their natural beauty and biodiversity.",
        location: "Uttarakhand",
        century: "20th C.E",
        tags: "Park"
    },
    {
        title: "Sundarbans National Park",
        imageUrl: "https://source.unsplash.com/random/600×400?sundarbans",
        description: "A UNESCO World Heritage Site in West Bengal, India, known for its mangrove forests and Royal Bengal tigers.",
        location: "West Bengal",
        century: "20th C.E",
        tags: "Forest"
    },
    {
        title: "Western Ghats",
        imageUrl: "https://source.unsplash.com/random/600x400?westernghats",
        description: "UNESCO World Heritage Site in India, renowned for rich biodiversity and unique ecosystems.It has Immense biodiversity with all kinds of animals and Plants",
        location: "India",
        century: "21st C.E",
        tags: "Biodiversity"
    }
]


cardData.forEach((data, index) => {
    const clonedCardContainer = cardContainer.cloneNode(true);
    clonedCardContainer.id = 'card_' + index;

    const imgElement = clonedCardContainer.querySelector('.card_image');
    imgElement.src = data.imageUrl;
    imgElement.alt = data.title;

    const anchors = clonedCardContainer.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].href = `${data.title}.html`;
    }

    const titleElement = clonedCardContainer.querySelector('.card_title');
    titleElement.textContent = data.title;

    const descElement = clonedCardContainer.querySelector('.card_desc');
    descElement.textContent = data.description;

    const locationStateElement = clonedCardContainer.querySelector('.location_info span:first-child');
    locationStateElement.textContent = data.location;
    const locationDateElement = clonedCardContainer.querySelector('.location_info span:last-child');
    locationDateElement.textContent = data.century;

    const locationElement = clonedCardContainer.querySelector('.location');
    locationElement.HTML=`<i class="fa-solid fa-location-dot"></i> `;

    const tagElement = clonedCardContainer.querySelector('.tag_container span');
    tagElement.textContent = data.tags;

    mainContainer.appendChild(clonedCardContainer);
});


cardDataNatural.forEach((data, index) => {
    const clonedCardContainer = cardContainer.cloneNode(true);
    clonedCardContainer.id = 'card_' + index;

    const imgElement = clonedCardContainer.querySelector('.card_image');
    imgElement.src = data.imageUrl;
    imgElement.alt = data.title;


    const titleElement = clonedCardContainer.querySelector('.card_title');
    titleElement.textContent = data.title;

    const descElement = clonedCardContainer.querySelector('.card_desc');
    descElement.textContent = data.description;

    const authorStateElement = clonedCardContainer.querySelector('.location_info span:first-child');
    authorStateElement.textContent = data.location;
    const authorDateElement = clonedCardContainer.querySelector('.location_info span:last-child');
    authorDateElement.textContent = data.century;

    const locationElement = clonedCardContainer.querySelector('.location');
    locationElement.HTML=`<i class="fa-solid fa-location-dot"></i> `;

    const tagElement = clonedCardContainer.querySelector('.tag_container span');
    tagElement.textContent = data.tags;

    naturalContainer.appendChild(clonedCardContainer);
});

