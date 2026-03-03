---
title: "특수 조달 (Special Procurement)"
nav_order: 5
---

# 특수 조달 (Special Procurement)

표준 구매(외부 조달) 외에 SAP MM이 지원하는 특수 조달 유형입니다.

---

## 외주 (Subcontracting)

### 개념
원자재를 공급업체에 제공하고, 가공된 완제품/반제품을 돌려받는 방식.

```mermaid
flowchart LR
    A["원자재 출고<br/>Mvt 541"] --> B["공급업체 가공"] --> C["완제품 입고<br/>Mvt 101 / Item Cat. L"]
```

### PO 설정
- **Item Category**: L (Subcontracting)
- 아이템 하단 **Component** 탭: 제공할 원자재 목록

### Movement Types

| Mvt | 설명 |
|-----|------|
| 541 | 외주 공급업체로 원자재 출고 |
| 542 | 541 취소 |
| 101 (L) | 외주 완제품 입고 |
| 543 | 외주 소비 (원자재 소비 처리) |

---

## 위탁 재고 (Consignment)

### 개념
공급업체 소유 재고를 자사 창고에 보관하다가, 실제 사용 시 비용 발생.

```mermaid
flowchart LR
    A["공급업체 재고 입고<br/>(무상)"] --> B["자사 창고 보관"] --> C["사용 시 GI<br/>자동 채무 발생"]
```

### PO 설정
- **Item Category**: K (Consignment)
- GR 시: 재고는 증가하지만 회계 전표 없음 (공급업체 소유)
- GI 시: 위탁 재고 소비 → 채무 자동 계상 (MRKO)

### T-code
- **MRKO**: 위탁 정산 (소비 분 채무 계상)
- **MB54**: 위탁 재고 조회

---

## 플랜트 간 이동 (Stock Transfer / STO)

### 개념
자사 내 한 플랜트에서 다른 플랜트로 재고 이동.

```mermaid
flowchart LR
    A["송신 플랜트"] --> B["STO PO (UB)"] --> C["출고<br/>Mvt 351"] --> D["수신 플랜트 입고<br/>Mvt 101"]
```

### STO 유형

| 유형 | 방법 |
|------|------|
| 1단계 | 직접 이동 (Transfer Posting, Mvt 301) |
| 2단계 | 출고 + 입고 분리 (Mvt 351 + 101) |
| 배송 연계 | SD Delivery 통한 이동 |

### T-code
- **ME21N** (UB 유형): STO PO 생성
- **MIGO** Mvt 351: 출고 전기
- **MIGO** Mvt 101: 수신 플랜트 입고

---

## 파이프라인 (Pipeline)

### 개념
전기, 수도, 가스처럼 재고로 쌓지 않고 소비 시 자동 비용 처리.

- PO Item Category: P
- 소비 시 자동으로 채무 발생 (재고 없음)
- **MRKO**: 파이프라인 정산

---

## 요약

| 유형 | Item Cat. | 특징 |
|------|-----------|------|
| 표준 | 공백 | 일반 구매, 재고 증가 |
| 외주 | L | 원자재 제공 + 완제품 수령 |
| 위탁 | K | 공급업체 소유, 사용 시 비용 |
| STO | - | 자사 플랜트 간 이동 |
| 파이프라인 | P | 소비 즉시 비용 처리 |

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/purchasing/special-{순번}-{설명}.png`

<!-- 예시: ![외주 PO Item Category L]({{ site.baseurl }}/assets/img/purchasing/special-01-subcontracting-po.png) -->
<!-- 예시: ![위탁 재고 입고 화면]({{ site.baseurl }}/assets/img/purchasing/special-02-consignment-gr.png) -->
<!-- 예시: ![STO PO UB 유형]({{ site.baseurl }}/assets/img/purchasing/special-03-sto-po.png) -->

---

<details markdown="1">
<summary>필드 → 마스터 연관</summary>

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Item Category | 수동 선택 | - | L(외주), K(위탁), P(파이프라인) |
| Component (외주 L) | BOM (Bill of Materials) | CS01 (BOM 생성) - PP-MM 연계 | 제공 원자재 자동 로드 |
| Movement Type (541) | 이동 유형 커스터마이징 | SPRO → MM → IM → Movement Types (OMJJ) | 외주 출고 자동 결정 |
| Consignment 정산 | 위탁 소비 기록 | MRKO (위탁 정산 T-code) | 월말 정산 실행 |
| Document Type (UB) | PO 문서 유형 | SPRO → MM → Purchasing → Define Document Types for PO | STO용 |

</details>

---

## 관련 SPRO 설정

→ [구매 설정 가이드](/mm/config-guide/purchasing/) 참조
