import React, {Component} from "react";
import Button from "../../components/button/button";

class FormulaireModif extends Component {
    state = {
        titreSaisi : this.props.titre,
        auteurSaisi : this.props.auteur,
        nbPagesSaisi :this.props.nbPages
    }
    handelValidation = () =>{
        this.props.validationModification(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)
    }
    render(){
        return(
            <>
                    <td><input type="text" className="form-control" value={this.state.titreSaisi} onChange={(event) => this.setState({titreSaisi:event.target.value})}></input></td>
                    <td><input type="text" className="form-control" value={this.state.auteurSaisi} onChange={(event) => this.setState({auteurSaisi:event.target.value})}></input></td>
                    <td><input type="number" className="form-control" value={this.state.nbPagesSaisi} onChange={(event) => this.setState({nbPagesSaisi:event.target.value})}></input></td>
                    <td><Button clic={this.handelValidation} typeCss="btn-primary">Valider</Button></td>
            </>
        );
    }
}

export default FormulaireModif;
