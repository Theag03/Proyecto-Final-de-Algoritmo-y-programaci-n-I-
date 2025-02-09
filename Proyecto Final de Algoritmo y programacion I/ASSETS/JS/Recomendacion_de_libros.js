let books = {
    "books_1": {
        "id": "1098127463",
        "title": "Security as Code",
        "subtitle": "DevSecOps Patterns with AWS",
        "authors": "BK Sarthak Das, Virginia Chu",
        "image": "https://www.dbooks.org/img/books/1098127463s.jpg",
        "url": "https://www.dbooks.org/security-as-code-1098127463/"
    },
    "books_2": {
        "id": "1805112015",
        "title": "Financing Investment in Times of High Public Debt",
        "subtitle": "2023 European Public Investment Outlook",
        "authors": "Floriana Cerniglia, Francesco Saraceno, Andrew Watt",
        "image": "https://www.dbooks.org/img/books/1805112015s.jpg",
        "url": "https://www.dbooks.org/financing-investment-in-times-of-high-public-debt-1805112015/"
    },
    "books_3": {
        "id": "164200233X",
        "title": "ASP.NET Core 6 Succinctly",
        "subtitle": "",
        "authors": "Dirk Strauss",
        "image": "https://www.dbooks.org/img/books/164200233Xs.jpg",
        "url": "https://www.dbooks.org/aspnet-core-6-succinctly-164200233x/"
    },
    "books_4": {
        "id": "199013209X",
        "title": "Engineering Systems Dynamics, Modelling, Simulation, and Design",
        "subtitle": "Lagrangian and Bond Graph Methods",
        "authors": "Mehrzad Tabatabaian",
        "image": "https://www.dbooks.org/img/books/199013209Xs.jpg",
        "url": "https://www.dbooks.org/engineering-systems-dynamics-modelling-simulation-and-design-199013209x/"
    },
    "books_5": {
        "id": "5709901124",
        "title": "Build a Raspberry Pi Media Player",
        "subtitle": "Power up your TV and music system",
        "authors": "PJ Evans",
        "image": "https://www.dbooks.org/img/books/5709901124s.jpg",
        "url": "https://www.dbooks.org/build-a-raspberry-pi-media-player-5709901124/"
    },
    "books_6": {
        "id": "191204742X",
        "title": "The Official Raspberry Pi Handbook 2023",
        "subtitle": "",
        "authors": "David Crookes, PJ Evans, Rosie Hattersley, Phil King, Nicola King, KG Orphanides, Nik Rawlinson, Mark Vanstone",
        "image": "https://www.dbooks.org/img/books/191204742Xs.jpg",
        "url": "https://www.dbooks.org/the-official-raspberry-pi-handbook-2023-191204742x/"
    },
    "books_7": {
        "id": "5685804586",
        "title": "Pay for Play",
        "subtitle": "How the Music Industry Works, Where the Money Goes, and Why",
        "authors": "Larry Wayte",
        "image": "https://www.dbooks.org/img/books/5685804586s.jpg",
        "url": "https://www.dbooks.org/pay-for-play-5685804586/"
    },
    "books_8": {
        "id": "1642002275",
        "title": "Azure Bot Service Succinctly",
        "subtitle": "",
        "authors": "Ed Freitas",
        "image": "https://www.dbooks.org/img/books/1642002275s.jpg",
        "url": "https://www.dbooks.org/azure-bot-service-succinctly-1642002275/"
    },
};


const container = document.getElementById('book-list');


const bookArray = Object.values(books);

bookArray.forEach(book => {
    let books_html = `
        <div class="card" style="width: 18rem;">
            <img src="${book.image}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.subtitle || 'No subtitle available'}</p>
                <p class="card-text">${book.authors}</p>
                <a href="${book.url}" class="btn btn-primary">See more...</a>
            </div>
        </div>
    `;
    container.innerHTML += books_html;
});