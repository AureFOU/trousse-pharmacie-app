import { Product} from './product';

export const PRODUCTS : Product[] = [
        {
            id: 0,
            name: "Strepsils à l'orange",
            recordDate: new Date('2024-05-28'),
            expirationDate: new Date('2025-05-01'),
            forWho: "Chloé",
            case: "Mal à la gorge",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/strepsilOrange.jpg",
            onPrecription: false
        },
        {
            id: 1,
            name: "Spasfon",
            recordDate: new Date('2024-07-12'),
            expirationDate: new Date('2025-03-01'),
            forWho: "Aurélie",
            case: "Mal au ventre",
            whichDoctor: "Dr GENERALISTE",
            photo: "../assets/img/spasfon.jpg",
            onPrecription: true
        },
        {
            id: 2,
            name: "Citrate de Bétaïne",
            recordDate: new Date('2024-01-05'),
            expirationDate: new Date('2024-12-01'),
            forWho: "Nicolas",
            case: "Mal au ventre",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/citrate_betaine.jpg",
            onPrecription: false
        },
        {
            id: 3,
            name: "Doliprane",
            recordDate: new Date('2024-09-19'),
            expirationDate: new Date('2024-07-05'),
            forWho: "Chloé",
            case: "Mal à la tête",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/doliprane.jpg",
            onPrecription: false
        },
        {
            id: 4,
            name: "Cosmopor",
            recordDate: new Date('2024-09-19'),
            expirationDate: new Date('2025-03-10'),
            forWho: "Aurélie",
            case: "Kyste",
            whichDoctor: "Infirmière",
            photo: "../assets/img/cosmopor.jpg",
            onPrecription: true
        },
        {
            id: 5,
            name: "Physiodose",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2024-09-30'),
            forWho: "Chloé",
            case: "Nettoyer une plaie",
            whichDoctor: "Dr GENERALISTE",
            photo: "../assets/img/physiodose.jpg",
            onPrecription: false
        },
        {
            id: 6,
            name: "Marimer",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2025-02-20'),
            forWho: "Nicolas",
            case: "Rhume",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/marimer.jpg",
            onPrecription: true
        },
        {
            id: 7,
            name: "Roll on",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2024-10-03'),
            forWho: "Aurélie",
            case: "Mal dos",
            whichDoctor: "Dr GENERALISTE",
            photo: "../assets/img/rollon.jpg",
            onPrecription: true
        },
        {
            id: 8,
            name: "Humex",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2024-09-02'),
            forWho: "Aurélie",
            case: "Rhume",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/humex.jpg",
            onPrecription: false
        },
        {
            id: 9,
            name: "Pansements",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2024-11-10'),
            forWho: "Chloé",
            case: "Ampoules à la cheville",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/pansements.jpg",
            onPrecription: false
        },
        {
            id: 10,
            name: "Biafine",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2025-06-24'),
            forWho: "Aurélie",
            case: "Coup de soleil",
            whichDoctor: "Infirmière",
            photo: "../assets/img/biafine.jpg",
            onPrecription: true
        },
        {
            id: 11,
            name: "Antiseptique",
            recordDate: new Date('2024-09-20'),
            expirationDate: new Date('2025-09-05'),
            forWho: "Nicolas",
            case: "Désinfecter plaie",
            whichDoctor: "Dr GENERALISTE",
            photo: "../assets/img/antiseptique.jpg",
            onPrecription: true
        }
    ]