---
title: "자재 기준 정보 (Material Master)"
nav_order: 1
---

# 자재 기준 정보 (Material Master)

## 개요

Material Master는 SAP MM의 **핵심 기준 정보**입니다.
구매, 생산, 재고, 회계 등 모든 모듈이 공유하는 자재 데이터 저장소입니다.

---

## 조직 구조

```
Client
└── Company Code
    └── Plant              ← 자재 대부분 데이터 단위
        └── Storage Location

Purchasing Org             ← 구매 조건 관리 단위
```

---

## 뷰 구조 (MM01 화면)

MM01 실행 시 필요한 **뷰(View)**를 선택하여 데이터 입력:

| 뷰 | 조직 레벨 | 주요 필드 |
|----|----------|----------|
| Basic Data 1/2 | Client | 자재 설명, 기본 단위, 자재 그룹 |
| Purchasing | Plant | 구매 그룹, 계획 납기일, GR 처리 시간 |
| MRP 1~4 | Plant | MRP 방식, 로트 크기, 안전 재고 |
| General Plant/Storage | Plant/SLoc | 재고 단위, 보관 조건 |
| Accounting 1/2 | Plant | 평가 클래스, 이동 평균 단가/표준 단가 |
| Sales | Sales Org | 판매 관련 데이터 (SD 연계) |

---

## 자재 유형 (Material Type)

| 유형 | 코드 | 설명 |
|------|------|------|
| 원자재 | ROH | Raw Material — 재고 관리 |
| 반제품 | HALB | Semi-Finished |
| 완제품 | FERT | Finished Product |
| 소모품 | HIBE | Operating Supplies |
| 비재고품 | NLAG | Non-Stock (소비 직접 처리) |
| 서비스 | DIEN | Service |
| 거래품 | HAWA | Trading Goods |

> **자재 유형**이 중요한 이유: 재고 관리 여부, 평가 클래스, 구매 가능 여부 등을 결정합니다.

---

## Purchasing View 주요 필드

구매 프로세스에서 가장 중요한 뷰:

| 필드 | 설명 |
|------|------|
| Purchasing Group | 구매 담당 그룹 (PR/PO 기본값) |
| Planned Deliv. Time | 계획 납기일 (일수) — MRP 계산 기준 |
| Over Delivery Tolerance | 과다 납품 허용 비율 (%) |
| Under Delivery Tolerance | 과소 납품 허용 비율 (%) |
| GR Processing Time | 입고 처리 소요일수 — MRP 기준 |
| Order Unit | 발주 단위 (기본 단위와 다를 수 있음) |
| Source List | 소스 리스트 필수 여부 |

---

## Accounting View 주요 필드

| 필드 | 설명 |
|------|------|
| Valuation Class | 평가 클래스 — 자동 계정 결정 기준 |
| Price Control | V (이동평균) / S (표준) |
| Moving Avg. Price | 현재 이동 평균 단가 |
| Standard Price | 표준 단가 |

---

## T-code

| T-code | 설명 |
|--------|------|
| MM01 | 자재 마스터 생성 |
| MM02 | 자재 마스터 변경 |
| MM03 | 자재 마스터 조회 |
| MM06 | 삭제 플래그 설정 |
| MM60 | 자재 사용처 조회 |
| MMBE | 재고 현황 조회 (플랜트별) |
| MM50 | 자재 마스터 확장 (뷰 추가) |

---

## 실습 포인트 (개념 이해)

1. **자재 유형 결정** → ROH vs NLAG: 재고로 쌓을지, 바로 소비할지?
2. **기본 단위 vs 발주 단위**: 개(EA) 기준이지만 박스(BOX) 단위로 발주
3. **Planned Deliv. Time**: 이 값이 MRP에서 PR 생성 일자를 결정함
4. **평가 클래스**: GR 시 어떤 재고 계정에 자동 전기할지 결정

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/master-data/mm01-{순번}-{설명}.png`

<!-- 예시: ![MM01 초기 화면]({{ site.baseurl }}/assets/img/master-data/mm01-01-initial.png) -->
<!-- 예시: ![MM01 Purchasing View]({{ site.baseurl }}/assets/img/master-data/mm01-02-purchasing-view.png) -->
<!-- 예시: ![MM01 Accounting View]({{ site.baseurl }}/assets/img/master-data/mm01-03-accounting-view.png) -->

---

## 필드 → 마스터 연관

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Material Type | 자재 유형 커스터마이징 | SPRO → MM → Basic Settings → Material Types | 신규 생성 시 선택 |
| Material Group | 자재 그룹 마스터 | SPRO → MM → Material Master → Define Material Groups | |
| Unit of Measure | UoM 마스터 | CUNI (단위 관리) | |
| Purchasing Group | 구매 그룹 마스터 | SPRO → MM → Purchasing → Create Purch. Groups | Purchasing View 기본값 |
| Valuation Class | 평가 클래스 | SPRO → MM → Valuation → Account Determination | 계정 자동 결정 핵심 키 |
| MRP Type | MRP 유형 | SPRO → MM → MRP → Planning → Define MRP Types | MRP 실행 방식 결정 |
| Plant | 조직 구조 | SPRO → Enterprise Structure → Logistics | 뷰 확장 시 기준 단위 |

---

## 관련 SPRO 설정

→ [기준 정보 설정 가이드](/mm/config-guide/master-data/) 참조
