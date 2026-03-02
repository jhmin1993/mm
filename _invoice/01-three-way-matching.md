---
title: "3-way Matching & MIRO"
nav_order: 1
---

# 3-way Matching & 송장 검증 (MIRO)

## 3-way Matching 개념

**3-way Matching**은 송장 검증의 핵심으로, 세 가지 문서를 비교합니다:

```
PO (구매 발주)  ←→  GR (입고)  ←→  Invoice (공급업체 청구서)
  수량/단가            실제 수령          청구 금액/수량
```

모든 수량과 금액이 허용 오차 범위 내에서 일치해야 전기 가능합니다.

---

## MIRO 화면 구조

### 헤더 (Header)
| 필드 | 설명 |
|------|------|
| Transaction | Invoice / Credit Memo / Subsequent Debit 등 |
| Invoice Date | 청구서 날짜 |
| Posting Date | 전기 일자 |
| Reference | 공급업체 청구서 번호 |
| Amount | 청구 총액 |
| Currency | 통화 |
| Tax | 세금 코드 |

### 아이템 (PO Reference)
- **PO 번호 입력** → 미결 GR 수량/금액 자동 로드
- 수량/단가 확인 후 전기

---

## 매칭 방법

### PO 기반 매칭 (GR-Based IV 미설정)
```
PO 단가 × Invoice 수량 = 검증 금액
```

### GR 기반 매칭 (GR-Based IV 설정 — 권장)
```
GR 수량 × PO 단가 = 검증 금액
(입고된 만큼만 청구 가능)
```

> **GR-Based IV**: 공급업체 마스터 또는 PO에서 설정. 입고 전 송장 처리 방지.

---

## 허용 오차 (Tolerance)

| 오차 키 | 설명 |
|--------|------|
| PP | 가격 편차 (단가 차이) |
| BD | 금액 차이 (총액 기준) |
| ST | 소액 차이 |
| DQ | 수량 초과 |

오차 초과 시 → 자동 블록 또는 워닝 발생

---

## 자동 회계 전표

MIRO 전기 시 자동 생성:

```
차변: GR/IR 정산 계정 (WRX)   ← GR 시 대변된 계정 정산
차변: 세금 계정 (VST 등)       ← VAT
대변: 공급업체 채무 (Vendor)   ← 지급 채무 확정
```

가격 차이 발생 시:
```
차변/대변: 가격 차이 계정 (PRD)  ← 표준 원가 자재에서 발생
```

---

## T-code

| T-code | 설명 |
|--------|------|
| MIRO | 송장 입력 |
| MIR4 | 송장 문서 조회 |
| MIR7 | 임시 저장 (Parked) |
| MIRA | 백그라운드 송장 처리 |
| MR8M | 송장 취소 |
| FB60 | FI 직접 채무 전기 (PO 없는 경우) |

---

## 실습 포인트

1. **GR 없이 MIRO 시도 시**: GR-Based IV 설정이면 오류 발생
2. **단가 차이**: PO 단가 vs 청구 단가 다를 경우 → 허용 오차 범위 내면 자동 전기, 초과 시 블록
3. **세금 처리**: 세금 코드(Tax Code) 반드시 입력 — 자동 세금 계산
4. **임시 저장(Park)**: MIR7로 저장 후 검토 → MIRO에서 불러와 전기

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/invoice/miro-{순번}-{설명}.png`

<!-- 예시: ![MIRO 초기 화면]({{ site.baseurl }}/assets/img/invoice/miro-01-main.png) -->
<!-- 예시: ![MIRO PO 참조 아이템 로드]({{ site.baseurl }}/assets/img/invoice/miro-02-po-reference.png) -->
<!-- 예시: ![MIRO 전기 결과 회계 문서]({{ site.baseurl }}/assets/img/invoice/miro-03-accounting-doc.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Vendor | PO에서 자동 | ME21N Header | |
| Currency | PO / 공급업체 기준 정보 | BP Purch. Org | |
| Tax Code | 세금 코드 마스터 | SPRO → FI → Tax → Define Tax Codes | 수동 선택 필수 |
| 허용 오차 (자동 블록) | 허용 오차 설정 | SPRO → MM → LIV → Invoice Block → Set Tolerance Limits | 시스템 자동 비교 |
| 채무 계정 (자동) | 공급업체 기준 정보 | BP → Company Code → Reconciliation Account | 자동 전기 |

---

## 관련 SPRO 설정

→ [송장 설정 가이드](/mm/config-guide/invoice/) 참조
