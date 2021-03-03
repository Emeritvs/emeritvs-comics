import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comics from "./pages/Comics";
import Landing  from "./pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/comics" exact component={Comics}></Route>
      </Switch>
    </BrowserRouter>
  );
}