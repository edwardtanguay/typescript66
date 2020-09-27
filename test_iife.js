const jQuery = {
	version: 1.21,
	fn: {}
};

(function defineType($) {
	if ($.version < 1.15) {
		throw 'plugin requires version 1.15+';
	} else {
		$.fn.thePlugin = () => {
			console.log('inside plugin');
		}
		console.log('pluging added');
	}
})(jQuery);

jQuery.fn.thePlugin();
