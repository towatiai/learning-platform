<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    .general {
        font-family: 'Montserrat', sans-serif;
        margin-left: 10px;
        margin-right: 10px;
    }
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .column {
        float: left;
        margin-top: 10px;
    }
    .left, .right {
        width: 50%;
    }
    .left3 {
        width: 15%;
    }
    .middle {
        width: 50%;
        padding-left: 5px;
    }
    .right3 {
        width: 35%;
        background-color: rgba(37, 99, 235, 0.03);
    }
    .tag {
        width: 3%;
        background-color: #5EB670;
        border-radius: 5px 0 0 5px;
        margin-left: 10px;
    }
    .tag-main {
        width: 80%;
        padding-left: 10px;
    }
    .small-text {
        color: #a8a8a8;
        font-size: small;
    }
    .main-header {
        color: #202020;
        font-size: x-large;
        margin-top: 0;
    }
    .button {
        border-radius: 10px;
        height:50px;
        width:50px;
        cursor:pointer;
        float: right;
    }
    #profile {
        background-color: #4877D8;
    }
    #notification {
        margin-right: 15px;
        background-color: #ecf1fb;
    }
    .icon {
        height: 75%;
        width: 75%;
        margin: auto;
    }
    .light {
        color: #ecf1fb;
    }
    .dark {
        color: #4877D8;
    }
    #assignment {
        color: #F49E42;
    }
    .subheading {
        margin-top: 20px;
        color: #424242;
    }
    .bold {
        font-weight: bold;
    }

</style>

<div class="general">
    <div class="row">
        <div class="column left">
            <h3 class="small-text"> 20 Dec </h3>
            <h1 class="main-header bold"> Hi, Markus </h1>
        </div>
        <div class="column right">
            <button class="button" id="profile">
                <svg class="light icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </button>
            <button class="button" id="notification">
                <svg class="dark icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
            </button>
        </div>
    </div>
    
    <div>
        <h2 class="subheading"> Notifications </h2>
        <hr>
        <div class=row>
            <div class="column tag">
                <p class="small-text"> &nbsp; </p>
                <p class="small-text"> &nbsp; </p>
                <p class="bold"> &nbsp; </p>
                &nbsp;
            </div>
            <div class="column tag-main">
                <p class="small-text"> Mathematics </p>
                <p class="small-text"> 17 Dec, 12:28 by Olli-Pekka </p>
                <p class="bold"> Do not forget to bring your calculators for next class! </p>
            </div>
        </div>
        <div class=row>
            <div class="column tag">
                <p class="small-text"> &nbsp; </p>
                <p class="small-text"> &nbsp; </p>
                <p class="bold"> &nbsp; </p>
                &nbsp;
            </div>
            <div class="column tag-main">
                <p class="small-text"> English </p>
                <p class="small-text"> 14 Dec, 14:47 by Sanna </p>
                <p class="bold"> We will be reading the first chapter of the book "Diary of a Wimpy Kid" during next class </p>
            </div>
        </div>
        <div class=row>
            <div class="column tag">
                <p class="small-text"> &nbsp; </p>
                <p class="small-text"> &nbsp; </p>
                <p class="bold"> &nbsp; </p>
                &nbsp;
            </div>
            <div class="column tag-main">
                <p class="small-text"> Arts </p>
                <p class="small-text"> 10 Dec, 10:13 by Gregory </p>
                <p class="bold"> Remember to bring old clothes for class on the 12th December to avoid stains on your uniforms </p>
            </div>
        </div>
    </div>

    <div>
        <h2 class="subheading"> Timeline </h2>
        <hr>
        <div class=row>
            <div class="column left3">
                <svg class="icon" id="assignment" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            </div>
            <div class="column middle">
                <h2 class="bold"> Exercise 4 Pg. 54</h2>
                <p> Chemistry </p>
            </div>
            <div class="column right3 text-center rounded">
                <p> Fri, 24 Dec </p>
                <p> 17:59 </p>
            </div>
        </div>
        <div class=row>
            <div class="column left3">
                <svg class="icon" id="assignment" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            </div>
            <div class="column middle">
                <h2 class="bold"> Exercises 1-4 Pg. 26  </h2>
                <p> History </p>
            </div>
            <div class="column right3 text-center rounded">
                <p> Tue, 28 Dec </p>
                <p> 18:59 </p>
            </div>
        </div>
        <div class=row>
            <div class="column left3">
                <svg class="icon" id="assignment" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            </div>
            <div class="column middle">
                <h2 class="bold"> Exercises Pg.76 </h2>
                <p> Biology </p>
            </div>
            <div class="column right3 text-center rounded">
                <p> Fri, 31 Dec </p>
                <p> 16:59 </p>
            </div>
        </div>
        <div class=row>
            <div class="column left3">
                <svg class="icon" id="assignment" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            </div>
            <div class="column middle">
                <h2 class="bold"> Drawing your Holid... </h2>
                <p> Arts </p>
            </div>
            <div class="column right3 text-center rounded">
                <p> Fri, 31 Dec </p>
                <p> 17:59 </p>
            </div>
        </div>
        <p> &nbsp; </p>
        <p> &nbsp; </p>
        <p> &nbsp; </p>
    </div>
    
</div>


