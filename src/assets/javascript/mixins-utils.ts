export default {
	data() {
		return {
			msg: 'Hello World',
		}
	},
  methods: {
    // setLabelBGColor: function (item, value) {
		// 	if (item && value){
		// 		return 'label ' + (item[value].toLowerCase().split(" ").join("") == 'none'? 'info':item[value].toLowerCase().split(" ").join(""));
		// 	}
		// 	else{
		// 		return ""
		// 	}
		// },
    // setLabelTextColor : function(item, value){
    //   if (item && value){
    //     return 'label-text ' + (item[value].toLowerCase().split(" ").join("") == 'none'? 'info':item[value].toLowerCase().split(" ").join(""));
    //   }
    //   else{
    //     return ""
    //   }
    // },
    // getTranlatedItem(item, label){
    //   return (
    //     item[this.$store.state.locale] ? 
    //       item[this.$store.state.locale][label] : 
    //       (item['en'][label] ? item['en'][label]: '')
    //   );
    // },
    // getThalosModule(item){
    //   if (item.module==1){
    //     return 'Common'
    //   }
    //   else if (item.module==2){
    //     return 'ASR'
    //   }
    //   else if (item.module==3){
    //     return 'BAS'
    //   }
    // },
    // getNotificationPTTemplate(item){
    //   if (item.template_id==1){
    //     return this.$t('notifications.'+item.template_name+'_pt', { project_name: item.params.project_name, company_name: item.params.company_name, created: this.$options.filters.datetimewos_esp(item.created)})
    //   }
    //   if (item.template_id==2){
    //     return this.$t('notifications.'+item.template_name+'_pt', { assessment_name: item.params.assessment_name, company_name: item.params.company_name, created: this.$options.filters.datetimewos_esp(item.created)})
    //   }
    // },
    // getNotificationTemplate(item){
    //   if (item.template_id==1){
    //     return this.$t('notifications.'+item.template_name, { project_name: item.params.project_name, company_name: item.params.company_name, created: this.$options.filters.datetimewos_esp(item.created)})
    //   }
    //   if (item.template_id==2){
    //     return this.$t('notifications.'+item.template_name, { assessment_name: item.params.assessment_name, company_name: item.params.company_name, created: this.$options.filters.datetimewos_esp(item.created)})
    //   }
    // },
    // pressEnterKey(e: any){
    //   if (e.keyCode === 13) {
    //     (this as any).applyFilter();
    //   }
    // },

    showGenericToast(title: string, message: [string] | string=''){
      return (this as any).$swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: title,
        text: message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    },

    showGenericError(error_title: string, error_text: [string] | string ){
      let message = '';
      if (Array.isArray(error_text)){
        for (const element of error_text) {
          message += (this as any).$t(element) + '<br>'
        }
      }
      else{
        message = error_text;
      }

      return (this as any).$swal.fire({
        width: 600,
        padding: "1em",
        toast: true,
        position: 'top',
        icon: 'error',
        title: (this as any).$t(error_title),
        html: message,
        showConfirmButton: false,
        showCloseButton: true,
      });
    }
  },
}