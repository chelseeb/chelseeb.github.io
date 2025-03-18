document.addEventListener("DOMContentLoaded", function () {
    const restaurantList = document.querySelector("#restaurant-list");
    const detailSection = document.querySelector("#restaurant-detail");
    const mainMenuButton = document.querySelector("#main-menu-btn");
    const restaurantDetails = {
        "gabbel-loffel": {
            image: "desc1.webp",
            title: "Gabbel Loffel",
            description: "Enjoy authentic German cuisine in a cozy Bavarian atmosphere. Try their famous sausages and beer selection!",
            address: "12 Bavarian St, Munich Town",
            phone: "987 65 4321",
            website: "gabbel-loffel.de",
            category: "German",
            hours: "10AM to 10PM",
            price: "$$",
            socialMedia: "Facebook, Instagram",
            rating: "4.5/5",
            specialDishes: "Bratwurst, Pretzels, Sauerkraut"
        },
        "gary-gari": {
            image: "desc2.webp",
            title: "Gary Gari",
            description: "A vibrant spot for fans of Japanese fusion cuisine. From sushi burritos to matcha desserts, it's an explosion of flavors!",
            address: "88 Sakura Lane, Tokyo Town",
            phone: "567 89 1234",
            website: "garygari.jp",
            category: "Japanese Fusion",
            hours: "11AM to 10PM",
            price: "$$$",
            socialMedia: "Facebook, Instagram, Twitter",
            rating: "4.7/5",
            specialDishes: "Sushi Burrito, Matcha Ice Cream"
        },
        "le-piatto": {
            image: "desc3.webp",
            title: "Le Piatto",
            description: "A sophisticated Italian dining experience with exquisite wine pairings and gourmet dishes. Perfect for a romantic evening or fine dining lovers.",
            address: "22 Via Roma, Florence",
            phone: "321 76 5432",
            website: "lepiatto.it",
            category: "Italian",
            hours: "12PM to 11PM",
            price: "$$$",
            socialMedia: "Facebook, Instagram",
            rating: "4.8/5",
            specialDishes: "Lasagna, Tiramisu, Risotto"
        },
        "pierre-platters": {
            image: "desc4.webp",
            title: "Pierre Platters",
            description: "A delightful fusion of Mediterranean flavors, offering fresh seafood, grilled specialties, and handcrafted platters.",
            address: "78 Ocean Ave, Seaside Town",
            phone: "234 56 7890",
            website: "pierreplatters.com",
            category: "Mediterranean",
            hours: "11AM to 10PM",
            price: "$$$",
            socialMedia: "Facebook, Instagram",
            rating: "4.6/5",
            specialDishes: "Grilled Octopus, Seafood Paella"
        }
    };

    document.querySelector("#restaurant-list").addEventListener("click", function (e) {
        const card = e.target.closest(".restaurant-card");
        if (!card) return;
        const restaurantId = card.getAttribute("data-id");
        const details = restaurantDetails[restaurantId];

        if (details) {
            document.querySelector("#detail-title").textContent = details.title;
            document.querySelector("#detail-description").textContent = details.description;
            document.querySelector("#detail-address").textContent = details.address;
            document.querySelector("#detail-phone").textContent = details.phone;
            document.querySelector("#detail-website").textContent = details.website;
            document.querySelector("#detail-category").textContent = details.category;
            document.querySelector("#detail-hours").textContent = details.hours;
            document.querySelector("#detail-price").textContent = details.price;
            document.querySelector("#detail-social-media").textContent = details.socialMedia;
            document.querySelector("#detail-rating").textContent = details.rating;
            document.querySelector("#detail-special-dishes").textContent = details.specialDishes;

            const img = document.querySelector("#detail-image");
            img.src = details.image;
            img.loading = "lazy"; 
            img.style.opacity = "0"; 
            img.onload = () => img.style.opacity = "1"; 

            restaurantList.style.display = "none";
            detailSection.style.display = "flex";
        }
    });

    mainMenuButton.addEventListener("click", function () {
        restaurantList.style.display = "block";
        detailSection.style.display = "none";
        mainMenuButton.style.display = "block";
    });
});
