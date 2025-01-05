import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="home">
            <h1>PORTFOLIO</h1>
            <p>PHOTOGRAPHY</p>
            
          </div>
        );
      case "mywork":
        return (
          <div className="my-work">
            <h1>My Work</h1>
            <div className="gallery">
            <img src="/images/fb9d9931-0d4d-4956-bd05-3c683eefeb59.jpg" alt="Work 1" />
              <img src="images/e58a710e-b874-4a9c-9c67-3d493b77fd4a.jpg" alt="Work 2" />
              <img src="images/93fe30f1-5932-4fb8-ae85-b36752e54c37.jpg" alt="Work 3" />
              <img src="images/d394c351-3468-46f6-bbe7-8cc9c4c80792.jpg" alt="Work 4" />
              <img src="images/45082f44-e1ec-45d9-80d7-5959dda1eccb.jpg" alt="Work 5" />
              <img src="images/5c62d3cc-7256-4800-af4d-7ed4c1f27070.jpg" alt="Work 6" />
              <img src="images/4dbd1ec6-9952-4e49-815c-b4ce6a8cbb65.jpg" alt="Work 7" />
              <img src="images/a46d6fa3-f6b9-40a5-a2da-5a6d064d6686.jpg" alt="Work 8" />
              <img src="images/900b1d86-d7ba-4db7-9e4d-80b0c08b46b6.jpg" alt="Work 9" />
              <img src="images/d6e0fd48-1362-48e7-8e15-cb038f7d6aa5.jpg" alt="Work 10" />
              <img src="images/93fe30f1-5932-4fb8-ae85-b36752e54c37.jpg" alt="Work 11" />
              <img src="images/edf1ce33-4e8f-431c-9aaf-4e42e1d53adc.jpg" alt="Work 12" />
            </div>
          </div>
        );
      case "about":
        return (
          <div className="about">
            <h1>About Me</h1>
            <p>
            I am Agrata Humagain and photography is more than a passion for me, it's a way of preserving the beauty, emotions, 
            and stories of life. I specialize in capturing candid moments and transforming them into timeless memories. 
            With every shot, I aim to bring out the essence of the world around us, one frame at a time.
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="contact">
            <h1>Contact Me</h1>
            <p>Email: agratahuma555@gmail.com</p>
            <p>Phone: +977-9762420429</p>
            <p>
              LinkedIn: {""}
              <a
                href="https://www.linkedin.com/in/agrata-humagain-05472433a/?trk=opento_sprofile_goalscard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        );
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("mywork")}>My Work</button>
        <button onClick={() => setCurrentPage("about")}>About Me</button>
        <button onClick={() => setCurrentPage("contact")}>Contact Me</button>
      </nav>
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;

