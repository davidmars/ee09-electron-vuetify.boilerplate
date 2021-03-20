module.exports = {
    "publicPath":"./",
    "pluginOptions": {
        "electronBuilder": {
            nodeIntegration: true,
            builderOptions: {
                appId: "com.ee09.electron-vuetify",
                publish: [
                    {
                        "provider": "github",
                        "owner": "davidmars",
                        "repo": "ee09-electron-vuetify.releases"
                    }
                ],
                asar: true,
                "target": [
                    {
                        "target": "nsis",
                        "arch": [
                            "x64",
                            "ia32"
                        ]
                    }
                ]
            }
        }
    },
    "transpileDependencies": [
        "vuetify"
    ]
}