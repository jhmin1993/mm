---
title: "송장 검증 (Invoice Verification)"
nav_order: 1
---

# 송장 검증 (Logistics Invoice Verification)

P2P 프로세스의 마지막 단계 — 공급업체 청구서를 검증하고 지급 채무를 확정합니다.

---

## 송장 검증 흐름

```
공급업체 청구서 수신 → MIRO 입력 → 3-way Matching → 전기 → FI 지급
```

---

## 학습 항목

| 항목 | 링크 | 설명 |
|------|------|------|
| [3-way Matching](/mm/invoice/01-three-way-matching/) | PO ↔ GR ↔ IV | 핵심 검증 방법 |
| [송장 블록](/mm/invoice/02-invoice-blocks/) | 블록 관리 | 불일치 시 자동/수동 블록 |

---

## 핵심 T-code

| T-code | 설명 |
|--------|------|
| MIRO | 송장 입력 (가장 많이 사용) |
| MIR4 | 송장 문서 조회 |
| MIR7 | 임시 저장 (Parked Invoice) |
| MRBR | 블록 송장 해제 |
| MR11 | GR/IR 정산 계정 관리 |
| MRKO | 위탁/파이프라인 정산 |
