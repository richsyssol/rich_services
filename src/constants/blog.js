// src/data/blogData.js
const blogData = [
  {
    id: 1,
    title: "How to Use React with Tailwind CSS",
    subtitle: "A Comprehensive Guide for Modern Web Development",
    excerpt:
      "Learn how to combine the power of React and Tailwind CSS for building beautiful, responsive interfaces.",
    content: [
      {
        title: "Why This Combination Works",
        text: "React's component-based architecture pairs perfectly with Tailwind's utility-first approach. This combination allows for rapid UI development without sacrificing customization. You get the benefits of reusable components with the flexibility of utility classes.",
      },
      {
        title: "Getting Started",
        text: "First, create a new React project using Vite or Create React App. Then install Tailwind CSS following the official documentation. Configure your tailwind.config.js file to match your design system. The setup process is straightforward and well-documented.",
      },
      {
        title: "Best Practices",
        text: "Organize your utilities logically, extract components when patterns repeat, and use @apply sparingly. Remember that Tailwind works best when you embrace its utility-first philosophy rather than fighting against it.",
      },
    ],
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    date: "10 Apr 2025",
    category: "Web Development",
    author: "Sarah Johnson",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Framer Motion Basics",
    subtitle: "Bringing Your UI to Life with Smooth Animations",
    excerpt:
      "Explore the animation capabilities of Framer Motion in your React projects with these practical examples.",
    content: [
      {
        title: "The Power of Declarative Animations",
        text: "Framer Motion simplifies complex animations with an intuitive API. Unlike CSS animations, you can dynamically change animation properties based on React state. This makes interactive animations incredibly straightforward to implement.",
      },
      {
        title: "Essential Animation Patterns",
        text: "Learn the key animation patterns: entrance animations, hover effects, tap interactions, and gesture-based animations. Each serves different purposes in enhancing user experience and guiding attention.",
      },
      {
        title: "Performance Considerations",
        text: "While Framer Motion is optimized for performance, be mindful of animating too many elements simultaneously. Use the will-change CSS property strategically and prefer transform/opacity animations for smoother performance.",
      },
    ],
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    date: "12 Apr 2025",
    category: "UI/UX",
    author: "Michael Chen",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Vite vs Create React App",
    subtitle: "Why Modern Developers Are Making the Switch",
    excerpt:
      "A detailed comparison of Vite and Create React App to help you choose the right tool for your next project.",
    content: [
      {
        title: "The Speed Difference",
        text: "Vite's native ES modules approach provides near-instant server start and hot module replacement. Compared to CRA's Webpack-based bundling, the difference in development experience is night and day, especially as your project grows.",
      },
      {
        title: "Configuration Flexibility",
        text: "While CRA abstracts away configuration, Vite gives you more control without ejecting. Its plugin system is simpler than Webpack's, making customization more accessible for most developers.",
      },
      {
        title: "Production Builds",
        text: "Both tools produce optimized production builds, but Vite's Rollup-based bundler often results in slightly smaller bundles. The real advantage comes during development where Vite's speed accelerates your workflow.",
      },
    ],
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    date: "14 Apr 2025",
    category: "Tools",
    author: "David Wilson",
    readTime: "6 min read",
  },
];

export default blogData;
