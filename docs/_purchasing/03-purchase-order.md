---
title: "구매 발주서 (Purchase Order)"
nav_order: 3
---

# 구매 발주서 (Purchase Order / PO)

## 개요

PO(Purchase Order)는 구매 부서(Buyer)가 공급업체(Seller)에게 발행하는 **상업 문서(Commercial Document)**입니다.
판매자가 구매자에게 제공할 **자재 또는 서비스의 종류, 수량, 협상된 가격**을 명시합니다.

- 구매요청(PR), RFQ, 구매계약 등을 **참조하여 생성** 가능
- 구매담당자가 직접 개별 처리하거나, **자동 발주 기능**으로 일괄 생성 가능
- PO 발행 후 **후속처리 이력(입고, 송장)이 자동으로 관리**됨

---

## PO 문서 유형

| 유형 | 코드 | 설명 |
|------|------|------|
| 표준 발주 | NB | 일반 외부 구매 (가장 일반적) |
| 장기 계약 발주 | FO | Framework Order (계약 기반) |
| 플랜트 간 이동 | UB | 자사 플랜트 간 재고 이동 |

---

## ME21N - PO 생성 화면 구조

PO는 **헤더 - 품목 개요 - 품목 세부사항** 세 그룹으로 구분됩니다.

### 헤더 (Header) 주요 필드

| 번호 | 필드명 | 설명 |
|------|-------|------|
| 1 | **문서유형 (Document Type)** | 구매 오더의 유형. 일반 오더는 'NB(표준 PO)' 지정 |
| 2 | **공급업체 (Supplier)** | 공급업체 번호 지정 |
| 3 | **증빙일 (Document Date)** | 구매오더 생성 일자. 기본적으로 오늘 날짜가 자동 입력 |

**[조직 데이터 (Org. Data)] 탭:**

| 필드 | 설명 |
|------|------|
| 구매조직 | 구매조직 지정 |
| 구매그룹 | 구매 담당자 코드 지정 |
| 회사코드 | 회사코드 지정 |

**[납품/송장 (Delivery/Invoice)] 탭:**

| 번호 | 필드명 | 설명 |
|------|-------|------|
| 5 | **지급조건 (Payment Terms)** | 구매오더의 대금 지급조건. 공급업체 마스터 기본값 복사 |
| 6 | **통화 (Currency)** | 공급업체와 거래에 사용할 통화 단위 |
| 7 | **환율 (Exchange Rate)** | 구매오더의 통화가 외화일 경우 회사코드 통화와의 환율 지정 |

---

### 품목 개요 (Item Overview) 주요 필드

| 번호 | 필드명 | 설명 |
|------|-------|------|
| 1 | **계정지정범주 (Account Assignment Category)** | 자재/서비스 금액을 어느 회계 개체에 귀속시킬지 정의. 공백=표준 구매, A=자산, K=코스트센터, F=오더 |
| 2 | **품목 범주 (Item Category)** | 자재/서비스 품목의 조달관리 방식 결정. 공백=표준, K=위탁, L=무상사급(외주) |
| 3 | **자재 (Material)** | 공급 받을 자재 번호 입력 |
| 4 | **PO 수량 (PO Quantity)** | 구매오더의 주문 수량 입력 |
| 5 | **단가 (Net Price)** | 구매정보레코드(Info Record) 단가 자동 제안. 화면에서 변경 가능. 참조 문서 참조 시 참조 항목 가격 적용 |
| 6 | **플랜트 (Plant)** | 자재 또는 서비스를 조달 받을 플랜트 지정 |

---

### 품목 세부사항 (Item Details) 주요 탭

#### [송장 (Invoice)] 탭

| 번호 | 필드명 | 설명 |
|------|-------|------|
| 1 | **송장수령** | 공급업체 인보이스 수령 여부 |
| 2 | **GR 기준 IV (GR-Based IV)** | 입고(GR) 기준 송장검증(IV) 실행 여부. 체크 시 입고 수량 범위 내에서만 IV 가능 - 3-way matching 강제 |
| 3 | **세금코드** | 품목에 적용할 세금코드 지정 |

#### [납품 (Delivery)] 탭

