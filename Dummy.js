const events = [
    {
      id: 'e1',
      name: 'Tech Conference 2024',
      address: 'Iraq,Baghdad',
      isFeatured: true,
      date: '2024-09-15',
      imageUrl: 'https://i.pinimg.com/originals/6a/bb/70/6abb7067130142a49e794230222cd8f3.jpg',
   description: 'Join the leading tech innovators and industry experts at Tech Conference 2024 for a day of insightful talks and networking opportunities.'
    },
    {
      id: 'e2',
      name: 'Art Expo 2024',
      address: 'Iraq,Baghdad',
      isFeatured: false,
      date: '2024-08-20',
      imageUrl: 'https://i.pinimg.com/originals/6a/bb/70/6abb7067130142a49e794230222cd8f3.jpg',
      description: 'Discover the latest in contemporary art at Art Expo 2024, featuring works from renowned and emerging artists from around the world.'

    },
    {
      id: 'e3',
      name: 'Music Festival 2024',
      address: 'Iraq,Baghdad',
      isFeatured: true,
      date: '2024-07-10',
      imageUrl: 'https://i.pinimg.com/originals/6a/bb/70/6abb7067130142a49e794230222cd8f3.jpg',
      description: 'Experience an unforgettable day of live performances and entertainment at Music Festival 2024, showcasing top artists and bands.'

    },
    {
      id: 'e4',
      name: 'Food Carnival 2024',
      address: 'Iraq,Baghdad',
      isFeatured: false,
      date: '2024-10-05',
      imageUrl: 'https://th.bing.com/th/id/R.84ce0840689726186576f8c5427d4d8c?rik=lNWYaxQn6uIs2w&pid=ImgRaw&r=0',
      description: 'Indulge in a variety of culinary delights at Food Carnival 2024, featuring food trucks, gourmet vendors, and cooking demonstrations.'

    },
    {
      id: 'e5',
      name: 'Startup Summit 2024',
      address: 'Iraq,Baghdad',
      isFeatured: true,
      date: '2024-11-22',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg',
      description: 'Connect with entrepreneurs and investors at Startup Summit 2024, a premier event for networking, learning, and business growth.'

    }
  ];
  export function GetAllEvenets(){
    return events
  }
  export function getFeatured(){
    return events.filter(event=>event.isFeatured)
  }
  export function getFilteredDate(DateFilter){
    const {month,year}=DateFilter;
    const FilteredEvents=events.filter((event)=>{
        const CreateDate=new Date(event.date)
        return CreateDate.getFullYear()===year &&CreateDate.getMonth()===month-1
    })
    return FilteredEvents
  }
  export function GetEventId(id){
    return events.find(event=>event.id==id)

  }
 
