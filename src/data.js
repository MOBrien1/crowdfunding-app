export const allProjects = [
    {
        id: 1,
        title: "Project 1",
        description: "First project", 
        post_code: "1023",
        suburb: "Perth",
        seeking: "Donations food",
        image: "https://via.placeholder.com/300.jpg",
        is_open: true,
        date_created: "2020-03-20T14:28:23.382748Z",
        owner: "megan", 
        
    },
    {
        id: 2,
        title: "Project 2",
        description: "Sec project", 
        post_code: "1023",
        suburb: "Perth",
        seeking: "Donations food",
        image: "https://via.placeholder.com/300.jpg",
        is_open: true,
        date_created: "2020-03-20T14:28:23.382748Z",
        owner: "megan", 
        
    },
];

export const oneProject =     {
    id: 1,
    title: "Project 1",
    description: "First project", 
    post_code: "1023",
    suburb: "Perth",
    seeking: "Donations food",
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-03-20T14:28:23.382748Z",
    owner: "megan",
    pledges: [
        {
          id: 1,
          amount: 100,
          comment: "A comment for the pledge",
          anonymous: false,
          supporter: 3,
          project_id: 1,
        },
      ],
};

