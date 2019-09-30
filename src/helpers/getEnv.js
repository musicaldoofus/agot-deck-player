const getEnv = () => {
	if (window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('0.0.0.0') > -1) return 'dev';
	else if (window.location.href.indexOf('github.io') > -1) return 'prod-gh';
}

export default getEnv;