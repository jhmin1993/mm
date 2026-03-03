---
title: "입고 처리 (Goods Receipt)"
nav_order: 4
---

# 입고 처리 (Goods Receipt / GR)

## 개요

GR은 공급업체로부터 자재를 **물리적으로 수령**하고 SAP에 기록하는 단계입니다.
- 재고 증가
- 자동 회계 전표 생성 (MM-FI 통합)
- 3-way Matching 데이터 확정

---

## MIGO 화면 구조

**MIGO** (T-code): 입출고, 재고 이동, 반품 등 모든 자재 이동 처리

```mermaid
flowchart LR
    A["MIGO 실행"] --> B["Action 선택"] --> C["Reference Document 선택"]
```

### Action 선택

| Action | 설명 |
|--------|------|
| Goods Receipt | 입고 |
| Return Delivery | 공급업체 반품 |
| Goods Issue | 출고 |
| Transfer Posting | 재고 이동 |
| Cancellation | 취소 |

### Reference Document 선택

| 참조 | 설명 |
|------|------|
| Purchase Order | PO 참조 입고 (가장 일반적) |
| Inbound Delivery | 입고 배송 문서 참조 |
| Material Document | 자재 문서 취소 |

---

## 입고 (GR to PO) 프로세스

```mermaid
flowchart LR
    A["MIGO<br/>Goods Receipt + PO"] --> B["PO 번호 입력"] --> C["아이템 자동 로드"] --> D["수량/보관위치 확인"] --> E["전기 (Post)"]
```

### 입력 항목

| 필드 | 설명 |
|------|------|
| Movement Type | 101 (PO 기준 입고) |
| Plant | 입고 플랜트 |
| Storage Location | 보관 위치 |
| Quantity | 실제 입고 수량 |
| Batch | 배치 번호 (배치 관리 시) |

---

## Movement Type - 입고 관련

| Movement Type | 설명 |
|--------------|------|
| 101 | PO 기준 입고 (재고 증가) |
| 102 | 101 취소 |
| 103 | GR Blocked Stock (입고 후 검수 대기) |
| 104 | 103 취소 |
| 105 | Blocked → Unrestricted 해제 |
| 122 | PO 기준 반품 (공급업체로) |

---

## 자동 회계 전표 (MM-FI 통합)

PO 기준 입고 시 자동 생성:

> **차변**: 재고 계정 (BSX) - Valuation Class로 결정<br>
> **대변**: GR/IR 정산 계정 (WRX) - 공통 계정 (미지급 채무)
{: .callout .callout-note}

- 표준 가격(S) 자재: PO 가격과 차이 발생 시 PRD 계정에 차이 반영
- 이동 평균(V) 자재: 재고 단가 자동 재계산

---

## GR 후 상태

1. **PO 이행 수량 업데이트**: `Quantity Delivered` 증가
2. **3-way Matching 준비**: PO ↔ GR 데이터 확정
3. **품질 검사 연계**: QM 활성화 시 QI 재고로 입고
4. **자재 문서 생성**: MB51로 조회 가능

---

## T-code

| T-code | 설명 |
|--------|------|
| MIGO | 자재 이동 (입출고, 재고 이동) |
| MB51 | 자재 문서 목록 |
| MB52 | 보관 위치별 재고 |
| MMBE | 재고 현황 (전체) |
| MB03 | 자재 문서 조회 |

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/purchasing/migo-{순번}-{설명}.png`

<!-- 예시: ![MIGO 입고 초기 화면]({{ site.baseurl }}/assets/img/purchasing/migo-01-gr-screen.png) -->
<!-- 예시: ![MIGO PO 참조 아이템]({{ site.baseurl }}/assets/img/purchasing/migo-02-item-overview.png) -->
<!-- 예시: ![MIGO 전기 결과 자재문서]({{ site.baseurl }}/assets/img/purchasing/migo-03-material-doc.png) -->

---

<details markdown="1">
<summary>필드 → 마스터 연관</summary>

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Movement Type | 이동 유형 커스터마이징 | SPRO → MM → IM → Movement Types (OMJJ) | 직접 입력 또는 자동 결정 |
| Plant | PO에서 자동 복사 | ME21N Item | |
| Storage Location | 자재 마스터 / 수동 | MM01 General Plant Storage | 기본값 |
| Batch | 배치 기준 정보 | MSC1N (Batch 생성) | 배치 관리 활성화 시 |
| 재고 계정 (자동) | 평가 클래스 | MM01 Accounting 1 → Valuation Class | OBYC 자동 계정 결정 |

</details>

---

## 관련 SPRO 설정

→ [재고 설정 가이드](/mm/config-guide/inventory/) 참조
