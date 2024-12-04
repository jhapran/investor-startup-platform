import React from 'react';
import { Calendar, Clock, VideoIcon } from 'lucide-react';

const MeetingsList: React.FC = () => {
  const meetings = [
    {
      id: 1,
      title: 'Initial Pitch Meeting',
      date: '2024-03-15',
      time: '10:00 AM',
      type: 'Video Call',
      participants: ['John Doe', 'Jane Smith']
    },
    {
      id: 2,
      title: 'Follow-up Discussion',
      date: '2024-03-17',
      time: '2:30 PM',
      type: 'Video Call',
      participants: ['Mike Johnson']
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Meetings</h2>
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="border border-gray-100 rounded-lg p-4 hover:border-indigo-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-900">{meeting.title}</h3>
              <span className="flex items-center text-sm text-gray-500">
                <VideoIcon className="h-4 w-4 mr-1" />
                {meeting.type}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {meeting.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {meeting.time}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {meeting.participants.map((participant, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {participant}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
        Schedule new meeting
      </button>
    </div>
  );
};

export default MeetingsList;