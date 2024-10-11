document.addEventListener('DOMContentLoaded', function () {
    const calendarTitle = document.querySelector('.calendar-title');
    const calendarBody = document.querySelector('.calendar-table tbody');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const todayBtn = document.querySelector('.today-btn');

    const events = [
        { date: '2023-06-01', time: '10:00', description: 'Medical Mission' },
        { date: '2023-06-02', time: '15:00', description: 'AAABOOO' }
    ];

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function renderCalendar(month, year) {
        calendarBody.innerHTML = '';
        calendarTitle.innerText = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement('td');

                if (i === 0 && j < firstDay) {
                    cell.innerText = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.innerText = date;
                    let currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                    let event = events.find(e => e.date === currentDate);
                    
                    if (event) {
                        let eventDiv = document.createElement('div');
                        eventDiv.classList.add('event');
                        eventDiv.innerText = `${event.time} - ${event.description}`;
                        cell.appendChild(eventDiv);
                    }
                    date++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    prevBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    todayBtn.addEventListener('click', function () {
        currentDate = new Date();
        currentMonth = currentDate.getMonth();
        currentYear = currentDate.getFullYear();
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});