const displayBooks = (booksData) => {
    console.log(booksData);
    const { docs, numFound } = booksData;
    console.log(docs);
    //console.log(numFound);
    // const totalDiv = document.createElement('div');
    // totalDiv.innerHTML = `
    // <h4 class="text-center text-info fst-italic">Found total ${numFound}books</h4>
    // `;
    // totalBooks.appendChild(totalDiv);

    const requiredBooks = docs.slice(0, 8);
    console.log(requiredBooks);
    //const { title, author_name, publish_date } = docs;
    requiredBooks.forEach(book => {
        console.log(book);
        // const booksDiv = document.createElement('div');
        // booksDiv.innerHTML = `
        // <div class="row row-cols-1 row-cols-md-3 g-4">
        //     <div class="col">
        //         <div class="card">
        //             <img src="..." class="card-img-top" alt="...">
        //             <div class="card-body">
        //                 <h5 class="card-title">Card title</h5>
        //                 <p class="card-text">This is a longer card
        //                     with supporting text below as a natural
        //                     lead-in to additional content. This
        //                     content is a little bit longer.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // `;
        // booksContainer.appendChild(booksDiv);
    });
}