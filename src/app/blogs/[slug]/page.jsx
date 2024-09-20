const page = ({ params }) => {
  console.log(params);

  const blogs = [
    {
      name: "Understanding JavaScript Closures",
      slug: "javascript-closures",
      description:
        "A deep dive into closures in JavaScript and their practical applications.",
    },
    {
      name: "Next.js: The React Framework for Production",
      slug: "next-js-react-framework",
      description:
        "An overview of Next.js features and how it enhances React applications for production.",
    },
    {
      name: "Building RESTful APIs with Node.js",
      slug: "node-js-rest-api",
      description:
        "A guide on creating RESTful APIs using Node.js and Express.",
    },
    {
      name: "Introduction to MongoDB",
      slug: "mongodb-introduction",
      description:
        "Learn about MongoDB, a popular NoSQL database, and how to get started with it.",
    },
    {
      name: "Mastering CSS Grid",
      slug: "css-grid-mastering",
      description:
        "A comprehensive tutorial on CSS Grid for creating responsive layouts.",
    },
    {
      name: "Understanding React Hooks",
      slug: "react-hooks-understanding",
      description:
        "An in-depth look at React Hooks and how to use them in functional components.",
    },
    {
      name: "JavaScript Promises: An Introduction",
      slug: "javascript-promises-introduction",
      description:
        "Learn about JavaScript Promises and how they simplify asynchronous programming.",
    },
    {
      name: "Building a Full-Stack Application with MERN",
      slug: "mern-full-stack-application",
      description:
        "A step-by-step guide to building a full-stack application using MongoDB, Express, React, and Node.js.",
    },
    {
      name: "Introduction to TypeScript",
      slug: "typescript-introduction",
      description:
        "Discover TypeScript, a strongly typed programming language that builds on JavaScript.",
    },
    {
      name: "Deploying Applications with Docker",
      slug: "docker-deploying-applications",
      description:
        "Learn how to containerize applications using Docker for consistency across environments.",
    },
  ];

  const { name, description } = blogs.find((blog) => blog.slug === params.slug);

  return (
    <div>
      Details
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default page;
