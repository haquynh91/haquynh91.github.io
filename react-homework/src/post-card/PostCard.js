import { useState, useEffect } from "react";

function PostCard() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const filterFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        const filteredPosts = res.filter((item) =>
          item.title.includes(searchValue)
        );
        setPosts(filteredPosts);
      });
  };

  //Hien thi toan bo du lieu API
  useEffect(() => {
    filterFromApi();
  }, []);

  //Chuc nang Scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="wrapper">
      <input id="search" onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={filterFromApi}>Search</button>
      {posts.map((item) => (
        <div key={item.id}>
          <h3 className="postcard-title">{item.title}</h3>
          <p className="postcard-body">{item.body}</p>
        </div>
      ))}
      {showScroll && (
        <button className="scroll" onClick={goToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
}

export default PostCard;
