import DbRecord from "ee09/src/ee09/json-db/records/DbRecord";
import TranslatedField from "ee09/src/ee09/json-db/fields/TranslatedField";

export default class PageSimple extends DbRecord{
    constructor() {
        super();
        this.type="pagesimple";
        /**
         * Titre de la page traduit
         * @type {TranslatedField}
         */
        this.title=new TranslatedField();
        /**
         * Texte de la page traduit
         * @type {TranslatedField}
         */
        this.texte=new TranslatedField();

    }

}