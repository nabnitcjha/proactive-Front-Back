export default {
    methods: {
        openLink() {
            if (this.zoom_link != null) {
                window.open(this.zoom_link);
            } else {
                alert("link is empty");
            }
        },
        async savezoom_link(e) {
            let formData = {};
            let urlText = "saveZoomLink";
            formData["zoom_link"] = e.target.value;
            formData["timetable_id"] = this.current_timetable_id;
            this.saveAlert("zoom link save successfully");

            let postResponse = await this.post(urlText, formData);
        },
        async deleteStudyResource(id) {
           let d = await this.deleteAlert(id,'calendar');
           this.getResourceFile();
        },
        checkRole() {
            if (
                this.getLoginInfo.user.role == "teacher" ||
                this.getLoginInfo.user.role == "admin"
            ) {
                this.checkPermission = true;
            } else {
                this.checkPermission = false;
            }
        },
        async getResourceFile() {
            let urlText =
                "timetable/" + this.current_timetable_id + "/resourceFile";
            let getResponse = await this.get(urlText, 1, false);

            this.resource_file = getResponse.data.data;
        },
        downloadFile(id) {
            this.resource_id = id;
            location.href =
                window.location.origin +
                "/api/downloadFile/" +
                this.resource_id;
        },
        async saveFile(formData) {
            let urlText =
                "timetable/" + this.current_timetable_id + "/resourceFile";
            let postResponse = await this.post(urlText, formData);
        },
       
        async saveResourceFile() {
            // let x = this.current_timetable_id;
            let formData = new FormData();
            formData.append("teacher_id", this.currentTeacherId);
            formData.append("assessment_file", this.assessment_file);
            formData.append("class_unique_id", this.current_slot_unique_id);
            formData.append("class_schedule_id", this.current_timetable_id);
            formData.append("type", "study_resource");

            let svf = await this.saveFile(formData);

            this.assessment_file = "";
            this.resourceFileName = "";
            document.getElementById("study_resource").value = null;
            this.getResourceFile();
        },
        handleResourceFile(e) {
            e.preventDefault();
            this.assessment_file = document.querySelector(
                "input[id=study_resource]"
            ).files[0];

            this.resourceFileName = this.assessment_file.name;
            document.getElementById("study_resource").value = null;
        },
      
        handleAssignmentFile(e) {
            e.preventDefault();
            this.assessment_file = document.querySelector(
                "input[id=assignment_file]"
            ).files[0];

            this.assignmentFileName = this.assessment_file.name;
        },
        handleAssignmentFileAnswer(e) {
            debugger;
            e.preventDefault();
            this.assessment_file_answer = document.querySelector(
                "input[id=assignment_file_answer]"
            ).files[0];
            debugger;
            this.saveAssignmentAnswerFile();
        },
        async saveAssignmentFile() {
            let formData = new FormData();
            formData.append("teacher_id", this.currentTeacherId);
            formData.append("assessment_file", this.assessment_file);
            formData.append("class_unique_id", this.current_slot_unique_id);
            formData.append("class_schedule_id", this.current_timetable_id);
            formData.append("type", "assignment");

            let svf = await this.saveFile(formData);

            this.assessment_file = "";
            this.assignmentFileName = "";
            document.getElementById("assignment_file").value = null;
            this.getResourceFile();
        },
        async saveAssignmentAnswerFile() {
            debugger;
            let formData = new FormData();
            formData.append("student_id", this.current_student_id);
            formData.append("assessment_id", this.selected_assessment_id);
            formData.append("class_schedule_id", this.current_timetable_id);
            debugger;
            let svf = await this.saveFile(formData);
            debugger;
            document.getElementById("assignment_file_answer").value = null;
            this.getResourceFile();
        },

        openLink() {
            var copyText = document.getElementById("zoom_link");
            if (copyText.value == "") {
                this.errorAlert("zoom link not found");
            } else {
                window.open(this.zoom_link);
            }
        },
        copyzoom_link() {
            var copyText = document.getElementById("zoom_link");

            if (copyText.value == "") {
                this.errorAlert("zoom link not found");
            } else {
                copyText.select();
                copyText.setSelectionRange(0, 99999); /* For mobile devices */

                /* Copy the text inside the text field */
                navigator.clipboard.writeText(copyText.value);
                this.saveAlert("zoom link copy successfully");
            }

            /* Alert the copied text */
            // alert( copyText.value);
        },
    },
};
