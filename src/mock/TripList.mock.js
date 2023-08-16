const points = [
  {
    'id': '8fb4167b-1848-4519-8fc0-ec7b3f296763',
    'base_price': 6356,
    'date_from': '2023-07-31T21:00:00.498Z',
    'date_to': '2023-08-13T23:00:00.498Z',
    'destination': 'd32368d8-b24b-4860-9379-e251dea14fe2',
    'is_favorite': true,
    'offers': [],
    'type': 'restaurant',
    'isEdit': false,
  },
  {
    'id': '2a0e77f5-94a5-4f1a-9d2d-f67889d16d47',
    'base_price': 9159,
    'date_from': '2023-08-05T21:00:00.498Z',
    'date_to': '2023-08-13T14:00:00.498Z',
    'destination': '1859a983-ed30-4936-8975-c7e4926c422e',
    'is_favorite': true,
    'offers': [
      'a5abbe23-0738-48c8-b585-f4a60adc7569',
      'e6ce6b14-da59-47a4-8c68-fffcc7ec11fc',
      '649c324e-1b5a-4aca-ba97-50435031b19e',
      'a3699de6-6673-4cb1-a794-490dcb813cd7',
      '257324ed-0765-4e67-8411-d4f3305acbae',
      '57589fa9-c4f7-4c4e-889b-f532324c9bf7'
    ],
    'type': 'flight',
    'isEdit': true,
  },
  {
    'id': '8006d236-a55c-45e6-8887-1f6d37b43ffc',
    'base_price': 6541,
    'date_from': '2023-08-06T21:00:00.498Z',
    'date_to': '2023-08-14T16:00:00.498Z',
    'destination': 'bbffdeed-2ba6-448a-8e98-e4acc545cd67',
    'is_favorite': false,
    'offers': [
      '3a76e629-3df4-41d9-a3d1-bd97917efe21',
      'c94a770c-fae7-4e9e-921a-729c92dd7f81'
    ],
    'type': 'drive',
    'isEdit': false,
  },
  {
    'id': 'a9a7cb60-e677-4be3-9ed1-4991e829d52a',
    'base_price': 3543,
    'date_from': '2023-08-05T21:00:00.498Z',
    'date_to': '2023-08-14T02:00:00.498Z',
    'destination': '91d98c5b-3d4c-4eb4-a44a-a46af989a7a4',
    'is_favorite': false,
    'offers': [
      'c8c35e19-82ed-4a3f-8d2f-71d37c47e51d',
      'df9295b4-cbfb-44c8-8182-03302fadf990',
      '1c3d6a99-5010-432a-ad59-5e50427b7559'
    ],
    'type': 'ship',
    'isEdit': false,
  },
  {
    'id': '792db79d-b959-4def-a4a3-da2800b29b38',
    'base_price': 3933,
    'date_from': '2023-08-09T21:00:00.498Z',
    'date_to': '2023-08-13T09:00:00.498Z',
    'destination': 'ea2eb0cd-96f7-415b-8fc8-2d5545130ec9',
    'is_favorite': true,
    'offers': [
      'bde753aa-c25d-42fd-bed8-902604e6a348'
    ],
    'type': 'bus',
    'isEdit': false,
  },
  {
    'id': 'b8fe1dc1-4fc7-4a15-9d25-434a7a83845b',
    'base_price': 7097,
    'date_from': '2023-08-09T21:00:00.498Z',
    'date_to': '2023-08-13T14:00:00.498Z',
    'destination': 'bbffdeed-2ba6-448a-8e98-e4acc545cd67',
    'is_favorite': true,
    'offers': [
      '838ff1ca-0e90-471c-a789-de1e2f8a87c7',
      'f2926bf2-02a8-431b-a55a-882dd1a83bcc'
    ],
    'type': 'train',
    'isEdit': false,
  },
  {
    'id': 'db8935a4-c0af-44f1-8502-d9c7df7d9966',
    'base_price': 7842,
    'date_from': '2023-08-09T21:00:00.498Z',
    'date_to': '2023-08-14T21:00:00.498Z',
    'destination': '91d98c5b-3d4c-4eb4-a44a-a46af989a7a4',
    'is_favorite': false,
    'offers': [],
    'type': 'check-in',
    'isEdit': false,
  },
  {
    'id': '7875146b-deae-4a19-93cd-cafedc38805d',
    'base_price': 4582,
    'date_from': '2023-08-07T21:00:00.498Z',
    'date_to': '2023-08-14T03:00:00.498Z',
    'destination': 'ea2eb0cd-96f7-415b-8fc8-2d5545130ec9',
    'is_favorite': true,
    'offers': [
      '89b1fd8f-1479-49bd-9da0-9afea14aaf5a',
      'efe37af4-6c9f-4492-86d9-e75e26a173eb'
    ],
    'type': 'taxi',
    'isEdit': false,
  },
  {
    'id': '810760ae-7908-4c72-b3a8-1cf4bb4e680b',
    'base_price': 2553,
    'date_from': '2023-08-02T21:00:00.498Z',
    'date_to': '2023-08-13T09:00:00.498Z',
    'destination': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'is_favorite': true,
    'offers': [
      'a078c58c-fa56-4096-bd6f-beb6045a8876',
      '4db1cef6-efbf-4df7-acad-b4f5916914e4',
      '036e530b-6c4c-4d80-b462-8402440c6de4'
    ],
    'type': 'check-in',
    'isEdit': false,
  },
  {
    'id': '06c964d4-c4ae-41a9-ac1b-587b0f35f84d',
    'base_price': 7631,
    'date_from': '2023-08-08T21:00:00.498Z',
    'date_to': '2023-08-13T06:00:00.498Z',
    'destination': 'fba9b9b6-b0e2-45ab-9d16-176e1f06f391',
    'is_favorite': true,
    'offers': [
      '83021be3-1974-4aa9-b9e1-ac225393838b',
      'bde753aa-c25d-42fd-bed8-902604e6a348'
    ],
    'type': 'bus',
    'isEdit': false,
  },
  {
    'id': 'bf1e5979-4dd2-448f-9483-346ac8617374',
    'base_price': 6228,
    'date_from': '2023-08-07T21:00:00.498Z',
    'date_to': '2023-08-13T20:00:00.498Z',
    'destination': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'is_favorite': false,
    'offers': [
      '57589fa9-c4f7-4c4e-889b-f532324c9bf7'
    ],
    'type': 'flight',
    'isEdit': false,
  },
  {
    'id': '43e14dc3-2a59-4ee7-b7d6-4d61eb90ccba',
    'base_price': 4064,
    'date_from': '2023-08-04T21:00:00.498Z',
    'date_to': '2023-08-14T04:00:00.498Z',
    'destination': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'is_favorite': false,
    'offers': [
      'de2bd97d-2055-48af-85c8-cc4beec25ac2'
    ],
    'type': 'restaurant',
    'isEdit': false,
  },
  {
    'id': 'ec224137-847f-4a5b-9290-ca5479a65896',
    'base_price': 1720,
    'date_from': '2023-08-04T21:00:00.498Z',
    'date_to': '2023-08-14T19:00:00.498Z',
    'destination': 'fba9b9b6-b0e2-45ab-9d16-176e1f06f391',
    'is_favorite': false,
    'offers': [],
    'type': 'restaurant',
    'isEdit': false,
  },
  {
    'id': '6fd47a43-7d0d-4135-a56c-5bbf84b67ae6',
    'base_price': 413,
    'date_from': '2023-08-08T21:00:00.498Z',
    'date_to': '2023-08-13T19:00:00.498Z',
    'destination': '1859a983-ed30-4936-8975-c7e4926c422e',
    'is_favorite': false,
    'offers': [],
    'type': 'drive',
    'isEdit': false,
  },
  {
    'id': '80c28d39-7e41-4a4d-977c-6d907ab6d5e2',
    'base_price': 8059,
    'date_from': '2023-08-03T21:00:00.498Z',
    'date_to': '2023-08-14T02:00:00.498Z',
    'destination': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'is_favorite': false,
    'offers': [],
    'type': 'taxi',
    'isEdit': false,
  },
  {
    'id': 'b4760438-9f1c-4c65-a88c-69175ff0f447',
    'base_price': 1158,
    'date_from': '2023-08-07T21:00:00.498Z',
    'date_to': '2023-08-14T05:00:00.498Z',
    'destination': 'a744db97-655b-463a-ac2e-f4c1eb9b71ec',
    'is_favorite': true,
    'offers': [],
    'type': 'restaurant',
    'isEdit': false,
  },
  {
    'id': 'c043a4d6-0480-4e04-86c4-49d0e538b1cc',
    'base_price': 1291,
    'date_from': '2023-08-04T21:00:00.498Z',
    'date_to': '2023-08-14T16:00:00.498Z',
    'destination': 'd32368d8-b24b-4860-9379-e251dea14fe2',
    'is_favorite': true,
    'offers': [
      '6bca2430-6337-4016-b611-6a870eb4b8d5',
      '4a3d8aed-3027-40c3-9a63-8be1d37e3d52',
      'c8c35e19-82ed-4a3f-8d2f-71d37c47e51d',
      'df9295b4-cbfb-44c8-8182-03302fadf990',
      '1c3d6a99-5010-432a-ad59-5e50427b7559'
    ],
    'type': 'ship',
    'isEdit': false,
  },
  {
    'id': 'f96ded4f-afa2-4b00-bf93-c13003003a91',
    'base_price': 3782,
    'date_from': '2023-08-01T21:00:00.498Z',
    'date_to': '2023-08-13T15:00:00.498Z',
    'destination': 'ee688069-60fa-48de-ab95-01a68d1b92b5',
    'is_favorite': false,
    'offers': [
      '1c3d6a99-5010-432a-ad59-5e50427b7559'
    ],
    'type': 'ship',
    'isEdit': false,
  },
  {
    'id': '3bf929bf-fb2e-4d24-b9ba-d4ea36f51074',
    'base_price': 8473,
    'date_from': '2023-08-01T21:00:00.498Z',
    'date_to': '2023-08-14T01:00:00.498Z',
    'destination': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'is_favorite': true,
    'offers': [
      '257324ed-0765-4e67-8411-d4f3305acbae',
      '57589fa9-c4f7-4c4e-889b-f532324c9bf7'
    ],
    'type': 'flight',
    'isEdit': false,
  },
  {
    'id': 'dfa2f1cb-6b3f-405a-954d-c771fd722cbc',
    'base_price': 3033,
    'date_from': '2023-07-31T21:00:00.498Z',
    'date_to': '2023-08-14T08:00:00.498Z',
    'destination': 'fba9b9b6-b0e2-45ab-9d16-176e1f06f391',
    'is_favorite': false,
    'offers': [
      'ea000fe0-1a4d-4392-89f2-16c2281d0024',
      '83021be3-1974-4aa9-b9e1-ac225393838b',
      'bde753aa-c25d-42fd-bed8-902604e6a348'
    ],
    'type': 'bus',
    'isEdit': false,
  },
  {
    'id': 'fb325387-1ebb-4dff-a047-69f1408856d1',
    'base_price': 1527,
    'date_from': '2023-08-02T21:00:00.498Z',
    'date_to': '2023-08-13T17:00:00.498Z',
    'destination': 'bbffdeed-2ba6-448a-8e98-e4acc545cd67',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing',
    'isEdit': false,
  },
  {
    'id': '1d24ac7b-80ac-4d06-b12a-a81eb92ef1d7',
    'base_price': 8329,
    'date_from': '2023-07-31T21:00:00.498Z',
    'date_to': '2023-08-13T12:00:00.498Z',
    'destination': '1859a983-ed30-4936-8975-c7e4926c422e',
    'is_favorite': true,
    'offers': [
      'e0be39fd-bce4-4354-9055-67d4e55f7912',
      '5e30b3f1-db8f-49eb-a8e6-3a731c72ad75',
      'a078c58c-fa56-4096-bd6f-beb6045a8876',
      '4db1cef6-efbf-4df7-acad-b4f5916914e4',
      '036e530b-6c4c-4d80-b462-8402440c6de4'
    ],
    'type': 'check-in',
    'isEdit': false,
  },
  {
    'id': '1df51ed6-f9ab-422b-b354-5181e0a042d3',
    'base_price': 2283,
    'date_from': '2023-08-03T21:00:00.498Z',
    'date_to': '2023-08-14T09:00:00.498Z',
    'destination': 'bbffdeed-2ba6-448a-8e98-e4acc545cd67',
    'is_favorite': false,
    'offers': [
      '34f1cfed-e882-4dd2-aae5-60c523891995',
      'de2bd97d-2055-48af-85c8-cc4beec25ac2'
    ],
    'type': 'restaurant',
    'isEdit': false,
  },
  {
    'id': '7c631d6d-0f10-4709-bf60-25cbf80da9bd',
    'base_price': 6756,
    'date_from': '2023-08-08T21:00:00.498Z',
    'date_to': '2023-08-14T11:00:00.498Z',
    'destination': '1859a983-ed30-4936-8975-c7e4926c422e',
    'is_favorite': true,
    'offers': [
      '1c3d6a99-5010-432a-ad59-5e50427b7559'
    ],
    'type': 'ship',
    'isEdit': false,
  },
  {
    'id': '7927bd19-1b7a-4fb3-9a78-3ee2aa5430da',
    'base_price': 9524,
    'date_from': '2023-08-04T21:00:00.498Z',
    'date_to': '2023-08-13T15:00:00.498Z',
    'destination': '1859a983-ed30-4936-8975-c7e4926c422e',
    'is_favorite': false,
    'offers': [
      '257324ed-0765-4e67-8411-d4f3305acbae',
      '57589fa9-c4f7-4c4e-889b-f532324c9bf7'
    ],
    'type': 'flight',
    'isEdit': false,
  }
];

