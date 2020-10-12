const Client = require("mysql-pro");
const client = new Client({  
	mysql:{
		user: 'root',
	    password: 'kingdee',
	    port:'3308',
	    database: 'cyx',
	    host: '127.0.0.1',
	}
})

module.exports=client;