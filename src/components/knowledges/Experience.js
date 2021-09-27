import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences Informatiques</h3>
            <div className="exp-1">
                <h4>Tuteur en informatique</h4>
                <h5>Université Permanente de Nantes - Depuis 2019</h5>
                <p>
                Apprendre aux élèves à utiliser correctement l'outil
                informatique, tablette ou smartphone
                </p>
            </div>
            <hr/>
            <div className="exp-2">
                <h4>Webmaster</h4>
                <h5>RVFil - 2009 - 2mois (stage)</h5>
                <p>
                Création du site Web de l'entreprise et maintenance du parc
                informatique
                langage : HTML / CSS
                Stage dans le cadre de 1ere année de BTS Informatique de Gestion
                </p>
            </div> 
            <hr/>
            <div className="exp-2">
            <h3>Autres expériences</h3>
                <h5>Vendeur Conseil - Thiriet - 2017 - 2018</h5>
                <h5>Employé polyvalent - 2013 - 2016</h5>
                <h5>Animateur Spécialisé - Kolar Psy - 2012</h5>
                <h5>Chargé de la promotion du volontariat - Concordia - 2011 - 2012</h5>
            </div>                 
        </div>
    );
};

export default Experience;