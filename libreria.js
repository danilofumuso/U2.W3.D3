const booksRow = document.getElementById("books-row");

const getBooks = () => {
  fetch(" https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella response del server!");
      }
    })
    .then((booksArr) => {
      console.log(booksArr);
      booksArr.forEach((book) => {
        const bookCol = document.createElement("div");
        bookCol.classList.add("col", "col-12", "col-m-6", "col-lg-4", "col-xl-3");
        bookCol.innerHTML = `<div class="card mb-3">
       <img src="${book.img}" class="card-img-top" alt="card-img">
       <div class="card-body">
       <h5 class="card-title">${book.title}</h5>
       <p class="card-text">${book.price} €</p>
       <a  href="" class="btn btn-primary">Scarta</a>
       </div>
     </div>`;
        booksRow.appendChild(bookCol);

        const button = document.querySelector("a");

        button.addEventListener("click", () => {
          bookCol.classList.add("d-none");
          console.log(bookCol);
        });
      });
    })
    .catch((error) => {
      alert("No response from server!");
    });
};

getBooks();
