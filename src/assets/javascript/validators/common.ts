// import i18n from '../../../plugins/i18n.js'

export default new class CommonValidator {

    savePassword(password: string, passwordConfirmation: string){
        const errors = [] as string[];

        if (!this.validatePassword(password)){
            // errors.push("Password must be between 6 to 20 characters, contain at least one numeric digit, one uppercase and one lowercase letter")
            errors.push("errors.password_format_info")
            return errors;
        }

        if (password.length < 6){
            // errors.push("Password length can\'t be less than 6 characters")
            errors.push("errors.password_length")
            return errors;
        }

        if (password != passwordConfirmation){
            // errors.push("Password and Password Confirmation fields are not equal")
            errors.push("errors.password_notequeal")
            return errors;
        }

        return errors;
    }


    validateEmail(email: string)
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    saveUser(user: any){
        const errors = [];

        if (user.username.trim() == ''){
            // errors.push("Username is a required field")
            errors.push("errors.username_name_required")
            // return errors;
        }

        if (user.first_name.trim() == ''){
            // errors.push("First Name is a required field")
            errors.push("errors.first_name_required")
            // return errors;
        }

        if (user.last_name.trim() == ''){
            // errors.push("Last Name is a required field")
            errors.push("errors.last_name_required")
            // return errors;
        }

        if (user.username.indexOf(" ")!=-1){
            // errors.push("Whitespaces are not valid in username field.")
            errors.push("errors.whitespaces_notallowed_username")
            // return errors;
        }

        if (!this.validateEmail(user.email)){
            // errors.push("Email has not a valid format. ")
            errors.push("errors.email_invalid_format")
            // return errors;
        }

        if (user.roles && user.roles.id==0){
            // errors.push("Email has not a valid format. ")
            errors.push("errors.role_required")
            // return errors;
        }
        return errors
    }

    validatePhone(phone: string)
    {
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return re.test(phone);
    }

    validatePassword(inputtxt: string)
    {
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(inputtxt.match(passw))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}


// // import i18n from '../../../plugins/i18n.js'

// export default new class CommonValidator {

//     savePassword(password, passwordConfirmation){
//         const errors = [];

//         if (!this.validatePassword(password)){
//             // errors.push("Password must be between 6 to 20 characters, contain at least one numeric digit, one uppercase and one lowercase letter")
//             errors.push("errors.password_format_info")
//             return errors;
//         }

//         if (password.length < 6){
//             // errors.push("Password length can\'t be less than 6 characters")
//             errors.push("errors.password_length")
//             return errors;
//         }

//         if (password != passwordConfirmation){
//             // errors.push("Password and Password Confirmation fields are not equal")
//             errors.push("errors.password_notequeal")
//             return errors;
//         }

//         return errors;
//     }


//     validateEmail(email)
//     {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

//     saveUser(user){
//         const errors = [];

//         if (user.username.trim() == ''){
//             // errors.push("Username is a required field")
//             errors.push("errors.username_name_required")
//             // return errors;
//         }

//         if (user.first_name.trim() == ''){
//             // errors.push("First Name is a required field")
//             errors.push("errors.first_name_required")
//             // return errors;
//         }

//         if (user.last_name.trim() == ''){
//             // errors.push("Last Name is a required field")
//             errors.push("errors.last_name_required")
//             // return errors;
//         }

//         if (user.username.indexOf(" ")!=-1){
//             // errors.push("Whitespaces are not valid in username field.")
//             errors.push("errors.whitespaces_notallowed_username")
//             // return errors;
//         }

//         if (!this.validateEmail(user.email)){
//             // errors.push("Email has not a valid format. ")
//             errors.push("errors.email_invalid_format")
//             // return errors;
//         }

//         if (user.roles && user.roles.id==0){
//             // errors.push("Email has not a valid format. ")
//             errors.push("errors.role_required")
//             // return errors;
//         }
//         return errors
//     }

//     validatePhone(phone)
//     {
//         const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
//         return re.test(phone);
//     }

//     validatePassword(inputtxt)
//     {
//         const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//         if(inputtxt.match(passw))
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }

//     saveContact(contact){
//         const errors = [];

//         // if (!this.validatePhone(contact.phone)){
//         //     errors.push("Phone is not a valid format")
//         //     return errors;
//         // }

//         if (contact.name.trim() == ''){
//             // errors.push("Contact name is a required field")
//             errors.push("errors.contact_name_required")
//             return errors;
//         }

//         if (!this.validateEmail(contact.email)){
//             // errors.push("Email has not a valid format. ")
//             errors.push("errors.email_invalid_format")
//             return errors;
//         }

