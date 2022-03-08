/*
    ###Buscando e contando dados em Arrays 

    Baeado no Array de livros por categoria abaixo, faça os seguintes desafios:
    
    * Contar o numero de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor
    e devolver os livros desse autor 

*/

const booksByCategory = [
    {
        category: "Riquesa",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pái pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mau do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficases",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalCategories = booksByCategory.length

console.log("Total de categorias: " + totalCategories)

for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();


function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author=='Augusto Cury'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor Augusto Cury: ", books)
}

booksOfAugustoCury();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author== author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor  ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');





