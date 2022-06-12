import React from "react";
import Button from "../../components/button/button";

    const Livre = (props) => {
        
        return (
            <>
                    <td>{props.titre}</td>
                    <td>{props.auteur}</td>
                    <td>{props.pages}</td>
                    <td><Button clic={props.modification} typeCss="btn-warning">Modifier</Button></td>
                    <td><Button clic={props.suppression} typeCss="btn-danger">Supprimer</Button></td>
            </>    
        )
    }

export default Livre;