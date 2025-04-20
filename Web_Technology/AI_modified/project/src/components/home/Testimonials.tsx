import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  career: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200',
    quote: 'The career quiz accurately identified software engineering as my ideal path. The resources provided were incredibly helpful in starting my journey.',
    rating: 5,
    career: 'Software Engineering'
  },
  {
    name: 'Sarah Chen',
    role: 'Data Analyst',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200',
    quote: 'I was unsure about my career direction until I took this quiz. The results pointed me toward data science, and I couldn\'t be happier with my choice!',
    rating: 5,
    career: 'Data Science'
  },
  {
    name: 'Marcus Williams',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200',
    quote: 'The career guidance was spot-on. I followed the action steps and within months I secured my first role as a junior UX designer.',
    rating: 4,
    career: 'UX Design'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from people who found their ideal career path using our quiz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 relative flex flex-col h-full animate-fade-in transition-transform hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary opacity-20" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FACC15" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 flex-grow">"{testimonial.quote}"</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-primary font-medium">
                  Matched with: {testimonial.career}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;