<template>
    <div class="row">
        <!-- Left side columns -->
        <div class="col-12">
            <div class="row">
                <!-- Today Classes Card -->
                <div class="col-4">
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"
                                ><i class="bi bi-three-dots"></i
                            ></a>
                            <ul
                                class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                            >
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="#">Today</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Yesterday</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Tomorrow</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                Classes <span>| Today</span>
                            </h5>

                            <div class="activity">
                                <div class="activity-item d-flex" v-for="(tcls, index) in totalClass"
                            :key="index">
                                    <div class="activite-label">{{ timeFormater(tcls.start_date) }}</div>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-success align-self-start"
                                        v-if="index==0"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-danger align-self-start"
                                        v-if="index==1"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-primary align-self-start"
                                        v-if="index==2"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-info align-self-start"
                                        v-if="index==3"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-warning align-self-start"
                                        v-if="index==4"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-muted align-self-start"
                                        v-if="index==5"
                                    ></i>
                                    <div class="activity-content">
                                        {{ tcls.topic }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Today Classes -->

                 <!-- Today Assignment Card -->
                 <div class="col-4">
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"
                                ><i class="bi bi-three-dots"></i
                            ></a>
                            <ul
                                class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                            >
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="#">Today</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Yesterday</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Tomorrow</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                Assignment <span>| Today</span>
                            </h5>

                            <div class="activity">
                                <div class="activity-item d-flex" v-for="(tcls, index) in totalClass"
                            :key="index">
                                    <div class="activite-label">{{ timeFormater(tcls.start_date) }}</div>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-success align-self-start"
                                        v-if="index==0"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-danger align-self-start"
                                        v-if="index==1"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-primary align-self-start"
                                        v-if="index==2"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-info align-self-start"
                                        v-if="index==3"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-warning align-self-start"
                                        v-if="index==4"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-muted align-self-start"
                                        v-if="index==5"
                                    ></i>
                                    <div class="activity-content">
                                        {{ tcls.topic }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Today Assignment -->

                 <!-- Today Study Resources Card -->
                 <div class="col-4">
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"
                                ><i class="bi bi-three-dots"></i
                            ></a>
                            <ul
                                class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                            >
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="#">Today</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Yesterday</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Tomorrow</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                Study Resources <span>| Today</span>
                            </h5>

                            <div class="activity">
                                <div class="activity-item d-flex" v-for="(tcls, index) in totalClass"
                            :key="index">
                                    <div class="activite-label">{{ timeFormater(tcls.start_date) }}</div>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-success align-self-start"
                                        v-if="index==0"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-danger align-self-start"
                                        v-if="index==1"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-primary align-self-start"
                                        v-if="index==2"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-info align-self-start"
                                        v-if="index==3"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-warning align-self-start"
                                        v-if="index==4"
                                    ></i>
                                    <i
                                        class="bi bi-circle-fill activity-badge text-muted align-self-start"
                                        v-if="index==5"
                                    ></i>
                                    <div class="activity-content">
                                        {{ tcls.topic }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Today Study Resources -->
               
            </div>
        </div>
    </div>
</template>
<script>
import { loginInfoStore } from "../../../stores/loginInfo";
import { mapState } from "pinia";

export default {
    data: function () {
        return {
            totalClass: [],
        };
    },
    computed: {
        ...mapState(loginInfoStore, ["getLoginInfo"]),
    },
    mounted() {
        this.totalClasses();
    },
    methods: {
        async totalClasses() {
            let urlText =
                "student/" + this.getLoginInfo.student_info.id + "/sortedClass";
            let getResponse = await this.get(urlText, 1, false);
            this.totalClass = getResponse.data.data;
        },
    },
};
</script>

