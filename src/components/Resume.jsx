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
                    Relevant courses: Data Structures, Artificial Intelligence,  Software Design, Systems Programming, 
                    Computer Design, Machine Organization, Programming Language Concepts 
                    <br></br>
                    Fall 2021: Computer Algorithms, Software Engineering, Database Systems
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
                    Kohl's
                </h2>
                <h5 class="role">Software Engineering Internship</h5>
                <p class="date">Summer 2021</p>
                <p class="description">
                - Worked on the Robotic Process Automation (RPA) team in AIOps, learning about automation, 
                API usage, Agile development and test-driven development <br></br>
                - Completed project in Blue Prism which automates processing service requests from Kohl;s associates and
                orders new hardware when in-store hardware malfunctions. Project implemented in over 1,000 stores 
                </p>
            </div>
        </div>
        <div class="row mid">
            <div class="col">
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
                - Gained entrepreneurial skills with a startup pitch competition while collaborating with a team
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