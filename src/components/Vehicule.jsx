const Vehicule = ({ marque, annee, couleur, klaxonner }) => {
    const afficherDétails = () => {
        return `Marque: ${marque}, Année: ${annee}, Couleur: ${couleur}`;
    };

    return (
        <div>
            <h2>{marque}</h2>
            <p>{afficherDétails()}</p>
            <button onClick={klaxonner}>Klaxonner</button>
        </div>
    );
};

export default Vehicule;
