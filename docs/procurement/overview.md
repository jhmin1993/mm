---
layout: page
title: "구매 관리 (Procurement)"
permalink: /docs/procurement/overview/
---

## 구매 관리 개요

SAP MM의 구매 프로세스는 **구매 요청(PR)**에서 시작하여 **대금 지급(Payment)**으로 완료됩니다.

---

## 구매 프로세스 흐름

```
구매 요청(PR) → 견적 요청(RFQ) → 견적 비교 → 발주(PO) → 입고(GR) → 송장 검증(IV) → 대금 지급
```

---

## 주요 T-code

| T-code | 설명 | 용도 |
|--------|------|------|
| ME51N | Create Purchase Requisition | 구매 요청 생성 |
| ME52N | Change Purchase Requisition | 구매 요청 변경 |
| ME53N | Display Purchase Requisition | 구매 요청 조회 |
| ME41 | Create Request for Quotation | 견적 요청 생성 |
| ME47 | Maintain Quotation | 견적 입력 |
| ME49 | Price Comparison | 견적 가격 비교 |
| ME21N | Create Purchase Order | 발주서 생성 |
| ME22N | Change Purchase Order | 발주서 변경 |
| ME23N | Display Purchase Order | 발주서 조회 |
| ME2M | PO List by Material | 자재별 발주 목록 |

---

## 구매 문서 유형

| 문서 유형 | 설명 |
|-----------|------|
| NB | Standard Purchase Order (표준 발주) |
| FO | Framework Order (단가 계약) |
| UB | Stock Transfer Order (재고 이전 발주) |

---

## 학습 노트

- PR(Purchase Requisition)은 내부 문서, PO(Purchase Order)는 외부 공급업체에 발송
- **Source List**: 특정 자재의 우선 공급업체 지정 (ME01)
- **Info Record**: 자재-공급업체 조합의 가격 정보 저장 (ME11)

---

*최종 업데이트: 2026-03-02*
