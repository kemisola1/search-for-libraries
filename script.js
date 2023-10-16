document.addEventListener("DOMContentLoaded", function () {
    const libraries = {
        abia: [
            { name: "Abia State Central Library", details: "State library located in Umuahia, Abia State", location: "Hospital Road, Umuahia" },
            { name: "Michael Okpara University Library", details: "Academic library serving Michael Okpara University students and faculty", location: "Umudike, Umuahia" },
            { name: "Abia State Polytechnic Library", details: "Library serving students and staff of Abia State Polytechnic", location: "Aba-Owerri Road, Aba" },
            { name: "City Heights Library", details: "Community library in the heart of Aba city", location: "Asa Road, Aba" },
            { name: "Educational Resource Center", details: "Library and resource center for educators and students", location: "St. Finbarr's College Road, Umuahia" },
            { name: "Peoples' Library", details: "Public library open to all residents of Abia State", location: "Factory Road, Aba" },
            { name: "Green Valley Library", details: "Library promoting environmental awareness and sustainable living", location: "Ogbor Hill, Aba" },
            { name: "Abia Heritage Library", details: "Library preserving the cultural heritage of Abia State", location: "Umuwaya Road, Umuahia" },
            { name: "Pioneer Library", details: "Historical library with a collection of pioneer literature", location: "Azikiwe Road, Aba" },
            { name: "Sunrise Library", details: "Library opening early to cater to early risers and students", location: "Ama-Ogbonna, Umuahia" },
            { name: "Golden Gate Library", details: "Library with a diverse collection of literature and resources", location: "Factory Road, Aba" },
            { name: "Unity Library", details: "Community-driven library promoting unity and harmony among residents", location: "Umuagu, Aba" },
            { name: "Royal Readers Library", details: "Library with a focus on royal history and monarch literature", location: "Ohafia Road, Aba" },
            { name: "Graceland Library", details: "Library promoting grace, kindness, and positive values", location: "Umuode Road, Umuahia" },
            { name: "Knowledge Haven Library", details: "Library serving as a haven for knowledge seekers and researchers", location: "Azikiwe Road, Aba" },
            { name: "Innovation Hub Library", details: "Library fostering innovation and creativity among students", location: "Umuahia-Ikot Ekpene Road, Umuahia" },
            { name: "Rural Readers Library", details: "Library promoting literacy in rural communities of Abia State", location: "Isiala Ngwa" },
            { name: "Peaceful Readers Library", details: "Library providing a peaceful and quiet environment for reading", location: "Ariaria International Market, Aba" },
            { name: "Emerald Isle Library", details: "Library with a collection of environmental literature and conservation resources", location: "Umungasi Road, Umuahia" },
            { name: "Abia Learning Center", details: "Education and research center for students and scholars", location: "Aba Road, Umuahia" }
            // Add more libraries in Abia as needed
        ],
        adamawa: [
            { name: "Adamawa State Central Library", details: "State library located in Yola, Adamawa State", location: "Galadima Aminu Way, Jimeta, Yola" },
            { name: "Modibbo Adama University Library", details: "Academic library serving Modibbo Adama University students and faculty", location: "P.M.B. 25, Mubi, Adamawa State" },
            { name: "Federal Polytechnic Library", details: "Library serving students and staff of Federal Polytechnic, Mubi", location: "P.M.B. 35, Mubi, Adamawa State" },
            { name: "Adamawa State Polytechnic Library", details: "Library supporting students and faculty of Adamawa State Polytechnic", location: "Numan Road, Yola" },
            { name: "City Readers Library", details: "Community library located in the heart of Jimeta city", location: "Girei Road, Jimeta, Yola" },
            { name: "Educational Resource Center", details: "Library and resource center for educators and students", location: "Bachure, Yola" },
            { name: "Green Valley Library", details: "Library promoting environmental awareness and sustainable living", location: "Mayanka, Yola" },
            { name: "Adamawa Heritage Library", details: "Library preserving the cultural heritage of Adamawa State", location: "Lamido Zubairu Way, Yola" },
            { name: "Pioneer Library", details: "Historical library with a collection of pioneer literature", location: "Wuro-Bokki, Yola" },
            { name: "Sunrise Library", details: "Library opening early to cater to early risers and students", location: "Girei, Yola" },
            { name: "Golden Gate Library", details: "Library with a diverse collection of literature and resources", location: "Maiha Road, Yola" },
            { name: "Unity Library", details: "Community-driven library promoting unity and harmony among residents", location: "Mubi Road, Yola" },
            { name: "Royal Readers Library", details: "Library with a focus on royal history and monarch literature", location: "Numan, Adamawa State" },
            { name: "Graceland Library", details: "Library promoting grace, kindness, and positive values", location: "Yola Bye-Pass, Jimeta" },
            { name: "Knowledge Haven Library", details: "Library serving as a haven for knowledge seekers and researchers", location: "Karewa, Yola" },
            { name: "Innovation Hub Library", details: "Library fostering innovation and creativity among students", location: "Lamido Zubairu Way, Yola" },
            { name: "Rural Readers Library", details: "Library promoting literacy in rural communities of Adamawa State", location: "Gombi, Adamawa State" },
            { name: "Peaceful Readers Library", details: "Library providing a peaceful and quiet environment for reading", location: "Jada, Adamawa State" },
            { name: "Emerald Isle Library", details: "Library with a collection of environmental literature and conservation resources", location: "Maiha, Adamawa State" },
            { name: "Adamawa Learning Center", details: "Education and research center for students and scholars", location: "Guyuk, Adamawa State" }
            // Add more libraries in Adamawa as needed
        ],
        
        akwa_ibom: [
            { name: "Akwa Ibom State Library", details: "State library located in Uyo, Akwa Ibom State." },
            { name: "University of Uyo Library", details: "Academic library serving University of Uyo students and faculty." }
            // Add more libraries in Akwa Ibom as needed
        ],
        anambra: [
            { name: "Anambra State Library", details: "State library located in Awka, Anambra State." },
            { name: "Nnamdi Azikiwe University Library", details: "Academic library serving Nnamdi Azikiwe University students and faculty." }
            // Add more libraries in Anambra as needed
        ],
        bauchi: [
            { name: "Bauchi State Library", details: "State library located in Bauchi, Bauchi State." },
            { name: "Abubakar Tafawa Balewa University Library", details: "Academic library serving ATBU students and faculty." }
            // Add more libraries in Bauchi as needed
        ],
        bayelsa: [
            { name: "Bayelsa State Library", details: "State library located in Yenagoa, Bayelsa State." },
            { name: "Niger Delta University Library", details: "Academic library serving NDU students and faculty." }
            // Add more libraries in Bayelsa as needed
        ],
        benue: [
            { name: "Benue State Library", details: "State library located in Makurdi, Benue State." },
            { name: "Benue State University Library", details: "Academic library serving BSU students and faculty." }
            // Add more libraries in Benue as needed
        ],
        borno: [
            { name: "Borno State Library", details: "State library located in Maiduguri, Borno State." },
            { name: "University of Maiduguri Library", details: "Academic library serving UNIMAID students and faculty." }
            // Add more libraries in Borno as needed
        ],
        cross_river: [
            { name: "Cross River State Library", details: "State library located in Calabar, Cross River State." },
            { name: "University of Calabar Library", details: "Academic library serving UNICAL students and faculty." }
            // Add more libraries in Cross River as needed
        ],
        delta: [
            { name: "Delta State Library", details: "State library located in Asaba, Delta State." },
            { name: "Delta State University Library", details: "Academic library serving DELSU students and faculty." }
            // Add more libraries in Delta as needed
        ],
        ebonyi: [
            { name: "Ebonyi State Library", details: "State library located in Abakaliki, Ebonyi State." },
            { name: "Ebonyi State University Library", details: "Academic library serving EBSU students and faculty." }
            // Add more libraries in Ebonyi as needed
        ],
        edo: [
            { name: "Edo State Library", details: "State library located in Benin City, Edo State." },
            { name: "University of Benin Library", details: "Academic library serving UNIBEN students and faculty." }
            // Add more libraries in Edo as needed
        ],
        ekiti: [
            { name: "Ekiti State Library", details: "State library located in Ado-Ekiti, Ekiti State." },
            { name: "Afe Babalola University Library", details: "Academic library serving ABUAD students and faculty." }
            // Add more libraries in Ekiti as needed
        ],
        enugu: [
            { name: "Enugu State Library", details: "State library located in Enugu, Enugu State." },
            { name: "University of Nigeria, Nsukka Library", details: "Academic library serving UNN students and faculty." }
            // Add more libraries in Enugu as needed
        ],
        gombe: [
            { name: "Gombe State Library", details: "State library located in Gombe, Gombe State." },
            { name: "Federal University Kashere Library", details: "Academic library serving FUK students and faculty." }
            // Add more libraries in Gombe as needed
        ],
        imo: [
            { name: "Imo State Library", details: "State library located in Owerri, Imo State." },
            { name: "Federal University of Technology Owerri Library", details: "Academic library serving FUTO students and faculty." }
            // Add more libraries in Imo as needed
        ],
        jigawa: [
            { name: "Jigawa State Library", details: "State library located in Dutse, Jigawa State." },
            { name: "Federal University Dutse Library", details: "Academic library serving FUD students and faculty." }
            // Add more libraries in Jigawa as needed
        ],
        kaduna: [
            { name: "Kaduna State Library", details: "State library located in Kaduna, Kaduna State." },
            { name: "Ahmadu Bello University Library", details: "Academic library serving ABU students and faculty." }
            // Add more libraries in Kaduna as needed
        ],
        kano: [
            { name: "Kano State Library", details: "State library located in Kano, Kano State." },
            { name: "Bayero University Kano Library", details: "Academic library serving BUK students and faculty." }
            // Add more libraries in Kano as needed
        ],
        katsina: [
            { name: "Katsina State Library", details: "State library located in Katsina, Katsina State." },
            { name: "Umaru Musa Yar'adua University Library", details: "Academic library serving UMYU students and faculty." }
            // Add more libraries in Katsina as needed
        ],
        kebbi: [
            { name: "Kebbi State Library", details: "State library located in Birnin Kebbi, Kebbi State." },
            { name: "Federal University Birnin Kebbi Library", details: "Academic library serving FUBK students and faculty." }
            // Add more libraries in Kebbi as needed
        ],
        kogi: [
            { name: "Kogi State Library", details: "State library located in Lokoja, Kogi State." },
            { name: "Federal University Lokoja Library", details: "Academic library serving FUL students and faculty." }
            // Add more libraries in Kogi as needed
        ],
        kwara: [
            { name: "Kwara State Library", details: "State library located in Ilorin, Kwara State." },
            { name: "University of Ilorin Library", details: "Academic library serving UNILORIN students and faculty." }
            // Add more libraries in Kwara as needed
        ],
      
        lagos: [
            { name: "Lagos State Central Library", details: "State library located in Ikeja, Lagos State", location: "Beside Lagos House of Assembly, Alausa, Ikeja" },
            { name: "University of Lagos Library", details: "Academic library serving UNILAG students and faculty", location: "University Road, Akoka, Yaba, Lagos" },
            { name: "Lagos City Library", details: "Public library located in Lagos Island, Lagos State", location: "Catholic Mission Street, Lagos Island" },
            { name: "Lagos State University Library", details: "Academic library serving LASU students and faculty", location: "Ojo, Lagos State" },
            { name: "Marina Library", details: "Community library near Marina, Lagos", location: "Marina Street, Lagos Island" },
            { name: "Tech Hub Library", details: "Library and tech space for entrepreneurs and innovators", location: "Sanusi Fafunwa Street, Victoria Island" },
            { name: "Young Readers Library", details: "Children's library encouraging reading habits among kids in Lagos", location: "Lekki Phase 1, Lagos" },
            { name: "Lagos Innovators Library", details: "Library supporting startups and creative thinkers", location: "Adeniyi Jones Avenue, Ikeja" },
            { name: "Historical Archives Library", details: "Library housing historical documents of Lagos State", location: "Awolowo Road, Ikoyi, Lagos" },
            { name: "City Heights Library", details: "Public library located in Victoria Island, Lagos", location: "Karimu Kotun Street, Victoria Island" },
            { name: "Eko Library", details: "Community library promoting cultural exchange and learning", location: "Eko Hotel & Suites, Adetokunbo Ademola Street, Victoria Island" },
            { name: "Lekki Peninsula Library", details: "Library catering to residents of Lekki Peninsula, Lagos", location: "Lekki-Epe Expressway, Lekki Peninsula" },
            { name: "Greenview Library", details: "Environmentally focused library in Lagos promoting green living", location: "Admiralty Way, Lekki Phase 1, Lagos" },
            { name: "Mega Minds Library", details: "Library encouraging critical thinking and creativity in Lagos State", location: "Allen Avenue, Ikeja, Lagos" },
            { name: "Tech Wizards Library", details: "Library for technology enthusiasts and aspiring programmers", location: "Victoria Island, Lagos" },
            { name: "Coastal Readers Library", details: "Library with a focus on maritime literature and knowledge", location: "Victoria Island, Lagos" },
            { name: "Lagos Legacy Library", details: "Preserving the historical legacy of Lagos State through books and artifacts", location: "Akin Adesola Street, Victoria Island, Lagos" },
            { name: "Sunrise Library", details: "Library opening early to cater to the early risers and learners", location: "Idimu Road, Egbeda, Lagos" },
            { name: "Sands of Time Library", details: "Historical library showcasing the rich history of Lagos State", location: "Epe, Lagos State" },
            { name: "EduHub Library", details: "Education-focused library providing resources for students and teachers", location: "Ogunlana Drive, Surulere, Lagos" },
            { name: "Knowledge Haven Library", details: "Diverse collection of books and resources for lifelong learners", location: "Glover Road, Ikoyi, Lagos" },
            { name: "Palm Grove Library", details: "Library with a serene environment for peaceful reading and study", location: "Palm Grove, Lagos Mainland" },
            { name: "InnoSpace Library", details: "Innovative library offering resources for entrepreneurs and startups", location: "Adeola Odeku Street, Victoria Island, Lagos" },
            { name: "Unity Library", details: "Community-driven library promoting unity and harmony among residents", location: "Unity Road, Ikeja, Lagos" },
            { name: "Golden Age Library", details: "Library specializing in historical literature and cultural heritage", location: "Balogun Street, Lagos Island" },
            { name: "Rainbow Readers Library", details: "Library promoting diversity and inclusion through literature", location: "Admiralty Way, Lekki Phase 1, Lagos" },
            { name: "Techie Haven Library", details: "Library for tech enthusiasts and IT professionals", location: "Adetokunbo Ademola Street, Victoria Island, Lagos" },
            { name: "Emerald Isle Library", details: "Library with a collection of environmental literature and conservation resources", location: "Ligali Ayorinde Street, Victoria Island, Lagos" }
            // Add more libraries in Lagos as needed
        ],
    
        
        
        nasarawa: [
            { name: "Nasarawa State Library", details: "State library located in Lafia, Nasarawa State." },
            { name: "Nasarawa State University Library", details: "Academic library serving NSUK students and faculty." }
            // Add more libraries in Nasarawa as needed
        ],
        niger: [
            { name: "Niger State Library", details: "State library located in Minna, Niger State." },
            { name: "Federal University of Technology Minna Library", details: "Academic library serving FUTMINNA students and faculty." }
            // Add more libraries in Niger as needed
        ],
        ogun: [
            { name: "Ogun State Library", details: "State library located in Abeokuta, Ogun State." },
            { name: "Federal University of Agriculture Abeokuta Library", details: "Academic library serving FUNAAB students and faculty." }
            // Add more libraries in Ogun as needed
        ],
        ondo: [
            { name: "Ondo State Library", details: "State library located in Akure, Ondo State." },
            { name: "Adekunle Ajasin University Library", details: "Academic library serving AAUA students and faculty." }
            // Add more libraries in Ondo as needed
        ],
        osun: [
            { name: "Osun State Library", details: "State library located in Osogbo, Osun State." },
            { name: "Osun State University Library", details: "Academic library serving UNIOSUN students and faculty." }
            // Add more libraries in Osun as needed
        ],
        oyo: [
            { name: "Oyo State Library", details: "State library located in Ibadan, Oyo State." },
            { name: "University of Ibadan Library", details: "Academic library serving UI students and faculty." }
            // Add more libraries in Oyo as needed
        ],
        plateau: [
            { name: "Plateau State Library", details: "State library located in Jos, Plateau State." },
            { name: "University of Jos Library", details: "Academic library serving UNIJOS students and faculty." }
            // Add more libraries in Plateau as needed
        ],
        rivers: [
            { name: "Rivers State Library", details: "State library located in Port Harcourt, Rivers State." },
            { name: "University of Port Harcourt Library", details: "Academic library serving UNIPORT students and faculty." }
            // Add more libraries in Rivers as needed
        ],
        sokoto: [
            { name: "Sokoto State Library", details: "State library located in Sokoto, Sokoto State." },
            { name: "Usmanu Danfodiyo University Library", details: "Academic library serving UDUS students and faculty." }
            // Add more libraries in Sokoto as needed
        ],
        taraba: [
            { name: "Taraba State Library", details: "State library located in Jalingo, Taraba State." },
            { name: "Federal University Wukari Library", details: "Academic library serving FUWUKARI students and faculty." }
            // Add more libraries in Taraba as needed
        ],
        yobe: [
            { name: "Yobe State Library", details: "State library located in Damaturu, Yobe State." },
            { name: "Federal University Gashua Library", details: "Academic library serving FUGASHUA students and faculty." }
            // Add more libraries in Yobe as needed
        ],
        zamfara: [
            { name: "Zamfara State Library", details: "State library located in Gusau, Zamfara State." },
            { name: "Federal University Gusau Library", details: "Academic library serving FUGUS students and faculty." }
            // Add more libraries in Zamfara as needed
        ],
        abuja: [
            { name: "National Library of Nigeria", details: "National library located in Abuja, Federal Capital Territory." },
            { name: "Baze University Library", details: "Academic library serving Baze University students and faculty." }
            // Add more libraries in Abuja as needed
        ]
        // Add more states and libraries in the same format
        // ...
    };
    
    const locationFilter = document.getElementById("location");
    const librarySlider = document.getElementById("library-slider");

    locationFilter.addEventListener("change", function () {
        const selectedLocation = locationFilter.value;
        renderLibraries(selectedLocation);
    });

    function renderLibraries(location) {
        const librarySlides = libraries[location].map(library => {
            return `<div class="library-slide">
                        <h2>${library.name}</h2>
                        <p>${library.details}</p>
                        <p>${library.location}</p>
                    </div>`;
        });
        librarySlider.innerHTML = librarySlides.join('');
        $('.library-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev">&#9665;</button>',
            nextArrow: '<button class="slick-next">&#9655;</button>',
            dots: true
        });
    }

    // Populate the dropdown with states
    Object.keys(libraries).forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state.charAt(0).toUpperCase() + state.slice(1);
        locationFilter.appendChild(option);
    });

    // Initial render
    renderLibraries(Object.keys(libraries)[0]);
});

