<template>
	<div class="card_contain">
		<!-- 民宿推荐区域 -->
		<my-card  :sugList = 'minsuList' title="推荐民宿" color="#f57c00"/>
		<my-card  :sugList = 'minsuList' title="推荐民宿" color="#5c6bc0"/>
	</div>

</template>

<script>
export default {
	created(){
		this.getMinsuListData();
	},
	data(){
		return{
			minsuList:[],
		}
	},
	components:{
		myCard:()=>import('./myCard.vue'),
	},
	methods:{
		async getMinsuListData(){
			const {data:res} = await this.$api.getMinsuBarList()
			if(res.status === 'success'){
				this.minsuList = res.data;
			}
			console.dir(res);
		}
	}
}
</script>

<style>

</style>