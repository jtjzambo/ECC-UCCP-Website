// Mock data for Ecumenical Center Church - UCCP

export const churchInfo = {
  name: "Ecumenical Center Church - UCCP",
  tagline: "Building Faith, Embracing Community",
  location: "Zamboanga City",

  introduction: {
    title: "Welcome to Our Church Family",
    content: "We are a warm and welcoming community of faith, dedicated to serving God and our neighbors. Our church is a place where everyone is valued, where faith is nurtured, and where lives are transformed through God's love.",
    mission: "  Our Vision: A responsible, empowered, self-reliant and caring community of Christian believers committed to the pursuit of a transformed church and society towards an abundant and meaningful life for all.\nOur Mission: Establishing and uniting the community of faith for the proclamation of the Gospel of our Lord Jesus Christ towards the transformation of both church and society.\n\nOur Goals:\n\u25CF To strengthen the faith community \u2013 which addresses our relationship within the faith community at all levels and in all aspects of its life and work \u2013 individual, collective, organizational and institutional\n\n\u25CF To enrich the life-work of communities where Local Churches are located \u2013 which speaks of the relationship of the Local Churches with the communities where they are situated and where issues are more effectively and meaningfully addressed\n\n\u25CF To deepen the impact of its collective response to societal issues and concerns \u2013 which reflects the relationship of the whole UCCP with the issues and concerns that effect the life-work of the whole nation, the global community and all of creation\n"
  },

  services: {
    title: "Our Services",
    schedule: [
    {
      name: "Sunday Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, meaningful messages, and uplifting music."
    },
    {
      name: "Prayer Meeting",
      time: "Wednesday 7:00 PM",
      description: "Gather with us for prayer, fellowship, and spiritual encouragement."
    },
    {
      name: "Bible Study",
      time: "Friday 6:30 PM",
      description: "Dive deeper into God's Word through interactive study and discussion."
    }]

  },

  history: {
    title: "Our History",
    content: "The Ecumenical Center Church - UCCP has been a beacon of faith and hope in our community for many years. Founded on the principles of unity, service, and love, our church has grown to become a vibrant spiritual home for many families.",
    milestones: [
    "Established as a center for ecumenical dialogue and worship",
    "Committed to the United Church of Christ in the Philippines mission",
    "Serving the Zamboanga City community with compassion",
    "Building bridges across denominations through faith and fellowship"]

  },

  events: [
  {
    id: 1,
    title: "Sunday Fellowship",
    date: "Every Sunday",
    time: "After Service",
    description: "Join us for refreshments and fellowship after our morning worship service.",
    image: "https://images.unsplash.com/photo-1565813086292-604790c8a97b"
  },
  {
    id: 2,
    title: "Community Outreach",
    date: "Monthly",
    time: "Various",
    description: "Serving our community through various outreach programs and initiatives.",
    image: "https://images.unsplash.com/photo-1569292567777-e5d61a759322"
  },
  {
    id: 3,
    title: "Youth Ministry",
    date: "Every Saturday",
    time: "4:00 PM",
    description: "Engaging activities and spiritual formation for our young people.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334"
  }],


  contact: {
    address: "Zamboanga City, Philippines",
    email: "info@eccuccp.org",
    phone: "+63 XXX XXX XXXX"
  },

  images: {
    hero: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    community: "https://images.unsplash.com/photo-1695938746747-ec185ea81325",
    fellowship: "https://images.unsplash.com/photo-1565813086292-604790c8a97b",
    worship: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd",
    mission: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
  }
};

export const navigationLinks = [
{ name: "Home", path: "/" },
{ name: "About Us", path: "/about" },
{ name: "Our Services", path: "/services" },
{ name: "History", path: "/history" },
{ name: "Events", path: "/events" },
{ name: "Contact", path: "/contact" }];