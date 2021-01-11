$(document).ready(function() {
	let app = new Vue ({
		el: '#app',
		data: {
			diskList: [],
		},
		mounted(){				
			axios.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then(response => {
				const disk = response.data.response;
				console.log(disk);
				this.diskList.push(disk);
			});	
			
			console.log(this.diskList);
		}
	})
});