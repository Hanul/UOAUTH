UOAUTHSample.Login = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let params = {};
		
		EACH(location.search.substring(1).split('&'), (split) => {
			
			let pair = split.split('=');
			
			if (params[pair[0]] === undefined) {
				params[pair[0]] = pair[1];
			} else if ( typeof params[pair[0]] === 'string') {
				params[pair[0]] = [params[pair[0]], pair[1]];
			} else {
				params[pair[0]].push(pair[1]);
			}
		});
		
		console.log(params);
		
		let wrapper = DIV({
			c : 'test'
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
