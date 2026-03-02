---
title: "SPRO 설정 가이드 — MM 모듈 Customizing 맵"
nav_order: 1
---

# SAP MM SPRO 설정 가이드

## 개요

SPRO(SAP Project Reference Object)는 SAP 시스템의 Customizing 진입점입니다.
이 가이드는 MM 모듈 운영에 필요한 핵심 설정 경로를 영역별로 정리합니다.

---

## MM 설정 영역 네비게이션

| 영역 | 주요 설정 | 링크 |
|------|----------|------|
| 기준 정보 | 자재 유형, 평가 클래스, 조직 구조 | [기준 정보 설정 가이드](/mm/config-guide/master-data/) |
| 구매관리 | 문서 유형, 번호 범위, 승인 절차, 가격 조건 | [구매 설정 가이드](/mm/config-guide/purchasing/) |
| 재고관리 | Movement Type, 재고 유형, 실사 | [재고 설정 가이드](/mm/config-guide/inventory/) |
| 송장 검증 | 허용 오차, 자동 계정, 세금 코드 | [송장 설정 가이드](/mm/config-guide/invoice/) |

---

## SPRO 전체 경로 구조 (MM)

```
SPRO
└── Materials Management (MM)
    ├── General Settings
    │   ├── Define Organizational Units   ← 조직 구조 (Plant, SLoc)
    │   └── Assign Organizational Units
    ├── Material Master                   ← 자재 마스터 설정
    ├── Purchasing                        ← 구매 설정
    ├── Inventory Management              ← 재고관리 설정
    ├── Logistics Invoice Verification    ← 송장 검증 설정
    └── Valuation and Account Assignment  ← 평가 및 계정 결정 (OBYC)
```

---

## 핵심 T-code (설정 관련)

| T-code | 설명 |
|--------|------|
| SPRO | Customizing 진입점 |
| OMJJ | Movement Type 설정 |
| OBYC | 자동 계정 결정 |
| OX02 | Company Code 정의 |
| OX10 | Plant 정의 |
| OX08 | Purchasing Organization 정의 |
| OME4 | Purchasing Group 생성 |
| CUNI | Unit of Measure 관리 |

---

## 설정 적용 순서 (신규 시스템 구축 시)

```
1. 조직 구조 정의     (OX02, OX10, OX09, OX08)
    ↓
2. 자재 마스터 설정   (자재 유형, 자재 그룹, 번호 범위)
    ↓
3. 구매 설정          (문서 유형, 가격 조건, 승인 절차)
    ↓
4. 재고관리 설정      (Movement Type, 계정 결정)
    ↓
5. 송장 검증 설정     (허용 오차, 블록 사유, 세금 코드)
```
