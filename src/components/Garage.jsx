import { useState, forwardRef, useImperativeHandle } from 'react';
import Voiture from './Voiture';
import Camion from './Camion';
import Moto from './Moto';

const Garage = forwardRef((props, ref) => {
    const [vehicules, setVehicules] = useState([]);

    useImperativeHandle(ref, () => ({
        ajouterVehicule(type, props) {
            setVehicules([...vehicules, { type, props }]);
        }
    }));

    return (
        <div>
            <h1>Garage</h1>
            {vehicules.length === 0 ? (
                <p>Le garage est vide.</p>
            ) : (
                vehicules.map((vehicule, index) => {
                    const { type, props } = vehicule;
                    if (type === 'Voiture') return <Voiture key={index} {...props} />;
                    if (type === 'Camion') return <Camion key={index} {...props} />;
                    if (type === 'Moto') return <Moto key={index} {...props} />;
                    return null;
                })
            )}
        </div>
    );
});

export default Garage;
