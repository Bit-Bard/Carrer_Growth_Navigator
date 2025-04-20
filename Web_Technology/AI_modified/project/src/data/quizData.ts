export interface QuizQuestion {
  id: number;
  text: string;
  category: 'personality' | 'skills' | 'interests' | 'goals';
  options: {
    id: number;
    text: string;
    affects: {
      careerId: string;
      weight: number;
    }[];
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 0,
    text: "How do you prefer to solve problems?",
    category: "personality",
    options: [
      {
        id: 0,
        text: "Analytically, breaking things down step by step",
        affects: [
          { careerId: "data-science", weight: 10 },
          { careerId: "software-engineering", weight: 8 },
          { careerId: "finance", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Creatively, thinking outside the box",
        affects: [
          { careerId: "ux-design", weight: 10 },
          { careerId: "marketing", weight: 8 },
          { careerId: "entrepreneurship", weight: 7 }
        ]
      },
      {
        id: 2,
        text: "Collaboratively, discussing with others",
        affects: [
          { careerId: "project-management", weight: 10 },
          { careerId: "hr", weight: 8 },
          { careerId: "teaching", weight: 7 }
        ]
      },
      {
        id: 3,
        text: "Intuitively, going with what feels right",
        affects: [
          { careerId: "healthcare", weight: 7 },
          { careerId: "counseling", weight: 10 },
          { careerId: "entrepreneurship", weight: 6 }
        ]
      }
    ]
  },
  {
    id: 1,
    text: "Which skills do you enjoy using the most?",
    category: "skills",
    options: [
      {
        id: 0,
        text: "Technical and logical skills",
        affects: [
          { careerId: "software-engineering", weight: 10 },
          { careerId: "data-science", weight: 9 },
          { careerId: "cybersecurity", weight: 8 }
        ]
      },
      {
        id: 1,
        text: "Communication and interpersonal skills",
        affects: [
          { careerId: "marketing", weight: 9 },
          { careerId: "hr", weight: 10 },
          { careerId: "teaching", weight: 8 }
        ]
      },
      {
        id: 2,
        text: "Creative and design skills",
        affects: [
          { careerId: "ux-design", weight: 10 },
          { careerId: "content-creation", weight: 8 },
          { careerId: "marketing", weight: 6 }
        ]
      },
      {
        id: 3,
        text: "Organizational and planning skills",
        affects: [
          { careerId: "project-management", weight: 10 },
          { careerId: "finance", weight: 7 },
          { careerId: "operations", weight: 8 }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "What type of environment do you thrive in?",
    category: "personality",
    options: [
      {
        id: 0,
        text: "Fast-paced and dynamic",
        affects: [
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "marketing", weight: 8 },
          { careerId: "project-management", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Structured and organized",
        affects: [
          { careerId: "finance", weight: 9 },
          { careerId: "operations", weight: 8 },
          { careerId: "legal", weight: 10 }
        ]
      },
      {
        id: 2,
        text: "Collaborative and team-oriented",
        affects: [
          { careerId: "hr", weight: 9 },
          { careerId: "healthcare", weight: 7 },
          { careerId: "teaching", weight: 8 }
        ]
      },
      {
        id: 3,
        text: "Independent and quiet",
        affects: [
          { careerId: "software-engineering", weight: 7 },
          { careerId: "data-science", weight: 8 },
          { careerId: "content-creation", weight: 6 }
        ]
      }
    ]
  },
  {
    id: 3,
    text: "What interests you the most?",
    category: "interests",
    options: [
      {
        id: 0,
        text: "Technology and innovation",
        affects: [
          { careerId: "software-engineering", weight: 9 },
          { careerId: "data-science", weight: 10 },
          { careerId: "cybersecurity", weight: 8 }
        ]
      },
      {
        id: 1,
        text: "Helping and understanding people",
        affects: [
          { careerId: "healthcare", weight: 10 },
          { careerId: "counseling", weight: 9 },
          { careerId: "teaching", weight: 8 }
        ]
      },
      {
        id: 2,
        text: "Business and strategy",
        affects: [
          { careerId: "finance", weight: 8 },
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "marketing", weight: 7 }
        ]
      },
      {
        id: 3,
        text: "Creativity and design",
        affects: [
          { careerId: "ux-design", weight: 10 },
          { careerId: "content-creation", weight: 9 },
          { careerId: "marketing", weight: 6 }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "What's your preferred way of learning?",
    category: "personality",
    options: [
      {
        id: 0,
        text: "Reading and researching independently",
        affects: [
          { careerId: "data-science", weight: 8 },
          { careerId: "legal", weight: 9 },
          { careerId: "content-creation", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Hands-on practice and experimentation",
        affects: [
          { careerId: "software-engineering", weight: 9 },
          { careerId: "ux-design", weight: 8 },
          { careerId: "healthcare", weight: 7 }
        ]
      },
      {
        id: 2,
        text: "Discussion and collaboration with others",
        affects: [
          { careerId: "teaching", weight: 9 },
          { careerId: "hr", weight: 8 },
          { careerId: "project-management", weight: 7 }
        ]
      },
      {
        id: 3,
        text: "Watching demonstrations and tutorials",
        affects: [
          { careerId: "operations", weight: 6 },
          { careerId: "cybersecurity", weight: 7 },
          { careerId: "finance", weight: 5 }
        ]
      }
    ]
  },
  {
    id: 5,
    text: "Which values are most important to you in a career?",
    category: "goals",
    options: [
      {
        id: 0,
        text: "Innovation and cutting-edge work",
        affects: [
          { careerId: "software-engineering", weight: 8 },
          { careerId: "data-science", weight: 9 },
          { careerId: "ux-design", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Security and stability",
        affects: [
          { careerId: "finance", weight: 9 },
          { careerId: "legal", weight: 8 },
          { careerId: "healthcare", weight: 7 }
        ]
      },
      {
        id: 2,
        text: "Helping others and making a difference",
        affects: [
          { careerId: "healthcare", weight: 10 },
          { careerId: "teaching", weight: 9 },
          { careerId: "counseling", weight: 8 }
        ]
      },
      {
        id: 3,
        text: "Recognition and advancement opportunities",
        affects: [
          { careerId: "marketing", weight: 8 },
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "project-management", weight: 7 }
        ]
      }
    ]
  },
  {
    id: 6,
    text: "How do you handle stress and pressure?",
    category: "personality",
    options: [
      {
        id: 0,
        text: "Create a detailed plan and follow it",
        affects: [
          { careerId: "project-management", weight: 9 },
          { careerId: "operations", weight: 8 },
          { careerId: "finance", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Take a step back and analyze the situation",
        affects: [
          { careerId: "data-science", weight: 8 },
          { careerId: "counseling", weight: 7 },
          { careerId: "legal", weight: 6 }
        ]
      },
      {
        id: 2,
        text: "Talk it through with others",
        affects: [
          { careerId: "hr", weight: 9 },
          { careerId: "teaching", weight: 7 },
          { careerId: "healthcare", weight: 6 }
        ]
      },
      {
        id: 3,
        text: "Dive in and solve the problems as they come",
        affects: [
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "software-engineering", weight: 8 },
          { careerId: "cybersecurity", weight: 7 }
        ]
      }
    ]
  },
  {
    id: 7,
    text: "What would colleagues typically ask for your help with?",
    category: "skills",
    options: [
      {
        id: 0,
        text: "Technical problems and troubleshooting",
        affects: [
          { careerId: "software-engineering", weight: 10 },
          { careerId: "cybersecurity", weight: 9 },
          { careerId: "data-science", weight: 8 }
        ]
      },
      {
        id: 1,
        text: "Writing and communication",
        affects: [
          { careerId: "content-creation", weight: 10 },
          { careerId: "marketing", weight: 8 },
          { careerId: "legal", weight: 7 }
        ]
      },
      {
        id: 2,
        text: "Organizing tasks and managing projects",
        affects: [
          { careerId: "project-management", weight: 10 },
          { careerId: "operations", weight: 9 },
          { careerId: "hr", weight: 6 }
        ]
      },
      {
        id: 3,
        text: "Resolving conflicts and providing advice",
        affects: [
          { careerId: "counseling", weight: 10 },
          { careerId: "hr", weight: 9 },
          { careerId: "teaching", weight: 7 }
        ]
      }
    ]
  },
  {
    id: 8,
    text: "What type of goals do you usually set for yourself?",
    category: "goals",
    options: [
      {
        id: 0,
        text: "Knowledge-based goals (learning new skills)",
        affects: [
          { careerId: "data-science", weight: 9 },
          { careerId: "teaching", weight: 8 },
          { careerId: "software-engineering", weight: 7 }
        ]
      },
      {
        id: 1,
        text: "Achievement-based goals (awards, recognition)",
        affects: [
          { careerId: "marketing", weight: 9 },
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "content-creation", weight: 8 }
        ]
      },
      {
        id: 2,
        text: "Financial goals (salary, investments)",
        affects: [
          { careerId: "finance", weight: 10 },
          { careerId: "entrepreneurship", weight: 9 },
          { careerId: "legal", weight: 8 }
        ]
      },
      {
        id: 3,
        text: "Impact-based goals (helping others)",
        affects: [
          { careerId: "healthcare", weight: 10 },
          { careerId: "counseling", weight: 9 },
          { careerId: "teaching", weight: 8 }
        ]
      }
    ]
  },
  {
    id: 9,
    text: "How important is work-life balance to you?",
    category: "goals",
    options: [
      {
        id: 0,
        text: "Very important - I want predictable hours",
        affects: [
          { careerId: "operations", weight: 8 },
          { careerId: "finance", weight: 7 },
          { careerId: "legal", weight: 6 }
        ]
      },
      {
        id: 1,
        text: "Somewhat important - I can be flexible when needed",
        affects: [
          { careerId: "project-management", weight: 8 },
          { careerId: "teaching", weight: 7 },
          { careerId: "ux-design", weight: 7 }
        ]
      },
      {
        id: 2,
        text: "Not very important - I'm willing to prioritize work",
        affects: [
          { careerId: "entrepreneurship", weight: 10 },
          { careerId: "healthcare", weight: 8 },
          { careerId: "software-engineering", weight: 7 }
        ]
      },
      {
        id: 3,
        text: "It depends on how passionate I am about the work",
        affects: [
          { careerId: "content-creation", weight: 8 },
          { careerId: "data-science", weight: 7 },
          { careerId: "marketing", weight: 7 }
        ]
      }
    ]
  }
];