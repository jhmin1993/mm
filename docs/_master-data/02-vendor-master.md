---
title: "공급업체 기준 정보 (Vendor Master / BP)"
nav_order: 2
---

# 공급업체 기준 정보 (Vendor Master)

## ⚠️ S/4HANA 변경사항

SAP S/4HANA에서 공급업체 기준 정보는 **BP (Business Partner)** 트랜잭션으로 통합 관리됩니다.
구버전 XK01/XK02/XK03은 Deprecated (일부 시스템에서 작동하나 신규 학습은 BP 기준).

| 구버전 (ECC) | S/4HANA | 설명 |
|------------|---------|------|
| XK01 | BP | 공급업체 생성 |
| XK02 | BP | 공급업체 변경 |
| XK03 | BP (조회) | 공급업체 조회 |
| MK01 | BP | 구매 조직 기준 생성 |

---

## BP (Business Partner) 트랜잭션

BP 실행 → **역할(Role)** 선택:

| Role | 코드 | 설명 |
|------|------|------|
| Vendor (일반) | FLVN00 | 주소, 연락처 등 일반 데이터 |
| FI Vendor (회계) | FLVN01 | 재조정 계정, 지급 조건 |

> BP에서 구매 조직 데이터는: BP → "Vendor: Purch. Organization" 탭
{: .callout .callout-tip}

---

## 데이터 레벨 구조

| 레벨 | 저장 위치 | 주요 데이터 |
|------|----------|-----------|
| General Data | Client | 이름, 주소, 연락처, 언어, 세금 번호 |
| Company Code Data | Company Code | 재조정 계정, 지급 조건, 원천징수 |
| Purchasing Org Data | Purch. Org | 주문 통화, 인코텀즈, 납품 조건, 최소 주문금액 |

---

## General Data 주요 필드

| 필드 | 설명 |
|------|------|
| Name | 공급업체 상호명 |
| Country / Region | 국가, 지역 |
| Language | 출력 언어 |
| Tax Number | 세금 번호 (사업자 등록번호) |
| Bank Details | 계좌 정보 |

---

## Company Code Data 주요 필드

| 필드 | 설명 |
|------|------|
| Reconciliation Account | 재조정 계정 (채무 집계 계정) |
| Payment Terms | 지급 조건 (예: ZB30 = 30일 내 지급) |
| Payment Methods | 지급 방법 (은행 이체, 수표 등) |
| Withholding Tax | 원천징수 정보 |

---

## Purchasing Org Data 주요 필드

| 필드 | 설명 |
|------|------|
| Order Currency | 주문 통화 (KRW, USD 등) |
| Payment Terms | 구매 관점 지급 조건 |
| Incoterms | 무역 조건 (FOB, CIF, EXW 등) |
| Schema Group | 가격 조건 스키마 그룹 |
| Min. Order Value | 최소 주문 금액 |
| GR-Based IV | 입고 기반 송장 검증 여부 |

---

## 인코텀즈 (Incoterms) 주요 유형

| 코드 | 설명 |
|------|------|
| EXW | Ex Works - 공장 인도 |
| FOB | Free On Board - 선적 항구 인도 |
| CIF | Cost, Insurance, Freight - 운임·보험 포함 |
| DAP | Delivered at Place - 목적지 인도 |
| DDP | Delivered Duty Paid - 관세 포함 목적지 인도 |

---

## T-code (S/4HANA 기준)

| T-code | 설명 |
|--------|------|
| BP | 비즈니스 파트너 생성/변경/조회 (주 사용) |
| XK03 | 공급업체 마스터 조회 (Read-only, 구버전 호환) |
| XK99 | 공급업체 마스터 대량 변경 |
| MK03 | 구매 조직 기준 공급업체 조회 |
| FK03 | 회계 기준 공급업체 조회 |

---

## 실습 포인트 (개념 이해)

1. **BP = XK01 + FK01의 통합**: 하나의 화면에서 구매·회계 데이터 모두 관리
2. **재조정 계정**: 모든 공급업체 채무가 이 계정으로 집계됨 (FI 관점)
3. **GR-Based IV**: 체크 시 GR 수량 기준으로만 송장 검증 - 3-way matching 강제
4. **지급 조건**: `ZB30` = "30일 내 지급", `ZB001` = "즉시 지급" 등 커스텀 정의

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/master-data/bp-{순번}-{설명}.png`

<!-- 예시: ![BP 초기 화면]({{ site.baseurl }}/assets/img/master-data/bp-01-main.png) -->
<!-- 예시: ![BP Purchasing Org Data]({{ site.baseurl }}/assets/img/master-data/bp-02-purch-org.png) -->
<!-- 예시: ![BP Company Code Data]({{ site.baseurl }}/assets/img/master-data/bp-03-company-code.png) -->

---

<details>
<summary>필드 → 마스터 연관</summary>

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Reconciliation Account | FI 계정 마스터 | FS00 (계정 생성) | 채무 집계 계정, FI 담당자가 정의 |
| Payment Terms | 지급 조건 마스터 | SPRO → FI → AR/AP → Define Payment Terms | 코드 예: ZB30 = 30일 지급 |
| Order Currency | 통화 마스터 | SPRO → General Settings → Currencies | PO 생성 시 자동 로드 |
| Incoterms | 인코텀즈 마스터 | SPRO → MM → Purchasing → Define Incoterms | PO 헤더에 기본값 |
| Schema Group (Vendor) | 가격 조건 스키마 그룹 | SPRO → MM → Purchasing → Conditions → Schema Groups | 가격 결정 스키마 연결 |
| GR-Based IV | BP 설정 값 | BP → Vendor: Purch. Org → GR-Based IV 체크 | PO Invoice 탭에도 반영 |

</details>

---

## 관련 SPRO 설정

→ [기준 정보 설정 가이드](/mm/config-guide/master-data/) 참조
