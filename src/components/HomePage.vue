<template>
  <div class="row app-mainDiv">
		<menu-content title="Notifications" currentpage=""></menu-content>
		<div class="col-md-12 contentbox">
		<div class="myForm">
			<div class="headerTitle"><h2></h2></div>
			<div v-for="noticifation in noticifations" v-bind:key="noticifation.invite_id" class="row">
				<div class="notification_cls">
					<div class="row">
						<div class="col-md-3">Receiver: {{noticifation.receiver_id}}</div>
						<div class="col-md-3">Vector: {{noticifation.vector}}</div>
						<div class="col-md-3">Invite time: {{noticifation.invite_time | formatDate}}</div>
						<div class="col-md-3">Status: {{noticifation.status}}</div>
						<div class="col-md-12">{{noticifation.invite}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import MenuContent from './menu';

export default {
    data () {
        return {
        noticifations:[]
        }
    },
	components :{
		MenuContent
	},
    created () {
    console.log(new Date(1398892261 * 1000) );
    this.noticifations = this.notifications;
    window.setInterval(() => {
    this.noticifations = this.notificationEvent;
    }, 4000);
    },
    methods: {
    }
};
</script>
<style>
#app{
	overflow:hidden
}
</style>
<style scoped>
.titleBox {
  background-color:#f8f8f8;
  padding:10px 30px;
  border-bottom:1px solid #999;
}
.notification_cls{
	border:1px solid #e2e2e2;
	padding:10px;
	margin:10px;
}
.headerTitle{
	width:100%;
	text-align:center;
}
.contentbox{
	padding:0px 30px;
}
.pull-right{
	float:right;
}
.clear{
	clear:both;
}
.myForm {
  max-width: 90%;
  margin:auto;
}
</style>