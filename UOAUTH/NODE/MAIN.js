UOAUTH.MAIN = METHOD({
	
	run : (addRequestHandler) => {
		
		addRequestHandler((requestInfo, response) => {

			let uri = requestInfo.uri;
			let method = requestInfo.method;
			let params = requestInfo.params;
			
			// 토큰 교환
			if (uri === 'token') {
				
				// code : 인증 코드
				// redirect_uri : 인증 후 이동할 리다이렉트 URI
				// client_id : 클라이언트 ID
				// client_secret : 클라이언트 보안 키
				
				return false;
			}
		});
	}
});
