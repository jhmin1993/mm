---
date: 2026-03-02
description: Jekyll 기반 SAP MM 공부 블로그 초기 설정 및 GitHub Pages 배포 준비
status: completed
---

# Jekyll SAP MM 블로그 초기 설정

## Context

SAP MM(Materials Management) 모듈 학습 내용을 하루 30분씩 기록하는 블로그가 필요했다.
GitHub Pages로 무료 호스팅하고, Jekyll로 정적 사이트를 생성하는 구조를 선택했다.
Repository 이름이 `mm`이므로 `baseurl: /mm` 설정이 필수였다.
또한 향후 세션에서 이전 작업 맥락을 파악할 수 있도록 프로젝트 로컬 플랜 저장 시스템도 함께 구축했다.

## 결정 사항 (Decisions Made)

- 결정 1: **Jekyll + minima 테마** 선택 - GitHub Pages 기본 지원 테마로 별도 빌드 설정 없이 바로 배포 가능. SAP 학습 노트 특성상 심플한 레이아웃이 적합.
- 결정 2: **`baseurl: /mm`** 설정 - 저장소 이름이 `mm`이고 `jhmin1993.github.io`는 다른 용도일 수 있으므로, 프로젝트 페이지 URL 구조(`/mm/`)에 맞춰 설정.
- 결정 3: **CLAUDE.md 지시문 방식**으로 플랜 저장 규칙 구현 - 훅(hook)보다 안정적이며, 세션 시작 시 자동으로 컨텍스트가 로드됨.
- 결정 4: **`docs/` 컬렉션** 추가 - 포스트(날짜별 학습 일지) 외에 SAP MM 개념 정리 문서를 별도 경로(`/docs/`)로 관리하기 위해.
- 결정 5: **플러그인 3종** (jekyll-feed, jekyll-seo-tag, jekyll-sitemap) - GitHub Pages 허용 목록 내 플러그인만 사용해 배포 오류 방지.

## 현재 상태 (Current State)

- [x] `_config.yml` 생성 (title, baseurl, theme, plugins, collections, defaults)
- [x] `Gemfile` 생성 (github-pages gem 기반)
- [x] `index.md` 생성 (홈 페이지)
- [x] `_posts/2026-03-02-sap-mm-study-day-01.md` 생성 (첫 번째 학습 일지)
- [x] `docs/` 디렉토리 및 샘플 문서 구성
- [x] `.gitignore` 설정
- [x] 초기 커밋 완료
- [x] CLAUDE.md 플랜 저장 지시문 생성
- [x] `.claude/plans/` 로컬 플랜 저장 시스템 구축
- 현재 브랜치: `main` / 마지막 커밋: `Initial commit: Jekyll SAP MM study blog setup`
- 알려진 이슈: GitHub Pages 활성화는 저장소 Settings에서 수동 설정 필요 (아직 미확인)

## 구현 계획 (Implementation Plan)

1. Jekyll 프로젝트 구조 생성 (`_config.yml`, `Gemfile`, `index.md`)
2. 첫 번째 포스트 작성 (`_posts/2026-03-02-sap-mm-study-day-01.md`)
3. `docs/` 컬렉션으로 개념 정리 문서 구조 설계
4. GitHub 저장소 푸시
5. GitHub Pages 활성화 (Settings > Pages > Source: main branch)
6. 프로젝트 로컬 플랜 저장 시스템 구축 (CLAUDE.md + `.claude/plans/`)

## 다음 단계 (Next Steps)

1. **GitHub Pages 활성화 확인**: `https://github.com/jhmin1993/mm` > Settings > Pages에서 `main` 브랜치 소스 설정, 배포 완료 후 `https://jhmin1993.github.io/mm` 접속 확인
2. **학습 일지 워크플로우 확립**: 매일 `_posts/YYYY-MM-DD-sap-mm-study-day-NN.md` 파일 생성 후 커밋 → 푸시
3. **Day 02 포스트 작성**: SAP MM 구매 프로세스 (Purchase Requisition → Purchase Order) 흐름 정리
4. **docs/ 개념 문서 확충**: MM 모듈 주요 트랜잭션 코드 (ME21N, MIGO, MIRO 등) 정리 페이지 추가

---

## Revision History

| Rev | Date | Summary |
|-----|------|---------|
| 1.0 | 2026-03-02 | Initial plan: Jekyll blog setup |
| 1.1 | 2026-03-02 | Migrated to project-local plan format with full context |
