---
title: "Movement Types (이동 유형)"
nav_order: 1
---

# Movement Types (이동 유형)

## 개요

Movement Type은 SAP MM에서 **모든 자재 이동을 분류**하는 3자리 코드입니다.
이동 유형에 따라 재고 증감, 계정 결정, 이동 방향이 자동으로 결정됩니다.

---

## Movement Type 체계

### 1xx — 입고 (Goods Receipt)

| Mvt | 설명 |
|-----|------|
| 101 | PO 기준 입고 (재고 증가) |
| 102 | 101 취소 |
| 103 | Blocked Stock 입고 (검수 대기) |
| 104 | 103 취소 |
| 105 | Blocked → Unrestricted 해제 |
| 122 | PO 기준 반품 (공급업체로 반환) |

### 2xx — 출고 (Goods Issue)

| Mvt | 설명 |
|-----|------|
| 201 | 원가 센터 대상 출고 (소모품) |
| 202 | 201 취소 |
| 261 | 생산 오더 대상 출고 (PP 연계) |
| 262 | 261 취소 |
| 291 | 기타 출고 |

### 3xx — 이동 (Transfer Posting)

| Mvt | 설명 |
|-----|------|
| 301 | 플랜트 간 재고 이동 (1단계) |
| 302 | 301 취소 |
| 311 | 보관 위치 간 이동 (동일 플랜트) |
| 312 | 311 취소 |
| 321 | QI → Unrestricted (검수 해제) |
| 322 | 321 취소 |
| 344 | Blocked → Unrestricted |
| 343 | Unrestricted → Blocked |

### 4xx — 기타 입고

| Mvt | 설명 |
|-----|------|
| 401 | 프로젝트 재고 이동 |
| 411 | 특별 재고 → 일반 재고 |
| 451 | 반품 수령 (고객으로부터) |

### 5xx — 외주/위탁

| Mvt | 설명 |
|-----|------|
| 501 | 구매 오더 없이 입고 |
| 541 | 외주 공급업체로 원자재 출고 |
| 542 | 541 취소 |
| 543 | 외주 소비 |
| 551 | 스크랩 처리 |
| 552 | 551 취소 |
| 561 | 최초 재고 등록 (기초 데이터 입력) |

### 6xx — SD 연계 (출하)

| Mvt | 설명 |
|-----|------|
| 601 | 고객 납품 출고 |
| 602 | 601 취소 |
| 651 | 고객 반품 수령 |

---

## 이동 유형과 재고 영향

| 구분 | 방향 | 예시 |
|------|------|------|
| 입고 | 재고 증가 (+) | 101, 501, 561 |
| 출고 | 재고 감소 (-) | 201, 261, 601 |
| 이동 | 재고 이전 (중립) | 301, 311, 321 |
| 취소 | 역방향 (+/-) | 102, 202 |

---

## 이동 유형 조회

- **T-code OMJJ**: 이동 유형 커스터마이징
- **MIGO**: A/R/K 옵션에서 이동 유형 직접 입력 가능

---

## 실습 포인트

1. **101 vs 501**: 101은 PO 참조 필수, 501은 PO 없이 입고 (단, 제한적 사용)
2. **261 출고**: PP 생산 오더와 연계 → 오더 번호 필수 입력
3. **321 이동**: 품질 검사 통과 후 사용 가능 재고로 전환
4. **취소 vs 반전**: 102(취소)는 당일/직후, 불가 시 122(반품) 사용

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/inventory/migo-{순번}-{설명}.png`

<!-- 예시: ![MIGO Movement Type 선택 화면]({{ site.baseurl }}/assets/img/inventory/migo-01-mvt-selection.png) -->
<!-- 예시: ![OMJJ Movement Type 설정]({{ site.baseurl }}/assets/img/inventory/omjj-01-mvt-config.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Movement Type | 이동 유형 커스터마이징 | SPRO → MM → IM → Movement Types (OMJJ) | 3자리 코드, 직접 입력 |
| Plant | 조직 구조 | SPRO → Enterprise Structure → Logistics | |
| Storage Location | 자재 마스터 | MM01 General Plant Storage | 기본값 |
| Reason for Movement | 이동 사유 마스터 | SPRO → MM → IM → Define Reasons for Movement | 선택적 입력 |
| Account Assignment (201) | 원가 센터 마스터 | KS01 (원가 센터 생성) | 소비성 출고 시 필요 |
| 계정 (자동) | 평가 클래스 + 이동 유형 | SPRO → MM → Valuation → OBYC (GBB) | 자동 계정 결정 |

---

## 관련 SPRO 설정

→ [재고 설정 가이드](/mm/config-guide/inventory/) 참조
