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
            // 'table': 'rgba(198, 120, 221 ,0.1)',
        },
        back: 'rgba(0,0,0,0.02)',
        view: 'rgba(255,255,255,0.05)',
        drag: 'rgba(255,255,255,0.10)',
        interval: null
    });
}

$( document ).ready(function() {

    // build minimap
    build_minimap();

    // toggle content, for the menu
    $(".toggle > *").hide();
    $(".toggle .header").show();
    $(".toggle .header").click(function() {
        if ($(this).hasClass("open")) {
            $(this).parent().children().not(".header").slideUp();
        } else {
            $(this).parent().children().not(".header").slideDown();
        }
        $(this).parent().children(".header").toggleClass("open");
    })
});
