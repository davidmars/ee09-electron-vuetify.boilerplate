
import VueRouter from "vue-router";

import Home from "@/pages/home"
import Videos from "@/pages/videos"
import Video from "@/pages/video"

const router = new VueRouter({
    mode:"hash",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/videos',
            component: Videos
        },
        {
            name:"video",
            path: '/video/:uid',
            component: Video
        }
    ]
})

export default router;