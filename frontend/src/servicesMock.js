// Services page mock data
export const servicesData = {
  hero: {
    title: "Worship With Us",
    subtitle: "Join our vibrant community in worship, fellowship, and spiritual growth"
  },

  weeklySchedule: {
    title: "Weekly Schedule",
    subtitle: "Everyone is welcome to join us for worship and fellowship",
    services: [
      {
        day: "Sunday",
        services: [
          {
            time: "9:00 AM",
            name: "Morning Devotion & Adult Sunday School",
            description: "Start your Sunday with devotions and in-depth Bible study for adults",
            icon: "book"
          },
          {
            time: "9:45 AM",
            name: "Children Sunday School & Junior Worship",
            description: "Age-appropriate Bible lessons and worship for children and juniors",
            icon: "users"
          },
          {
            time: "10:00 AM",
            name: "Morning Worship",
            description: "Main worship service with inspiring messages, uplifting music, and communion",
            icon: "church",
            featured: true
          },
          {
            time: "11:30 AM",
            name: "CYF Sunday School",
            description: "Christian Youth Fellowship - discipleship and fellowship for young people",
            icon: "heart"
          },
          {
            time: "5:00 PM",
            name: "Alabanza Y Adora Night",
            description: "A Contemporary Night Worship hosted by CYF Zamboanga",
            schedule: "2nd & 4th Sundays of the month",
            icon: "music",
            special: true
          }
        ]
      },
      {
        day: "Wednesday",
        services: [
          {
            time: "5:30 PM",
            name: "Midweek Prayer Meeting",
            description: "Gather for prayer, spiritual encouragement, and fellowship midweek",
            icon: "prayer"
          }
        ]
      }
    ]
  },

  specialServices: {
    title: "Special Services & Annual Events",
    subtitle: "Join us for these significant celebrations throughout the year",
    events: [
      {
        name: "Holy Week Services",
        season: "March/April",
        description: "Palm Sunday, Maundy Thursday, Good Friday, and Easter Sunday services commemorating Christ's passion and resurrection",
        icon: "cross"
      },
      {
        name: "Christmas Season",
        season: "December",
        description: "Advent services, Christmas Eve candlelight service, and Christmas Day celebration",
        icon: "star"
      },
      {
        name: "Baptism Services",
        season: "Quarterly",
        description: "Celebration of new believers through the sacrament of baptism - contact the church office to schedule",
        icon: "droplet"
      },
      {
        name: "Holy Communion",
        season: "First Sunday Monthly",
        description: "Celebration of the Lord's Supper during morning worship service",
        icon: "bread"
      },
      {
        name: "Church Anniversary",
        season: "August",
        description: "Celebrating our heritage and God's faithfulness with special services and fellowship",
        icon: "calendar"
      },
      {
        name: "Revival Services",
        season: "As Scheduled",
        description: "Special worship services with guest speakers for spiritual renewal and growth",
        icon: "flame"
      }
    ]
  },

  onlineWorship: {
    title: "Online Worship",
    subtitle: "Can't join us in person? Worship with us online!",
    platforms: [
      {
        name: "Facebook Live",
        description: "Watch our services live on Facebook every Sunday at 10:00 AM",
        url: "https://www.facebook.com/uccpzambo",
        icon: "facebook"
      },
      {
        name: "YouTube Channel",
        description: "Catch up on past services and special programs",
        url: "https://www.youtube.com/@uccpzambo",
        icon: "youtube"
      }
    ],
    note: "Live streaming available for Sunday Morning Worship at 10:00 AM"
  },

  sermonArchive: {
    title: "Sermon Archive",
    subtitle: "Listen to past messages and grow in your faith",
    description: "Access our collection of sermons and teachings. Visit our YouTube channel for full sermon videos and audio recordings.",
    recentSermons: [
      {
        title: "Recent Sermons Available",
        description: "Visit our YouTube channel @uccpzambo for the latest messages and teachings"
      },
      {
        title: "Special Services",
        description: "Holy Week services, Christmas programs, and special event recordings"
      },
      {
        title: "Bible Study Series",
        description: "In-depth teaching series on various books of the Bible"
      }
    ]
  },

  visitInfo: {
    title: "Plan Your Visit",
    items: [
      {
        question: "What should I wear?",
        answer: "Come as you are! We welcome casual and formal attire. What matters most is your heart for worship."
      },
      {
        question: "Where do I park?",
        answer: "Parking is available near the church premises. Arrive early for the best spots, especially for Sunday morning worship."
      },
      {
        question: "What about children?",
        answer: "Children are welcome in all services! We have dedicated Children Sunday School and Junior Worship at 9:45 AM for age-appropriate ministry."
      },
      {
        question: "How long are services?",
        answer: "Sunday Morning Worship typically lasts 1.5-2 hours, including worship, message, and fellowship time."
      }
    ]
  }
};
