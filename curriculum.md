---
layout: default
title: "6개월 학습 커리큘럼"
permalink: /curriculum/
---

# 📅 SAP MM 6개월 학습 커리큘럼

**하루 30분 × 6개월 = 약 90시간.** 개념 정리 + 실습 병행.

---

## 전체 로드맵

| Phase | 기간 | 주제 | 핵심 키워드 |
|-------|------|------|-----------|
| [Phase 1](#phase-1) | 1~4주 | SAP 기초 + 기업 구조 + 자재 마스터 | Client, Plant, MM01 |
| [Phase 2](#phase-2) | 5~8주 | 공급업체 마스터 + 구매 기준 정보 | BP, ME11, ME01 |
| [Phase 3](#phase-3) | 9~12주 | BOM + 구매 프로세스 시작 | CS01, ME51N, ME41 |
| [Phase 4](#phase-4) | 13~16주 | 구매 프로세스 완성 + 입고 | ME21N, MIGO, MMBE |
| [Phase 5](#phase-5) | 17~20주 | 특수 조달 + MRP | 외주, 위탁, MD01N |
| [Phase 6](#phase-6) | 21~24주 | 송장 검증 + SPRO + 통합 실습 | MIRO, SPRO, 통합 |

---

<a id="phase-1"></a>
## Phase 1. SAP 기초 + 기업 구조 + 자재 마스터 (1~4주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **1주** | SAP/ERP 개요<br/>ECC vs S/4HANA | SAP GUI 탐색<br/>메뉴/Favorites | [Client / Company Code]({{ '/enterprise-structure/index/' | relative_url }})<br/>계층 개념 | [Plant / SLoc]({{ '/enterprise-structure/index/' | relative_url }})<br/>조직 단위 | 1주 복습<br/>조직 구조 정리 |
| **2주** | [구매 조직]({{ '/enterprise-structure/index/' | relative_url }})<br/>Purchasing Org | 구매 그룹<br/>Purchasing Group | 기업 구조 전체<br/>N:M 관계 정리 | SPRO 탐색<br/>MM 경로 확인 | 2주 복습<br/>조직도 직접 그리기 |
| **3주** | [자재 마스터 개요]({{ '/master-data/01-material-master/' | relative_url }})<br/>37개 View 구조 | 자재 유형<br/>ROH/FERT/NLAG | [Basic Data View]({{ '/master-data/01-material-master/' | relative_url }})<br/>기본 단위/자재그룹 | [Purchasing View]({{ '/master-data/01-material-master/' | relative_url }})<br/>PDT/GR 처리 시간 | 3주 복습<br/>View별 역할 정리 |
| **4주** | [MRP View]({{ '/master-data/01-material-master/' | relative_url }})<br/>MRP 유형/Lot Size | [Accounting View]({{ '/master-data/01-material-master/' | relative_url }})<br/>가격 통제 V/S | 자재 생성 실습<br/>MM01 ROH 자재 | 자재 확장 실습<br/>MM01 View 추가 | **Phase 1 복습**<br/>용어사전 A-C |

**이번 달 목표:** MM01로 원자재 자재 마스터를 View별로 직접 생성할 수 있다.

---

<a id="phase-2"></a>
## Phase 2. 공급업체 마스터 + 구매 기준 정보 (5~8주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **5주** | [Vendor Master 개요]({{ '/master-data/02-vendor-master/' | relative_url }})<br/>BP 개념 | BP General Data<br/>주소/은행 입력 | BP Company Code<br/>지급 조건 | BP Purchasing Org<br/>인코텀즈/통화 | 5주 복습<br/>BP 생성 완료 확인 |
| **6주** | [Info Record 개요]({{ '/master-data/03-purchasing-info/' | relative_url }})<br/>역할과 구조 | Info Record 유형<br/>ESOKZ 0/1/2/3 | ME11 실습<br/>Standard Info Record | 가격 조건 관리<br/>PB00 유효기간 | 6주 복습<br/>Info Record 조회 |
| **7주** | [Source List 개요]({{ '/master-data/03-purchasing-info/' | relative_url }})<br/>공급원 목록 | ME01 실습<br/>Fixed 공급업체 설정 | Blocked Source<br/>차단 공급원 | MRP 연계<br/>Fixed + MRP 표시 | 7주 복습<br/>Source List 설정 |
| **8주** | [Quota Arrangement]({{ '/master-data/03-purchasing-info/' | relative_url }})<br/>% 배분 개념 | MEQ1 실습<br/>Quota 설정 | [BOM 개요]({{ '/master-data/04-bom/' | relative_url }})<br/>구조와 용도 | CS01 실습<br/>간단한 BOM 생성 | **Phase 2 복습**<br/>기준 정보 연관 관계 |

**이번 달 목표:** 자재-공급업체 조합의 Info Record + Source List + Quota 전체 설정을 완료할 수 있다.

---

<a id="phase-3"></a>
## Phase 3. BOM + 구매 프로세스 시작 (9~12주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **9주** | BOM 구조 심화<br/>Usage/상태 관리 | CS01 실습<br/>2레벨 BOM 생성 | BOM 전개 CS11<br/>종속 소요량 확인 | BOM 유효기간<br/>변경 이력 관리 | 9주 복습<br/>BOM - MRP 연계 |
| **10주** | [PR 개념]({{ '/purchasing/01-purchase-requisition/' | relative_url }})<br/>문서 구조 | PR 계정 지정<br/>K(코스트)/A(자산) | ME51N 실습<br/>자재 PR 생성 | ME52N/ME53N<br/>변경/조회 | 10주 복습<br/>PR→PO 전환 방법 |
| **11주** | [RFQ 개념]({{ '/purchasing/02-rfq-quotation/' | relative_url }})<br/>견적 요청 흐름 | ME41 실습<br/>RFQ 2건 생성 | ME47 실습<br/>견적 입력 | ME49<br/>가격 비교 화면 | 11주 복습<br/>최적 업체 선정 |
| **12주** | [PO 헤더 구조]({{ '/purchasing/03-purchase-order/' | relative_url }})<br/>공급업체/통화 | PO 아이템 구조<br/>자재/수량/납기 | ME21N 실습<br/>PR 참조 PO 생성 | PO 문서 유형<br/>NB/FO/UB | **Phase 3 복습**<br/>PR→RFQ→PO 흐름 |

**이번 달 목표:** PR 생성 → RFQ 발송 → 견적 비교 → PO 생성까지 직접 수행할 수 있다.

---

<a id="phase-4"></a>
## Phase 4. 구매 프로세스 완성 + 입고 + 재고관리 (13~16주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **13주** | PO 승인 전략<br/>Release Strategy | ME28/ME29N<br/>승인 처리 실습 | ME57 실습<br/>PR 일괄 PO 전환 | PO 변경/취소<br/>ME22N | 13주 복습<br/>PO 완성 |
| **14주** | [GR 개념]({{ '/purchasing/04-goods-receipt/' | relative_url }})<br/>MIGO 화면 구조 | MIGO 실습<br/>Movement 101 입고 | 자재 문서 조회<br/>MB51 | 회계 전표 확인<br/>BSX/WRX | 14주 복습<br/>MMBE 재고 확인 |
| **15주** | [Movement Type 체계]({{ '/inventory/01-movement-types/' | relative_url }})<br/>1xx/2xx/3xx/5xx | 반품 실습<br/>Mvt 122 | 이동 실습<br/>Mvt 311/312 | [재고 유형]({{ '/inventory/02-stock-types/' | relative_url }})<br/>Unrestricted/QI/Block | 15주 복습<br/>재고 유형 전환 |
| **16주** | [재고 실사]({{ '/inventory/03-physical-inventory/' | relative_url }})<br/>MI01/MI07 | 실사 문서 생성<br/>MI01 실습 | 재고 계산 입력<br/>MI04/MI07 | P2P 전체 복습<br/>MD04 수급 목록 | **Phase 4 복습**<br/>구매~입고 전체 실습 |

**이번 달 목표:** PO 발주부터 MIGO 입고까지 전체 수행 + 재고 Movement Type 5가지 이상 실습.

---

<a id="phase-5"></a>
## Phase 5. 특수 조달 + MRP (17~20주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **17주** | [외주 개념]({{ '/purchasing/05-special-procurement/' | relative_url }})<br/>Subcontracting | 외주 PO 생성<br/>아이템 범주 L | 사급 출고<br/>Mvt 541 | 외주 입고<br/>Mvt 101 (외주) | 17주 복습<br/>외주 전체 흐름 |
| **18주** | [위탁 개념]({{ '/purchasing/05-special-procurement/' | relative_url }})<br/>Consignment | 위탁 입고<br/>Mvt 101 K | 위탁 출고 정산<br/>Mvt 201 K | [STO 개념]({{ '/purchasing/05-special-procurement/' | relative_url }})<br/>UB 문서 유형 | 18주 복습<br/>특수 조달 정리 |
| **19주** | [MRP 개요]({{ '/process/02-flow/' | relative_url }})<br/>수요/공급 요소 | MRP 유형<br/>PD/VB/VM/ND | MD61<br/>PIR 입력 실습 | MD01N<br/>MRP 실행 실습 | 19주 복습<br/>MRP 파라미터 |
| **20주** | MD04<br/>수급 목록 해석 | 예외 메시지<br/>10/20/25/30/50 | ME57<br/>계획 PR → PO | MRP 심화<br/>Lot Size/Safety Stock | **Phase 5 복습**<br/>특수 조달 + MRP |

**이번 달 목표:** 외주 PO 생성 + MRP 실행 + 예외 메시지 처리 + ME57 PO 전환을 독립 수행할 수 있다.

---

<a id="phase-6"></a>
## Phase 6. 송장 검증 + SPRO + 통합 실습 (21~24주)

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|----|----|----|----|-----|
| **21주** | [IV 개념]({{ '/invoice/01-three-way-matching/' | relative_url }})<br/>3-way Matching | MIRO 실습<br/>PO/GR 참조 송장 | 회계 전표 확인<br/>채무/GR-IR | [Invoice Block]({{ '/invoice/02-invoice-blocks/' | relative_url }})<br/>블록 사유 | 21주 복습<br/>MRBR 블록 해제 |
| **22주** | ERS 개념<br/>자동 정산 | MR11<br/>GR-IR 정산 | SPRO 기본<br/>MM 경로 탐색 | 계정 결정 이해<br/>Valuation Class | 22주 복습<br/>계정 흐름 정리 |
| **23주** | MM-FI 연계<br/>GR/IV 전표 | MM-PP 연계<br/>261 생산 출고 | MM-SD 연계<br/>판매 출고 | 리포팅<br/>ME2M/MB51/MMBE | 23주 복습<br/>연계 흐름 정리 |
| **24주** | 통합 시나리오<br/>자재 등록~PO | 통합 시나리오<br/>GR~MIRO | 통합 시나리오<br/>리포트 조회 | 최종 복습<br/>용어사전 전체 | **완료**<br/>P2P 단독 수행 |

**이번 달 목표:** 원자재 신규 도입부터 대금 처리까지 P2P 전체 시나리오를 단독으로 수행할 수 있다.

---

## 학습 팁

| 항목 | 내용 |
|------|------|
| **30분 구성** | 15분 개념 읽기 + 10분 실습 + 5분 노트(학습 일지) |
| **금요일** | 해당 주 내용 복습 + 용어 사전 확인 |
| **모르는 용어** | [용어 사전]({{ '/glossary/index/' | relative_url }}) 바로 확인 |
| **실습 기록** | 생성한 문서번호(자재코드, PO번호 등)를 학습 일지에 기록 |
| **스크린샷** | 주요 화면은 캡처해서 각 문서 스크린샷 섹션에 추가 |

---

## 월별 달성 체크리스트

| 월 | 달성 기준 | 완료 |
|----|---------|------|
| **1개월** | 기업 구조 탐색 가능 + 자재 마스터 생성 가능 | ☐ |
| **2개월** | 공급업체 등록 + Info Record/Source List 설정 가능 | ☐ |
| **3개월** | PR → RFQ → PO 전체 구매 프로세스 독립 수행 가능 | ☐ |
| **4개월** | MIGO 입고 + 재고 이동 + 재고 실사 수행 가능 | ☐ |
| **5개월** | 외주/위탁 PO + MRP 실행 + 결과 분석 가능 | ☐ |
| **6개월** | P2P 전체 시나리오(자재 등록~MIRO) 단독 수행 가능 | ☐ |
