import { useState, useRef } from 'react';
import Garage from './components/Garage';

const App = () => {
    const [marque, setMarque] = useState('');
    const [annee, setAnnee] = useState('');
    const [couleur, setCouleur] = useState('');
    const [type, setType] = useState('');
    const garageRef = useRef();

    const handleAjouterVehicule = () => {
        if (garageRef.current) {
            garageRef.current.ajouterVehicule(type, { marque, annee, couleur });
        }
    };

    return (
        <div>
            <h1>Système de Gestion de Véhicules</h1>
            <Garage ref={garageRef} />
            <form onSubmit={(e) => { e.preventDefault(); handleAjouterVehicule(); }}>
                <input type="text" placeholder="Marque" value={marque} onChange={(e) => setMarque(e.target.value)} />
                <input type="text" placeholder="Année" value={annee} onChange={(e) => setAnnee(e.target.value)} />
                <input type="text" placeholder="Couleur" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Sélectionnez un type</option>
                    <option value="Voiture">Voiture</option>
                    <option value="Camion">Camion</option>
                    <option value="Moto">Moto</option>
                </select>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default App;
