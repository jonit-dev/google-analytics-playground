$(function () {
    console.log('Google analytics tracker loaded');

    ga('send', 'event', 'user', 'landing_visit');

    //User clicks on a product
    $('.card').on('click', function () {

        const product = {
            name: $(this).find('.dark-grey-text').text().replace('NEW', '').replace('bestseller', '').trim(),
            price: $(this).find('.font-weight-bold.blue-text strong').text().replace('$', '')
        };

        console.log(product);

        console.log(`User clicked on a ${product.name}`);

        console.log('Sending event to GA');

        ga('send', 'event', 'product', 'product_click', product.name, product.price);


    });

});