import DbRecord from "ee09/src/ee09/json-db/records/DbRecord";
import TranslatedField from "ee09/src/ee09/json-db/fields/TranslatedField";
import VideoField from "ee09/src/ee09/json-db/fields/VideoField";
import ImageField from "ee09/src/ee09/json-db/fields/ImageField";
import ImageFactoryUrlNode from "ee09/src/ee09/json-db/images/ImageFactoryUrl";

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
        /**
         * Miniature image
         * @type {ImageField}
         */
        this.thumbnail=new ImageField(
            [
                new ImageFactoryUrlNode(null).inside(400,400).jpg(80)
            ]
        );


    }

    get adminSubtitle(){
        return this.video.provider;
    }
    get adminSubtitleIcon(){
        return this.video.providerMdiIcon;
    }

}