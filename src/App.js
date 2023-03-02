import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 4,
            width: 200,
            height: 170,
            border: 1,
            borderColor: "black",
            backgroundColor: color
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {color ? color : 'Empty List'}
          </Typography>
        </Box>
        <TextField
          label="Add Color Name"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </Box>
    </Container>
  );
}

export default App;
