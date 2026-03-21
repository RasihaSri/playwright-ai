# Lecture - Playwright AI Agents: Automated Test Planning, Generation & Healing

## Overview

This lecture covers **Playwright's built-in AI Agents** — three powerful agents that automate the entire test creation lifecycle. You'll learn how AI agents **plan** tests by exploring applications, **generate** test code from plans, and **heal** broken tests automatically. This is the future of test automation.

## What You'll Learn

1. **What are AI Agents** - Definition, properties, and the agent loop
2. **Agentic Testing vs Traditional** - When to use AI-driven testing
3. **Playwright's 3 Built-in Agents** - Planner, Generator, Healer
4. **Test Planner Agent** - How it explores apps and creates test plans
5. **Test Generator Agent** - How it converts plans to executable tests
6. **Test Healer Agent** - How it diagnoses and fixes failing tests
7. **Agent Workflow** - The Plan → Generate → Heal lifecycle
8. **Prompt Engineering** - Writing effective agent prompts for testing
9. **Using Agents with LLMs** - Claude, GPT, and model considerations
10. **Future of AI in Testing** - Trends, risks, and career implications

## Folder Structure

```
learning/            - Core concepts: agents, workflows, prompt engineering
agents_project/      - Complete agent pipeline project with tests
exercises/           - Hands-on practice exercises
notes/               - Quick reference guides
interview_questions/ - Interview preparation Q&A (60 questions)
```

## Prerequisites

- Node.js 18+ installed
- Playwright installed (`npm install`)
- Claude Code or compatible AI host (for running agents)
- Basic understanding of JavaScript and testing concepts

## Quick Start

### Run the Tests

```bash
# 1. Navigate to lecture directory
cd Lecture_Playwright_AI_Agents

# 2. Run all tests (expect 7 pass, 3 intentional failures)
npx playwright test

# 3. Run the agent pipeline demo
node agents_project/agents/full_agent_pipeline.js
```

### View Reports

```bash
# View Playwright HTML report
npx playwright show-report agents_project/reports/html-report

# View TTA custom report
open tta-report/index.html
```

## Learning Path

1. Start with `learning/01_What_Are_AI_Agents.md` — understand the fundamentals
2. Read through all learning files in order (01-10)
3. Explore `agents_project/` to see agents in action
4. Run the agent pipeline: `node agents_project/agents/full_agent_pipeline.js`
5. Complete the exercises in `exercises/`
6. Review `notes/` for quick reference
7. Prepare for interviews with `interview_questions/`
