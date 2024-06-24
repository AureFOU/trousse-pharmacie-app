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
            recordDate: new Date('2024-05-28'),
            expirationDate: new Date('2024-03-01'),
            forWho: "Aurélie",
            case: "Mal au ventre",
            whichDoctor: "Dr BERT",
            photo: "../assets/img/spasfon.jpg",
            onPrecription: true
        },
        {
            id: 2,
            name: "Citrate de Bétaïne",
            recordDate: new Date('2024-05-28'),
            expirationDate: new Date('2023-12-01'),
            forWho: "Nicolas",
            case: "Mal au ventre",
            whichDoctor: "Pharmacie",
            photo: "../assets/img/citrate_betaine.jpg",
            onPrecription: false
        }
    ]