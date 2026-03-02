---
title: "재고 실사 (Physical Inventory)"
nav_order: 3
---

# 재고 실사 (Physical Inventory)

## 개요

Physical Inventory(재고 실사)는 **실제 재고 수량과 SAP 장부 수량을 비교**하여 차이를 조정하는 프로세스입니다.

---

## 실사 프로세스

```mermaid
flowchart LR
    A["실사 문서 생성<br/>MI01"] --> B["재고 계수<br/>MI04"] --> C["결과 입력<br/>MI04"] --> D["차이 분석<br/>MI20"] --> E["차이 전기<br/>MI07"]
```

### 1단계: 실사 문서 생성 (MI01)

- 실사 대상 자재/보관 위치 지정
- **Posting Block**: 실사 문서 생성 시 해당 자재 이동 금지 가능

### 2단계: 재고 계수 (실물 확인)

- 창고 담당자가 실제 수량을 종이 또는 모바일 기기로 계수
- **MI04**: 계수 결과 입력
- **MI05**: 계수 변경
- **MI06**: 계수 결과 조회

### 3단계: 차이 분석 (MI20)

- 장부 수량 vs 실제 계수 수량 비교
- 허용 오차(금액 기준) 초과 시 재계수 요청 가능

### 4단계: 차이 전기 (MI07)

- 차이를 장부에 반영
- **자동 회계 전표 생성**: 재고 증감 + 재고 조정 계정 (GBB/INV)

---

## 실사 방법

| 방법 | 설명 |
|------|------|
| Annual Inventory | 연 1회 전체 실사 (결산 전) |
| Cycle Counting | 자재별 주기적 실사 (ABC 분류 기반) |
| Continuous Inventory | 상시 실사 |

### Cycle Counting (순환 실사)

ABC 분류에 따라 실사 주기를 다르게 설정:

| 분류 | 기준 | 실사 주기 |
|------|------|---------|
| A | 고가/고빈도 | 월 1회 이상 |
| B | 중간 | 분기 1회 |
| C | 저가/저빈도 | 연 1회 |

자재 마스터 MRP1 뷰에서 Cycle Counting Indicator (A/B/C) 설정.

---

## T-code

| T-code | 설명 |
|--------|------|
| MI01 | 실사 문서 생성 |
| MI02 | 실사 문서 변경 |
| MI03 | 실사 문서 조회 |
| MI04 | 계수 결과 입력 |
| MI05 | 계수 결과 변경 |
| MI06 | 계수 결과 조회 |
| MI07 | 차이 전기 |
| MI20 | 차이 목록 조회 |
| MI22 | 실사 문서 목록 |
| MICN | Cycle Counting 실사 문서 자동 생성 |

---

## 실사 시 주의사항

1. **Posting Block**: 실사 중 해당 자재 이동 금지 - 계수 정확도 보장
2. **차이 허용 오차**: 금액 기준으로 설정, 초과 시 재계수 또는 승인 필요
3. **결산 연계**: 회계 결산 전 실사 완료 및 차이 전기 필수
4. **Cycle Counting**: 창고 운영 중단 없이 상시 실시 가능 - 효율적

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/inventory/mi-{순번}-{설명}.png`

<!-- 예시: ![MI01 실사 문서 생성]({{ site.baseurl }}/assets/img/inventory/mi-01-create-doc.png) -->
<!-- 예시: ![MI04 계수 결과 입력]({{ site.baseurl }}/assets/img/inventory/mi-02-count-entry.png) -->
<!-- 예시: ![MI20 차이 목록 조회]({{ site.baseurl }}/assets/img/inventory/mi-03-difference-list.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Plant / Storage Location | 조직 구조 | SPRO → Enterprise Structure → Logistics | 실사 대상 범위 |
| Material | 자재 마스터 | MM01 (자재 생성) | |
| 허용 오차 (금액 기준) | 실사 허용 오차 설정 | SPRO → MM → Physical Inventory → Set Tolerance Limits | 초과 시 재계수 또는 승인 |
| Cycle Counting Indicator | 자재 마스터 | MM01 MRP1 View → CC Indicator | A/B/C 분류로 주기 자동 결정 |
| 재고 조정 계정 (자동) | 계정 결정 | SPRO → MM → IM → Account Determination → GBB/INV | 차이 전기 시 자동 계정 |

---

## 관련 SPRO 설정

→ [재고 설정 가이드](/mm/config-guide/inventory/) 참조
