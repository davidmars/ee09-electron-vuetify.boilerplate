const { ipcRenderer } = require('electron');

export default class ReleaseUpdater {

    constructor() {
        /**
         * Message courrant
         * @type {string}
         */
        this.message="";
        /**
         * La prochaine version
         * @type {string}
         */
        this.nextVersion="";
        /**
         * Progressions du téléchargement
         * @type {number}
         */
        this.downloadProgress=0;
        /**
         * Une mise à jour est elle disponible?
         * @type {boolean}
         */
        this.available=false;

        /**
         * Si true, les pre-release seront acceptées
         * @type {boolean}
         */
        this._allowPreRelease=false;

        let me=this;

        //écoute les messages de MAJ exe
        ipcRenderer.on('UpdaterStatus', function(event, message,nextVersion,downloadProgress,available) {
            console.log(
                `MAJ`,
                "message",message,
                "nextVersion",nextVersion,
                "downloadProgress",downloadProgress,
                "available",available
            );
            me.message=message;
            if(nextVersion!==null){
                me.nextVersion=nextVersion;
            }
            if(downloadProgress!==null){
                me.downloadProgress=downloadProgress;
            }
            if(available!==null){
                me.available=available;
            }

        });


    }

    /**
     * Redemarre l'app après avoir installé la release
     */
    updateAndRestart(){
        ipcRenderer.send('INSTALL_AND_REBOOT', {});
    }

    get allowPreRelease() {
        return this._allowPreRelease;
    }

    set allowPreRelease(value) {
        if(value===true){
            this._allowPreRelease = true;
        }else{
            this._allowPreRelease = false;
        }
        ipcRenderer.send('ALLOW_PRE_RELEASE',this._allowPreRelease)

    }

}