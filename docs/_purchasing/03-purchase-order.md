---
title: "구매 발주서 (Purchase Order)"
nav_order: 3
---

# 구매 발주서 (Purchase Order / PO)

## 개요

PO는 공급업체와의 **공식 구매 계약 문서**입니다.
자재/서비스, 수량, 단가, 납기일, 납품 조건 등을 명시합니다.

---

## PO 문서 유형

| 유형 | 코드 | 설명 |
|------|------|------|
| 표준 발주 | NB | 일반 외부 구매 (가장 일반적) |
| 장기 계약 발주 | FO | Framework Order (계약 기반) |
| 플랜트 간 이동 | UB | 자사 플랜트 간 재고 이동 |
| 외주 발주 | subcontracting | Item Category L |
| 위탁 발주 | consignment | Item Category K |

---

## PO 화면 구조 (ME21N)

### 헤더 (Header)

| 필드 | 설명 |
|------|------|
| Document Type | NB, FO, UB 등 |
| Vendor | 공급업체 번호 |
| Purch. Organization | 구매 조직 |
| Purch. Group | 구매 그룹 |
| Currency | 주문 통화 |
| Payment Terms | 지급 조건 |
| Incoterms | 무역 조건 |

### 아이템 (Item)

| 필드 | 설명 |
|------|------|
| Item Category | 공백(표준) / L(외주) / K(위탁) / D(서비스) |
| Material | 자재 번호 |
| Quantity | 발주 수량 |
| Net Price | 단가 |
| Plant | 납품 플랜트 |
| Storage Location | 입고 보관 위치 |
| Delivery Date | 납기일 |

### 아이템 상세 탭
- **Delivery**: 과소/과다 납품 허용 오차
- **Invoice**: GR-Based IV, Evaluated Receipt Settlement
- **Account Assignment**: 계정 지정 (서비스/비재고)
- **Conditions**: 가격 조건 상세

---

## PO Item Category

| 카테고리 | 코드 | 설명 | GR 여부 |
|---------|------|------|---------|
| 표준 | 공백 | 일반 자재 구매 | 있음 |
| 외주 | L | 외주 가공 (원자재 제공) | 있음 |
| 위탁 | K | 공급업체 재고 보관 | 특수 |
| 서비스 | D | 서비스 구매 | SES |
| 재고 이동 | U | 플랜트 간 | 있음 |

---

## PO 생성 후 상태 관리

| 상태 | 설명 |
|------|------|
| 생성됨 | PO 저장, 공급업체에 발송 대기 |
| 전송됨 | 출력/메일 발송 완료 |
| GR 처리 | 일부 또는 전량 입고 |
| 완료 | 전량 입고 + 송장 처리 완료 |
| 마감 | 수동 마감 (미입고 수량 포기) |

---

## T-code

| T-code | 설명 |
|--------|------|
| ME21N | PO 생성 |
| ME22N | PO 변경 |
| ME23N | PO 조회 |
| ME2M | 자재별 PO 목록 |
| ME2L | 공급업체별 PO 목록 |
| ME2N | PO 번호 기준 목록 |
| MELB | 구매 활동 목록 |

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/purchasing/me21n-{순번}-{설명}.png`

<!-- 예시: ![ME21N 헤더 화면]({{ site.baseurl }}/assets/img/purchasing/me21n-01-header.png) -->
<!-- 예시: ![ME21N 아이템 상세]({{ site.baseurl }}/assets/img/purchasing/me21n-02-item-detail.png) -->
<!-- 예시: ![ME21N Conditions 탭]({{ site.baseurl }}/assets/img/purchasing/me21n-03-conditions.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Vendor | 공급업체 기준 정보 | BP (General Data) | F4 검색 도움 |
| Currency | 공급업체 기준 정보 | BP → Purch. Org → Order Currency | 기본값 자동 로드 |
| Payment Terms | 공급업체 기준 정보 | BP → Company Code / Purch. Org | 헤더 자동 설정 |
| Incoterms | 공급업체 기준 정보 | BP → Purch. Org → Incoterms | |
| Net Price | Info Record | ME11 (Info Record) | 자동 제안 |
| Planned Deliv. Time | 자재 마스터 / Info Record | MM01 Purchasing View / ME11 | Info Record 우선 |
| Purchasing Group | 자재 마스터 | MM01 Purchasing View | 기본값 |
| Plant | 조직 구조 | SPRO → Enterprise Structure | |
| Storage Location | 자재 마스터 | MM01 General Plant Storage | |

---

## 관련 SPRO 설정

→ [구매 설정 가이드](/mm/config-guide/purchasing/) 참조
