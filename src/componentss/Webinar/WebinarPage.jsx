import React, { useEffect, useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import bootstrapPlugin from '@fullcalendar/bootstrap';
// import moment from 'moment';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'fullcalendar/dist/fullcalendar.css';

const WebinarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch webinar events dynamically from an API or local data
    // Replace this with your API endpoint
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.name,
          start: `${event.date}T${event.start_time}`,
          className: `${event.class_name} text-white`,
          url: event.call_url,
        }));
        setEvents(formattedEvents);
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div id="margin-top" className="container-fluid">
      {/* Header */}
      {/* <header className="d-flex align-items-center justify-content-center bg-primary text-white py-4">
        <h1 className="text-center">Webinar Schedule</h1>
      </header> */}

      {/* Webinar Card */}
      <div className="row justify-content-center my-4">
        <div className="">
          <div className="card">
            <div className="card-header p-0">
              <img
                src="https://skillsikhar.com/user/img/webinar.jpg"
                alt="Webinar"
                className="img-fluid"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="card-body p-3">
              {/* <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  bootstrapPlugin,
                ]}
                themeSystem="bootstrap"
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                buttonText={{
                  today: 'Today',
                  month: 'Month',
                }}
                navLinks={true}
                events={events}
                eventClick={(info) => {
                  if (info.event.url) {
                    window.open(info.event.url, '_blank');
                    info.jsEvent.preventDefault(); // prevents browser navigation
                  }
                }}
                aspectRatio={1.5} // Adjust calendar height for mobile
                contentHeight="auto" // Automatically adjust height
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
