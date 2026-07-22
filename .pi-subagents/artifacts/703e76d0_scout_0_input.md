# Task for scout

You are a delegated subagent running from a fork of the parent session. Treat the inherited conversation as reference-only context, not a live thread to continue. Do not continue or answer prior messages as if they are waiting for a reply. Your sole job is to execute the task below and return a focused result for that task using your tools.

Task:
Inspect two areas read-only: (1) current repo /Users/brunocopa/Public/Git/Mirai/Webpage, locating the "Success Stories & Case Studies" section, existing Nutrition Mate card, its component/data/styles, and build/test commands; (2) /Users/brunocopa/Public/Git/Mirai/AI_Development/Analytics/DoE, identifying the product's strongest factual capabilities, implementation highlights, and outcomes suitable for a compelling case-study card. Also read /Users/brunocopa/.pi/agent/skills/frontend-ui-engineering/SKILL.md. Use inherited context for Applai facts. Return exact files and a minimal proposed card copy for Applai and for the DoE project publicly named "Mirai Engine". Do not edit anything.

---
**Output:**
Write your findings to exactly this path: /Users/brunocopa/Public/Git/Mirai/Webpage/.pi-subagents/artifacts/outputs/703e76d0/context.md
This path is authoritative for this run.
Ignore any other output filename or output path mentioned elsewhere, including output destinations in the base agent prompt, system prompt, or task instructions.

## Acceptance Contract
Acceptance level: checked
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: changed-files, tests-added, commands-run, residual-risks, no-staged-files

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```