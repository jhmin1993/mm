---
layout: post
title: "Day 02 - SAP GUI 탐색 및 기본 조작"
date: 2026-03-04
categories: [study-log]
tags: [SAP GUI, T-code, Favorites, 기본조작]
---

## 오늘 학습 목표

- SAP GUI 화면 구조를 이해한다
- 로그인 방법과 세션 명령어를 익힌다
- Favorites에 T-code를 등록해서 빠르게 접근할 수 있다

---

## 1. SAP GUI 화면 구조

SAP에 로그인하면 보이는 **SAP Easy Access** 화면의 구성 요소 (위 → 아래 순서):

1. **Menu Bar** - 시스템, 편집, 즐겨찾기, 도움말 등 상단 메뉴
2. **Standard Toolbar** - 저장(Ctrl+S), 뒤로(F3), 실행(F8) 등 공통 아이콘
3. **Command Field** - T-code 직접 입력하는 창 (좌측 상단 작은 입력창)
4. **Application Toolbar** - 현재 화면에 맞는 기능 버튼 (화면마다 다름)
5. **작업 영역 (Content Area)** - 실제 입력/조회하는 메인 영역
6. **Status Bar** - 하단. 오류/성공 메시지, 시스템 ID, 사용자 표시

---

## 2. SAP 로그인

로그인 화면에서 입력하는 3가지:

| 필드 | 설명 | 예시 |
|------|------|------|
| Client | SAP 시스템 내 독립 공간. 운영/개발/테스트 구분 | 100, 200, 800 |
| User | 사용자 계정 ID | JHMIN |
| Password | 초기 로그인 후 변경 필요 | - |

> 같은 SAP 시스템이라도 Client 번호가 다르면 **완전히 독립된 환경**이다. (데이터 공유 안 됨)

---

## 3. 세션 명령어 (Command Field)

Command Field에 직접 입력해서 화면을 이동하거나 세션을 제어한다.

| 명령어 | 의미 | 예시 |
|--------|------|------|
| `T-code` | 해당 화면으로 바로 이동 | `ME21N` |
| `/n` | 현재 세션에서 SAP Easy Access로 돌아가기 | `/n` |
| `/nT-code` | 현재 세션에서 다른 T-code로 이동 | `/nME23N` |
| `/o` | 새 세션(창) 열기 | `/o` |
| `/oT-code` | 새 세션을 열면서 T-code 바로 실행 | `/oME21N` |
| `/i` | 현재 세션 종료 | `/i` |
| `/nend` | SAP 로그아웃 | `/nend` |
| `/nex` | 저장 없이 강제 로그아웃 | `/nex` |

> 세션은 최대 6개까지 동시에 열 수 있다. 작업별로 세션을 나눠 쓰면 편리하다.

---

## 4. 메뉴 탐색 & Favorites 등록

### SAP Easy Access 메뉴 구조

로그인 후 기본 화면에서 왼쪽에 트리 형태로 메뉴가 펼쳐진다.

<pre style="color:#24292e; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">SAP Easy Access
├── Favorites (즐겨찾기)
│   └── 직접 등록한 T-code/링크
└── SAP menu
    ├── Office
    ├── Cross-Application Components
    ├── Logistics
    │   └── Materials Management (MM)
    │       ├── Purchasing
    │       ├── Inventory Management
    │       └── Invoice Verification
    ├── Accounting
    └── ...</pre>

### Favorites 등록 방법

1. **메뉴로 등록**: 메뉴 트리에서 원하는 항목 우클릭 → "Add to Favorites"
2. **T-code로 등록**: Favorites 폴더 우클릭 → "Insert Transaction" → T-code 입력
3. **드래그**: 메뉴 항목을 Favorites 폴더로 드래그

### 자주 쓰는 T-code Favorites 추천

| T-code | 화면 |
|--------|------|
| ME21N | 구매오더 생성 |
| ME23N | 구매오더 조회 |
| ME51N | 구매요청 생성 |
| MIGO | 입고/출고 처리 |
| MIRO | 송장 입력 |
| MM03 | 자재 마스터 조회 |
| MB52 | 창고 재고 조회 |

---

## 5. 오늘 정리

- SAP GUI는 **Command Field의 T-code 입력**이 핵심 조작 방법
- `/n`, `/o`, `/i` 명령어로 세션을 유연하게 관리
- Favorites에 자주 쓰는 T-code를 등록하면 메뉴 탐색 시간 절약

## 6. 다음 공부 계획

- **Day 03**: Client / Company Code 개념 - 조직 계층의 상위 2단계
- **Day 04**: Plant / Storage Location - 재고/구매의 핵심 단위
- **Day 05**: Week 1 전체 복습
