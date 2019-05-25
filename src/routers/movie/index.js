export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
            path:'detail/1/:movieId',
            components:{
                default:()=> import('@/components/NowPlaying'),

                detail:()=>import('@/views/movie/detail')

            },
            props:{
                detail:true

            },

        },{
            path:'detail/2/:movieId',
            components:{
                default:()=> import('@/components/ComingSoon'),

                detail:()=>import('@/views/movie/detail')
            },
            props:{
                detail:true,

            },

        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}