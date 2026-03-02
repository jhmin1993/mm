# Project: SAP MM 공부 블로그

Jekyll 기반 GitHub Pages 블로그 (SAP MM 학습 노트).
Repository: https://github.com/jhmin1993/mm
Live site: https://jhmin1993.github.io/mm

---

## Plan Mode 지시문

### 플랜 저장 규칙

ExitPlanMode 호출 **전에** Write 툴로 플랜을 반드시 저장한다:

- **경로**: `.claude/plans/YYYY-MM-DD-brief-description.md`
  - 오늘 날짜를 `YYYY-MM-DD` 형식으로 사용
  - 설명은 2~5단어 kebab-case (예: `jekyll-blog-setup`, `procurement-docs-update`)
- 저장 완료 후 경로를 사용자에게 알린다

### 플랜 파일 템플릿

모든 플랜 파일은 아래 형식을 따른다.
**새 세션에서 이 파일만 읽어도 작업 맥락 전체를 파악할 수 있도록** 각 섹션을 충실히 작성한다.

```
---
date: YYYY-MM-DD
description: 한 문장 요약
status: active | completed | superseded
---

# [플랜 제목]

## Context
[배경, 제약 조건, 목표. 왜 이 작업이 필요한지 설명]

## 결정 사항 (Decisions Made)
[이 세션에서 내린 설계/구현 결정과 그 이유.
새 세션에서 "왜 이렇게 했지?"를 설명하는 섹션]
- 결정 1: [선택한 방법] — 이유: [...]
- 결정 2: [선택한 방법] — 이유: [...]

## 현재 상태 (Current State)
[세션 종료 시점의 실제 상태. 구현 중 플랜이면 진행률도 기록]
- [x] 완료된 항목
- [ ] 미완료 항목
- 현재 브랜치: `main` / 마지막 커밋: [커밋 메시지]
- 알려진 이슈: [있다면 기록]

## 구현 계획 (Implementation Plan)
[구체적인 실행 단계]

## 다음 단계 (Next Steps)
[이 플랜 이후 이어서 해야 할 작업. 새 세션 시작 시 여기서부터 읽으면 됨]

---

## Revision History

| Rev | Date | Summary |
|-----|------|---------|
| 1.0 | YYYY-MM-DD | Initial plan |
```

---

### 플랜 수정 규칙

기존 플랜을 수정할 때:
1. `.claude/plans/`에서 해당 파일을 Read로 읽는다
2. **현재 상태(Current State) 섹션을 최신화**한다 — 완료 항목 체크, 이슈 업데이트
3. 필요한 내용을 변경한다
4. Revision History에 새 행 추가:
   - Rev 번호: 마이너 변경 +0.1, 대규모 재작성 +1.0
   - 변경 요약을 10단어 이내로 작성
5. 동일한 경로에 Write로 덮어쓴다

### 세션 시작 시

프로젝트의 `.claude/plans/` 에 플랜 파일이 있으면 먼저 읽어서
"현재 상태"와 "다음 단계" 섹션으로 이전 맥락을 파악한다.

---

## 개발 규칙

- 포스트 파일명: `YYYY-MM-DD-sap-mm-study-day-NN.md`
- 커밋 메시지: 영어, 명령형 ("Add Day 05 study notes")
- GitHub Pages 지원 플러그인만 사용: jekyll-feed, jekyll-seo-tag, jekyll-sitemap
