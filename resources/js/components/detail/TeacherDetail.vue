<template>
    <div class="row">
        <!--Message modal start -->
        <div
            class="modal fade modal-tall"
            id="sendMessageToTeacher"
            tabindex="-1"
            aria-labelledby="sendMessageToTeacherLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1
                            class="modal-title fs-5"
                            id="sendMessageToTeacherLabel"
                        >
                            SEND MESSAGE
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <!-- start body -->
                        <div class="card">
                           <chat-form></chat-form>
                        </div>
                        <!-- end body -->
                    </div>
                    <div class="modal-footer invisible">
                        
                    </div>
                </div>
            </div>
        </div>
        <!--Message modal end -->

                <!--Group discussion Message modal start -->
                <div
            class="modal fade modal-tall"
            id="groupDiscussionMessage"
            tabindex="-1"
            aria-labelledby="groupDiscussionMessageLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1
                            class="modal-title fs-5"
                            id="groupDiscussionMessageLabel"
                        >
                            SEND MESSAGE
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <!-- start body -->
                        <div class="card">
                            <chat-form></chat-form>
                        </div>
                        <!-- end body -->
                    </div>
                    <div class="modal-footer invisible">
                      
                    </div>
                </div>
            </div>
        </div>
        <!--Group discussion Message modal end -->

        <div class="col-lg-12">
            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div
                            class="card-body profile-card pt-4 d-flex flex-column align-items-center"
                        >
                            <img
                                src="../../../../public/dashboard_css/assets/img/profile-img.jpg"
                                alt="Profile"
                                class="rounded-circle"
                            />
                            <h2>
                                {{ profile_overview.teacher_info.full_name }}
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8">
                    <b-overlay
                        id="overlay-background"
                        :show="show"
                        rounded="sm"
                        class="col-lg-12"
                        spinner-type="grow"
                    >
                        <div class="card">
                            <div class="card-body pt-3">
                                <!-- Bordered Tabs -->
                                <ul class="nav nav-tabs nav-tabs-bordered">
                                    <li class="nav-item">
                                        <button
                                            class="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-overview"
                                        >
                                            Overview
                                        </button>
                                    </li>

                                    <li class="nav-item">
                                        <button
                                            class="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-student"
                                            @click.stop="makeTrue"
                                        >
                                            Students
                                        </button>
                                    </li>

                                    <li class="nav-item">
                                        <button
                                            class="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-discussion"
                                        >
                                            Discussion
                                        </button>
                                    </li>

                                    <li class="nav-item">
                                        <button
                                            class="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-classes"
                                            @click.stop="makeFalse"
                                        >
                                            Classes
                                        </button>
                                    </li>

                                    <li class="nav-item">
                                        <button
                                            class="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-change-password"
                                            @click.stop="changePassword"
                                        >
                                            Change Password
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content pt-2">
                                    <div
                                        class="tab-pane fade show active profile-overview"
                                        id="profile-overview"
                                    >
                                        <h5 class="card-title">
                                            Profile Details
                                        </h5>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Full Name
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                {{
                                                    profile_overview
                                                        .teacher_info.full_name
                                                }}
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Classes
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <div
                                                    class="accordion accordion-flush"
                                                    v-bind:id="
                                                        'overview_class_accordion' +
                                                        index
                                                    "
                                                    v-for="(
                                                        class_info, index
                                                    ) in profile_overview.sorted_class"
                                                    :key="index"
                                                >
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            v-bind:id="
                                                                'overview_class_heading' +
                                                                index
                                                            "
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                v-bind:data-bs-target="
                                                                    '#' +
                                                                    'flush-overview_class_accordion' +
                                                                    index
                                                                "
                                                                aria-expanded="false"
                                                                v-bind:aria-controls="
                                                                    'flush-overview_class_accordion' +
                                                                    index
                                                                "
                                                            >
                                                                {{
                                                                    class_info.topic
                                                                }}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            v-bind:id="
                                                                'flush-overview_class_accordion' +
                                                                index
                                                            "
                                                            class="accordion-collapse collapse"
                                                            v-bind:aria-labelledby="
                                                                'flush-overview_class_heading' +
                                                                index
                                                            "
                                                            v-bind:data-bs-parent="
                                                                '#' +
                                                                'overview_class_accordion' +
                                                                index
                                                            "
                                                        >
                                                            <div
                                                                class="accordion-body"
                                                            >
                                                                <ul
                                                                    class="list-group"
                                                                >
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >START
                                                                            TIME
                                                                            : </b
                                                                        >{{
                                                                            timeFormater(
                                                                                class_info.start_date
                                                                            )
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >END
                                                                            TIME
                                                                            : </b
                                                                        >{{
                                                                            timeFormater(
                                                                                class_info.end_date
                                                                            )
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >CLASS
                                                                            DAY
                                                                            : </b
                                                                        ><span
                                                                            class="badge rounded-pill text-bg-warning mr-2"
                                                                            v-for="(
                                                                                cls_selected_day,
                                                                                index
                                                                            ) in class_info.selected_day"
                                                                            :key="
                                                                                index
                                                                            "
                                                                            >{{
                                                                                findDay(
                                                                                    cls_selected_day
                                                                                )
                                                                            }}</span
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >DURATION
                                                                            : </b
                                                                        >{{
                                                                            class_info.duration
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >DESCRIPTION
                                                                            : </b
                                                                        >{{
                                                                            class_info.description
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >STUDENT
                                                                            : </b
                                                                        ><span
                                                                            class="badge rounded-pill text-bg-warning mr-2"
                                                                            v-for="(
                                                                                cls_stu,
                                                                                index
                                                                            ) in class_info.student"
                                                                            :key="
                                                                                index
                                                                            "
                                                                        >
                                                                            {{
                                                                                cls_stu.full_name
                                                                            }}
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Students
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <div
                                                    class="accordion accordion-flush"
                                                    v-bind:id="
                                                        'overview_teacher_accordion' +
                                                        index
                                                    "
                                                    v-for="(
                                                        stu_info, index
                                                    ) in profile_overview.student_info"
                                                    :key="index"
                                                >
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            v-bind:id="
                                                                'overview_teacher_heading' +
                                                                index
                                                            "
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                v-bind:data-bs-target="
                                                                    '#' +
                                                                    'flush-overview_teacher_accordion' +
                                                                    index
                                                                "
                                                                aria-expanded="false"
                                                                v-bind:aria-controls="
                                                                    'flush-overview_teacher_accordion' +
                                                                    index
                                                                "
                                                            >
                                                                {{
                                                                    stu_info.full_name
                                                                }}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            v-bind:id="
                                                                'flush-overview_teacher_accordion' +
                                                                index
                                                            "
                                                            class="accordion-collapse collapse"
                                                            v-bind:aria-labelledby="
                                                                'flush-overview_teacher_heading' +
                                                                index
                                                            "
                                                            v-bind:data-bs-parent="
                                                                '#' +
                                                                'overview_teacher_accordion' +
                                                                index
                                                            "
                                                        >
                                                            <div
                                                                class="accordion-body"
                                                            >
                                                                <ul
                                                                    class="list-group"
                                                                >
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >EMAIL
                                                                            : </b
                                                                        >{{
                                                                            stu_info.email
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >PHONE
                                                                            : </b
                                                                        >{{
                                                                            stu_info.phone
                                                                        }}
                                                                    </li>
                                                                    <li
                                                                        class="list-group-item"
                                                                    >
                                                                        <b
                                                                            >SUBJECT
                                                                            :
                                                                        </b>
                                                                        <span
                                                                            class="badge rounded-pill text-bg-warning mr-2"
                                                                            v-for="(
                                                                                tch_sub_info,
                                                                                index
                                                                            ) in stu_info.subject"
                                                                            :key="
                                                                                index
                                                                            "
                                                                            v-if="checkSubject(tch_sub_info)"
                                                                            >{{
                                                                                tch_sub_info.name
                                                                            }}</span
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Subject
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <span
                                                    class="badge rounded-pill text-bg-warning mr-2"
                                                    v-for="(
                                                        sub_info, index
                                                    ) in profile_overview.subject_info"
                                                    :key="index"
                                                    >{{ sub_info.name }}</span
                                                >
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Email
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                {{
                                                    profile_overview
                                                        .teacher_info.email
                                                }}
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div
                                                class="col-lg-3 col-md-4 label"
                                            >
                                                Phone
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                {{
                                                    profile_overview
                                                        .teacher_info.phone
                                                }}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane fade profile-student pt-3"
                                        id="profile-student"
                                    >
                                        <!-- Profile Edit Form -->
                                        <form>
                                            <div class="row mb-3">
                                                <!-- Accordion without outline borders -->
                                                <div
                                                    class="accordion accordion-flush"
                                                    v-bind:id="
                                                        'profile-student-accordion' +
                                                        student_info_index
                                                    "
                                                    v-for="(
                                                        student_info, student_info_index
                                                    ) in profile_overview.student_info"
                                                    :key="student_info_index"
                                                >
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            v-bind:id="
                                                                'profile-student-flush' +
                                                                student_info_index
                                                            "
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                v-bind:data-bs-target="
                                                                    '#' +
                                                                    'profile-student-flush-collapseOne' +
                                                                    student_info_index
                                                                "
                                                                aria-expanded="false"
                                                                v-bind:aria-controls="
                                                                    'profile-student-flush-collapseOne' +
                                                                    student_info_index
                                                                "
                                                            >
                                                                <h1
                                                                    class="fs-5"
                                                                >
                                                                    {{
                                                                        student_info.full_name
                                                                    }}
                                                                </h1>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            v-bind:id="
                                                                'profile-student-flush-collapseOne' +
                                                                student_info_index
                                                            "
                                                           
                                                            v-bind:class="['accordion-collapse collapse', student_info_index == 0 ? 'show' : '']"
                                                            aria-labelledby="profile-student-flush"
                                                            v-bind:data-bs-parent="
                                                                '#' +
                                                                'profile-student-accordion' +
                                                                student_info_index
                                                            "
                                                        >
                                                            <div
                                                                class="accordion-body"
                                                            >
                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="col-lg-3 col-md-4 label"
                                                                    >
                                                                        Subjects
                                                                    </div>
                                                                    <div
                                                                        class="col-lg-9 col-md-8"
                                                                    >
                                                                        <span
                                                                            class="badge rounded-pill bg-warning text-dark"
                                                                            v-for="(
                                                                                sub_info,
                                                                                index
                                                                            ) in student_info.subject"
                                                                            :key="
                                                                                index
                                                                            "
                                                                            v-if="checkSubject(sub_info)"
                                                                            >{{
                                                                                sub_info.name
                                                                            }}</span
                                                                        >
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="col-lg-3 col-md-4 label"
                                                                    >
                                                                        Message
                                                                    </div>
                                                                    <div
                                                                        class="col-lg-9 col-md-8"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-success"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#sendMessageToTeacher"
                                                                        >
                                                                            SEND
                                                                            MESSAGE
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="col-lg-3 col-md-4 label"
                                                                    >
                                                                        Email
                                                                    </div>
                                                                    <div
                                                                        class="col-lg-9 col-md-8"
                                                                    >
                                                                        {{
                                                                            student_info.email
                                                                        }}
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="col-lg-3 col-md-4 label"
                                                                    >
                                                                        Phone
                                                                    </div>
                                                                    <div
                                                                        class="col-lg-9 col-md-8"
                                                                    >
                                                                        {{
                                                                            student_info.phone
                                                                        }}
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="col-lg-3 col-md-4 label cstm-font"
                                                                    >
                                                                        <h1>
                                                                            Classes
                                                                        </h1>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="row"
                                                                    v-if="showCalendar"
                                                                >
                                                                    <div>
                                                                        <slot-calendar
                                                                            :current_student_id="
                                                                                student_info.id
                                                                            "
                                                                            :current_teacher_id="
                                                                                $route
                                                                                    .params
                                                                                    .id
                                                                            "
                                                                            :calType="
                                                                                teacher_student_all
                                                                            "
                                                                        ></slot-calendar>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Accordion without outline borders -->
                                            </div>
                                        </form>
                                        <!-- End Profile Edit Form -->
                                    </div>
                                    <div
                                        class="tab-pane fade pt-3"
                                        id="profile-classes"
                                    >
                                        <slot-calendar
                                            :current_teacher_id="
                                                $route.params.id
                                            "
                                            :calType="teacher_all"
                                        ></slot-calendar>
                                    </div>

                                    <div
                                        class="tab-pane fade pt-3"
                                        id="profile-change-password"
                                    >
                                        <!-- Change Password Form -->
                                        <form>
                                            <div class="row mb-3">
                                                <label
                                                    for="currentPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"
                                                    >Current Password</label
                                                >
                                                <div class="col-md-8 col-lg-9">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        class="form-control"
                                                        id="currentPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label
                                                    for="newPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"
                                                    >New Password</label
                                                >
                                                <div class="col-md-8 col-lg-9">
                                                    <input
                                                        name="newpassword"
                                                        type="password"
                                                        class="form-control"
                                                        id="newPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label
                                                    for="renewPassword"
                                                    class="col-md-4 col-lg-3 col-form-label"
                                                    >Re-enter New
                                                    Password</label
                                                >
                                                <div class="col-md-8 col-lg-9">
                                                    <input
                                                        name="renewpassword"
                                                        type="password"
                                                        class="form-control"
                                                        id="renewPassword"
                                                    />
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary"
                                                >
                                                    Change Password
                                                </button>
                                            </div>
                                        </form>
                                        <!-- End Change Password Form -->
                                    </div>
                                    <div
                                        class="tab-pane fade pt-3 profile-discussion-card"
                                        id="profile-discussion"
                                    >
                                        <div class="card" style="width: 18rem"  
                                             v-for="(
                                                        class_info, index
                                                    ) in profile_overview.sorted_class"
                                                    :key="index">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                   {{ class_info.topic }}
                                                </h5>
                                                <a
                                                    href="#"
                                                    class="btn btn-success"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#groupDiscussionMessage"
                                                    @click.stop="setClassId(class_info.id)"
                                                    >Open Discussion</a
                                                >
                                            </div>
                                        </div>
                                        <!-- Settings Form -->
                                      

                                        <!-- End settings Form -->
                                    </div>
                                </div>
                                <!-- End Bordered Tabs -->
                            </div>
                        </div>
                    </b-overlay>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loginInfoStore } from '../../stores/loginInfo';
import {mapState} from 'pinia'
export default {
    data() {
        return {
            teacher_all: "teacher_all",
            teacher_student_all: "teacher_student_all",
            show: false,
            showStudentCalendar: false,
            showAllCalendar: false,
            profile_overview: [],
            sorted_class: [],
            current_teacher_id: "",
            current_student_id: "",
            current_class_id: "",
            showCalendar: false,
            subjects:[]
        };
    },
    computed: {
    ...mapState(loginInfoStore, ['getLoginInfo']),
  },
    mounted() {
        this.profileOverview();
    },
    methods: {
        setClassId(id) {
            this.current_class_id = id;
        },
        findDay(day) {
            switch (day) {
                case "0":
                    return "Sun";
                case "1":
                    return "Mon";
                case "2":
                    return "Tues";
                case "3":
                    return "Wed";
                case "4":
                    return "Thurs";
                case "5":
                    return "Fri";
                case "6":
                    return "Sat";
            }
        },
        makeTrue() {
            this.showCalendar = true;
        },
        makeFalse() {
            this.showCalendar = false;
        },
        checkSubject(val){
            const results = this.subjects.filter(sub => sub.name === val.name);
            if (results.length>0) {
                return true;
            }else{
                return false;
            }
        },
        async profileOverview() {
            let id = this.$route.params.id;
            let urlText = "teacher/" + id + "/profileOverview";

            let getResponse = await this.get(urlText, id, false);
            let sortedClass = await this.sortedClass();
            this.profile_overview = {
                ...getResponse.data.data,
                sorted_class: this.sorted_class,
            };
            this.subjects = this.profile_overview.subject_info;
        },
        async sortedClass() {
            let id = this.$route.params.id;
            let urlText = "teacher/" + id + "/sortedClass";

            let getResponse = await this.get(urlText, id, false);

            this.sorted_class = getResponse.data.data;
        },

        async changePassword() {
            let id = 1;
            let formData = {};
            let urlText = "teacher/" + id + "/changePassword";

            let putResponse = await this.put(urlText, formData);
        },
    },
};
</script>
