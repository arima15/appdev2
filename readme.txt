
//note:  you can decide what functionality and design you want for the calendar as well as the entirety of the dashboard
//note:  this applies to every other file in here as well

# Homepage folder

    - Contains the user side of the system,  this is where 
    the user will input relevant information as well as book dental appointments

#login folder

    - Contains the javascript required for the login modal to work
    - Only the admin is supposed to login
    - If the username and password are correct, the user (in this case the admin) will automatically be redirected to the dashboard

    *used in newappschedule.html and newappscheduled.html

# essential styling

    (header.css) - for styling the dashboard header
    (left-sidebar.css) - for styling the dashboard sidebar 

    # dropdown folder
        - contains the javascript dropdown menu on the sidebar for appointments
        - also contains the css for the dropdown.js

    # logout folder
        - contains the javascript for the logout modal
        - also contains the css for the logout modal

    * everything inside the essential styling is usedd for the 
                                                                - dashboard.html 
                                                                - accepted.html
                                                                - rejected.html
                                                                - accepted.html
                                                                - events.html
                                                                - transactions.html


#Dashboard folder

    - contains the main dashboard for the system
    - It has a :

        - clinic dashboard overview: which displays the total patients for today, the number of services available for the custumer,
                                    the pending requests for appointments as well as the approved appointments which will take place today

        - calendar: it's supposed to be used for reviewing previous bookings and activities as well as an overview for the non-working days, fully booked appointments,
                    as well as to view future appointments

                    # calendar functionalities
                        if admin clicks on previous date
                            the modal should pop-up and show the previous appointments done as well as other activities
                        else if admin clicks on present date
                            a modal should pop-up and  show the present appointments
                        else if admin clicks on future date
                            a modal should pop-up and show the future appointments/activities as well as the pending requests

        //note:  you can decide what functionality you want for the calendar as well as the entirety of the dashboard

        - legend: supposed to act as a guide to let the admin know whether a date has been fully booked, a non-working day, or still has available slots
        
        //note: you can decide whether to keep this or not, the same applies to holidays

        - holidays: contains the list of non-working days

# appointment folder

    - contains the dropdown list for the pending.html, accepted.html and rejected.html
    
    # appointment folder functionalities

        - after the user booked an appointment , the data collected from the user should be sent to the pending section wherein the admin can choose 
            whether to reject or approve

# events folder 

    - lists current appointment for today as well as to create a new appointment

# transact folder

    - this is where every transaction between users and admin shall be stored