import { ConstructionOutlined } from "@mui/icons-material";
import { TextField, Grid, Container, Button, Box } from "@mui/material";
import Image from "material-ui-image";
import memesData from "../memesData";
import { useState } from "react";

const styles = {
  formButton: {
    height: 50,
    background: "linear-gradient(to top, #6a3093, #a044ff)",
    fontSize: 16,
    fontWeight: 420,
    color: "white",
    marginBottom: 50,
  },
  generatedImages: {
    objectFit: 'contain'
  }
};




const Meme = () => {
  

  // const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData)

  const getMemeImage = () => {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme, randomImage: url
    }));
  };


  return (
    <>
      {/*  No need to use form since we are not submitting a form using a button */}
      <Container>
        <Grid container rowSpacing={3} columnSpacing={10} mt={3}>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Insert top text here"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Insert bottom text here"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <Button
              onClick={getMemeImage}
              fullWidth
              variant="dashed"
              style={styles.formButton}
            >
              Get a new meme image
            </Button>
          </Grid>
        </Grid>

        <Image
          src={meme.randomImage}
          alt="random-images"
          style={styles.generatedImages}
        />
      </Container>
    </>
  );
};

export default Meme;
