
import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import Image from "material-ui-image";
import memesData from "../memesData";
import { useState } from "react";

const styles = {
  topText: {
    position: "absolute",
    top: "31%",
    width: "100%",
    textAlign: "center",
    color: "black",
    backgroundColor: "none",
    marginLeft: 70,
  },

  bottomText: {
    textAlign: "center",
  },

  formButton: {
    height: 50,
    background: "linear-gradient(to top, #6a3093, #a044ff)",
    fontSize: 16,
    fontWeight: 420,
    color: "white",
    marginBottom: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    maxWidth: '100%',
    height: 600,
    marginBottom: 30
  },
};

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

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
      {/*  No need to use form element */}
      <Container>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={10}
          mt={3}
          justifyContent={"center"}
        >
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Insert top text here"
              variant="filled"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Insert bottom text here"
              variant="filled"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
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
        <Container maxWidth={'md'}>
          
        <Grid
          container
          style={styles.imageContainer}
          sx={{ backgroundImage: `url(${meme.randomImage})`}}
          >
          <Grid item>
            <Typography>Hello</Typography> 
            </Grid>
            {/* Add another trypography, use grid container direction vertical to set
            the two texts apart from each other. top and bottom. */}
        </Grid>
          </Container>
      </Container>
    </>
  );
};

export default Meme;
