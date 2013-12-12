var items = [
  { name: 'Ginger', price: 7 },
  { name: 'Pepper', price: 4 },
  { name: 'Sea Salt', price: 1 },
  { name: 'Dewberry', price: 0.15 },
  { name: 'Cantaloupe', price: 3.50 }
];
 
 var itemTemplate = $('#templates .item').html();

for (var i = 0; i < items.length; i += 1) {
var newItemHtml = $.render(itemTemplate, { name: items[i].name, price: items[i].price });
$('#store').append(newItemHtml);
};
