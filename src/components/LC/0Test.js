// src/components/EventSchedulerLiveCode/index.js
import React, { useState } from 'react';
import styles from '@site/src/components/LC/0LC.module.css';

const EventScheduler = () => {
  const [event, setEvent] = useState({
    eventName: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    description: '',
  });
  const [events, setEvents] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    if (event.eventName && event.eventDate && event.startTime && event.endTime) {
      setEvents([...events, { ...event, id: Date.now() }]);
      setEvent({
        eventName: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        description: '',
      });
    } else {
      alert('Please fill out all required fields.');
    }
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="event-scheduler-container">
      <h2>Event Scheduler</h2>

      <div className="event-form">
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={event.eventName}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="eventDate"
          value={event.eventDate}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="startTime"
          value={event.startTime}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="endTime"
          value={event.endTime}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={event.description}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <div className="event-list">
        <h3>Scheduled Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <h4>{event.eventName}</h4>
              <p>{event.eventDate} - {event.startTime} to {event.endTime}</p>
              <p>{event.description}</p>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventScheduler;
