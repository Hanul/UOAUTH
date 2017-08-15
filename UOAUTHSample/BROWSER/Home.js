UOAUTHSample.Home = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let wrapper = DIV({
			c : A({
				href : 'login?response_type=code&client_id=' + UOAUTHSample.Setting.clientId + '&redirect_uri=' + location.href + '&scope=photos&state=1234zyx',
				c : '로그인'
			})
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
