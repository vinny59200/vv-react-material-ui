import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";

function App() {
  //The hook to handle the name
  const [name, setName] = useState("");

  //the theme to style the GUI components
  const theme = createTheme({
    palette: {
      primary: {
        main: "#777777",
        borderWidth: "1px !important",
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "black",
            backgroundColor: "yellow",
            "&::before": {
              borderBottom: "1px solid rgba(0, 0, 0, 0.42)", // use your color
            },
          },
        },
      },
    },
  });

  //the handlers methods
  const handleTextInputChange = (event) => {
    setName(event.target.value);
  };
  const handleTextAlert = (event) => {
    alert(name);
  };

  //the JSX
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ThemeProvider theme={theme}>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              onChange={handleTextInputChange}
            />
            <br />
            <Button variant="contained" onClick={handleTextAlert}>
              Hello World
            </Button>
          </ThemeProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
