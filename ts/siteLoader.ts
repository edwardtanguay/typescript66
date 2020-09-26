
namespace framework {

	export const siteLoader = (option = '') => {
		if (option === '') {
			const site = new app.Site();
			return site;
		} else {
			const site = new framework.StartSite();
			return site;
		}
	};

	export class StartSite {
		get title() {
			return 'Welcome';
		}
		get content() {
			return 'Welcome to this site.';
		}
	}

}