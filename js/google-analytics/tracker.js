$(function () {


    $('.card').on('mousedown', function () {

        console.log('Google analytics tracker loaded');

        const product = {
            name: $(this).find('.dark-grey-text').text().replace('NEW', '').replace('bestseller', '').trim(),
            price: $(this).find('.font-weight-bold.blue-text strong').text().replace('$', '')
        };


        console.log(`User clicked on a ${product.name}`);
        console.log('Sending event to GTM');

        dataLayer.push({
            'event': 'product_click',
            'product_name': product.name,
            'product_price': product.price
        });



    });

});