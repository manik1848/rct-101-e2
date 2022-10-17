// import logo from './logo.svg';
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Author } from "./components/Author";
import { Book } from "./components/Book";

function App() {
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState([]);
  const [show, setShow] = useState(false);
  const [searchBook, setSearchbook] = useState([]);
  const [authShow, setAuthshow] = useState(false);
  // console.log(book, author);

  const handleSearch = (e) => {
    let ans = e.target.value;
    console.log(ans);
    let ans1=book.filter((e) => e.author == ans);
    setSearchbook(ans1);
    console.log(searchBook);
  };
  useEffect(() => {
    axios.get("https://json-data-1848.herokuapp.com/books").then((r) => setBook(r.data));
    axios.get("https://json-data-1848.herokuapp.com/author").then((r) => setAuthor(r.data));
  }, [book]);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <Author />
        <Book />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <Button onClick={() => setShow(!show)}>List all Categories</Button>
        <Button onClick={() => setAuthshow(!authShow)}>List all Authors</Button>
        <Input
          type="text"
          w="200px"
          placeholder="enter author name"
          onChange={handleSearch}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {show
          ? book.map((e) => {
              return <p>{e.category}</p>;
            })
          : null}
      </div>
      <div style={{ textAlign: "center" }}>
        {authShow
          ? author.map((e) => {
              return <p>{e.name}</p>;
            })
          : null}
      </div>
      <div style={{ textAlign: "center" }}>
        {searchBook.length > 0
          ? searchBook.map((e) => {
              return (
                <div>
                  <h3>{e.title}</h3>
                  <h3>{e.author}</h3>
                  <h3>{e.publisher}</h3>
                  <h3>{e.publishDate}</h3>
                  <h3>{e.category}</h3>
                  <h3>{e.price}</h3>
                  <h3>{e.soldCount}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
