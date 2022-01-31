
import { useState, useEffect } from "react";
import '../style.css';

const Meme = () => {

  // Setting the initial state of the input fields and image
  const [meme, setMeme] = useState({
    topText: "Nothing rhymes with orange?",
    bottomText: "false. nothing and orange do not rhyme. ",
    randomImage: "https://imgflip.com/s/meme/Dwight-Schrute.jpg",
  });

  const [allMemes, setAllMemes] = useState();


  useEffect(() => {
    // fetching images api
    fetch("https://api.imgflip.com/get_memes")
      //return the body as a promise in JSON format.
      .then((res) => res.json())
      //setAllMemes state to memes data from apa
      .then((data) => setAllMemes(data.data.memes));
  }, [])



// get random images
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  // handler for button
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <>
      <main>
        <div className="form">
          {/* top text input */}
          <input
            className="form--input"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

          {/* bottom text input */}
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />

          {/* button to get a new meme image */}
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>

        {/* image display with text overlay */}
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="random-image"/>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
};

export default Meme;
