import React from react;
import {IndexRoute,Router,Route,hasHistory} from "react-router";
export default extends Component {
  render(){
    return(
    <Router history={hasHistory}/>

    )
  }
}