| 번호 | 필드명 | 설명 |
|------|-------|------|
| 4 | **초과 납품 한도** | 구매오더 수량 이상의 초과 납품 허용 한도 (%) |
| 5 | **미달 납품 한도** | 구매오더 수량 이하의 미달 납품 허용 한도 (%) |
| 6 | **재고 유형 (Stock Type)** | 입고 시 재고 유형 결정: 공백=가용재고(Unrestricted), X=품질재고(Quality Inspection), B=보류재고(Blocked) |
| 7 | **입고 (Goods Receipt)** | GR 진행 가능 여부 |
| 8 | **비평가 GR (GR Non-Valuated)** | 입고는 이루어지나 회계 평가 처리 없음 |
| 9 | **납품 완료 (Delivery Completed)** | 입고 완료 지시자. 납품 수량이 충족되었거나 더 이상 납품을 받지 않을 경우 지정 |

#### [조건 (Condition)] 탭

단가, 수입 부대 비용(관세, 운임, 기타 제비용), 세금, 할인액 등 조달 비용 관련 **조건 유형(Condition Type)별 금액** 지정

**조건 키 예시:**

| 조건 키 | 설명 |
|--------|------|
| PB00 | 총단가 |
| FRA1 | 운송료 (%) |
| RA00 | 할인 |
| ZOB1 | 관세 |

#### [납품처 주소 (Delivery Address)] 탭

납품처의 주소를 기록. 일반적으로 플랜트의 주소. 특별 조달(무상사급 등)에서 사급업체가 고객사로부터 직접 부품을 받도록 설정 시 사용.

| 필드 | 설명 |
|------|------|
| 공급업체 | 특별 조달 유형(무상사급)에서 사급업체가 고객사로부터 부품 직접 수령 설정 시 입력 |
| SC Vendor (Subcontracting Supplier) | 무상사급 프로세스에서 사용. 입고 시 "사급업체 재고(Stock with subcontractor)"로 기표 |

#### [확정 (Confirmations)] 탭

| 필드 | 설명 |
|------|------|
| 확정 제어 | 인바운드 납품서(Inbound Delivery)가 있어야만 입고 가능하도록 설정 시 지정 |

---

## 계정 지정 범주 (Account Assignment Category)

구매 오더의 회계적인 특성을 결정합니다.

| 코드 | 설명 | 사용 예시 | 필수 입력 필드 |
|------|------|---------|--------------|
| 공백 | 표준 (일반 구매) | 재고 자재 구매 - 재고 계정으로 전기 | 없음 |
| A | 자산 구매 | 설비, 비품 등 고정자산 취득 | 자산번호, G/L 계정 |
| K | 코스트센터 | 소모품, 유지보수 비용 | 코스트센터, G/L 계정 |
| F | 오더 (CO 오더) | 특정 CO 오더에 비용 귀속 | 오더번호, G/L 계정 |
| E | KD-CO (개별 고객) | 고객 맞춤 오더 관련 구매 | |
| P | WBS 요소 (PS) | 프로젝트 구매 | WBS 요소 |

**자산 구매 (A) 특이 사항:**
- Material 번호를 입력하지 않음
- Short Text 필드에 구매 내역을 텍스트로 직접 입력
- 품목 세부사항 [계정지정] 탭에서 G/L 계정(자동 등록)과 자산번호 입력
- 회계의 자산 관리와 연동 진행

---

## 품목 범주 (Item Category)

| 카테고리 | 코드 | 설명 | GR 여부 | 단가 입력 |
|---------|------|------|---------|---------|
| 표준 | 공백 | 일반 자재 구매 | 있음 | Info Record에서 자동 제안 |
| 외주(무상사급) | L | 사급 원자재 제공 후 외주 가공. BOM 구성품이 자동 제안됨 | 있음 | 외주 Info Record 참조 |
| 위탁 | K | 공급업체 재고 보관, 사용 시 결제 | 특수 (출고 시 단가 결정) | 단가 지정 불가 - 출고 시 Info Record 참조 |
| 서비스 | D | 서비스 구매 (공사, 용역) | SES | 서비스 명세서 입력 |
| 재고 이동 | U | 플랜트 간 이동 | 있음 | |

