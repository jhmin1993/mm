---
title: "타 모듈 통합 — FI, PP, SD 연계"
nav_order: 3
---

# MM 모듈 통합 (Integration)

## MM-FI 통합 (재무회계)

MM 거래 중 **재고 관련 이동**은 자동으로 FI 회계 전표를 생성합니다.

### 입고 (GR) 시 자동 회계 처리

```
PO 참조 입고 (Mvt 101):
  차변: 재고 계정 (BSX)       → 재고 자산 증가
  대변: GR/IR 정산 계정 (WRX) → 미결 채무 계상

송장 검증 (MIRO):
  차변: GR/IR 정산 계정 (WRX) → 정산
  대변: 채무 계정 (Vendor)     → 지급 채무
```

### 주요 계정 키 (Account Key)

| 계정 키 | 설명 | 차/대 |
|--------|------|-------|
| BSX | 재고 계정 | 차변 (입고 시) |
| WRX | GR/IR 정산 계정 | 대변 (입고) / 차변 (IV) |
| PRD | 가격 차이 계정 | 표준 원가 차이 |
| GBB | 소비 계정 | 소비/출고 시 |

### 평가 방법 (Valuation Method)

| 방법 | 코드 | 설명 |
|------|------|------|
| 이동 평균 단가 | V | 입고 시마다 재계산 |
| 표준 단가 | S | 고정 단가, 차이는 PRD |

---

## MM-PP 통합 (생산관리)

### 생산 오더 → 자재 출고

```
PP 생산 오더 → 자재 불출 (MIGO, Mvt 261) → 재고 감소 + 비용 이전
```

| Movement Type | 설명 |
|--------------|------|
| 261 | 생산 오더 대상 자재 출고 |
| 262 | 261 취소 (반품) |
| 101 | GR to Production Order (완제품 입고) |

### MRP 연계

- MM의 **MRP (Material Requirements Planning)** 실행: MD01/MD02
- 재고 부족 시 **자동 PR 생성** (MRP 구매 요청)
- Source List와 Info Record 활용하여 자동 소스 결정

---

## MM-SD 통합 (판매관리)

### 고객 납품 → 출고

```
SD 납품 오더 → 피킹 → 출고 전기 (Mvt 601) → 재고 감소 + 매출 원가
```

| Movement Type | 설명 |
|--------------|------|
| 601 | 고객 납품 출고 |
| 602 | 601 취소 |
| 651 | 고객 반품 |

---

## MM-WM 통합 (창고관리)

- Storage Location → Warehouse 연계
- Transfer Order (전송 지시): LT01
- 입고 시 자동 Transfer Requirement 생성

---

## 통합 흐름 요약

```
PP 생산 오더
    ↓ Mvt 261 (자재 출고)
MM 재고 관리
    ↑ Mvt 101 (입고)
MM 구매 프로세스 (PR → PO → GR)
    ↓ 회계 전표
FI 재무회계 (GR/IR 정산 → 지급)
    ↑ 납품
SD 판매 (고객 납품, Mvt 601)
```

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/process/integration-{순번}-{설명}.png`

<!-- 예시: ![GR 자동 회계 전표]({{ site.baseurl }}/assets/img/process/integration-01-gr-accounting.png) -->
<!-- 예시: ![OBYC 계정 결정 설정]({{ site.baseurl }}/assets/img/process/integration-02-obyc.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Valuation Class | 자재 마스터 | MM01 Accounting 1 View | 계정 결정 핵심 키 |
| Account Key (BSX/WRX) | 계정 결정 설정 | SPRO → MM → Valuation → Account Determination → OBYC | 자동 계정 결정 |
| Movement Type (261/601) | 이동 유형 커스터마이징 | SPRO → MM → IM → Movement Types (OMJJ) | PP/SD 연계 트리거 |
| Cost Center | CO 마스터 | KS01 (원가 센터 생성) | 출고(GI) 시 계정 지정 |

---

## 관련 SPRO 설정

→ [기준 정보 설정 가이드](/mm/config-guide/master-data/) 참조
