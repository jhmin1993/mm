---
layout: page
title: "기준 정보 (Master Data)"
permalink: /docs/master-data/overview/
---

## 기준 정보 개요

SAP MM의 마스터 데이터는 모든 트랜잭션의 기반이 되는 핵심 정적 데이터입니다.

---

## 자재 마스터 (Material Master)

### 주요 T-code

| T-code | 설명 |
|--------|------|
| MM01 | Create Material |
| MM02 | Change Material |
| MM03 | Display Material |
| MM06 | Flag for Deletion |
| MM60 | Material Where-Used List |

### 자재 마스터 뷰(View) 구조

| 뷰 | 조직 레벨 | 주요 데이터 |
|----|-----------|------------|
| Basic Data 1/2 | Client | 자재 설명, 단위, 무게 |
| Purchasing | Plant | 구매 그룹, 납기일 |
| MRP 1/2/3/4 | Plant | MRP 유형, 로트 크기, 안전재고 |
| Accounting 1/2 | Plant | 가격 제어, 표준가/이동평균가 |
| Storage 1/2 | Storage Location | 창고 관련 정보 |
| Quality Management | Plant | 품질 검사 설정 |

### 자재 유형 (Material Type)

| 유형 | 설명 |
|------|------|
| ROH | 원자재 (Raw Material) |
| HALB | 반제품 (Semi-Finished Product) |
| FERT | 완제품 (Finished Product) |
| HIBE | 소모품 (Operating Supplies) |
| NLAG | Non-Stock Material |
| DIEN | Service |

---

## 공급업체 마스터 (Vendor/Supplier Master)

### 주요 T-code

| T-code | 설명 |
|--------|------|
| XK01 | Create Vendor (Centrally) |
| XK02 | Change Vendor |
| XK03 | Display Vendor |
| MK01 | Create Vendor (Purchasing) |
| FK01 | Create Vendor (Accounting) |

### 공급업체 마스터 구조

| 섹션 | 조직 레벨 | 주요 데이터 |
|------|-----------|------------|
| General Data | Client | 주소, 연락처, 세금 번호 |
| Company Code Data | Company Code | 지급 조건, 계좌 정보 |
| Purchasing Data | Purchasing Org | 통화, 최소 발주 금액 |

---

## 구매 정보 레코드 (Purchasing Info Record)

자재-공급업체 조합의 구매 조건 저장.

| T-code | 설명 |
|--------|------|
| ME11 | Create Info Record |
| ME12 | Change Info Record |
| ME13 | Display Info Record |

---

## 학습 노트

- 자재 마스터는 **뷰(View)** 단위로 생성/확장 가능 — 필요한 부서만 해당 뷰를 관리
- **Plant Extension**: 기존 자재를 새로운 플랜트에서 사용하려면 MM01로 해당 플랜트 뷰 확장 필요
- Source List (ME01): 특정 자재의 승인된 공급업체 목록 관리

---

*최종 업데이트: 2026-03-02*
