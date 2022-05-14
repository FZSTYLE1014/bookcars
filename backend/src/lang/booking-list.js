import LocalizedStrings from 'react-localization';
import Env from '../config/env.config';
import UserService from '../services/UserService';

export const strings = new LocalizedStrings({
    fr: {
        CAR: 'Voiture',
        COMPANY: 'Société',
        DRIVER: 'Conducteur',
        PRICE: 'Prix',
        CURRENCY: 'DH',
        STATUS: 'Statut',
        UPDATE_SELECTION: 'Modifier la sélection',
        DELETE_SELECTION: 'Supprimer la sélection',
        UPDATE_STATUS: 'Modification du statut',
        NEW_STATUS: 'Nouveau statut',
        DELETE_BOOKING: 'Êtes-vous sûr de vouloir supprimer cette réservation ?',
        DELETE_BOOKINGS: 'Êtes-vous sûr de vouloir supprimer les réservations sélectionnées ?',
    },
    en: {
        CAR: 'Car',
        COMPANY: 'Company',
        DRIVER: 'Driver',
        PRICE: 'Price',
        CURRENCY: 'DH',
        STATUS: 'Status',
        UPDATE_SELECTION: 'Edit selection',
        DELETE_SELECTION: 'Delete selection',
        UPDATE_STATUS: 'Status modification',
        NEW_STATUS: 'New status',
        DELETE_BOOKING: 'Are you sure you want to delete this reservation?',
        DELETE_BOOKINGS: 'Are you sure you want to delete the selected reservations?',
    }
});

let language = UserService.getQueryLanguage();

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage();
}

strings.setLanguage(language);
