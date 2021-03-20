/* globals $releaseUpdater */
export default class Layout{

    constructor() {

        /**
         * Version du logiciel
         * @type {string}
         */
        this.version=require('../package.json').version;
        /**
         * Dit si le footer est visible ou non
         * @type {boolean}
         */
        this._footerVisible=true;
        let me=this;
        //masque le footer automatiquement au bout de 10 secondes
        setTimeout(function(){
            me._footerVisible=false
        },10*1000);

        /**
         * Afficher ou pas l'admin
         * @type {boolean}
         */
        this.adminVisible=false;

        console.log(this)

    }

    /**
     * Renvoie true si le footer doit être affiché et si une nouvelle version n'est pas en cours
     * @return {boolean|string}
     */
    get footerVisible(){
        return this._footerVisible || ($releaseUpdater.nextVersion && $releaseUpdater.nextVersion!=="");
    }


}


