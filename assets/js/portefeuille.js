var portefeuille = {
	items: [],
	tags: [],
	strip_cdata: function(str) {
		return str.replace("<![CDATA[", "").replace("]]>", "");
	},
	format: function(str) {
		return (str.charAt(0).toUpperCase() + str.slice(1)).replace("-", " ");
	}
};

$.ajax({
	type: "GET",
	url: "/rss",
	dataType: "xml",
	success: function(xml) {
 		$(xml).find('item').each(function(index, value) {
 			portefeuille.items.push({
 				title: $(value).find('title').text(),
				description: $(value).find('description').text(),
				link: $(value).find('link').text(),
				categories: {
					rawXML: $(value).find('category'),
					tags: []
				},
				nav_item: false
 			});

 		});

 		$.each(portefeuille.items, function(index, item) {
 			$.each(item.categories.rawXML, function(index, value) {
 				item.categories.tags.push($(value).text().replace(" ", "-"));
 			});
 			$.each(item.categories.tags, function(index, value) {
 				if ($.inArray(value, portefeuille.tags) === -1) portefeuille.tags.push(value);
 				if (value === "nav-item") item.nav_item = true;
 			});

 			item.gallery_div = $('div[data-id="'+item.link.replace(window.location.origin, '')+'"]');

 			if (item.nav_item) {
 				$('.main-nav ul').append('<li><a href="'+item.link+'"><h2'+(item.link === window.location.href ? ' class="selected"' : '')+'>'+item.title+'</h2></a></li>');
 			}
 			else {
 				$.each(item.categories.tags, function(index, value) {
 					item.gallery_div.addClass(value);
 				});
 			}
 		});

 		$.each(portefeuille.tags, function(i, value){
		    if (value !== "nav-item") $('#filters').append('<button type="button" data-filter=".'+value+'">'+portefeuille.format(value)+'</button>')
		});

 		//console.log(portefeuille);
	}
});

// Hides the filter buttons from the other pages
if (window.location.pathname !== "/") {
    $('#filters').addClass('hidden');
};

// Init isotope
var $container = $('.isotope').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

// filter functions
var filterFns = {};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$container.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
	  $buttonGroup.find('.is-checked').removeClass('is-checked');
	  $( this ).addClass('is-checked');
	});
});
