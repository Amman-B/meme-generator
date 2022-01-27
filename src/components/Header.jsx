import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import trollFace from "../images/Troll-Face.svg";

const styles = {
  appBar: {
    position: "static",
    background: "linear-gradient(to top, #6a3093, #a044ff)",
  },
  title: {
    marginLeft: 8,
    flexGrow: 1,
    fontSize: 21,
    fontWeight: 700,
  },
  toolBar: {
    minHeight: 80,
  },
};

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={styles.appBar}>
          <Container maxWidth='xl'>
            <Toolbar style={styles.toolBar}>
              <img src={trollFace} alt="troll-svg-icon" />
              <Typography variant="h6" style={styles.title}>
                Meme Generator
              </Typography>
              <Typography variant="body1">React Course - Project 3</Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
