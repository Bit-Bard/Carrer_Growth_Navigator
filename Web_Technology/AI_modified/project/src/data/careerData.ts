export interface CareerResult {
  id: string;
  title: string;
  description: string;
  skills: string[];
  education: string[];
  resources: {
    courses: {
      title: string;
      url: string;
    }[];
    communities: {
      name: string;
      url: string;
    }[];
    tools: string[];
  };
  jobBoards: {
    name: string;
    url: string;
  }[];
  score?: number;
  match?: number;
}

export const careerSuggestions: CareerResult[] = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Software engineers design, develop, and maintain software systems and applications. This career path combines technical expertise with problem-solving and creative thinking.",
    skills: [
      "Programming languages (JavaScript, Python, Java, etc.)",
      "Software architecture and design patterns",
      "Testing and debugging",
      "Version control (Git)",
      "Problem-solving and analytical thinking"
    ],
    education: [
      "Bachelor's degree in Computer Science or related field",
      "Coding bootcamps",
      "Self-taught with portfolio projects"
    ],
    resources: {
      courses: [
        {
          title: "CS50: Introduction to Computer Science",
          url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        },
        {
          title: "The Odin Project",
          url: "https://www.theodinproject.com/"
        },
        {
          title: "freeCodeCamp",
          url: "https://www.freecodecamp.org/"
        }
      ],
      communities: [
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Dev.to",
          url: "https://dev.to/"
        }
      ],
      tools: [
        "Git and GitHub",
        "VS Code or other IDEs",
        "Docker",
        "Jira or Trello",
        "CI/CD tools (Jenkins, GitHub Actions)"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Hired",
        url: "https://hired.com/"
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Data scientists analyze and interpret complex digital data to help guide decision-making. They combine statistics, mathematics, and programming skills to extract insights from data.",
    skills: [
      "Statistical analysis",
      "Programming (Python, R)",
      "Machine learning algorithms",
      "Data visualization",
      "SQL and database management"
    ],
    education: [
      "Bachelor's or Master's degree in Data Science, Statistics, or related field",
      "Specialized data science bootcamps",
      "Online certifications and courses"
    ],
    resources: {
      courses: [
        {
          title: "Data Science Specialization (Coursera)",
          url: "https://www.coursera.org/specializations/jhu-data-science"
        },
        {
          title: "Data Scientist with Python (DataCamp)",
          url: "https://www.datacamp.com/tracks/data-scientist-with-python"
        },
        {
          title: "Machine Learning by Stanford University",
          url: "https://www.coursera.org/learn/machine-learning"
        }
      ],
      communities: [
        {
          name: "Kaggle",
          url: "https://www.kaggle.com/"
        },
        {
          name: "DataTau",
          url: "https://datatau.net/"
        },
        {
          name: "Reddit r/datascience",
          url: "https://www.reddit.com/r/datascience/"
        }
      ],
      tools: [
        "Jupyter Notebooks",
        "Python libraries (Pandas, NumPy, Scikit-learn)",
        "Tableau or Power BI",
        "SQL databases",
        "Git and GitHub"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "DataJobs",
        url: "https://datajobs.com/"
      }
    ]
  },
  {
    id: "ux-design",
    title: "UX/UI Design",
    description: "UX/UI designers create digital interfaces that are intuitive, accessible, and enjoyable to use. They combine creativity with user research to design products that meet user needs.",
    skills: [
      "User research and usability testing",
      "Wireframing and prototyping",
      "Visual design principles",
      "Design tools (Figma, Adobe XD)",
      "Information architecture"
    ],
    education: [
      "Bachelor's degree in Design, HCI, or related field",
      "UX/UI design bootcamps",
      "Self-taught with portfolio projects"
    ],
    resources: {
      courses: [
        {
          title: "Google UX Design Professional Certificate",
          url: "https://www.coursera.org/professional-certificates/google-ux-design"
        },
        {
          title: "Interaction Design Foundation Courses",
          url: "https://www.interaction-design.org/courses"
        },
        {
          title: "The Complete App Design Course",
          url: "https://www.udemy.com/course/the-complete-app-design-course/"
        }
      ],
      communities: [
        {
          name: "Dribbble",
          url: "https://dribbble.com/"
        },
        {
          name: "Behance",
          url: "https://www.behance.net/"
        },
        {
          name: "UX Design Community",
          url: "https://www.designerslack.community/"
        }
      ],
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Zeplin"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Dribbble Job Board",
        url: "https://dribbble.com/jobs"
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Digital marketers promote products, services, and brands online through various digital channels. They combine creativity with analytics to create effective marketing campaigns.",
    skills: [
      "SEO and SEM",
      "Social media marketing",
      "Content marketing",
      "Email marketing",
      "Analytics and data analysis"
    ],
    education: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Digital marketing certifications",
      "Practical experience through internships or self-directed projects"
    ],
    resources: {
      courses: [
        {
          title: "Google Digital Marketing & E-commerce Professional Certificate",
          url: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce"
        },
        {
          title: "HubSpot Academy",
          url: "https://academy.hubspot.com/"
        },
        {
          title: "Digital Marketing Nanodegree (Udacity)",
          url: "https://www.udacity.com/course/digital-marketing-nanodegree--nd018"
        }
      ],
      communities: [
        {
          name: "Marketing Professionals (LinkedIn Group)",
          url: "https://www.linkedin.com/groups/37592/"
        },
        {
          name: "Reddit r/marketing",
          url: "https://www.reddit.com/r/marketing/"
        },
        {
          name: "Growth Hackers",
          url: "https://growthhackers.com/"
        }
      ],
      tools: [
        "Google Analytics",
        "SEMrush or Ahrefs",
        "Mailchimp or other email marketing platforms",
        "Social media management tools",
        "Content management systems"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Marketing Hire",
        url: "https://www.marketinghire.com/"
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Project managers plan, execute, and oversee projects from start to finish. They coordinate teams, manage resources, and ensure that projects are completed on time and within budget.",
    skills: [
      "Planning and scheduling",
      "Risk management",
      "Team leadership",
      "Budgeting",
      "Communication and stakeholder management"
    ],
    education: [
      "Bachelor's degree in Business, Management, or related field",
      "Project Management Professional (PMP) certification",
      "Agile and Scrum certifications"
    ],
    resources: {
      courses: [
        {
          title: "Google Project Management Professional Certificate",
          url: "https://www.coursera.org/professional-certificates/google-project-management"
        },
        {
          title: "PMP Certification Training",
          url: "https://www.pmi.org/certifications/project-management-pmp"
        },
        {
          title: "Agile Project Management",
          url: "https://www.coursera.org/learn/agile-project-management"
        }
      ],
      communities: [
        {
          name: "Project Management Institute",
          url: "https://www.pmi.org/"
        },
        {
          name: "Reddit r/projectmanagement",
          url: "https://www.reddit.com/r/projectmanagement/"
        },
        {
          name: "LinkedIn Project Management Groups",
          url: "https://www.linkedin.com/groups/25412/"
        }
      ],
      tools: [
        "Jira",
        "Asana",
        "Microsoft Project",
        "Trello",
        "Slack"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "PMI Job Board",
        url: "https://jobs.pmi.org/"
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Cybersecurity professionals protect computer systems and networks from digital attacks. They identify vulnerabilities, implement security measures, and respond to security breaches.",
    skills: [
      "Network security",
      "Vulnerability assessment",
      "Security frameworks and controls",
      "Incident response",
      "Cryptography"
    ],
    education: [
      "Bachelor's degree in Cybersecurity, Computer Science, or related field",
      "Certifications (CISSP, CEH, Security+)",
      "Specialized cybersecurity bootcamps"
    ],
    resources: {
      courses: [
        {
          title: "IBM Cybersecurity Analyst Professional Certificate",
          url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst"
        },
        {
          title: "CompTIA Security+ Certification",
          url: "https://www.comptia.org/certifications/security"
        },
        {
          title: "Ethical Hacking Courses",
          url: "https://www.udemy.com/topic/ethical-hacking/"
        }
      ],
      communities: [
        {
          name: "SANS Community",
          url: "https://www.sans.org/"
        },
        {
          name: "Reddit r/cybersecurity",
          url: "https://www.reddit.com/r/cybersecurity/"
        },
        {
          name: "Hack The Box",
          url: "https://www.hackthebox.com/"
        }
      ],
      tools: [
        "Wireshark",
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "SIEM tools"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "CyberSecJobs",
        url: "https://www.cybersecjobs.com/"
      }
    ]
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description: "Entrepreneurs start and run their own businesses. They identify opportunities, develop business plans, secure funding, and manage all aspects of a new venture.",
    skills: [
      "Business planning",
      "Financial management",
      "Marketing and sales",
      "Leadership",
      "Resilience and adaptability"
    ],
    education: [
      "Bachelor's degree in Business, Entrepreneurship, or related field (optional)",
      "MBA or other business education",
      "Self-directed learning and real-world experience"
    ],
    resources: {
      courses: [
        {
          title: "How to Start a Startup (Y Combinator)",
          url: "https://www.startupschool.org/"
        },
        {
          title: "Entrepreneurship Specialization (Wharton)",
          url: "https://www.coursera.org/specializations/wharton-entrepreneurship"
        },
        {
          title: "Business Model Canvas",
          url: "https://www.strategyzer.com/canvas/business-model-canvas"
        }
      ],
      communities: [
        {
          name: "Y Combinator Startup School",
          url: "https://www.startupschool.org/community"
        },
        {
          name: "Indie Hackers",
          url: "https://www.indiehackers.com/"
        },
        {
          name: "Reddit r/Entrepreneur",
          url: "https://www.reddit.com/r/Entrepreneur/"
        }
      ],
      tools: [
        "Business model canvas",
        "Financial modeling tools",
        "Marketing automation tools",
        "Project management tools",
        "Analytics tools"
      ]
    },
    jobBoards: [
      {
        name: "AngelList",
        url: "https://angel.co/"
      },
      {
        name: "Y Combinator Jobs",
        url: "https://www.ycombinator.com/jobs"
      },
      {
        name: "Gust",
        url: "https://gust.com/"
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Content creators produce written, audio, video, or visual content for various platforms. They combine creativity with understanding of audience needs to create engaging content.",
    skills: [
      "Writing and editing",
      "Video production",
      "Photography",
      "Audio production",
      "Social media management"
    ],
    education: [
      "Bachelor's degree in Communications, Journalism, or related field (optional)",
      "Specialized courses in content creation",
      "Self-taught with portfolio of work"
    ],
    resources: {
      courses: [
        {
          title: "Content Marketing Specialization",
          url: "https://www.coursera.org/specializations/content-marketing"
        },
        {
          title: "YouTube Creator Academy",
          url: "https://creatoracademy.youtube.com/"
        },
        {
          title: "Writing for Social Media",
          url: "https://www.edx.org/course/writing-for-social-media"
        }
      ],
      communities: [
        {
          name: "YouTube Creator Community",
          url: "https://www.youtube.com/creators/"
        },
        {
          name: "Medium",
          url: "https://medium.com/"
        },
        {
          name: "Reddit r/NewTubers",
          url: "https://www.reddit.com/r/NewTubers/"
        }
      ],
      tools: [
        "Adobe Creative Suite",
        "Canva",
        "Video editing software",
        "Audio editing software",
        "Content management systems"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "ProBlogger",
        url: "https://problogger.com/jobs/"
      }
    ]
  },
  {
    id: "finance",
    title: "Finance",
    description: "Finance professionals analyze financial data, make investment decisions, and manage financial resources. They work in various sectors including banking, investment, and corporate finance.",
    skills: [
      "Financial analysis",
      "Investment management",
      "Risk assessment",
      "Financial modeling",
      "Understanding of financial regulations"
    ],
    education: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "MBA or other advanced degrees",
      "Financial certifications (CFA, CFP)"
    ],
    resources: {
      courses: [
        {
          title: "Financial Markets (Yale)",
          url: "https://www.coursera.org/learn/financial-markets-global"
        },
        {
          title: "CFA Program",
          url: "https://www.cfainstitute.org/en/programs/cfa"
        },
        {
          title: "Financial Accounting Fundamentals",
          url: "https://www.coursera.org/learn/financial-accounting"
        }
      ],
      communities: [
        {
          name: "Wall Street Oasis",
          url: "https://www.wallstreetoasis.com/"
        },
        {
          name: "Reddit r/finance",
          url: "https://www.reddit.com/r/finance/"
        },
        {
          name: "CFA Institute",
          url: "https://www.cfainstitute.org/"
        }
      ],
      tools: [
        "Excel and financial modeling",
        "Bloomberg Terminal",
        "Financial analysis software",
        "Accounting software",
        "Trading platforms"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "eFinancialCareers",
        url: "https://www.efinancialcareers.com/"
      },
      {
        name: "Financial Job Network",
        url: "https://www.financialjobnetwork.com/"
      }
    ]
  },
  {
    id: "legal",
    title: "Legal",
    description: "Legal professionals provide advice and representation on legal matters. They interpret laws, prepare legal documents, and represent clients in legal proceedings.",
    skills: [
      "Legal research and writing",
      "Critical thinking",
      "Negotiation",
      "Client counseling",
      "Analytical skills"
    ],
    education: [
      "Juris Doctor (JD) degree",
      "Bar admission",
      "Specialized legal certifications"
    ],
    resources: {
      courses: [
        {
          title: "Introduction to American Law",
          url: "https://www.coursera.org/learn/american-law"
        },
        {
          title: "Contract Law: From Trust to Promise to Contract",
          url: "https://www.edx.org/course/contract-law-from-trust-to-promise-to-contract"
        },
        {
          title: "Legal Tech and Innovation",
          url: "https://www.coursera.org/learn/legal-tech-startups"
        }
      ],
      communities: [
        {
          name: "American Bar Association",
          url: "https://www.americanbar.org/"
        },
        {
          name: "Reddit r/LawSchool",
          url: "https://www.reddit.com/r/LawSchool/"
        },
        {
          name: "Legal Technology Forum",
          url: "https://www.lawtechnologytoday.org/"
        }
      ],
      tools: [
        "Legal research databases",
        "Document management systems",
        "E-discovery tools",
        "Legal practice management software",
        "Contract analysis tools"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "LawJobs",
        url: "https://lawjobs.com/"
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Healthcare professionals provide medical care and support to patients. They diagnose and treat illnesses, promote wellness, and contribute to public health initiatives.",
    skills: [
      "Clinical skills",
      "Patient care",
      "Medical knowledge",
      "Communication",
      "Empathy and compassion"
    ],
    education: [
      "Medical degree, nursing degree, or other healthcare-related degree",
      "Professional certifications",
      "Continuing medical education"
    ],
    resources: {
      courses: [
        {
          title: "Introduction to Healthcare",
          url: "https://www.coursera.org/learn/intro-to-healthcare"
        },
        {
          title: "Anatomy and Physiology",
          url: "https://www.edx.org/course/anatomy-x-series"
        },
        {
          title: "Healthcare Innovation and Entrepreneurship",
          url: "https://www.coursera.org/learn/healthcare-innovation"
        }
      ],
      communities: [
        {
          name: "American Medical Association",
          url: "https://www.ama-assn.org/"
        },
        {
          name: "Reddit r/medicine",
          url: "https://www.reddit.com/r/medicine/"
        },
        {
          name: "MedPage Today",
          url: "https://www.medpagetoday.com/"
        }
      ],
      tools: [
        "Electronic health records (EHR) systems",
        "Medical devices and equipment",
        "Telehealth platforms",
        "Medical imaging technology",
        "Healthcare management software"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Health eCareers",
        url: "https://www.healthecareers.com/"
      }
    ]
  },
  {
    id: "teaching",
    title: "Education & Teaching",
    description: "Educators impart knowledge and skills to students of all ages. They design curriculum, facilitate learning, assess student progress, and create supportive learning environments.",
    skills: [
      "Curriculum development",
      "Instructional design",
      "Classroom management",
      "Assessment and evaluation",
      "Communication and presentation"
    ],
    education: [
      "Bachelor's degree in Education or subject area",
      "Teaching certification or license",
      "Master's degree in Education (for higher education)"
    ],
    resources: {
      courses: [
        {
          title: "Foundations of Teaching for Learning",
          url: "https://www.coursera.org/specializations/foundations-teaching"
        },
        {
          title: "Instructional Design and Technology",
          url: "https://www.edx.org/professional-certificate/instructional-design"
        },
        {
          title: "Becoming a Better Teacher",
          url: "https://www.coursera.org/learn/teaching-secondary"
        }
      ],
      communities: [
        {
          name: "National Education Association",
          url: "https://www.nea.org/"
        },
        {
          name: "Edutopia",
          url: "https://www.edutopia.org/"
        },
        {
          name: "Reddit r/Teachers",
          url: "https://www.reddit.com/r/Teachers/"
        }
      ],
      tools: [
        "Learning management systems",
        "Educational apps and software",
        "Assessment tools",
        "Presentation software",
        "Classroom management tools"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Teach.org",
        url: "https://www.teach.org/jobs"
      }
    ]
  },
  {
    id: "counseling",
    title: "Counseling & Therapy",
    description: "Counselors and therapists help people manage and overcome mental and emotional challenges. They provide support, guidance, and therapeutic interventions to improve mental well-being.",
    skills: [
      "Active listening",
      "Empathy",
      "Therapeutic techniques",
      "Assessment and diagnosis",
      "Ethics and confidentiality"
    ],
    education: [
      "Master's degree in Counseling, Psychology, or related field",
      "Licensure as a counselor or therapist",
      "Continuing education and specialized training"
    ],
    resources: {
      courses: [
        {
          title: "Introduction to Psychology",
          url: "https://www.coursera.org/learn/introduction-psychology"
        },
        {
          title: "Psychological First Aid",
          url: "https://www.coursera.org/learn/psychological-first-aid"
        },
        {
          title: "Cognitive Behavioral Therapy",
          url: "https://www.coursera.org/learn/cognitive-behavioral-therapy-techniques"
        }
      ],
      communities: [
        {
          name: "American Counseling Association",
          url: "https://www.counseling.org/"
        },
        {
          name: "American Psychological Association",
          url: "https://www.apa.org/"
        },
        {
          name: "Reddit r/psychotherapy",
          url: "https://www.reddit.com/r/psychotherapy/"
        }
      ],
      tools: [
        "Electronic health records",
        "Telehealth platforms",
        "Assessment instruments",
        "Therapy notes software",
        "Mindfulness and relaxation apps"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "PsychologyToday Job Board",
        url: "https://www.psychologytoday.com/us/career-center"
      }
    ]
  },
  {
    id: "hr",
    title: "Human Resources",
    description: "HR professionals manage the employee lifecycle from recruitment to retirement. They handle hiring, onboarding, benefits, employee relations, and organizational development.",
    skills: [
      "Recruitment and selection",
      "Employee relations",
      "Compensation and benefits",
      "Training and development",
      "HR policies and compliance"
    ],
    education: [
      "Bachelor's degree in Human Resources, Business, or related field",
      "HR certifications (SHRM, HRCI)",
      "Master's degree in HR or MBA"
    ],
    resources: {
      courses: [
        {
          title: "Human Resource Management",
          url: "https://www.coursera.org/learn/managing-human-resources"
        },
        {
          title: "SHRM Certification",
          url: "https://www.shrm.org/certification/pages/default.aspx"
        },
        {
          title: "People Analytics",
          url: "https://www.coursera.org/learn/people-analytics"
        }
      ],
      communities: [
        {
          name: "Society for Human Resource Management",
          url: "https://www.shrm.org/"
        },
        {
          name: "HR.com",
          url: "https://www.hr.com/"
        },
        {
          name: "Reddit r/humanresources",
          url: "https://www.reddit.com/r/humanresources/"
        }
      ],
      tools: [
        "Applicant tracking systems",
        "HRIS platforms",
        "Performance management software",
        "Learning management systems",
        "Employee engagement tools"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "SHRM Job Board",
        url: "https://jobs.shrm.org/"
      }
    ]
  },
  {
    id: "operations",
    title: "Operations Management",
    description: "Operations managers coordinate the activities required to produce and deliver products or services. They focus on efficiency, quality, and continuous improvement of organizational processes.",
    skills: [
      "Process improvement",
      "Supply chain management",
      "Quality control",
      "Resource allocation",
      "Strategic planning"
    ],
    education: [
      "Bachelor's degree in Business, Operations Management, or related field",
      "MBA or specialized master's degree",
      "Professional certifications (Six Sigma, PMP)"
    ],
    resources: {
      courses: [
        {
          title: "Six Sigma Green Belt Certification",
          url: "https://www.coursera.org/professional-certificates/six-sigma-green-belt"
        },
        {
          title: "Supply Chain Management",
          url: "https://www.edx.org/professional-certificate/mitx-supply-chain-management"
        },
        {
          title: "Operations Management",
          url: "https://www.coursera.org/learn/operations-management"
        }
      ],
      communities: [
        {
          name: "Association for Supply Chain Management",
          url: "https://www.ascm.org/"
        },
        {
          name: "American Production and Inventory Control Society",
          url: "https://www.apics.org/"
        },
        {
          name: "Reddit r/operations",
          url: "https://www.reddit.com/r/operations/"
        }
      ],
      tools: [
        "ERP systems",
        "Project management software",
        "Process mapping tools",
        "Quality management software",
        "Supply chain management systems"
      ]
    },
    jobBoards: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/"
      },
      {
        name: "Supply Chain Jobs",
        url: "https://www.supplychainjobs.com/"
      }
    ]
  }
];