---
title: "재고관리 SPRO 설정 가이드"
nav_order: 4
---

# 재고관리 (Inventory Management) SPRO 설정 가이드

## 전체 구조

```
SPRO
└── Materials Management
    └── Inventory Management and Physical Inventory
        ├── Goods Receipt
        │   ├── Set Tolerance Limits for GR     ← GR 허용 오차
        │   └── Set Screen Layout for GR (MIGO) ← 화면 레이아웃
        ├── Goods Issue / Transfer Posting
        │   └── Set Screen Layout               ← 출고/이동 화면
        ├── Movement Types
        │   └── Copy, Change, Delete Movement Types (OMJJ)
        ├── Account Determination
        │   └── OBYC: Configure Automatic Postings
        ├── Output Determination
        │   └── Define Output for Goods Movements
        └── Physical Inventory
            ├── Define Default Values
            ├── Set Tolerance Limits for PI     ← 실사 허용 오차
            └── Activate Cycle Counting         ← CC 실사 활성화
```

---

## Movement Type 설정 (OMJJ)

Movement Type은 재고 이동의 모든 속성을 결정합니다.

### OMJJ 주요 설정 항목

| 설정 탭 | 설명 |
|--------|------|
| General | 이동 유형 기본 속성 (입고/출고/이동) |
| WM Movement Type | WM 연계 이동 유형 매핑 |
| Account Grouping | 계정 그룹 (GBB, BSX 등 연결) |
| Short Texts | 화면 표시 설명 |
| Allowed Transactions | 사용 가능 T-code 제한 |
| Reversal | 취소 이동 유형 지정 (예: 101 ↔ 102) |

### 주요 Movement Type 계정 그룹 매핑

| Mvt | 이동 방향 | Account Key | 설명 |
|-----|---------|-------------|------|
| 101 | 입고 (PO) | BSX (재고), WRX (GR/IR) | 표준 입고 |
| 201 | 출고 (원가 센터) | GBB/VBR | 소비 출고 |
| 261 | 출고 (생산 오더) | GBB/VBO | PP 연계 |
| 551 | 스크랩 | GBB/AUA | 재고 감모 |

---

## GR 허용 오차 설정

```
SPRO → MM → IM → Goods Receipt → Set Tolerance Limits for GR
```

| 오차 유형 | 설명 | 설정 단위 |
|---------|------|---------|
| 과다 납품 (Over Delivery) | PO 수량 초과 허용 비율 | % |
| 과소 납품 (Under Delivery) | PO 수량 미달 허용 비율 | % |
| 최종 납품 (Final Delivery) | 이후 추가 입고 불가 처리 | 체크 여부 |

> 자재 마스터 Purchasing View의 Over/Under Delivery Tolerance가 우선 적용됩니다.

---

## 물리 재고 (Physical Inventory) 설정

### 실사 허용 오차

```
SPRO → MM → IM → Physical Inventory → Set Tolerance Limits
```

- 금액 기준으로 설정 (절대 금액 또는 %)
- 허용 오차 초과 시 차이 전기 전 승인 필요

### Cycle Counting 설정

```
SPRO → MM → IM → Physical Inventory → Activate Cycle Counting
```

- A/B/C 분류별 실사 주기 설정 (일수)
- 자재 마스터 MRP1 뷰의 CC Indicator와 연계

---

## 자동 계정 결정 (OBYC)

GR/GI 시 자동으로 G/L 계정을 결정하는 핵심 설정.

```
SPRO → MM → Valuation and Account Assignment → Account Determination → OBYC
```

### 주요 설정 조합

| 계정 키 | Valuation Grouping | Valuation Class | G/L 계정 |
|--------|------------------|-----------------|---------|
| BSX | 회사 코드 그룹 | 3000 (ROH) | 원자재 재고 계정 |
| WRX | 회사 코드 그룹 | (공통) | GR/IR 정산 계정 |
| GBB/VBR | 회사 코드 그룹 | 3000 | 소모품비 계정 |
| GBB/INV | 회사 코드 그룹 | (공통) | 재고 조정 계정 |

---

## 관련 트랜잭션 페이지

- [Movement Types](/mm/inventory/01-movement-types/)
- [재고 유형 (Stock Types)](/mm/inventory/02-stock-types/)
- [재고 실사 (Physical Inventory)](/mm/inventory/03-physical-inventory/)
