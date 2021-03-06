import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <h1>Single Color Page</h1>}
        />
      </Switch>
    );
  }
}
export default App;

//  {/* <div>
//       {" "}
//       <Palette palette={generatePalette(seedColors[1])} />;
//     </div> */}
