// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Chi Zhang&#39;s Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-blog-post-number-4",
        
          title: "Blog Post number 4",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2012/08/blog-post-4/";
          
        },
      },{id: "post-blog-post-number-3",
        
          title: "Blog Post number 3",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2014/08/blog-post-3/";
          
        },
      },{id: "post-blog-post-number-2",
        
          title: "Blog Post number 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2013/08/blog-post-2/";
          
        },
      },{id: "post-blog-post-number-1",
        
          title: "Blog Post number 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2012/08/blog-post-1/";
          
        },
      },{id: "news-visiting-the-test-lab-at-the-national-university-of-singapore-working-with-manuel-rigger",
          title: 'Visiting the TEST Lab at the National University of Singapore, working with Manuel...',
          description: "",
          section: "News",},{id: "news-our-paper-finding-cross-rule-optimization-bugs-in-datalog-engines-appeared-in-oopsla-2024",
          title: 'Our paper Finding Cross-Rule Optimization Bugs in Datalog Engines appeared in OOPSLA 2024....',
          description: "",
          section: "News",},{id: "news-received-a-ph-d-in-software-engineering-from-nanjing-university-under-the-supervision-of-prof-linzhang-wang",
          title: 'Received a Ph.D. in Software Engineering from Nanjing University under the supervision of...',
          description: "",
          section: "News",},{id: "news-our-paper-constant-optimization-driven-database-system-testing-appeared-in-sigmod-2025",
          title: 'Our paper Constant Optimization Driven Database System Testing appeared in SIGMOD 2025.',
          description: "",
          section: "News",},{id: "news-joined-tsinghua-university-as-a-postdoctoral-researcher-in-the-software-system-security-assurance-group",
          title: 'Joined Tsinghua University as a postdoctoral researcher in the Software System Security Assurance...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
