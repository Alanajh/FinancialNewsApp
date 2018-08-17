 var api = {
	  getImg(){
		var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=M8v1i6Iba1NTNHqhRPkpa55MwGglr6sGzBo0LNvc';
		return fetch(url).then((res) => res.json());
	}
  };
  
  module.exports = api;