> **위탁(Consignment) 주의**: 위탁 PO에서는 단가를 지정할 수 없습니다. 실제 자재 출고(GI) 시점에 구매정보레코드(Info Category: Consignment, ESOKZ=2)를 참조하여 단가가 결정됩니다.
{: .callout .callout-note}

---

## 구매오더 이력 (PO History)

PO 발행 이후의 진행 사항을 **구매오더 이력**으로 자동 관리합니다.

```
구매오더 4500000010
  - 입고: 21.01 / 5 pcs  (더블클릭 -> 자재문서 조회)
  - 입고: 23.01 / 3 pcs  (더블클릭 -> 자재문서 조회)
  - 입고: 27.01 / 2 pcs  (더블클릭 -> 자재문서 조회)
  - 송장: 30.01 / 10 pcs (더블클릭 -> 송장문서 조회)
    - 더블클릭 -> 회계분개 조회
      - 더블클릭 -> 지급내역 조회
```

각 후속 처리는 관련 회계 정보를 링크하고 있어 **최종 매입대금 지불 여부까지 추적** 가능합니다.

---

## 계약 (Contract / Outline Agreement)

반복 구매되는 물품이나 서비스에 대해 **수량이나 금액 단위로 단가 계약**을 맺어 구매절차를 효율적으로 관리합니다.

| 유형 | 설명 |
|------|------|
| **단가계약 (Value Contract / Quantity Contract)** | 일정 기간 동안의 총 구매 수량/금액에 대해 개별 물품 단가를 책정. 매 구매 시 별도 구매오더(Release Order) 발행 |
| **일정계약 (Scheduling Agreement)** | 장기 계약에서 매 발주 시 납품일정만 제공 (Schedule Line). 별도 PO 불필요 |

- 각 계약서에는 해당 계약에 대해 집행된 **개별 구매오더 실적이 관리**됨
- 일반자재, 서비스, 외주가공, VMI 등 모든 구매 대상 품목에 대해 생성 가능

---

## 특별 조달 유형 (Special Procurement Types)

전통적인 구매 외에 다양한 조달 형태를 지원합니다:

| 유형 | 설명 |
|------|------|
| **무상사급 (Subcontracting)** | 회사가 사급업체에게 원자재(Component)를 무상 제공하고, 외주가공비를 지급하는 프로세스. Item Category = L |
| **위탁 (Vendor Consignment)** | 공급업체가 회사 창고에 재고를 보관하지만, 실제 자재 소비 시에만 대금 지급. Item Category = K |
| **파이프라인 (Pipeline)** | 공공 서비스(전기, 수도, 가스)처럼 파이프라인으로 항상 이용 가능한 자원. 사용량에 대해서만 비용 지불 |
| **플랜트 간 이동 (Stock Transfer)** | 동일 회사 내 다른 플랜트로 재고 이전. 문서 유형 UB 사용 |

---

## PO 생성 후 상태 관리

| 상태 | 설명 |
|------|------|
| 생성됨 | PO 저장, 공급업체에 발송 대기 |
| 전송됨 | 출력/메일/EDI/Fax 발송 완료 |
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

<details markdown="1">
<summary>필드 - 마스터 연관</summary>

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Vendor | 공급업체 기준 정보 | BP (General Data) | F4 검색 도움 |
| Currency | 공급업체 기준 정보 | BP - Purch. Org - Order Currency | 기본값 자동 로드 |
| Payment Terms | 공급업체 기준 정보 | BP - Company Code / Purch. Org | 헤더 자동 설정 |
| Incoterms | 공급업체 기준 정보 | BP - Purch. Org - Incoterms | |
| Net Price | Info Record | ME11 (Info Record) | 자동 제안 |
| Planned Deliv. Time | 자재 마스터 / Info Record | MM01 Purchasing View / ME11 | Info Record 우선 |
| Purchasing Group | 자재 마스터 | MM01 Purchasing View | 기본값 |
| Plant | 조직 구조 | SPRO - Enterprise Structure | |
| Storage Location | 자재 마스터 | MM01 General Plant Storage | |
| Account Assignment Category | SPRO 설정 | SPRO - MM - Purchasing - Account Assignment | 회계 귀속 개체 결정 |

</details>

---

## 관련 SPRO 설정

- [구매 설정 가이드](/mm/config-guide/purchasing/) 참조
