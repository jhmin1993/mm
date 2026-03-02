---
layout: page
title: "재고 관리 (Inventory Management)"
permalink: /docs/inventory/overview/
---

## 재고 관리 개요

SAP MM의 재고 관리는 자재의 **입고, 출고, 이동, 평가**를 포함한 모든 재고 트랜잭션을 처리합니다.

---

## 재고 이동 유형 (Movement Types)

| Movement Type | 설명 |
|---------------|------|
| 101 | GR for Purchase Order (발주 입고) |
| 102 | Reversal of 101 (발주 입고 역전) |
| 201 | GI for Cost Center (코스트센터 출고) |
| 261 | GI for Production Order (생산오더 출고) |
| 301 | Transfer Posting Plant to Plant (플랜트간 이동) |
| 311 | Transfer to Storage Location (창고 위치 이동) |
| 501 | Receipt w/o PO (발주 없는 입고) |
| 551 | Scrapping (스크랩 처리) |

---

## 주요 T-code

| T-code | 설명 | 용도 |
|--------|------|------|
| MIGO | Goods Movement | 재고 이동 통합 T-code |
| MB52 | Warehouse Stocks | 창고 재고 조회 |
| MB51 | Material Document List | 자재 문서 목록 |
| MB03 | Display Material Document | 자재 문서 조회 |
| MMBE | Stock Overview | 재고 현황 개요 |
| MI01 | Create Physical Inventory Document | 실사 문서 생성 |
| MI04 | Enter Inventory Count | 실사 수량 입력 |
| MI07 | Post Differences | 실사 차이 전기 |

---

## 재고 유형

| 재고 유형 | 설명 |
|-----------|------|
| Unrestricted | 무제한 사용 가능 재고 |
| Quality Inspection | 품질 검사 중 재고 |
| Blocked | 차단 재고 |
| In Transit | 이동 중 재고 |

---

## 재고 평가

- **Moving Average Price (MAP)**: 입고 시 마다 평균 단가 재계산 (원자재에 주로 사용)
- **Standard Price**: 표준 원가로 고정 평가 (완제품, 반제품에 주로 사용)

---

## 학습 노트

- MIGO는 입고/출고/이동 등 모든 재고 트랜잭션의 통합 화면
- 재고 이동 시 자재 문서(Material Document)와 회계 문서(Accounting Document)가 동시 생성
- **Special Stock**: 위탁재고(Consignment), 프로젝트재고(Project Stock) 등

---

*최종 업데이트: 2026-03-02*
