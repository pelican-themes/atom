// Load the minimap
function build_minimap() {
    pagemap(document.querySelector('#map'), {
        viewport: document.querySelector('main'),
        styles: {
            'header,footer,section,article': 'rgba(255,255,255,0.08)',
            'h1,a': 'rgba(255,255,255,0.10)',
            'h2': 'rgba(152, 195, 121,.2)',
            'h3,h4': 'rgba(198, 120, 221,.2)',
            'p': 'rgba(255,255,255,0.08)',
            'div.highlight': 'rgba(255,255,255,0.08)',
            'img': 'rgba(255,255,255,0.2)',
            // 'table': 'rgba(198, 120, 221 ,0.1)',
        },
        back: 'rgba(0,0,0,0.02)',
        view: 'rgba(255,255,255,0.05)',
        drag: 'rgba(255,255,255,0.10)',
        interval: null
    });
}

document.addEventListener("DOMContentLoaded", function(event) {

    // build minimap
    build_minimap();

    document.querySelector(".toggle .header").click(function() {
        if (document.querySelector(this).hasClass("open")) {
            document.querySelector(this).parent().children().not(".header").slideUp();
        } else {
            document.querySelector(this).parent().children().not(".header").slideDown();
        }
        document.querySelector(this).parent().children(".header").toggleClass("open");
    })
});
