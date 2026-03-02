---
title: "RFQ & 견적 비교 (Quotation)"
nav_order: 2
---

# RFQ & 견적 비교 (Request for Quotation)

## 개요

RFQ는 공급업체에 **가격 및 납기 조건을 요청**하는 문서입니다.
여러 공급업체로부터 견적을 받아 비교 후 최적 공급업체를 선택합니다.

---

## RFQ 프로세스

```mermaid
flowchart LR
    A["RFQ 생성\nME41"] --> B["공급업체 발송"] --> C["견적 수신"] --> D["견적 입력\nME47"] --> E["가격 비교\nME49"] --> F["PO 전환"]
```

---

## 화면 구조 (ME41)

### 헤더
| 필드 | 설명 |
|------|------|
| Quotation Deadline | 견적 제출 마감일 |
| Document Type | AN (표준 RFQ) |
| Purch. Organization | 구매 조직 |

### 아이템
- 자재번호, 수량, 납기일, 플랜트

### 공급업체 탭
- 여러 공급업체 추가 → 각각 별도 RFQ 번호 자동 생성

---

## 견적 입력 (ME47)

공급업체로부터 받은 견적을 시스템에 입력:

| 필드 | 설명 |
|------|------|
| Net Price | 공급업체 제시 단가 |
| Currency | 통화 |
| Delivery Date | 제시 납기일 |
| Incoterms | 무역 조건 |

---

## 가격 비교 (ME49)

여러 공급업체의 견적을 비교하는 화면:

- **최저가** 자동 표시
- **낙찰**: 선택한 공급업체 RFQ → PO 전환
- **탈락**: 나머지 공급업체에 **Rejection Letter** 발송 가능

---

## T-code

| T-code | 설명 |
|--------|------|
| ME41 | RFQ 생성 |
| ME42 | RFQ 변경 |
| ME43 | RFQ 조회 |
| ME47 | 견적 입력 (공급업체 가격 등록) |
| ME48 | 견적 조회 |
| ME49 | 가격 비교 |

---

## RFQ vs 장기 계약

| 항목 | RFQ/Quotation | 장기 계약 (Contract) |
|------|--------------|---------------------|
| 목적 | 1회 견적 비교 | 장기 공급 조건 협약 |
| T-code | ME41/ME47 | ME31K |
| 유효 기간 | 단기 | 계약 기간 |
| PO 연계 | PO 전환 후 소멸 | 반복 PO 참조 |

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/purchasing/me41-{순번}-{설명}.png`

<!-- 예시: ![ME41 RFQ 생성 화면]({{ site.baseurl }}/assets/img/purchasing/me41-01-main.png) -->
<!-- 예시: ![ME47 견적 입력 화면]({{ site.baseurl }}/assets/img/purchasing/me47-01-quotation-entry.png) -->
<!-- 예시: ![ME49 가격 비교 화면]({{ site.baseurl }}/assets/img/purchasing/me49-01-price-comparison.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Document Type | 문서 유형 마스터 | SPRO → MM → Purchasing → Define Document Types for RFQ | AN (표준 RFQ) |
| Vendor | 공급업체 기준 정보 | BP (Business Partner) | F4 검색 도움 |
| Purch. Organization | 조직 구조 | SPRO → Enterprise Structure → Purchasing | |
| Net Price (ME47 입력) | 공급업체 제시 견적 | 수동 입력 | 가격 비교(ME49) 기준 데이터 |
| Quotation Deadline | 수동 입력 | - | 마감 후 자동 만료 |
| Incoterms (ME47) | 공급업체 제시 조건 | BP Purch. Org 기본값 | 견적별 변경 가능 |

---

## 관련 SPRO 설정

→ [구매 설정 가이드](/mm/config-guide/purchasing/) 참조
