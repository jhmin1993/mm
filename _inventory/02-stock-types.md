---
title: "재고 유형 (Stock Types)"
nav_order: 2
---

# 재고 유형 (Stock Types)

## 개요

SAP MM에서 재고는 **물리적 위치**와 **상태(가용성)**에 따라 다양한 유형으로 분류됩니다.

---

## 주요 재고 유형

### 1. Unrestricted Use Stock (자유 사용 재고)

- **설명**: 즉시 사용/출고 가능한 표준 재고
- **MMBE**: 가장 일반적으로 보이는 재고
- **전환 방법**: QI → Unrestricted (Mvt 321)

### 2. Quality Inspection Stock (품질 검사 재고, QI)

- **설명**: 품질 검사 중인 재고 — 사용 불가 상태
- **발생**: QM 모듈과 연계 시 GR 후 자동으로 QI 재고 생성
- **해제**: 검사 합격 → Mvt 321 (QI → Unrestricted)
- **반품**: 검사 불합격 → Mvt 122 (공급업체 반품)

### 3. Blocked Stock (블록 재고)

- **설명**: 사용 금지된 재고 (손상, 분쟁, 특별 사유)
- **이동**: Unrestricted → Blocked (Mvt 344), Blocked → Unrestricted (Mvt 343)
- **GR Blocked**: 입고 시 임시 보류 (Mvt 103)

### 4. In-Transit Stock (운송 중 재고)

- **설명**: 플랜트 간 이동 중 상태 (2단계 STO에서 발생)
- **발생**: 송신 플랜트 출고(Mvt 351) 후, 수신 플랜트 입고(Mvt 101) 전
- **소유권**: SAP 관점에서는 이미 자사 재고

### 5. Consignment Stock (위탁 재고)

- **설명**: 공급업체 소유이지만 자사 창고에 보관
- **비용**: 실제 사용(GI) 시점에만 채무 발생
- **정산**: MRKO (위탁 정산)

### 6. Project Stock (프로젝트 재고)

- **설명**: 특정 WBS/Project에 할당된 재고
- **사용**: 해당 프로젝트에서만 소비 가능

### 7. Sales Order Stock (판매 오더 재고)

- **설명**: 특정 SD 판매 오더에 예약된 재고
- **Make-to-Order**: MTO 생산 방식에서 사용

---

## 재고 유형 비교

| 재고 유형 | 사용 가능 | 회계 반영 | 대표 이동 |
|----------|---------|---------|---------|
| Unrestricted | ✅ | ✅ | 101, 201 |
| QI | ❌ | ✅ | 103→321 |
| Blocked | ❌ | ✅ | 344 |
| In-Transit | ❌ | ✅ | 351→101 |
| Consignment | ✅* | ❌ | MRKO 정산 시 |
| Project | 제한적 | ✅ | - |

*위탁 재고는 사용 가능하나 비용은 사용 시 발생

---

## MMBE 재고 현황 화면

MMBE 실행 시 표시되는 주요 열:

| 열 | 설명 |
|----|------|
| Unrestricted | 자유 사용 재고 |
| Qual.Insp. | 품질 검사 재고 |
| Restricted-Use | 제한 재고 |
| Blocked | 블록 재고 |
| Transit | 운송 중 |
| Consignment | 위탁 재고 |

---

## 실습 포인트

1. **MMBE에서 재고 0이지만 QI에 있는 경우**: 검사 완료 전이므로 사용 불가
2. **In-Transit 재고**: 수신 플랜트에서는 아직 입고 안 됨 — 입고 전기(MIGO 101) 필요
3. **위탁 재고 관리**: 월말 MRKO 실행으로 사용 분 정산 필수

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/inventory/mmbe-{순번}-{설명}.png`

<!-- 예시: ![MMBE 재고 현황 전체]({{ site.baseurl }}/assets/img/inventory/mmbe-01-stock-overview.png) -->
<!-- 예시: ![MMBE QI/Blocked 재고 상세]({{ site.baseurl }}/assets/img/inventory/mmbe-02-qi-blocked.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Stock Type (Unrestricted/QI/Blocked) | 이동 유형에 따라 자동 결정 | SPRO → MM → IM → Movement Types (OMJJ) | 이동 유형별 재고 유형 결정 |
| Batch | 배치 기준 정보 | MSC1N (Batch 생성) | 배치 관리 활성화 시 표시 |
| Valuation Type | 분할 평가 설정 | SPRO → MM → Valuation → Split Valuation | 동일 자재 복수 평가 시 |
| Plant / Storage Location | 조직 구조 | SPRO → Enterprise Structure → Logistics | MMBE 조회 기준 |
| QM 연계 (QI 재고) | QM 검사 계획 | QM 모듈 → 검사 유형 설정 | GR 시 자동 QI 이동 |

---

## 관련 SPRO 설정

→ [재고 설정 가이드](/mm/config-guide/inventory/) 참조