//         if (contact.phone_number.trim() != ''){
//             if (!this.validatePhone(contact.phone_number)){
//                 // errors.push("Phone has not a valid format. ")
//                 errors.push("errors.phone_invalid_format")
//                 return errors;
//             }
//         }

//         return errors
//     }

//     saveLocation(item){
//         const errors = [];

//         if (item.direction.trim() == ''){
//             // errors.push("Direction is a required field")
//             errors.push("errors.direction_required")
//             return errors;
//         }

//         return errors
//     }

//     saveCompany(company){
//         const errors = [];

//         if (company.name.trim() == ''){
//             // errors.push("Company name is a required field")
//             errors.push("errors.company_name_required")
//             return errors;
//         }

//         if (company.name.trim().length > 250){
//             // errors.push("Company name can't exceed 250 characters")
//             errors.push("errors.company_name_length")
//             return errors;
//         }

//         if (company.acronym.trim() == ''){
//             // errors.push("Company acronym is a required field")
//             errors.push("errors.company_acronym_required")
//             return errors;
//         }

//         if (company.acronym.trim().length > 10){
//             // errors.push("Company acronym can´t exceed 10 characters")
//             errors.push("errors.company_acronym_length")
//             return errors;
//         }

//         if (!company.sector){
//             // errors.push("Sector is a required field")
//             errors.push("errors.company_sector_required")
//             return errors;
//         }

//         return errors
//     }

//     saveUserCompany(user){
//         const errors = [];

//         if (user.company_user.length == 0){
//             // errors.push("User must have one company at least")
//             errors.push("errors.user_comapny_assigned")
//             return errors;
//         }

//         return errors
//     }

//     saveVendor(vendor){
//         const errors = [];

//         if (vendor.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.name_required")
//             return errors;
//         }

//         if (vendor.name.trim().length > 250){
//             // errors.push("Name can't exceed 250 characters")
//             errors.push("errors.vendor_name_length")
//             return errors;
//         }

//         return errors
//     }

//     saveProduct(product){
//         const errors = [];

//         if (product.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.name_required")
//             return errors;
//         }

//         if (product.name.trim().length > 250){
//             // errors.push("Name can't exceed 250 characters")
//             errors.push("errors.product_name_length")
//             return errors;
//         }

//         if (product.version && product.version.trim().length > 50){
//             // errors.push("Name can't exceed 50 characters")
//             errors.push("errors.product_version_length")
//             return errors;
//         }

//         if (product.vendor == null || product.vendor.id == ''){
//             // errors.push("Vendor is a required field")
//             errors.push("errors.vendor_required")
//             return errors;
//         }

//         return errors
//     }

//     saveDeffensiveLayer(dl){
//         const errors = [];

//         if (dl.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.name_required")
//             return errors;
//         }

//         if (dl.name.trim().length > 250){
//             // errors.push("Name can't exceed 250 characters")
//             errors.push("errors.deffensivelay_name_length")
//             return errors;
//         }

//         // if (dl.description.trim() == ''){
//         //     errors.push("Description is a required field")
//         //     return errors;
//         // }

//         return errors
//     }

//     saveOrganization(org){
//         const errors = [];

