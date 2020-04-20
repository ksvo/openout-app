const mockData = {
  "San Francisco": {
    camping: [
      {
        name: "Rob Hill Campground",
        description:
          'Perched on four wooded acres above Baker Beach at the Presidio\'s highest point, Rob Hill is one of just two campgrounds in San Francisco. It offers a national park camping experience just minutes from the city. Here, you can see the lights of Sutro Tower, smell the ocean, and hear the owls in the Cypress trees.\n\nRob Hill has four group campsites that can accomodate up to 30 people: two available for public reservations, and two that welcome youth from the "Camping at the Presidio" program.\n\nThis section describes the facilities, the rules, and how to make a reservation.',
        address: "1475 Central Magazine Rd, San Francisco, CA 94129",
        coordinates: {
          latitude: 37.796764,
          longitude: -122.475743,
        },
        phone: "(415) 561-4323",
        email: "camp@presidiotrust.gov",
        map:
          "https://www.claremontms.org/wp-content/uploads/2016/10/rob_hill_campground.jpg",
        pictures: [],
        raiting: 4.6,
        comments: [
          {
            username: "johnsmith11",
            timeStamp: 1586651860844,
            title: "This place rocks",
            comment: "We went there over the weekend and we loved it!",
          },
        ],
        challengeLevel: 2 / 5,
      },
    ],
    hiking: [
      {
        name: "Batteries to Bluffs Trail",
        description:
          "Batteries to Bluffs begins on a high note – quite literally. The two trailheads at Lincoln Boulevard offer an elevated view of the Pacific Ocean horizon, with the Golden Gate Bridge and Marin Headlands to the northwest, and the dramatic bluffs tumbling to the rocky shore below.\n\nWhile the scenery around the trail is exceptional – if you’re lucky, you may even see dolphins riding the crest of a wave – pay attention to what’s right next to you. Depending on the season, the path comes alive with native dune plants and wildflowers. Butterflies and birds cluster around to enjoy this bounty of bright flora. Batteries to Bluffs crisscrosses trickling seeps and hidden springs along the way to Battery Crosby, a historic gun battery you can explore to your heart’s content.",
        address: "Battery to Bluffs Trail, San Francisco, CA 94129",
        coordinates: {
          latitude: 37.800186,
          longitude: -122.47815,
        },
        phone: "(415) 561-5300",
        email: "trails@presidiotrust.gov",
        map: "",
        pictures: [],
        raiting: 4.8,
        comments: [
          {
            username: "sallykelly13",
            timeStamp: 1586651860844,
            title: "Look at this trail",
            comment: "If I can do one hike in SF it would be this one!",
          },
        ],
        challengeLevel: 4 / 5,
        lengthMiles: 0.7,
        estimatedTimeMin: 14,
      },
    ],
    skiing: [
      {
        name: "Squaw Valley Ski Resort",
        description:
          "The second largest ski resort in the Lake Tahoe area.Home to the 1960 Winter Olympics, Squaw Valley is in the Sierra Nevada Range and is the second-largest ski resort in the Lake Tahoe area. In 2012, Squaw Valley joined with Alpine Meadows to offer joint access to both resorts on one lift ticket -- over 6,000 acres across both.",
        address: "1960 Squaw Valley Road, Olympic Village, CA, 96146",
        coordinates: {
          latitude: 39.196561,
          longitude: -120.236201,
        },
        phone: "(800) 403-0206",
        email: "info@squawalpine.com",
        map: "",
        pictures: [],
        raiting: 4.9,
        comments: [
          {
            username: "seandubidi456",
            timeStamp: 1586651860844,
            title: "awesome",
            comment: "really enjoyed my time here",
          },
        ],
        challengeLevel: 4 / 5,
        lengthMiles: 7,
        estimatedTimeMin: 10,
      },
    ],
  },
  "Santa Clara": {},
  Berkeley: {},
  Oakland: {},
  "San Jose": {},
};

export default mockData;