const destinations = [
  {
    'id': 'fba9b9b6-b0e2-45ab-9d16-176e1f06f391',
    'name': 'Sochi'
  },
  {
    'id': 'a744db97-655b-463a-ac2e-f4c1eb9b71ec',
    'name': 'Amsterdam'
  },
  {
    'id': '91d98c5b-3d4c-4eb4-a44a-a46af989a7a4',
    'description': 'Rome - famous for its crowded street markets with the best street food in Asia',
    'name': 'Rome',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/13.jpg',
        'description': 'Rome middle-eastern paradise'
      }
    ]
  },
  {
    'id': 'aca57237-0a65-404a-9f6b-cdbc95b3b498',
    'description': 'Den Haag - with an embankment of a mighty river as a centre of attraction',
    'name': 'Den Haag',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/15.jpg',
        'description': 'Den Haag is a beautiful city'
      }
    ]
  },
  {
    'id': 'ee688069-60fa-48de-ab95-01a68d1b92b5',
    'description': 'Barcelona - famous for its crowded street markets with the best street food in Asia',
    'name': 'Barcelona',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/11.jpg',
        'description': 'Barcelona famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/1.jpg',
        'description': 'Barcelona with a beautiful old town'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/13.jpg',
        'description': 'Barcelona for those who value comfort and coziness'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/12.jpg',
        'description': 'Barcelona full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': 'bbffdeed-2ba6-448a-8e98-e4acc545cd67',
    'description': 'Tokio - full of of cozy canteens where you can try the best coffee in the Middle East',
    'name': 'Tokio',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/12.jpg',
        'description': 'Tokio in a middle of Europe'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/7.jpg',
        'description': 'Tokio with crowded streets'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/9.jpg',
        'description': 'Tokio with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    'id': '6e839f09-0288-4b79-9173-a1cbe53d8f31',
    'description': 'Madrid - for those who value comfort and coziness',
    'name': 'Madrid',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/2.jpg',
        'description': 'Madrid a true asian pearl'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/18.jpg',
        'description': 'Madrid a true asian pearl'
      }
    ]
  },
  {
    'id': '1859a983-ed30-4936-8975-c7e4926c422e',
    'description': 'Milan - with a beautiful old town',
    'name': 'Milan',
    'pictures': []
  },
  {
    'id': 'ea2eb0cd-96f7-415b-8fc8-2d5545130ec9',
    'description': 'Venice - for those who value comfort and coziness',
    'name': 'Venice',
    'pictures': [
      {
        'src': 'https://21.objects.pages.academy/static/destinations/13.jpg',
        'description': 'Venice famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://21.objects.pages.academy/static/destinations/18.jpg',
        'description': 'Venice full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': 'd32368d8-b24b-4860-9379-e251dea14fe2',
    'description': 'Hiroshima - full of of cozy canteens where you can try the best coffee in the Middle East',
    'name': 'Hiroshima',
    'pictures': []
  }
];

const offers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '70e408fd-b43b-46aa-8213-a9707516eead',
        'title': 'Upgrade to a business class',
        'price': 118
      },
      {
        'id': '3cd7f85a-919e-4196-9fa2-813a71f46376',
        'title': 'Choose the radio station',
        'price': 84
      },
      {
        'id': '894ef0f6-9f8f-4f81-a370-ace5dcfc90d8',
        'title': 'Choose temperature',
        'price': 54
      },
      {
        'id': '89b1fd8f-1479-49bd-9da0-9afea14aaf5a',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 173
      },
      {
        'id': 'efe37af4-6c9f-4492-86d9-e75e26a173eb',
        'title': 'Drive slowly',
        'price': 50
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 'ea000fe0-1a4d-4392-89f2-16c2281d0024',
        'title': 'Infotainment system',
        'price': 54
      },
      {
        'id': '83021be3-1974-4aa9-b9e1-ac225393838b',
        'title': 'Order meal',
        'price': 96
      },
      {
        'id': 'bde753aa-c25d-42fd-bed8-902604e6a348',
        'title': 'Choose seats',
        'price': 133
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '6fe77226-9586-40c4-ac0b-2d0ee0c5d0d5',
        'title': 'Book a taxi at the arrival point',
        'price': 149
      },
      {
        'id': '838ff1ca-0e90-471c-a789-de1e2f8a87c7',
        'title': 'Order a breakfast',
        'price': 35
      },
      {
        'id': 'f2926bf2-02a8-431b-a55a-882dd1a83bcc',
        'title': 'Wake up at a certain time',
        'price': 51
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'a5abbe23-0738-48c8-b585-f4a60adc7569',
        'title': 'Choose meal',
        'price': 175
      },
      {
        'id': 'e6ce6b14-da59-47a4-8c68-fffcc7ec11fc',
        'title': 'Choose seats',
        'price': 179
      },
      {
        'id': '649c324e-1b5a-4aca-ba97-50435031b19e',
        'title': 'Upgrade to comfort class',
        'price': 161
      },
      {
        'id': 'a3699de6-6673-4cb1-a794-490dcb813cd7',
        'title': 'Upgrade to business class',
        'price': 145
      },
      {
        'id': '257324ed-0765-4e67-8411-d4f3305acbae',
        'title': 'Add luggage',
        'price': 55
      },
      {
        'id': '57589fa9-c4f7-4c4e-889b-f532324c9bf7',
        'title': 'Business lounge',
        'price': 92
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 'e0be39fd-bce4-4354-9055-67d4e55f7912',
        'title': 'Choose the time of check-in',
        'price': 192
      },
      {
        'id': '5e30b3f1-db8f-49eb-a8e6-3a731c72ad75',
        'title': 'Choose the time of check-out',
        'price': 151
      },
      {
        'id': 'a078c58c-fa56-4096-bd6f-beb6045a8876',
        'title': 'Add breakfast',
        'price': 105
      },
      {
        'id': '4db1cef6-efbf-4df7-acad-b4f5916914e4',
        'title': 'Laundry',
        'price': 185
      },
      {
        'id': '036e530b-6c4c-4d80-b462-8402440c6de4',
        'title': 'Order a meal from the restaurant',
        'price': 74
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': '1c411d14-3d30-468c-987b-3ac8ecaa8556',
        'title': 'Choose meal',
        'price': 111
      },
      {
        'id': '6bca2430-6337-4016-b611-6a870eb4b8d5',
        'title': 'Choose seats',
        'price': 161
      },
      {
        'id': '4a3d8aed-3027-40c3-9a63-8be1d37e3d52',
        'title': 'Upgrade to comfort class',
        'price': 131
      },
      {
        'id': 'c8c35e19-82ed-4a3f-8d2f-71d37c47e51d',
        'title': 'Upgrade to business class',
        'price': 193
      },
      {
        'id': 'df9295b4-cbfb-44c8-8182-03302fadf990',
        'title': 'Add luggage',
        'price': 57
      },
      {
        'id': '1c3d6a99-5010-432a-ad59-5e50427b7559',
        'title': 'Business lounge',
        'price': 102
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '3a76e629-3df4-41d9-a3d1-bd97917efe21',
        'title': 'With automatic transmission',
        'price': 32
      },
      {
        'id': 'c94a770c-fae7-4e9e-921a-729c92dd7f81',
        'title': 'With air conditioning',
        'price': 191
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': '34f1cfed-e882-4dd2-aae5-60c523891995',
        'title': 'Choose live music',
        'price': 159
      },
      {
        'id': 'de2bd97d-2055-48af-85c8-cc4beec25ac2',
        'title': 'Choose VIP area',
        'price': 123
      }
    ]
  }
];
export function getPoints() {
  return points;
}
export function getDestinationsForPoint(point) {
  const destination = destinations.find((dest) => dest.id === point.id);
  return destination || null; // Возвращаем найденный объект или null, если не найдено
}
export function getOffersForPoint(point) {
  const offersForPoint = [];

  point.offers.forEach((offerId) => {
    const offer = offers.find((offerType) => offerType.type === point.type)
      // eslint-disable-next-line no-shadow
      .offers.find((offer) => offer.id === offerId);

    if (offer) {
      offersForPoint.push(offer);
    }
  });

  return offersForPoint;
}
