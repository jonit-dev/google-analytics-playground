$(function () {
    
    console.log('jQuery loaded');
    
    $('.card').on('click', function() {
        console.log('Hello there!');
    })
    
    // console.log('Google analytics tracker loaded');
    //
    // //User clicks on a product
    // $('.card').on('click', function () {
    //
    //     const product = {
    //         name: $(this).find('.dark-grey-text').text().replace('NEW', '').replace('bestseller', '').trim(),
    //         price: $(this).find('.font-weight-bold.blue-text strong').text().replace('$', '')
    //     };
    //
    //     console.log(product);
    //
    //     console.log(`User clicked on a ${product.name}`);
    //
    //     console.log('Sending event to GTM');
    //
    //     dataLayer.push({
    //         'event': 'products',
    //         'product_name': product.name,
    //         'product_price': product.price
    //     })
    //
    //
    // });

});