export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: 'What is the capital of France?',
      answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      id: 3,
      question: 'What is the smallest country in the world?',
      answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
      correctAnswer: 'Vatican City',
    },
    {
      id: 4,
      question: 'What is the most widely spoken language in the world?',
      answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
      correctAnswer: 'Mandarin',
    },
    {
      id: 5,
      question: 'Who is the founder of Microsoft?',
      answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
      correctAnswer: 'Bill Gates',
    },
  ],
};

export const quizData = [
  {
    id: 1,
    title: 'History Trivia',
    imageUrl:
      'https://images.unsplash.com/photo-1637329097076-5d0209af3ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    difficulty: 'Medium',
    category: 'History',
  },
  {
    id: 2,
    title: 'MUTD',
    imageUrl:
      'https://images.unsplash.com/photo-1563382563342-db6825814fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    difficulty: 'Easy',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Suits',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    difficulty: 'Hard',
    category: 'Tv Series',
  },
  {
    id: 4,
    title: 'Movie Trivia',
    imageUrl:
      'https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg',
    difficulty: 'Hard',
    category: 'Movies',
  },
  {
    id: 5,
    title: 'OpenAI',
    imageUrl:
      'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/01/30023721/openai-chatgpt-elon-musk-artificial-intelligence.png?tr=w-1200,h-900',
    difficulty: 'Medium',
    category: 'AI',
  },
  {
    id: 6,
    title: 'Web Development Quiz',
    imageUrl:
      'https://www.vocso.com/blog/wp-content/uploads/2022/04/Top-Web-Development-Tools.jpg',
    difficulty: 'Hard',
    category: 'Software Development',
  },
  {
    id: 7,
    title: 'Ancient Civilizations',
    imageUrl:
      'https://oomscholasticblog.com/sites/default/files/styles/450h_x_autowidth/public/ancient%20civs%20oom%20header.png?itok=B4YmPZAY',
    difficulty: 'Easy',
    category: 'History',
  },
  {
    id: 8,
    title: 'World Wars Trivia',
    imageUrl:
      'https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2013/09/ypres.jpg?ssl=1',
    difficulty: 'Medium',
    category: 'History',
  },
  {
    id: 9,
    title: 'Famous Historical Figures',
    imageUrl:
      'https://www.viralbake.com/wp-content/uploads/2018/12/collage.jpg',
    difficulty: 'Medium',
    category: 'History',
  },
  {
    id: 10,
    title: 'American Revolution',
    imageUrl:
      'https://assets.editorial.aetnd.com/uploads/2009/11/washington-crosses-the-delaware.jpg',
    difficulty: 'Hard',
    category: 'History',
  },
  {
    id: 11,
    title: 'French Revolution',
    imageUrl:
      'https://assets.ltkcontent.com/images/102789/french-revolution-battle_396f7b8db4.jpg',
    difficulty: 'Hard',
    category: 'History',
  },
  {
    id: 12,
    title: 'UCL',
    imageUrl:
      'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    difficulty: 'Medium',
    category: 'Sports',
  },

  // Music
  {
    id: 13,
    title: 'Music Theory',
    imageUrl:
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    difficulty: 'Hard',
    category: 'Music',
  },
  {
    id: 14,
    title: 'Hip-hop',
    imageUrl:
      'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    difficulty: 'Medium',
    category: 'Music',
  },
  {
    id: 15,
    title: 'Rock',
    imageUrl:
      'https://c1.wallpaperflare.com/preview/204/360/969/artist-rock-n-roll-guitar-rock.jpg',
    difficulty: 'Hard',
    category: 'Music',
  },
  {
    id: 16,
    title: 'UK Music',
    imageUrl:
      'https://assets-cdn.audionetwork.com/templates/images/Image_8318_107.png',
    difficulty: 'Medium',
    category: 'Music',
  },
  {
    id: 17,
    title: 'Maverick City music',
    imageUrl:
      'https://www.thechristianbeat.org/wp-content/uploads/2021/06/maverickcitymusic2021-scaled-e1622729183901-1024x649.jpg',
    difficulty: 'Hard',
    category: 'Music',
  },
  // Tv Series
  {
    id: 18,
    title: 'Mr Robot',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
    difficulty: 'Medium',
    category: 'Tv Series',
  },
  {
    id: 19,
    title: 'Mr Robot',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
    difficulty: 'Medium',
    category: 'Tv Series',
  },
  // Movies
  {
    id: 20,
    title: 'The Hunger Games',
    imageUrl:
      'https://media.wired.com/photos/593233d05c4fbd732b5512f0/master/w_2560%2Cc_limit/Gale-and-Katniss.jpg',
    difficulty: 'Hard',
    category: 'Movies',
  },
  {
    id: 21,
    title: 'John Wick',
    imageUrl:
      'https://images03.military.com/sites/default/files/styles/full/public/2023-05/1time%20john%20wick%205%20announced%201200.jpg',
    difficulty: 'Medium',
    category: 'Movies',
  },
  {
    id: 22,
    title: 'Avatar',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
    difficulty: 'Hard',
    category: 'Movies',
  },
  {
    id: 23,
    title: 'Fast and Furious',
    imageUrl: 'https://www.syfy.com/sites/syfy/files/2023/03/fast_x_poster.jpg',
    difficulty: 'Easy',
    category: 'Movies',
  },
  {
    id: 24,
    title: 'The Shack',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/53a91858e4b006b9082369ca/1497953263302-54U2MO3UP9CED0ZDKTA9/image-asset.jpeg?format=1000w',
    difficulty: 'Easy',
    category: 'Movies',
  },
];

export default quizData;
