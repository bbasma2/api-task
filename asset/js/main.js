const companiesContainer = document.querySelector(".companies");
const personsContainer = document.querySelector(".persons");
const booksContainer = document.querySelector(".books");
const loader = document.querySelector(".loader");
const apiBaseURL = "https://fakerapi.it/api/v1";
let persons = [];

function renderCompanies(companies) {
  companies.forEach((company) => {
    companiesContainer.innerHTML += `
        <article class="company">
            <figure class="company__poster">
                <img src="${company.image}" alt="company poster" >
            </figure>
            <div class="company__info">
                <h1><span>name</span>${company.name}</h1>
                <div><span>country</span>${company.country}</div>
               <div><span>phone</span>${company.phone}</div>
                <a href="${company.website}"><span>visited web sites</span></a>
            </div>
        </article>

           `;
  });
}

function getCompanies() {
  //show loader
  loader.classList.remove("hidden");
  fetch(`${apiBaseURL}/companies?_quantity=15`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderCompanies(data.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      //remove loader
      loader.classList.add("hidden");
    });
}
getCompanies();

function renderPersons(persons) {
  personsContainer.innerHTML += "";

  persons.forEach((person) => {
    personsContainer.innerHTML += `
        <article class="person">
            <figure class="person__poster">
                <img src="${person.image}" alt="person poster" >
            </figure>
            <div class="person__info">
                <h1><span>firstname  :  </span>${person.firstname}</h1>
                <div><span>lastname  :  </span>${person.lastname}</div>
               <div><span>email  :  </span>${person.email}</div>
                <a href="${person.website}"><span>visited web sites</span></a>
            </div>
        </article>

           `;
  });
}

function getPersons() {
  //show loader
  loader.classList.remove("hidden");
  fetch(`${apiBaseURL}/persons?_quantity=20`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      persons = data.data;
      renderPersons(persons);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      //remove loader
      loader.classList.add("hidden");
    });
}
getPersons();
function preventDefault(event) {
  event.preventDefault(event);
}

function searchPersons(event) {
  const searchInput = input.target;
  const matchedPersons = persons.filter(
    (person) =>
      person.firstname.toLowerCase().includes(searchInput.value) ||
      person.lastname.toLowerCase().includes(searchInput.value)
  );
  renderPersons(matchedPersons);
}

function renderBooks(books) {
  books.forEach((book) => {
    booksContainer.innerHTML += `
        <article class="book">
            <figure class="book__poster">
                <img src="${book.image}" alt="book poster" >
            </figure>
            <div class="book__info">
                <h1><span>name :  </span>${book.title}</h1>
                <div><span>author :  </span>${book.author}</div>
               <div><span>description :  </span>${book.description}</div>
            </div>
        </article>

           `;
  });
}

function getBooks() {
  //show loader
  loader.classList.remove("hidden");
  fetch(`${apiBaseURL}/books?`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderBooks(data.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      //remove loader
      loader.classList.add("hidden");
    });
}
getBooks();


// async function getData() {
//   await getCompanies();
//   await getPersons();
//   await getBooks();
// }
// getData();
