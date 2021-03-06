$(document).ready(function () {
  $("#calendar").evoCalendar({
    //settingName: settingValue
    //adding events to calendar
    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "New Year's Day", // Event name (required)
        date: "January/1/2021", // Event date (required)
        //description:"",
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event2",
        name: "Lohri",
        date: "January/13/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event3",
        name: "Labour Day",
        date: "May/1/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event4",
        name: "Pongal",
        date: "January/14/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event5",
        name: "Makar Sankranti",
        date: "January/14/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event6",
        name: "Guru Govind Singh Jayanti",
        date: "January/20/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event7",
        name: "Republic Day",
        date: "January/26/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event8",
        name: "Vasant Panchami",
        date: "February/16/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event9",
        name: "Vasant Panchami",
        date: "February/16/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event10",
        name: "Shivaji Jayanti",
        date: "February/19/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event11",
        name: "Hazarat Ali's Birthday",
        date: "February/26/2020",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event12",
        name: "Guru Ravidas Jayanti",
        date: "February/27/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event13",
        name: "Mahashivaratri",
        date: "March/11/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event14",
        name: "Holi",
        date: "March/29/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event15",
        name: "Good Friday",
        date: "April/2/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event16",
        name: "Gudi Padwa",
        date: "April/13/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event17",
        name: "Ambedkar Jayanti",
        date: "April/14/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event18",
        name: "Rama Navami",
        date: "April/21/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event19",
        name: "Mahavir Jayanti",
        date: "April/25/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event20",
        name: "Mother's Day",
        date: "May/9/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event21",
        name: "Ramzan Id/Eid-ul-Fitar",
        date: "May/14/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event22",
        name: "Father's Day",
        date: "June/20/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event23",
        name: "Rath Yatra",
        date: "July/12/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event24",
        name: "Bakr Id/Eid ul-Adha",
        date: "July/21/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event25",
        name: "Guru Purnima",
        date: "July/24/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event26",
        name: "Guru Purnima",
        date: "August/15/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event27",
        name: "Raksha Bandhan",
        date: "August/22/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event28",
        name: "Janmashtami",
        date: "August/30/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event29",
        name: "Ganesh Chaturthi",
        date: "September/10/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event30",
        name: "Mahatma Gandhi Jayanti",
        date: "October/2/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event31",
        name: "Dussehra",
        date: "October/15/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event32",
        name: "Diwali",
        date: "November/4/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event33",
        name: "Bhai Duj",
        date: "November/6/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event34",
        name: "Chhat Puja",
        date: "November/10/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event35",
        name: "Guru Nanak Jayanti",
        date: "November/19/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event36",
        name: "Guru Nanak Jayanti",
        date: "November/19/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event37",
        name: "Christmas Eve",
        date: "December/25/2021",
        type: "holiday",
        everyYear: true,
      },
      {
        id: "event37",
        name: "New Year's Eve",
        date: "December/31/2021",
        type: "holiday",
        everyYear: true,
      },

    ],
  });
});
