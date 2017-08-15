UOAUTHSample.LoginRoom = OBJECT({

	init : (inner, self) => {
		
		UOAUTHSample.ROOM('Login', (clientInfo, on, off) => {
			
			on('login', (data, ret) => {
				if (data !== undefined) {
					
					
				}
			});
		});
	}
});
