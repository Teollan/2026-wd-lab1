export abstract class PostsRepository {
  static getFeed() {
    const posts = [
      {
        id: 1,
        author: { id: 1, username: "John Doe", dateOfBirth: new Date("1998-03-15"), gender: "male" },
        title: "Getting Started with Tailwind CSS v4",
        content: 'Tailwind CSS v4 brings a new engine, faster builds, and a refreshed configuration system. In this post I walk through the key changes and how to migrate your existing projects. The new <code class="text-accent-hover">@theme</code> directive replaces the old <code class="text-accent-hover">tailwind.config.js</code> for most use cases, and the Vite plugin makes setup a breeze.',
        createdAt: new Date("2026-02-28"),
        comments: [
          { id: 1, author: { id: 2, username: "Alex K.", dateOfBirth: new Date("1995-06-10"), gender: "male" }, content: "Great overview! The new engine is impressively fast. Migrating was smoother than I expected.", createdAt: new Date("2026-02-28") },
          { id: 2, author: { id: 3, username: "Maria S.", dateOfBirth: new Date("1997-01-22"), gender: "female" }, content: "Would love a follow-up on the @theme directive. Does it support custom animations too?", createdAt: new Date("2026-03-01") },
        ],
      },
      {
        id: 2,
        author: { id: 2, username: "Alex K.", dateOfBirth: new Date("1995-06-10"), gender: "male" },
        title: "Why I Switched to Vite for Everything",
        content: "After years of webpack and various bundlers, Vite has become my go-to for every new project. The instant HMR, native ESM support, and minimal configuration make the developer experience unmatched. Here is why I think Vite is the best choice for modern web development in 2026.",
        createdAt: new Date("2026-02-25"),
        comments: [
          { id: 3, author: { id: 1, username: "John Doe", dateOfBirth: new Date("1998-03-15"), gender: "male" }, content: "Completely agree! I used Vite for my latest lab project and it just works.", createdAt: new Date("2026-02-26") },
        ],
      },
      {
        id: 3,
        author: { id: 3, username: "Maria S.", dateOfBirth: new Date("1997-01-22"), gender: "female" },
        title: "Responsive Design Tips for 2026",
        content: 'Mobile-first design is no longer optional — it is the standard. In this post I share practical tips for building responsive layouts using modern CSS features like container queries, the <code class="text-accent-hover">:has()</code> selector, and <code class="text-accent-hover">subgrid</code>. These tools make truly adaptive interfaces easier than ever.',
        createdAt: new Date("2026-02-20"),
        comments: [],
      },
    ];

    return posts;
  }

  static getMyPosts() {
    const posts = [
      {
        id: 1,
        author: { id: 1, username: "John Doe", dateOfBirth: new Date("1998-03-15"), gender: "male" },
        title: "Getting Started with Tailwind CSS v4",
        content: 'Tailwind CSS v4 brings a new engine, faster builds, and a refreshed configuration system. In this post I walk through the key changes and how to migrate your existing projects. The new <code class="text-accent-hover">@theme</code> directive replaces the old <code class="text-accent-hover">tailwind.config.js</code> for most use cases, and the Vite plugin makes setup a breeze.',
        createdAt: new Date("2026-02-28"),
        comments: [
          { id: 1, author: { id: 2, username: "Alex K.", dateOfBirth: new Date("1995-06-10"), gender: "male" }, content: "Great overview! The new engine is impressively fast. Migrating was smoother than I expected.", createdAt: new Date("2026-02-28") },
          { id: 2, author: { id: 3, username: "Maria S.", dateOfBirth: new Date("1997-01-22"), gender: "female" }, content: "Would love a follow-up on the @theme directive. Does it support custom animations too?", createdAt: new Date("2026-03-01") },
        ],
      },
      {
        id: 4,
        author: { id: 1, username: "John Doe", dateOfBirth: new Date("1998-03-15"), gender: "male" },
        title: "My Journey into Open Source",
        content: "Contributing to open source has been one of the most rewarding experiences of my career. From fixing small typos in documentation to submitting feature PRs, every contribution teaches you something new. Here is how I got started and what I have learned along the way.",
        createdAt: new Date("2026-02-15"),
        comments: [
          { id: 4, author: { id: 3, username: "Maria S.", dateOfBirth: new Date("1997-01-22"), gender: "female" }, content: "This is so inspiring! I have been wanting to contribute but never knew where to start. Thanks for sharing your experience.", createdAt: new Date("2026-02-16") },
        ],
      },
    ];

    return posts;
  }
};