import Vehicule from './Vehicule';

const Moto = (props) => {
    const klaxonner = () => {
        console.log('Klaxon de moto : Beep Beep!');
    };

    return (
        <Vehicule {...props} klaxonner={klaxonner} />
    );
};

export default Moto;
