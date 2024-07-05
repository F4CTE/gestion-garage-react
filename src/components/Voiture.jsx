import Vehicule from './Vehicule';

const Voiture = (props) => {
    const klaxonner = () => {
        console.log('Klaxon de voiture : Beep Beep!');
    };

    return (
        <Vehicule {...props} klaxonner={klaxonner} />
    );
};

export default Voiture;