//         if (org.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (org.name.trim().length > 250){
//             // errors.push("Name can't exceed 250 characters")
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (org.url.trim().length > 250){
//             // errors.push("Url can't exceed 250 characters")
//             errors.push("errors.url_length")
//             return errors;
//         }

//         if (org.abbreviation == ''){
//             // errors.push("Abbreviation is a required field")
//             errors.push("errors.abbreviation_required")
//             return errors;
//         }

//         return errors
//     }

//     saveTag(item){
//         const errors = [];

//         if (item.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (item.name.trim().length > 250){
//             // errors.push("Name can't exceed 250 characters")
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         // if (item.collection_tag == null){
//         //     errors.push("Collection is a required field")
//         //     return errors;
//         // }

//         return errors
//     }

//     savePhase(phase){
//         const errors = [];

//         if (phase.name.trim() == ''){
//             // errors.push("Name is a required field")
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (phase.name.trim().length > 250){
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (phase.abbreviation.trim() == ''){
//             // errors.push("Abbreviation is a required field")
//             errors.push("errors.abbreviation_required")
//             return errors;
//         }

//         if (phase.abbreviation.trim().length > 5){
//             errors.push("errors.abbreviation_length")
//             return errors;
//         }

//         return errors
//     }

//     saveKillchain(killchain){
//         const errors = [];

//         if (killchain.name.trim() == ''){
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (killchain.name.trim().length > 250){
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (killchain.phases.length == 0){
//             errors.push("errors.phase_required")
//             return errors;
//         }

//         return errors
//     }

//     saveArtifact(artifact, artifact_description, artifact_list){
//     // saveArtifact(artifact, artifact_description){
//         const errors = [];

//         let existFile = false;
//         let fileName = '';

//         for (const item of artifact.entries()){
//             // console.log(item);
//             if (item[0] == 'artifact_file'){
//                 fileName = item[1].name
//                 existFile = true
//                 break;
//             }
//         }

//         if (!existFile){
//             errors.push("errors.file_required")
//             return errors;
//         }

//         const repeated_file = artifact_list.filter( element => element.name==fileName)

//         if (repeated_file.length>0){
//             errors.push("errors.file_duplicated")
//             return errors;
//         }

//         if (artifact_description == ''){
//             errors.push("errors.description_required")
//             return errors;
//         }

//         return errors
//     }

//     extractElements(graph_data, item){
//         if (graph_data.length>0){
//           graph_data = graph_data.filter( element => element.tag == item)
//         }

//         return graph_data;
//       }

//     validateTimeLine(tc){
//         const graph_data = [];
//         let error = '';

//         for(const i in tc.timeline){
//             graph_data.push({
//                 date: tc.timeline[i].action_time,
//                 tag: tc.timeline[i].tag,
//                 new: tc.timeline[i].new,
//                 old: tc.timeline[i].old,
//                 value: tc.timeline[i].new.id,
//                 start: tc.start_time,
//             })
//         }

//         graph_data.sort(function(a,b){
//             return new Date(b.date) + new Date(a.date);
//         });

//         const statusArray = this.extractElements(graph_data, 'status');

//         if (statusArray.length>0){
//             if (statusArray[statusArray.length-1].new.id != tc.status.id ){
//                 error = "errors.st_tm_inconsistences";
//             }

//             for (let item = 0; item < statusArray.length; item++){
//                 if (item == 0){
//                     if (statusArray[item].old.id == undefined && statusArray[item].new.id != 1 ){
//                         error = "errors.st_inconsistences";
//                     }
//                     else if (!statusArray[item].old.id && statusArray[0].new.id!=1){
//                         error = "errors.st_inconsistences";
//                     }
//                 }
//                 if (item > 0){
//                     const prev_new_status = statusArray[item - 1].new.id;
//                     if (statusArray[item].new.id == 2){
//                         if (prev_new_status != 1 && prev_new_status != 4 && prev_new_status != 5){
//                             error = "errors.st_inconsistences_2";
//                         }
//                     }
//                     if ( (statusArray[item].new.id == 4) || (statusArray[item].new.id == 5)){
//                         if (prev_new_status != 2){
//                             error = "errors.st_inconsistences_1";
//                         }
//                     }
//                 }
//             }
//         }
//         // else{
//         //     error = "errors.st_tm_inconsistences";
//         // }

//         const outcomeArray = this.extractElements(graph_data, 'outcome')
//         if (outcomeArray.length>0){
//             if (outcomeArray[outcomeArray.length-1].new.id != tc.blueteam.outcome.id ){
//                 error = "errors.ot_tm_inconsistences";
//             }

//             for (let itemot = 0; itemot < outcomeArray.length; itemot++){
//                 if (itemot == 0){
//                     // if (outcomeArray[0].new.id!=3 && outcomeArray[0].new.id!=4){
//                     // if (![3,4].includes(outcomeArray[itemot].new.id)){
//                     if (outcomeArray[itemot].old.id == undefined && outcomeArray[itemot].new.id != 1 ){
//                         error = "errors.ot_inconsistences";
//                     }
//                     else if (outcomeArray[itemot].old.id == undefined && ![1].includes(outcomeArray[itemot].new.id)){
//                         error = "errors.ot_inconsistences";
//                     }
//                 }

//                 if (itemot > 0){
//                     const current_old_outcome = outcomeArray[itemot].old.id;
//                     if (outcomeArray[itemot].new.id == 3 || outcomeArray[itemot].new.id == 4){
//                         if (current_old_outcome != 1){
//                             error = "errors.ot_inconsistences_1";
//                         }
//                     }
//                     if (outcomeArray[itemot].new.id == 2){
//                         if (current_old_outcome != 3){
//                             error = "errors.ot_inconsistences_2";
//                         }
//                     }
//                     if (outcomeArray[itemot].new.id == 1){
//                         // if (current_old_outcome != 3){
//                         if (!isNaN(current_old_outcome) && (current_old_outcome != 2 && current_old_outcome != 4)){
//                             error = "errors.ot_inconsistences_2";
//                         }
//                     }
//                 }
//             }
//         }
//         // else{
//         //     error = "errors.ot_inconsistences";
//         // }

//         return error
//     }

//     saveTestCase(tc){
//         const errors = [];

//         if (tc.name.trim() == ''){
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (tc.name.trim().length > 250){
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (!tc.organization || tc.organization.length == 0){
//             errors.push("errors.organization_required")
//             return errors;
//         }

//         if (!tc.phase || tc.phase.length == 0){
//             errors.push("errors.phase_required")
//             return errors;
//         }

//         if (tc.description.trim() == ''){
//             errors.push("errors.description_required")
//             return errors;
//         }

//         if (!tc.redteam.mitre_technique || tc.redteam.mitre_technique.length == 0){
//             errors.push("errors.technique_required")
//             return errors;
//         }

//         if (!tc.redteam.perimeter || tc.redteam.perimeter.length == 0){
//             errors.push("errors.intext_required")
//             return errors;
//         }

//         if (!tc.redteam.stealth || tc.redteam.stealth.length == 0){
//             errors.push("errors.stealth_required")
//             return errors;
//         }

//         if (!tc.redteam.attack_vector || tc.redteam.attack_vector.length == 0){
//             errors.push("errors.attack_vector_required")
//             return errors;
//         }

//         if (!tc.redteam.complexity || tc.redteam.complexity.length == 0){
//             errors.push("errors.complexity_required")
//             return errors;
//         }

//         if (!tc.redteam.privilege || tc.redteam.privilege.length == 0){
//             errors.push("errors.privilege_required")
//             return errors;
//         }

//         const err_timeline = this.validateTimeLine(tc);

//         if (err_timeline != ''){
//             errors.push(err_timeline);
//             return errors;
//         }

//         return errors
//     }

//     saveCampaign(campaign){
//         const errors = [];

//         if (campaign.name.trim() == ''){
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (campaign.name.trim().length > 250){
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (campaign.organization_id == null || campaign.organization_id == ''){
//             errors.push("errors.organization_required")
//             return errors;
//         }

//         if (campaign.description == ''){
//             errors.push("errors.description_required")
//             return errors;
//         }

//         return errors
//     }

//     saveAssessment(assessment, admin=false){
//         const errors = [];

//         if (assessment.name.trim() == ''){
//             errors.push("errors.default_name_required")
//             return errors;
//         }

//         if (assessment.name.trim().length > 250){
//             errors.push("errors.default_name_length")
//             return errors;
//         }

//         if (assessment.description == ''){
//             errors.push("errors.description_required")
//             return errors;
//         }

//         if (assessment.killchain_id == null || assessment.killchain_id == ''){
//             errors.push("errors.killchain_required")
//             return errors;
//         }

//         if (assessment.campaigns_selected && assessment.campaigns_selected.length==0){
//             errors.push("errors.must_select_campaign")
//             return errors;
//         }

//         if (admin){
//             if (!assessment.status_id || assessment.status_id == ''){
//                 errors.push("errors.assesment_st_required")
//                 return errors;
//             }

//             if (assessment.start_time.trim() == ''){
//                 errors.push("errors.start_time_required")
//                 return errors;
//             }

//             if (assessment.stop_time.trim() == ''){
//                 errors.push("errors.stop_time_required")
//                 return errors;
//             }
//         }

//         // if (!assessment.status || assessment.status == ''){
//         //     errors.push("Assessment status is a required field")
//         //     return errors;
//         // }

//         // if (assessment.start_time.trim() == ''){
//         //     errors.push("Start Time is a required field")
//         //     return errors;
//         // }

//         // if (assessment.stop_time.trim() == ''){
//         //     errors.push("Stop Time is a required field")
//         //     return errors;
//         // }

//         const start_time = new Date(assessment.start_time)
//         const stop_time = new Date(assessment.stop_time)

//         if (start_time>stop_time){
//             errors.push("errors.start_stop_error")
//             return errors;
//         }

//         return errors
//     }

//     saveReport(report){
//         const errors = [];

//         if (report.recommendations.trim().length>1200){
//             // errors.push("Username is a required field")
//             errors.push("errors.username_name_required")
//             return errors;
//         }

//         if (report.relevant_facts.trim().length>1200){
//             // errors.push("Username is a required field")
//             errors.push("errors.username_name_required")
//             return errors;
//         }

//         return errors
//     }

// }