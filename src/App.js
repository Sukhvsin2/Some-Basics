import React, { useEffect, useState }  from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  const [keyword, setKeyword] = useState('')
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState({})

  async function booksAPI() {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=flower`)
    .then(res => res.json())
    .then(data => {
      setBooks(books => books = data.items)
    })
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleClick = (e, obj) => {
    setOpen(true)
    setBook(obj.volumeInfo)
  }

  const BookComp = ({b}) => (
    <tr>
      <td><img src={b.volumeInfo.imageLinks.smallThumbnail} alt={b.volumeInfo.title} /></td>
      <td>
        <b>{b.volumeInfo.title}</b> <br></br>
        <small>{b.volumeInfo.subtitle}</small> <br/>
        <span className='read' onClick={e=>handleClick(e, b)}><i>Read</i></span>
      </td>
      <td>{b.volumeInfo.authors ? b.volumeInfo.authors : "N/A" }</td>
    </tr>
  )

  useEffect(()=>{
    booksAPI()
  }, [])


  return (
    <div>
      <h1 className='title'>Books Search</h1>
      <div className='searchBar'>
        {/* <SearchBar/> */}
    <input className='bar' value={keyword} onChange={handleChange} name="bar" />

      </div>
      <div className='books'>
        {!open && <table width="100%">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
              {books.length === 0 ? <tr><td><h1>loading Data...</h1></td></tr> : books.filter(books => books.volumeInfo.title.toLowerCase().includes(keyword.toLowerCase()))
              .map((b, i) => (
                <BookComp b={b} key={b.id}/>
              ))} 
          </tbody>
        </table>}
        {
          open && 
          <div>
            <div className='showCase'>
              <div>
                <div className='bigImg'>
                  <img src={book.imageLinks.thumbnail} alt={book.title}/>
                </div>
                <div>
                  <div className='heading'>{book.title} </div><br/>
                  <div className='subTitle'>{book.subtitle} </div><br/>
                  <div className='desc'>{book.description}</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
