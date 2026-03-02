---
title: "송장 검증 SPRO 설정 가이드"
nav_order: 5
---

# 송장 검증 (Logistics Invoice Verification) SPRO 설정 가이드

## 전체 구조

```
SPRO
└── Materials Management
    └── Logistics Invoice Verification (LIV)
        ├── Invoice Block
        │   ├── Set Tolerance Limits            ← PP, BD, DQ, ST 등 허용 오차
        │   ├── Set Maximum Amount for Auto Block
        │   └── Define Blocking Reasons         ← R, Q, D, W 블록 사유
        ├── Incoming Invoice
        │   ├── Set Tolerances for Quantity/Price Differences
        │   └── Set GR-Based Invoice Verification ← 입고 기반 IV 설정
        ├── Automatic Account Determination
        │   └── OBYC: Configure Automatic Postings ← WRX, BSX 계정
        └── Tax
            └── (FI 공통) Define Tax Codes      ← 세금 코드 정의
```

---

## 허용 오차 (Tolerance Limits) 설정

가장 중요한 LIV 설정입니다. 오차 초과 시 자동 블록이 발생합니다.

```
SPRO → MM → LIV → Invoice Block → Set Tolerance Limits
```

### 허용 오차 키 상세

| 오차 키 | 적용 기준 | 설정 단위 | 블록 결과 |
|--------|---------|---------|---------|
| **PP** | 단가 편차 (Price) | % | 자동 블록 (R) |
| **BD** | 총액 편차 (Amount) | 절대 금액 | 자동 블록 |
| **DQ** | 수량 초과 (Quantity) | % | 자동 블록 (Q) |
| **ST** | 소액 차이 | 절대 금액 | 자동 전기 (블록 없음) |
| **AN** | 청구서 금액 | 절대 금액 | 최대 금액 초과 시 블록 |

### 설정 예시

| 키 | 상한 | 하한 | 의미 |
|----|------|------|------|
| PP | 2% | — | 단가가 PO보다 2% 초과 시 블록 |
| BD | 10,000 | — | 총액 차이 1만원 초과 시 블록 |
| ST | — | 1,000 | 1천원 미만 차이는 자동 처리 |

---

## 블록 사유 정의

```
SPRO → MM → LIV → Invoice Block → Define Blocking Reasons
```

| 블록 코드 | 설명 | 자동/수동 |
|---------|------|---------|
| R | 가격 차이 블록 | 자동 |
| Q | 수량 차이 블록 | 자동 |
| D | 납기일 편차 블록 | 자동 |
| W | 검수 필요 (QM 연계) | 자동 |
| (수동) | 분쟁, 추가 확인 | 수동 |

---

## GR-Based Invoice Verification 설정

입고 기준으로만 송장을 검증하는 설정 (3-way matching 강제).

### 설정 위치 (3가지)

1. **공급업체 마스터** (BP): Vendor Purch. Org → GR-Based IV 체크
2. **Info Record** (ME11): Control Data → GR-Based IV 체크
3. **PO Item** (ME21N): Invoice 탭 → GR-Based IV 체크

> PO Item 설정이 가장 우선 적용됩니다.

---

## 자동 계정 결정 — MIRO 관련

```
SPRO → MM → LIV → Automatic Account Determination → OBYC
```

### MIRO 전기 시 계정 흐름

```
MIRO 전기:
  차변: GR/IR 정산 계정 (WRX)   ← GR 시 대변된 계정 정산
  차변: 세금 계정 (VST 등)       ← 세금 코드에 따라
  대변: 공급업체 채무 계정        ← BP의 Reconciliation Account

가격 차이 발생 시:
  차변/대변: 가격 차이 계정 (PRD) ← 표준 원가(S) 자재에서 발생
```

---

## 세금 코드 (Tax Code) 정의

```
SPRO → Financial Accounting → Tax on Sales/Purchases → Basic Settings
    → Define Tax Codes for Sales and Purchases
```

> 세금 코드는 FI 공통 설정입니다. MM에서는 MIRO 입력 시 세금 코드를 선택합니다.

| 세금 코드 | 설명 | 세율 |
|---------|------|------|
| V0 | 비과세 (면세) | 0% |
| V1 | 과세 (일반) | 10% (한국 부가세 예시) |
| V2 | 영세율 | 0% (수출 등) |

---

## ERS (Evaluated Receipt Settlement) 설정

```
SPRO → MM → LIV → Incoming Invoice → GR-Based Invoice Verification
                → Activate ERS for Vendors / Info Records
```

- ERS 활성화 시: MIRO 없이 GR 기준으로 자동 송장 생성
- **T-code MRRL**: ERS 실행
- 조건: PO와 Info Record의 단가 일치, 공급업체 ERS 동의

---

## 관련 트랜잭션 페이지

- [3-way Matching & MIRO](/mm/invoice/01-three-way-matching/)
- [송장 블록 (Invoice Blocks)](/mm/invoice/02-invoice-blocks/)
