---
title: "Resume"
type: "pdf-page"
---

## Summary

* **Name:** Caleb Olson
* **Contact:** caleb.so.pnw@gmail.com
* **Location:** Greater Seattle Area, WA
* **Arrangement:** Remote/Hybrid Work Preferred

Lead Platform Engineer with deep AWS, Terraform, and Kubernetes experience, owning platform infrastructure and driving security, compliance, and technical-debt reduction across both infrastructure and application code. Track record of delivering reliable infrastructure, cloud cost optimization, secure CI/CD, and secretless authentication. Also building an autonomous agentic system that takes features and fixes from a chat request to production. Strong communicator with a passion for mentoring, knowledge sharing, and leading cross-functional initiatives.

## Experience

  * ### Lead Platform Engineer, [Dispatch](https://dispatch.me/) (Oct 2026 - Present, Remote)

      * Platform: Own the platform end to end, including AWS infrastructure, Terraform IaC, HA/DR, and cloud costs. Lead quarterly maintenance across OS, EKS, DocumentDB, RDS, Redis, and more, protecting uptime with the least disruptive upgrade path for each, including zero-downtime EKS & RDS upgrades.
      * Security, Compliance & Technical Debt: Own SOC2 controls and vulnerability patching, and drive the company SSO migration from Google Workspace to Microsoft. Cut technical debt by moving microservices and shared libraries onto standardized CI/CD pipelines and hardened container images, retiring legacy infrastructure (ingress-nginx, x86 node groups, deprecated runtimes, and unused AWS resources), and bringing untracked infrastructure under Terraform.
      * Agentic SDLC: Building an autonomous system that carries the SDLC end to end, so product and customer-support staff can request a feature or fix by talking to a bot and see it shipped to production with minimal human intervention. Driving Patchy from on-mention to autonomous work, including Jira sprint-queue execution where the agent works tickets end to end and a LangGraph/LangSmith delegation service with eval gates and human review points.

  * ### Senior DevOps Engineer, [Dispatch](https://dispatch.me/) (Aug 2023 - Oct 2026, Remote)

      * AI Agent Platform: Designed, built, and operate [Patchy](https://www.calebolson.space/portfolio), an AI assistant for Product & Engineering on the Anthropic Messages API (Kubernetes-deployed, Redis-backed, Datadog-monitored), spanning Slack, GitHub, and Jira with embedded Claude Code sessions that analyze repos and open pull requests. Engineered prompt caching and token accounting for cost control, plus role-based permissions and gated infrastructure access as guardrails.
      * InfoSec: Spearheaded SOC2/PCI compliance initiatives, led access control improvements, and conducted policy reviews.
      * Secretless Authentication: Replaced database passwords with IAM auth for DocumentDB and RDS Postgres atop Kubernetes workload identity, and cut stored credentials from CI/CD with OIDC federation to AWS and a GitHub App issuing short-lived tokens.
      * Pipeline Optimization: Migrated CI/CD from Travis CI to GitHub Actions.
      * Cost Optimization: Championed cost-conscious development practices and led initiatives that reduced cloud infrastructure spend.
      * EKS Platform Ownership: Rebuilt multi-environment EKS cluster infrastructure in Terraform and established a rigid quarterly maintenance playbook (staged rollouts, testing, rollback), turning risky upgrades into routine work and enabling Graviton migrations that cut compute costs.
      * Leadership: Mentored junior DevOps engineers and partnered with stakeholders to prioritize the infrastructure and AI roadmap.

  * ### DevOps Engineer, [Dispatch](https://dispatch.me/) (Aug 2022 - Aug 2023, Remote)

      * Developed and maintained AWS infrastructure with Terraform and Kubernetes, balancing performance, cost, and security.
      * Improved IAM policies and user management, segregating permissions by environment and service for security and auditability.
      * Led the migration of multiple microservices to Kubernetes ServiceAccount authentication, reducing reliance on AWS IAM access keys.
      * Migrated environment secrets to AWS Secrets Manager and implemented an external secrets provider in Kubernetes.
      * Reconfigured Lambdas to run within VPCs and automated RDS snapshot management to lower costs.
      * Participated in the on-call rotation, promptly mitigating incidents and minimizing downtime.

  * ### DevOps Engineer, [Pedigree Technologies](https://www.pedigreetechnologies.com/) (Jan 2021 - Aug 2022, Remote)

      * Built secure and scalable services in AWS with dynamic infrastructure as code in Ansible.
      * Automated deployments using Jenkins and performed zero-downtime security and usability upgrades.
      * Built custom Microsoft Teams and Slack integrations.

  * ### Software Engineer (Intern to Full-time), [Pedigree Technologies](https://www.pedigreetechnologies.com/) (Jan 2019 - Jan 2021, Fargo, ND)

      * Backend Java development covering business logic, database change sets, APIs, and automated testing tools.
      * Wrote Selenium UI tests, keeping automated testing streamlined and the UI stable.

## Skills

  * **AI Engineering:** Anthropic Messages API in production (agent tool loops, tool design, server tools, prompt caching, context compaction), Claude Code agentic workflows, agent orchestration with LangGraph, tracing and evals with LangSmith, LLM cost engineering and observability.
  * **Cloud:** AWS (EC2, S3, Secrets Manager, Route53, IAM, RDS, Lambda), Kubernetes cluster management and tuning.
  * **Infrastructure as Code:** Terraform, Ansible, AWS CloudFormation.
  * **CI/CD:** GitHub Actions, Jenkins, Travis CI.
  * **Containerization:** Docker, Docker Compose, Portainer.
  * **Programming:** JavaScript/Node.js, Python, Bash, Java, Golang.
  * **Monitoring & Security:** Datadog, CloudWatch, Kibana, Loggly, PagerDuty, security best practices.
  * **Databases:** RDS and DocumentDB snapshot management, Redis, MySQL.

## Certificates, Awards & Achievements

  * [CKAD: Certified Kubernetes Application Developer](https://www.credly.com/badges/3788e600-8834-45ba-9e72-afc41ec09979/public_url), The Linux Foundation (Feb 2025)
  * [Mountain Mover Award](https://www.linkedin.com/posts/dispatch-me_excellence-innovation-teamwork-activity-7252779369612341249-VjRp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACic7WsBCs0_O-WDF_4Wu31yfJB_WYNjHgA), Dispatch's quarterly peer-nominated employee award (Nov 2024)
  * [AWS Certified Cloud Practitioner](https://www.credly.com/badges/4dd506a2-05f3-4a54-9319-0083c17a7821), AWS Training and Certification (Dec 2023)
  * Hackathon Winner, "Most Technically Satisfying," Dispatch x Youreka (Apr 2023). Led the design of an AWS Lambda/S3 image-decompression pipeline, built with Terraform.
  * Academic honors: NDSU Dean's List (4 semesters), BSC President's Honor Roll (2 semesters), ICPC participant.

## Projects

  * [Patchy: AI Agent Platform](https://www.calebolson.space/portfolio): AI assistant for Dispatch built on the Anthropic Messages API. One conversation across Slack, GitHub, and Jira, with embedded Claude Code sessions that open PRs. Full case study on the portfolio page.
  * [Homelab](https://www.calebolson.space/portfolio): home infrastructure server automated end to end with Ansible, Docker Compose, and GitHub Actions. 25+ containerized services, ZFS storage, Grafana/Prometheus monitoring, and a Terraform-provisioned AWS test twin. Private repo, access on request.
  * [Personal Website](https://calebolson.space/): this site. Hugo, deployed on AWS Amplify with Terraform and GitHub Actions.
  * [Citizen Science Aerial Image Aggregation](https://github.com/calscoo/csaia_python): drone-imagery web app that extracts metadata, stores it for efficient querying, and builds composite images (Python, Flask, MySQL, Angular).

## Education

  * **North Dakota State University** (Fall 2018 - Spring 2021), Fargo, ND. BS, Computer Science. GPA 3.7.
  * **Bismarck State College** (Fall 2016 - Spring 2018), Bismarck, ND. ASSOC, Science. GPA 3.7.
