import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';
import RightSide from "./components/rightSide";
import LeftSide from "./components/leftSide";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
        <div className="App">
          <Grid container spacing={1}>
            <Grid container item xs={8} md={9}>
              <LeftSide />
            </Grid>
            <Grid container item xs={4} md={3}>
              <RightSide entity="consistent" />
            </Grid>

          </Grid>
        </div>
    );
  }
};

export default App;
