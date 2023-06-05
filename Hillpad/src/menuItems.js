export const menuItems = [
    {
      title: 'Browse',
      url: '/browse',
      submenu: [
        {
          title: 'Browse by Country',
          url: '/browse-country',
        },
        {
          title: 'Browse by Discipline',
          url: '/browse-discipline',
        },
        {
          title: 'Programmes',
          url: '/programmes',
          submenu: [
            {
              title: 'Bachelors',
              url: '/browse-country',
            },
            {
              title: 'Masters',
              url: '/browse-discipline',
            },
            {
              title: 'PhD and Doctoral',
              url: '/programmes',
            },
        ]
        },
      ],
    },
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Us',
        url: '/about',
    },
    {
        title: 'Insights',
        url: '/insights',
        submenu: [
          {
            title: 'News',
            url: '/news',
          },
          {
            title: 'Blog',
            url: '/blog',
          },
          {
            title: 'Events',
            url: '/events',
          }
        ],
    },
    {
        title: 'Careers',
        url: '/careers',
    },
    {
        title: 'FAQs',
        url: '/faq',
    },
  ]
