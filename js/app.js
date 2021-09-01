const booksContainer = document.getElementById('display-books');
const totalBooks = document.getElementById('total-books');

// fetch books data from url 
const loadBooksData = () => {
    const searchField = document.getElementById('search-input');
    const searchValue = searchField.value;
    searchField.value = '';

    fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
        .then(res => res.json())
        .then(data => displayBooks(data));
}

// display books data
const displayBooks = (booksData) => {
    console.log(booksData);
    const { docs, numFound } = booksData;
    console.log(docs);
    console.log(numFound);
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <h5 class="text-center">Found total ${numFound} books.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    totalBooks.appendChild(totalDiv);
    const requiredBooks = docs.slice(0, 8);
    console.log(requiredBooks);

    requiredBooks.forEach(book => {
        console.log(book);
        //const { cover_i, title, author_name, publisher, publish_date } = book;
        const booksDiv = document.createElement('div');
        booksDiv.classList.add('col');
        booksDiv.innerHTML = `
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Name: ${book?.title}</h5>
                <p><span class="text-dark">Author Name:</span> ${book?.author_name}</p>
                <P>Publisher: ${book?.publisher}</P>
                <p>First Published date: ${book?.publish_date}</p>
            </div>
        </div>
        `;
        booksContainer.appendChild(booksDiv);

    });

}