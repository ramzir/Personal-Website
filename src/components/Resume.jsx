import React from "react"

export default () => (
    <div id="resume" class="container resume">
        <div class="row rowline">
            <div class="col">
                <h3>
                    Education
                </h3>
            </div>
            <div class="col-8">
                <h2>
                    University of Illinois at Chicago
                </h2>
                <h5 class="role">Computer Science</h5>
                <p class="date">Expected Graduation: Spring 2022</p>
                <p class="description">
                    Completed courses: Program Design I, Program Design II, Programming Practicum, 
                    Data Structures, Machine Organization, Languages and Automata
                    <br></br>
                    Fall 2020: Software Design, Systems Programming, Computer Design
                </p>
            </div>
        </div>
        <div class="row topmargin">
            <div class="col">
                <h3>
                    Work
                </h3>
            </div>
            <div class="col-8">
                <h2>
                    Upkey
                </h2>
                <h5 class="role">Internship</h5>
                <p class="date">Summer 2020</p>
                <p class="description">
                - Designed a registration flow prototype for the LRNG website while learning about UX <br></br>
                - Created new methods of on-boarding to optimize new users' experience on the website <br></br>
                - Gained entrepreneurial skills with a startup pitch competition while collaborating with a team <br></br>
                - Developed and presented weekly projects that implemented trainings taught by professionals working 
                    within finance, technology, marketing, and entrepreneurship leading to an extensive understanding of business practices
                </p>
            </div>
        </div>
        <div class="row rowline">
            <div class="col">

            </div>
            <div class="col-8">
                    <h2>
                        Narchem Corporation
                    </h2>
                    <h5 class="role">Internship</h5>
                    <p class="date">Summer 2018</p>
                    <p class="description">
                    - Engaged in building a distillation system for distilling crude oil to export overseas <br></br>
                    - Shadowed the CEO of the company <br></br>
                    - Gained experience working in a small business environment
                    </p>
            </div>
        </div>
        <div class="row rowline">
            <h3>
                Skills
            </h3>
            <div class="row progress-row">
                <div class="col skillcol">
                </div>
                <div class="col-8">
                    <div class="row">
                        <p>Java</p>
                        <div class="progress">
                            <div class="progress-bar bg-info java" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
    
                    <div class="row">
                        <p>Python</p>
                        <div class="progress">
                            <div class="progress-bar bg-info python" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div class="row">
                        <p>C++</p>
                        <div class="progress">
                            <div class="progress-bar bg-info c" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div class="row">
                        <p>Data Structures</p>
                        <div class="progress">
                            <div class="progress-bar bg-info ds" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div class="row">
                        <p>Web Development</p>
                        <div class="progress">
                            <div class="progress-bar bg-info web" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);