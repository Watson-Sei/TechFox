new Vue({
    el:'#app',
    data: {
        slides: [{
            name: 'https://cdn.svgporn.com/logos/python.svg',
            percent: '70',
            css_percent: '-30%',
        },{
            name: 'https://cdn.svgporn.com/logos/django.svg',
            percent: '60',
            css_percent: '-20%'
        },{
            name: 'https://cdn.svgporn.com/logos/flask.svg',
            percent: '50',
            css_percent: '-1.1%'
        },{
            name: 'https://cdn.svgporn.com/logos/opencv.svg',
            percent: '30',
            css_percent: '31.5%',
        },{
            name: 'https://cdn.svgporn.com/logos/go.svg',
            percent: '2',
            css_percent: '-2.1%',
        },{
            name: 'https://cdn.svgporn.com/logos/javascript.svg',
            percent: '30',
            css_percent: '31.5%',
        },{
            name: 'https://cdn.svgporn.com/logos/pycharm.svg',
            percent: '50',
            css_percent: '-1.1%',
        },{
            name: 'https://cdn.svgporn.com/logos/google-cloud-platform.svg',
            percent: '20',
            css_percent: '30.44%',
        },{
            name: 'https://cdn.svgporn.com/logos/css-3.svg',
            percent: '40',
            css_percent: '10%'
        },{
            name: 'image/pythonanywhere-tran.png',
            percent: '60',
            css_percent: '-10%'
        },{
            name: 'https://cdn.svgporn.com/logos/docker-icon.svg',
            percent: '20',
            css_percent: '30.44%'
        },{
            name : 'https://cdn.svgporn.com/logos/figma.svg',
            percent: '50',
            css_percent: '-1.1%'
        },{
            name: 'https://cdn.svgporn.com/logos/vue.svg',
            percent: '30',
            css_percent: '31.5%'
        },{
            name: 'image/nakedssl-tran.png',
            percent: '90',
            css_percent: '-40%'
        }]
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    },
});


// max = -55% min = 50%
// max = 100% min = 0%
// 1.05 * percent = css_percent



