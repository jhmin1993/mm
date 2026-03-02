---
title: "재고관리 (Inventory Management)"
nav_order: 1
---

# 재고관리 (Inventory Management)

SAP MM 재고관리는 **자재의 수량과 가치**를 실시간으로 추적합니다.

---

## 재고관리 핵심 개념

| 항목 | 링크 | 설명 |
|------|------|------|
| [Movement Types](/mm/inventory/01-movement-types/) | 이동 유형 | 모든 재고 이동의 분류 체계 |
| [재고 유형](/mm/inventory/02-stock-types/) | 재고 유형 | Unrestricted, QI, Blocked 등 |
| [실사](/mm/inventory/03-physical-inventory/) | 재고 실사 | 연간 재고 조사 프로세스 |

---

## 재고 조회 T-code

| T-code | 설명 |
|--------|------|
| MMBE | 재고 현황 (플랜트/SLoc별) |
| MB52 | 창고별 재고 목록 |
| MB51 | 자재 문서 목록 (이동 이력) |
| MB03 | 자재 문서 상세 조회 |
| MB5B | 특정 일자 기준 재고 |

---

## 재고 평가 방법

| 방법 | 코드 | 설명 |
|------|------|------|
| 이동 평균 단가 | V | 입고 시마다 평균 단가 재계산 |
| 표준 단가 | S | 고정 단가, 차이는 PRD 계정 |
