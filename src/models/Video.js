import DbRecord from "ee09/src/ee09/json-db/records/DbRecord";
import TranslatedField from "ee09/src/ee09/json-db/fields/TranslatedField";
import VideoField from "ee09/src/ee09/json-db/fields/VideoField";

export default class Video extends DbRecord{
    constructor() {
        super();
        this.type="video";
        /**
         * Titre de la vidéo traduit
         * @type {TranslatedField}
         */
        this.title=new TranslatedField();
        /**
         * La ressource vidéo
         * @type {VideoField}
         */
        this.video=new VideoField();
    }

    get adminSubtitle(){
        return this.video.provider;
    }
    get adminSubtitleIcon(){
        return this.video.providerMdiIcon;
    }

}