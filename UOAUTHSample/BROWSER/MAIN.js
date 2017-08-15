UOAUTHSample.MAIN = METHOD({
	
	run : () => {
		
		UOAUTHSample.MATCH_VIEW({
			uri : '',
			target : UOAUTHSample.Home
		});
		
		UOAUTHSample.MATCH_VIEW({
			uri : 'login',
			target : UOAUTHSample.Login
		});
	}
});
