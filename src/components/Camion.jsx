import Vehicule from './Vehicule';

const Camion = (props) => {
    const klaxonner = () => {
        console.log('Klaxon de camion : Honk Honk!');
    };

    return (
        <Vehicule {...props} klaxonner={klaxonner} />
    );
};

export default Camion;
