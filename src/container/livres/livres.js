import React, {Component} from "react";
import Livre from "../livre/livre";
import FormulaireModif from "../formulaireModif/formulaireModif";
import FormulaireAjout from "../FormulaireAjout/FormulaireAjout";
import Alert from "../../components/Alert/Alert";

class Livres extends Component {
    state = {
        livres:[
            {id:1, titre:"Les Misérables", auteur:"Hugo", pages: 989},
            {id:2, titre:"Amkoulel", auteur:"Hampate Ba", pages: 423},
            {id:3, titre:"La Réalité de l'Acteur", auteur:"Stanislavski", pages: 340}],
            lastIdLivre : 3,
            idLivreAModifier : 0,
            alertMessage: null
    }

    deleteBookHandler(id){
         const indexElement = this.state.livres.findIndex(element =>{//trouver l'indexe de l'élément cliqué
            return element.id === id;
         }) 
         const newBookList = [...this.state.livres];
         newBookList.splice(indexElement, 1);
        
         this.setState({
             livres: newBookList,
             alertMessage: {
                message: "Livre Supprimé !",
                type: "alert-danger"
            
            }       
        });
        }
    
   handleAjoutLivre =(titre, auteur, nbPages) =>{
       const newBook = {
            id:this.state.lastIdLivre +1, 
            titre: titre, 
            auteur: auteur, 
            pages:nbPages
        };
        
       const nouvelleListe = [...this.state.livres];
       nouvelleListe.push(newBook);
       this.setState(oldstate => {
           return {
               livres: nouvelleListe,
               lastIdLivre: oldstate + 1,
               alertMessage: {
                message: "Livre Ajouté",
                type: "alert-success"
            
            }
           }
       })
       this.props.ajoutOk();

   }
   
   handelModificationLivre = (id, titre, auteur, nbPages) => {
    const indexlivreModif = this.state.livres.findIndex(element =>{//trouver l'indexe de l'élément cliqué
        return element.id === id;
     });
     const newLivre = {
         isd: id,
         titre: titre,
         auteur: auteur,
         pages: nbPages
     }
     const modifiedBookList = [...this.state.livres];
    modifiedBookList[indexlivreModif] = newLivre;
     this.setState({livres:modifiedBookList, idLivreAModifier:0, alertMessage: {
        message: "Livre Modifié !",
        type: "alert-warning"
    
    }});
     
   }
    render(){
        return(
            <div>
                {this.state.alertMessage && <Alert alertType={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className={`table text-center`}>
                    <thead>
                        <tr className={`table-dark`}>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de Pages</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.livres.map(livre =>{
                            if(livre.id !== this.state.idLivreAModifier){
                            return(
                                <tr key={livre.id}>
                                <Livre 
                                    
                                    titre= {livre.titre}
                                    auteur={livre.auteur}
                                    pages={livre.pages}
                                    suppression={() => this.deleteBookHandler(livre.id)}
                                    modification={()=> this.setState({idLivreAModifier:livre.id})}
                                />
                                </tr>
                            );}else{
                               return (
                                   <tr key={livre.id}>
                                   <FormulaireModif 
                                    id={livre.id}
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.pages}
                                    validationModification={this.handelModificationLivre}    
                               />
                               </tr>)
                            }

                        })
                    }
                        
                    </tbody>
                </table>
                {this.props.isTransfered && <FormulaireAjout validation={this.handleAjoutLivre}/>}
            </div>
        );
    }
}

export default Livres;