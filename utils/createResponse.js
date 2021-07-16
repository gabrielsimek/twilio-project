const createResponse = (items, searchTerm, city) => {
    const messageBody = items.reduce((accumulator, item) => {
        accumulator +=  
        `${item.title}:
         price: ${item.price} 
         link: ${item.link}`;
        return accumulator;
      }, `Here are your results for ${searchTerm} in ${city}: \n`);
      return messageBody;
}
module.exports = {
    createResponse
}
// const items = [
//     {
//       title: 'Antique Chair, Sofa and ottoman',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/238912958/658b881958e83d3199fb376814bbd74a.jpg?_ver=feed&w=450&h=450&fit=crop&s=96d486818b0ee21bed960e18d49c5045',
//       price: '$500',
//       link: 'https://www.varagesale.com/portland-or-buy-sell/i/uk27kh9e-antique-chair-sofa-and-ottoman'
//     },
//     {
//       title: 'MCM Chair & Ottoman',
//       image: 'https://images.craigslist.org/00404_gst7Z9xdWBxz_0t20CI_300x300.jpg',
//       price: '$80',
//       link: 'https://portland.craigslist.org/mlt/fuo/d/portland-mcm-chair-ottoman/7349980756.html'
//     },
//     {
//       title: 'Hydraulic stylist chairs',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/238912511/cae45ac27f56a3557a79cd8e12b8762f.jpg?_ver=feed&w=450&h=450&fit=crop&s=b2febaa50cd3846c1748e638765509ca',
//       price: '$50',
//       link: 'https://www.varagesale.com/portland-or-buy-sell/i/syb8qrad-hydraulic-stylist-chairs'
//     },
//     {
//       title: 'MCM Good Form Chair',
//       image: 'https://images.craigslist.org/00D0D_hwS4jF66xbwz_0lM0t2_300x300.jpg',
//       price: '$80',
//       link: 'https://portland.craigslist.org/mlt/atq/d/portland-mcm-good-form-chair/7349930247.html'
//     },
//     {
//       title: "Vintage 1950's dryer chair",
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/238912255/e30df6aff0e7172979e625b7e25e08be.jpg?_ver=feed&w=450&h=450&fit=crop&s=062ca2858b47a6a82560f76b5dfac7bc',
//       price: '$350',
//       link: 'https://www.varagesale.com/portland-or-buy-sell/i/4b45vb7r-vintage-1950-s-dryer-chair'
//     },
//     {
//       title: 'Desk & chair for home office',
//       image: 'https://images.craigslist.org/00V0V_4OilJsZ8pvmz_0se0la_300x300.jpg',
//       price: '$100',
//       link: 'https://portland.craigslist.org/clk/fuo/d/rainier-desk-chair-for-home-office/7347006082.html'
//     },
//     {
//       title: 'Bumbo infant chair with tray',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/148585252/98d434c520f0280ef598d78851e52a5b.jpg?_ver=feed&w=450&h=450&fit=crop&s=aef1d7053c76c3ff3210b0a33f2afb8b',
//       price: '$5',
//       link: 'https://www.varagesale.com/gresham-or-buy-and-sell/i/23ykgqtd-bumbo-infant-chair-with-tray'
//     },
//     {
//       title: 'Wicker & Metal Chair',
//       image: 'https://images.craigslist.org/00r0r_90UhHlN2l92z_0mo0t2_300x300.jpg',
//       price: '$15',
//       link: 'https://portland.craigslist.org/wsc/fuo/d/beaverton-wicker-metal-chair/7342268185.html'
//     },
//     {
//       title: 'Chairs',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/233893192/f76ee4199ab3049bdccc5e2219a397e4.jpg?_ver=feed&w=450&h=450&fit=crop&s=79bf5cb8352b5c2f2ffec4329d9b14a0',
//       price: '$100',
//       link: 'https://www.varagesale.com/gresham-or-buy-and-sell/i/6a7kyw96-chairs'
//     },
//     {
//       title: 'mid century chair',
//       image: 'https://images.craigslist.org/00Z0Z_770GxY0W5dDz_0nL0CI_300x300.jpg',
//       price: '$125',
//       link: 'https://portland.craigslist.org/mlt/fuo/d/portland-mid-century-chair/7349682105.html'
//     },
//     {
//       title: 'Chairs',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/233893001/3b82b8c02bce008379b3560b53b67b1c.jpg?_ver=feed&w=450&h=450&fit=crop&s=955d6787e546a0d8cb5cbaab69d484a4',
//       price: '$85',
//       link: 'https://www.varagesale.com/gresham-or-buy-and-sell/i/m997tjen-chairs'
//     },
//     {
//       title: 'Beautiful vintage chair',
//       image: 'https://images.craigslist.org/00s0s_bXKqWL5GM5Nz_0ew0jm_300x300.jpg',
//       price: '$20',
//       link: 'https://portland.craigslist.org/clk/fuo/d/vancouver-beautiful-vintage-chair/7351687441.html'
//     },
//     {
//       title: 'Pair of kids stackable metal chairs.',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/226717864/7da1af292536b58b5102aca98403b7f4.jpg?_ver=feed&w=450&h=450&fit=crop&s=0bac08d69666428a64ab8e8a50d52c05',
//       price: '$45',
//       link: 'https://www.varagesale.com/columbia-county-oregon-buy-sell-trade/i/8fcbzq3e-pair-of-kids-stackable-metal-chairs'
//     },
//     {
//       title: 'Westnofa Siesta chair',
//       image: 'https://images.craigslist.org/00o0o_ls9kwARumWuz_0CI0t2_300x300.jpg',
//       price: '$449',
//       link: 'https://portland.craigslist.org/clc/fuo/d/portland-westnofa-siesta-chair/7350253336.html'
//     },
//     {
//       title: 'Computer chair/desk chair/Gaming chair',
//       image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/232881864/580581b95b69ac2855641faec8b58890.jpg?_ver=feed&w=450&h=450&fit=crop&s=1f56d7aeafb86eae3855f66b4e5f2aaa',
//       price: '$20',
//       link: 'https://www.varagesale.com/portland-or-buy-sell/i/pag5drn7-computer-chair-desk-chair-gaming-chair'
//     },
//     {
//       title: 'Womb chair style',
//       image: 'https://images.craigslist.org/00B0B_2oDWMVOxUciz_0CI0t2_300x300.jpg',
//       price: '$495',
//       link: 'https://portland.craigslist.org/clc/fuo/d/portland-womb-chair-style/7339295660.html'
//     }]

// const message = createResponse(items, 'chair', 'portland')
// console.log(message)
//
