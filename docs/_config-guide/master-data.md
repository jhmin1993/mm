---
title: "기준 정보 SPRO 설정 가이드"
nav_order: 2
---

# 기준 정보 (Master Data) SPRO 설정 가이드

## 조직 구조 설정

```
SPRO
└── Materials Management
    └── General Settings
        ├── Define Organizational Units
        │   ├── OX02: Define Company Codes
        │   ├── OX10: Define Plants
        │   ├── OX09: Define Storage Locations
        │   └── OX08: Define Purchasing Organizations
        └── Assign Organizational Units
            ├── Assign Plant → Company Code
            ├── Assign Purch. Org → Company Code
            └── Assign Purch. Org → Plant
```

### 주요 설정 내용

| 설정 항목 | T-code | 설명 |
|---------|--------|------|
| Company Code 정의 | OX02 | 법인 코드, 통화, 국가 설정 |
| Plant 정의 | OX10 | 공장/물류 센터 코드 및 이름 |
| Storage Location 정의 | OX09 | Plant 내 보관 위치 코드 |
| Purchasing Org 정의 | OX08 | 구매 조직 코드 및 이름 |
| Purchasing Group 생성 | OME4 | 구매 담당 그룹 코드 |

---

## 자재 마스터 설정

```
SPRO
└── Materials Management
    └── Material Master
        ├── Basic Settings
        │   ├── Define Material Types           ← ROH, FERT, NLAG 등 유형 정의
        │   └── Define Material Groups          ← 자재 분류 그룹
        ├── Define Number Ranges for MM         ← 자재 번호 채번 범위
        ├── Field Selection
        │   └── Define Screen Layout for MM     ← 뷰별 필수/선택 필드
        └── Settings for Key Fields
            └── Define Units of Measurement     ← CUNI (단위 관리)
```

### 자재 유형 (Material Type) 설정 포인트

| 설정 | 설명 |
|------|------|
| Quantity updating | 재고 수량 관리 여부 |
| Value updating | 재고 금액 관리 여부 |
| Price control | V(이동평균) / S(표준) 기본값 |
| Purchasing allowed | 구매 가능 여부 |
| Internal/external procurement | 자체 생산 / 외부 조달 |

---

## 평가 및 계정 결정 (Valuation)

```
SPRO
└── Materials Management
    └── Valuation and Account Assignment
        ├── Define Valuation Control            ← Split Valuation 활성화 여부
        ├── Define Valuation Grouping Code      ← 플랜트별 평가 그룹
        ├── Account Determination
        │   ├── Define Valuation Classes        ← 평가 클래스 정의 (자재 유형별)
        │   ├── Define Account Grouping         ← 이동 유형별 계정 그룹
        │   └── Configure Automatic Postings    ← OBYC: 계정 키별 G/L 계정 매핑
        └── Split Valuation
            └── Activate Split Valuation        ← 동일 자재 복수 평가
```

### OBYC 주요 계정 키

| 계정 키 | 설명 | 적용 거래 |
|--------|------|---------|
| BSX | 재고 계정 | GR 시 재고 자산 증가 |
| WRX | GR/IR 정산 계정 | GR(대변) / IV(차변) |
| PRD | 가격 차이 계정 | 표준 원가 자재의 가격 차이 |
| GBB | 소비/출고 계정 | 자재 출고 시 비용 계정 |
| INV | 재고 조정 계정 | 실사 차이 전기 |

---

## 관련 트랜잭션 페이지

- [자재 기준 정보 (MM01)](/mm/master-data/01-material-master/)
- [공급업체 기준 정보 (BP)](/mm/master-data/02-vendor-master/)
- [Info Record (ME11)](/mm/master-data/03-purchasing-info/)
