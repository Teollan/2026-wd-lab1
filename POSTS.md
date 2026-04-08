# Test Posts

Use these to test the posting features. Copy-paste titles and content into the New Post form.

---

## Post 1
**Title:** The Death of CSS Floats
**Content:** Remember when we used floats for everything? Clearfix hacks, collapsing containers, and the eternal "why is this div 3 pixels off" debugging sessions. Flexbox killed it, Grid buried it, and nobody showed up to the funeral. Good riddance.

**Comments:**
- "I still have nightmares about clearfix. The `.cf::after { content: ''; display: table; clear: both; }` is burned into my brain."
- "Hot take: floats were never meant for layout. We just collectively decided to abuse them for a decade."

---

## Post 2
**Title:** Why I Stopped Using ORMs
**Content:** After three years of fighting Sequelize and TypeORM, I switched to raw SQL with a thin query builder. Turns out writing SELECT statements is not that hard, and I no longer spend hours debugging eager loading issues or N+1 queries that the ORM was supposed to prevent.

**Comments:**
- "Depends on the project. For CRUD apps, ORMs save a ton of time. For anything with complex joins, agreed — raw SQL wins."
- "Have you tried Drizzle? It's the sweet spot between raw SQL and a full ORM."
- "The real problem is that people don't learn SQL first and then use ORMs as a crutch."

---

## Post 3
**Title:** Local-First Software Is the Future
**Content:** Cloud-first apps have trained us to accept loading spinners, offline failures, and data we don't own. Local-first flips this — your data lives on your device, syncs when possible, and works without internet. CRDTs and sync engines like Automerge are making this practical today.

**Comments:**
- "I love the idea but conflict resolution is still a nightmare for collaborative editing. Google Docs solves this with OT, not CRDTs."

---

## Post 4
**Title:** Tabs vs Spaces: The Accessibility Argument
**Content:** Forget personal preference — tabs are objectively better for accessibility. Developers with visual impairments can set their tab width to whatever they need without changing the file. Spaces lock everyone into the same width. This should have ended the debate years ago.

**Comments:**
- "I switched my entire team to tabs after reading this exact argument. Nobody complained."
- "Counterpoint: mixed indentation in a codebase is worse than either option. Pick one and enforce it."
- "Prettier defaults to spaces and most people never change it. The real winner is whatever your formatter outputs."
- "As a low-vision developer, thank you. Tab width 8 is the only way I can read nested code comfortably."

---

## Post 5
**Title:** Docker Compose Is All You Need
**Content:** Kubernetes is amazing for large-scale production deployments. It is also massive overkill for 90% of projects. A single docker-compose.yml with Traefik as a reverse proxy handles most small-to-medium apps perfectly. Stop overengineering your infrastructure.

**Comments:**
- "We migrated FROM Kubernetes back to Compose for our startup. Saved us $2k/month in DevOps time alone."
- "This advice doesn't scale. The moment you need rolling deployments or auto-scaling, you'll regret not starting with K8s."

---

## Post 6
**Title:** The Underrated Power of SQLite
**Content:** SQLite handles millions of reads per second, supports JSON columns, full-text search, and runs as a single file with zero configuration. For most web apps that aren't Twitter-scale, it's the only database you need. Litestream gives you real-time replication if you want backups.

**Comments:**
- "We run our SaaS on SQLite with Litestream backups. 50k users, zero database issues in two years."
- "Write contention is still a real problem. WAL mode helps but doesn't eliminate it."
- "The single-file deployment is so underrated. No connection pools, no database server, no port management."

---

## Post 7
**Title:** Git Commit Messages Don't Matter (That Much)
**Content:** I've seen teams spend more time bikeshedding commit message formats than reviewing actual code. Conventional commits, gitmoji, detailed paragraphs — none of it matters if your PRs are well-described. Git blame and bisect work fine with "fix login bug" as a message.

**Comments:**
- "Hard disagree. Six months from now when you're debugging a regression, 'fix stuff' tells you nothing."
- "The real value is in PR descriptions, not individual commits. Squash merge and write a good PR title."

---

## Post 8
**Title:** TypeScript Enums Considered Harmful
**Content:** TypeScript enums compile to weird bidirectional objects, don't tree-shake properly, and behave differently from everything else in the type system. Use const objects with `as const` and derive union types instead. You get the same autocomplete with none of the footguns.

**Comments:**
- "const objects + typeof pattern is what we use across our entire monorepo. Never looked back."
- "String enums are fine though? The numeric enum weirdness is the real problem."
- "The fact that you need a blog post to explain why a language feature is bad means the language has a design problem."

---

## Post 9
**Title:** Writing CSS in 2026 Feels Like Cheating
**Content:** Between container queries, :has(), subgrid, anchor positioning, and @scope, CSS can now do things that required JavaScript or hacky workarounds just two years ago. The platform is finally catching up to what developers actually need. Learn native CSS before reaching for a framework.

**Comments:**
- "Anchor positioning alone replaced three JavaScript libraries in our codebase. It's wild."

---

## Post 10
**Title:** The Monorepo Trap
**Content:** Monorepos sound great in theory — shared code, atomic commits, unified CI. In practice, you get slow builds, complex tooling (Nx, Turborepo, Bazel), and every team stepping on each other's toes. Unless you're Google-scale with custom build infrastructure, separate repos with clear API contracts are simpler.

**Comments:**
- "We tried a monorepo for 6 months and reverted. The CI pipeline alone took 3 engineers to maintain."
- "Turborepo makes this much more manageable now. Remote caching basically eliminates the slow build problem."
- "The real issue isn't monorepos vs polyrepos — it's team boundaries. Conway's Law wins every time."
- "Counterpoint: at our company (200 engineers), the monorepo is the only reason we can do large-scale refactors without breaking 15 different services."
- "Separate repos with a private npm registry is the sweet spot. You get isolation AND code sharing."
