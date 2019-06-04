$(function () {
    console.log('Google analytics tracker loaded');

    gtag('event', 'landing_visit', {
        'event_category': 'users'
    });

    //User clicks on a product
    $('.card').on('click', function () {

        const product = {
            name: $(this).find('.dark-grey-text').text().replace('NEW', '').replace('bestseller', '').trim(),
            price: $(this).find('.font-weight-bold.blue-text strong').text().replace('$', '')
        };

        console.log(product);

        console.log(`User clicked on a ${product.name}`);

        console.log('Sending event to GA');

        gtag('event', 'product_click', {
            'event_category': 'products',
            'event_label': product.name,
            'value': product.price
        });


    });

});