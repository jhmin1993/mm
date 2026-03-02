---
date: 2026-03-02
description: 스크린샷/필드연관/SPRO 설정 가이드 세 레이어 추가
status: completed
---

# SAP MM 블로그 - 심화 레이어 3가지 추가

## Context

기존 21개 컬렉션 파일(개념 중심)에 세 가지 실무 레이어를 추가한다.

1. **스크린샷**: SAP 서버에서 직접 캡쳐한 화면을 각 트랜잭션 페이지에 게시
2. **필드 → 마스터 연관**: 각 트랜잭션 필드가 어느 기준 정보에서 오는지 정리
3. **SPRO 설정 가이드**: 독립 컬렉션(`_config-guide/`)에 설정 경로/내용 정리

## 결정 사항 (Decisions Made)

- 결정 1: **SPRO → 별도 `_config-guide/` 컬렉션** - 깊이 있는 설정 참조용 독립 공간
- 결정 2: **스크린샷 + 필드 연관 → 기존 트랜잭션 페이지에 인라인 섹션** 추가
- 결정 3: **이미지 폴더 구조** `assets/img/{섹션}/{tcode}-{순번}-{설명}.png`
- 결정 4: **기존 페이지에 추가할 섹션 3개** - `## 스크린샷`, `## 필드 → 마스터 연관`, `## 관련 SPRO 설정`
- 결정 5: **`index.md` 홈에 '설정 가이드' 행 추가**

---

## 현재 상태 (Current State)

- [x] `_config.yml` - `config-guide` 컬렉션 추가 완료
- [x] `assets/img/master-data/`, `purchasing/`, `inventory/`, `invoice/`, `process/` `.gitkeep` 생성
- [x] `_master-data/` 3개 파일 섹션 추가 완료
- [x] `_purchasing/` 5개 파일 섹션 추가 완료
- [x] `_inventory/` 3개 파일 섹션 추가 완료
- [x] `_invoice/` 2개 파일 섹션 추가 완료
- [x] `_process/` 3개 파일 섹션 추가 완료
- [x] `_config-guide/index.md` 신규 생성 완료
- [x] `_config-guide/master-data.md` 신규 생성 완료
- [x] `_config-guide/purchasing.md` 신규 생성 완료
- [x] `_config-guide/inventory.md` 신규 생성 완료
- [x] `_config-guide/invoice.md` 신규 생성 완료
- [x] `index.md` - SPRO 설정 가이드 행 추가 완료
- 현재 브랜치: `main` / 마지막 커밋: `Add project-local plan storage system with CLAUDE.md directives`
- 알려진 이슈: 없음. 스크린샷 자체는 실제 SAP 서버 접속 후 별도 캡쳐 필요

## 구현 완료 파일 목록

| 작업 | 파일 |
|------|------|
| 수정 | `_config.yml` |
| 수정 | `index.md` |
| 수정 | `_master-data/01-material-master.md` |
| 수정 | `_master-data/02-vendor-master.md` |
| 수정 | `_master-data/03-purchasing-info.md` |
| 수정 | `_purchasing/01-purchase-requisition.md` |
| 수정 | `_purchasing/02-rfq-quotation.md` |
| 수정 | `_purchasing/03-purchase-order.md` |
| 수정 | `_purchasing/04-goods-receipt.md` |
| 수정 | `_purchasing/05-special-procurement.md` |
| 수정 | `_inventory/01-movement-types.md` |
| 수정 | `_inventory/02-stock-types.md` |
| 수정 | `_inventory/03-physical-inventory.md` |
| 수정 | `_invoice/01-three-way-matching.md` |
| 수정 | `_invoice/02-invoice-blocks.md` |
| 수정 | `_process/01-overview.md` |
| 수정 | `_process/02-flow.md` |
| 수정 | `_process/03-integration.md` |
| 신규 | `assets/img/master-data/.gitkeep` |
| 신규 | `assets/img/purchasing/.gitkeep` |
| 신규 | `assets/img/inventory/.gitkeep` |
| 신규 | `assets/img/invoice/.gitkeep` |
| 신규 | `assets/img/process/.gitkeep` |
| 신규 | `_config-guide/index.md` |
| 신규 | `_config-guide/master-data.md` |
| 신규 | `_config-guide/purchasing.md` |
| 신규 | `_config-guide/inventory.md` |
| 신규 | `_config-guide/invoice.md` |

---

## 다음 단계 (Next Steps)

1. 실제 SAP 서버에서 트랜잭션 실행 → 스크린샷 캡쳐
2. 캡쳐 이미지를 `assets/img/{섹션}/` 폴더에 명명 규칙에 맞게 저장
   - 예: `me21n-01-header.png`, `migo-01-gr-screen.png`
3. 각 페이지의 `## 스크린샷` 섹션 주석(`<!-- 예시: ... -->`)을 실제 이미지 태그로 교체
4. `_posts/` Day 02, 03 학습 일지 작성
5. git commit 및 GitHub Pages 배포 확인

---

## Revision History

| Rev | Date | Summary |
|-----|------|---------|
| 6.0 | 2026-03-02 | 새 작업: 스크린샷/필드연관/SPRO 3개 레이어 추가 계획 |
| 7.0 | 2026-03-02 | 구현 완료: 28개 파일 수정/신규 (모든 항목 체크) |
