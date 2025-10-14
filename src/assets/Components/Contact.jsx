import React from "react";

export const Contact = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Section */}
          <div className="flex flex-col space-y-12">
            {/* Resume Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Resume
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                View or download my resume to learn more about my skills and
                experience as an AI &amp; ML Engineer and Full Stack Developer.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 ease-in-out"
              >
                Download Resume
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Connect Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Connect with Me
              </h2>
              <div className="flex space-x-6">
                {/* GitHub */}
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 
                      4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.482 
                      0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.06.069-.06 
                      1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 
                      2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.943 
                      0-1.091.39-1.984 1.029-2.685-.103-.253-.446-1.272.098-2.65 
                      0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 
                      1.705.115 2.504.335 1.909-1.296 2.747-1.026 
                      2.747-1.026.546 1.378.203 2.397.1 2.65.64.701 
                      1.028 1.594 1.028 2.685 0 3.841-2.337 4.687-4.566 
                      4.935.359.309.678.922.678 1.859 0 1.342-.012 
                      2.419-.012 2.746 0 .267.18.577.688.48C19.135 
                      20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    ></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 
                    0-5 2.239-5 5v14c0 2.761 2.239 
                    5 5 5h14c2.762 0 5-2.239 
                    5-5v-14c0-2.761-2.238-5-5-5zm-11 
                    19h-3v-11h3v11zm-1.5-12.268c-.966 
                    0-1.75-.79-1.75-1.764s.784-1.764 
                    1.75-1.764 1.75.79 1.75 
                    1.764-.783 1.764-1.75 
                    1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                    0v5.604h-3v-11h3v1.765c1.396-2.586 
                    7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:anshemail@example.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  <span className="sr-only">Gmail</span>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 6C22 4.9 21.1 4 20 
                    4H4C2.9 4 2 4.9 2 6V18C2 
                    19.1 2.9 20 4 20H20C21.1 20 
                    22 19.1 22 18V6ZM20 
                    6L12 11L4 6H20ZM20 
                    18H4V8L12 13L20 
                    8V18Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 py-3 px-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 py-3 px-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Let's build something amazing together..."
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500 py-3 px-4"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-all duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
