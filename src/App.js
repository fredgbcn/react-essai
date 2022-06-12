import React, {Component} from "react";
import TitleH1 from "./components/titres/Titleh1";
import Button from "./components/button/button";
import Livres from "./container/livres/livres";

class App extends Component {
  state = {
    ajout : false
  }
  isAdded = () =>{
    this.setState((oldstate, props) => {
      return {ajout: !oldstate.ajout}
    })
  }
  render(){
  return (
    <div className="container">
      <TitleH1>Liste de mes Livres</TitleH1> 
      <Livres  isTransfered={this.state.ajout} ajoutOk={() => this.setState({ajout:false})}/>

        <Button clic={this.isAdded} typeCss="btn-success" css="w-100">
        {!this.state.ajout ? "Ajouter" : "Fermer l'Ajout"}
        </Button>
    </div>
    )
  }
}
export default App;
