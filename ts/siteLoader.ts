const siteLoader = (option = '') => {
	if (option === '') {
		const site = new Site();
		return site;
	} else {
		const site = new StartSite();
		return site;
	}
};

class StartSite {
	get title() {
		return 'Welcome';
	}
	get content() {
		return 'Welcome to this site.';
	}
}