---
layout: page
title: "송장 검증 (Invoice Verification)"
permalink: /docs/invoice-verification/overview/
---

## 송장 검증 개요

SAP MM의 Logistics Invoice Verification(LIV)은 공급업체 송장을 검증하고 대금 지급을 위한 회계 전기를 처리합니다.

---

## 3-Way Matching

SAP의 핵심 내부 통제 메커니즘:

```
발주서(PO)  +  입고 문서(GR)  +  공급업체 송장(IR)
  ME23N          MIGO/MB03          MIRO
     ↓               ↓                 ↓
  발주 수량       입고 수량         청구 수량
  발주 단가       입고 단가         청구 단가
          → 세 문서가 허용 편차 내에서 일치해야 지급 승인
```

---

## 주요 T-code

| T-code | 설명 | 용도 |
|--------|------|------|
| MIRO | Enter Incoming Invoice | 송장 입력 |
| MIR4 | Display Invoice Document | 송장 문서 조회 |
| MIR6 | Invoice Overview | 송장 목록 조회 |
| MIRA | Enter Incoming Invoice (Fast Entry) | 송장 빠른 입력 |
| MR8M | Cancel Invoice Document | 송장 취소 |
| MRBR | Release Blocked Invoices | 차단 송장 해제 |

---

## 송장 차단(Invoice Block) 사유

| 차단 사유 | 설명 |
|-----------|------|
| Price Block | 발주 단가와 송장 단가 편차 초과 |
| Quantity Block | 발주/입고 수량 대비 송장 수량 초과 |
| Date Block | 납기일 편차 초과 |
| Manual Block | 수동 차단 설정 |

---

## 학습 노트

- **Evaluated Receipt Settlement (ERS)**: 입고 데이터를 기반으로 자동 송장 생성 (공급업체 송장 불필요)
- **Credit Memo**: 공급업체로부터 받는 크레딧 노트 처리 (MIRO에서 처리)
- 허용 편차(Tolerance) 설정: SPRO에서 구성
- GR-Based IV 체크: PO 라인 아이템에서 설정, 입고 후에만 송장 처리 가능

---

*최종 업데이트: 2026-03-02*
