# Portfolio Page & Resume Refresh — Design

**Date:** 2026-08-24
**Repo:** portfolio (Hugo site at `hugo/`, deployed via AWS Amplify on push to main)
**Status:** Approved (single-page portfolio, option A)

## Goal

Refresh the resume to lead with AI/agent platform work, add a public portfolio page with Patchy as the flagship case study, and link `~/portfolio` in the site header alongside `~/resume`.

## Changes

### 1. Header menu (`hugo/config.toml`)

Add a `portfolio` entry between `blog` and `resume`:

- `blog` weight 0 (unchanged)
- `portfolio` weight 1, url `portfolio`
- `resume` weight 2

Renders as `~/blog ~/portfolio ~/resume` via the nightfall header partial.

### 2. Portfolio page (`hugo/content/portfolio.md`)

Single markdown page using the theme's default single layout (no `type` override, no new layouts or SCSS). Content order:

1. **Intro** — one or two sentences framing the page: selected work, AI platform engineering + DevOps.
2. **Patchy (flagship case study)** — public-safe full case study:
   - What: AI teammate for Dispatch Product & Engineering; handles Jira, release, code, infrastructure, and incident-response busywork; runs code analysis and opens PRs on request.
   - Platform: Anthropic Messages API orchestration, vanilla ESM JavaScript on Node 22, Kubernetes (dev/staging/prod), Redis conversation state, Datadog observability.
   - Surfaces: Slack (Socket Mode), GitHub PR comments, Jira issue comments — one conversation identity spanning all three.
   - Tooling: integration tool catalog (Jira, GitHub, Confluence, AWS/K8s); BM25 deferred tool discovery; programmatic tool calling with client-side permission enforcement; code-execution sandbox; file ingestion pipeline; prompt caching and server-side compaction for cost control.
   - Coding agent: embedded Claude Code sessions that analyze repos, branch, commit, and open PRs; skills system with S3 storage; plugin/LSP support.
   - Safety: role-based tool permissions, identity enrichment (Slack ↔ Atlassian ↔ GitHub), gated `kubectl`/`aws` execution.
   - Autonomy roadmap: "Loop" — a LangGraph-based service Patchy delegates work to (`POST /work`, Redis-recorded, LangSmith-traced), aiming at ticket intake → parallel Claude Code workers → eval gate → agentic release, humans at two review points; Jira sprint-queue work where Patchy pulls tickets and works them end to end.
   - Constraints: no secrets, no internal screenshots, no invented metrics ("dozens of shipped features" phrasing OK).
3. **This website** — Hugo + nightfall, Terraform-managed AWS Amplify, GitHub Actions CI/CD, custom domain.
4. **Citizen Science Aerial Image Aggregation** — short entry (existing resume copy, tightened), GitHub link.
5. **Community Relations** — short entry, GitHub link.

### 3. Resume refresh (`hugo/content/resume.md`)

Full refresh:

- **Summary** — rewrite to lead with AI platform / agent engineering (built an AI assistant used org-wide, agentic automation) on the existing senior DevOps foundation (AWS, Terraform, Kubernetes, cost, security).
- **Senior DevOps Engineer role** — add AI bullets at the top: designed/built/operate Patchy; autonomous agent work (Loop, sprint queue); LLM cost & observability engineering (prompt caching, compaction, token accounting, Datadog); AI access-control guardrails. Keep and tighten existing DevOps bullets.
- **Skills** — new "AI Engineering" group first: Anthropic Messages API (tool use, server tools, prompt caching, compaction), Claude Code, agent orchestration, LangGraph/LangSmith, evals & agent observability. Tighten other groups.
- **Projects** — add Patchy entry linking to `/portfolio`; keep existing projects.
- **Cleanup** — fix typos (`Profienct` → Proficient, `selunium` → Selenium, `Appication` in README is out of scope), "Bismarck State University" → "Bismarck State College", consistent tense/voice, remove filler bullets.
- No fabricated employers, dates, metrics, or credentials.

### 4. Resume PDF

Regenerate `hugo/static/resume.pdf` with `hugo/scripts/generate_resume_pdf.py` (weasyprint). If local deps are missing, note the command for the user instead of installing system packages silently.

## Error handling / verification

- `hugo` build (or `hugo server`) run locally to confirm the site renders and the menu links resolve; if hugo is not installed, verify by inspection and say so.
- Markdown-only content changes; no theme/layout edits, so regression risk is limited to config.toml menu weights.

## Out of scope

- Git add/commit/push (standing draft-only rule; user pushes to deploy).
- Blog posts about Patchy, theme redesign, screenshots/images on the portfolio page.
