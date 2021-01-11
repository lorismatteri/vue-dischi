$(document).ready(function() {
	let app = new Vue ({
		el: '#app',
		data: {
			diskList: [],
		},
		mounted(){				
			axios.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then(response => {
				const disks = response.data.response;
				console.log(disks);
				for (let i = 0; i < disks.length; i++) {
					this.diskList.push(disks[i]);
				}
				console.log(this.diskList);
			});	
			
		}
	})
});