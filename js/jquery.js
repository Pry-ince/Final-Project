$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html", function() {
            $('input[type="submit"]').click(function(e) {
                e.preventDefault();
        
                alert("We will contact you shortly!!");
            });
        });
    });

    $('input[type="submit"]').click(function(e) {
        e.preventDefault();

        alert("We will contact you shortly!!");
    });

    $('input[type="range"]').on('input', function() {
        var price = $(this).val();
        $('#shop #price').html(price);
        $('#shop > section:nth-child(2) > div:last-child > div > p').each(function() {
            var itemPrice = parseInt($(this).text().substring(8));
            if(price < itemPrice) {
                $(this).parent().css('display', 'none');
            } else {
                $(this).parent().css('display', 'flex');
            }
        });
    });
});