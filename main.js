$(document).ready(function(){
	$.getJSON('https://script.google.com/macros/s/AKfycbwDu8CeFTAIcTLlVH-LpQwR7eZdPdJcNtNRGDvcHPGpQb6pBmcEjktw2LVKKkHDDOU_pw/exec', function(data) {
		var template = Handlebars.compile($('#item-template').html())
		$('#preloader').html(template(data.items))
	})
})