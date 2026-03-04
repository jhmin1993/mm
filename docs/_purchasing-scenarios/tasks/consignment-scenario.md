---
title: "위탁 구매 실습 가이드 (Step-by-Step)"
nav_order: 1
---

# SAP S/4HANA 위탁(Consignment) 구매 시나리오

> 버전: SAP S/4HANA
> 경로: _purchasing-scenarios/consignment-scenario.md

---

## 위탁 구매란?

공급업체 소유의 자재를 우리 창고에 보관하다가,
**실제로 사용(출고)할 때** 비로소 대금을 지불하는 구매 방식.

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">일반 구매   →  입고 시점에 재고 + 부채 동시 발생
위탁 구매   →  입고 시 재고만 증가 (부채 없음)
              출고(소비) 시점에 부채 발생 → 송장 처리</pre>

---

## 전체 프로세스 흐름 (End-to-End)

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[1] 인포레코드 생성      ME11   ← 위탁 유형으로 설정
         ↓
[2] 구매오더 생성        ME21N  ← 오더 유형 K (위탁)
         ↓
[3] 위탁 입고 처리       MIGO   ← 이동유형 101 K
         ↓
[4] 위탁 재고 확인       MB54   ← 공급업체별 위탁재고 조회
         ↓
[5] 위탁 출고 (소비)     MIGO   ← 이동유형 201 K
         ↓
[6] 위탁 정산 (송장)     MRKO   ← 자동 정산 실행
         ↓
[7] 정산 내역 확인       MR11 / MB54</pre>

---

## STEP 1 - 인포레코드 생성 (ME11)

### 트랜잭션: ME11

**목적**: 자재 + 공급업체 조합의 위탁 가격 등록

### 입력 경로

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">Logistics → Materials Management → Purchasing
→ Master Data → Info Record → Create (ME11)</pre>

### 주요 입력 필드

| 필드 | 입력값 | 설명 |
|---|---|---|
| Vendor | 공급업체 번호 | |
| Material | 자재 번호 | |
| Purch. Org. | 구매조직 | |
| Info Category | **K (Consignment)** | 반드시 K 선택 |

### 스크린 가이드

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[General Data 화면]
- Info Category: K 입력 → Enter
  → 화면 상단에 "Consignment" 표시되면 정상

[Purch. Org. Data 1 화면]
- Net Price: 위탁 단가 입력 (이게 나중에 MRKO 정산 기준)
- Currency: 통화
- Per: 가격 기준 수량</pre>

### 주의사항
- Info Category를 **K로 설정하지 않으면** 위탁 PO 생성 시 가격이 0으로 뜨거나 오류 발생
- 인포레코드 없이도 PO 생성은 가능하지만, MRKO 정산 시 가격 기준이 없어서 문제 생김

---

## STEP 2 - 구매오더 생성 (ME21N)

### 트랜잭션: ME21N

**목적**: 위탁 구매오더 생성

### 주요 입력 필드

| 필드 | 입력값 | 설명 |
|---|---|---|
| Order Type | NB (Standard) | 오더 타입은 NB 그대로 |
| Vendor | 공급업체 번호 | |
| Item Category | **K** | 라인 아이템에서 K 선택 |
| Material | 자재 번호 | |
| Plant | 플랜트 | |
| Storage Location | 저장위치 | |
| Quantity | 발주 수량 | |

### 스크린 가이드

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[Header 영역]
- Vendor 입력 후 Enter

[Item Overview 영역]
- Item Cat. 컬럼에 "K" 입력  ← 이게 핵심
- Material, Quantity, Plant 입력

[Item Detail → Delivery 탭]
- Delivery Date 확인

[저장 전 확인사항]
- 상단 메시지에 가격이 자동으로 채워지면 ME11 인포레코드 정상 연결된 것
- Net Price가 0이면 인포레코드 확인 필요</pre>

### 에러 상황 및 대처

| 에러 메시지 | 원인 | 대처 |
|---|---|---|
| No info record for consignment | ME11에 K 유형 인포레코드 없음 | ME11에서 Info Cat K로 생성 |
| Account assignment mandatory | 계정 지정 설정 문제 | Item의 Acct. Ass. Cat 확인 |
| Material not maintained for plant | 자재마스터 플랜트 뷰 없음 | MM01에서 플랜트 뷰 추가 |

---

## STEP 3 - 위탁 입고 처리 (MIGO)

### 트랜잭션: MIGO

**목적**: 공급업체 자재를 우리 창고에 입고 (소유권은 공급업체)

### 입력 방법

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">Transaction: Goods Receipt
Reference Document: Purchase Order
PO 번호 입력 → Execute</pre>

### 주요 확인 필드

| 필드 | 확인값 | 설명 |
|---|---|---|
| Movement Type | **101** | 입고 |
| Stock Type | **K (Vendor)** | 위탁재고 표시 |
| Storage Location | 저장위치 | |
| Quantity | 실제 입고 수량 | |

### 스크린 가이드

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[Item Detail → Where 탭]
- Stock Type: "Consignment (Vendor)" 확인  ← 중요
  → 이게 일반 입고와 다른 점 (회사 소유가 아님을 의미)

[Posting 전 체크]
- 우하단 "Check" 버튼 클릭 → 초록불 확인 후 Post</pre>

### 에러 상황 및 대처

| 에러 메시지 | 원인 | 대처 |
|---|---|---|
| Deficit of consignment stock | 위탁재고 없는데 출고 시도 | MB54로 재고 수량 확인 |
| Storage location not defined | 저장위치 미설정 | MMSC에서 저장위치 추가 |

### 입고 후 회계 확인
- 위탁 입고는 **회계 전표가 생성되지 않음** (소유권이 공급업체에 있어서)
- 일반 입고와 가장 큰 차이점

---

## STEP 4 - 위탁 재고 확인 (MB54)

### 트랜잭션: MB54

**목적**: 공급업체별 위탁재고 현황 조회

### 입력 필드

| 필드 | 입력값 |
|---|---|
| Plant | 플랜트 |
| Storage Location | (선택) |
| Vendor | (선택, 비우면 전체) |
| Material | (선택) |

### 화면 확인 포인트

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">결과 화면에서 확인할 것:
- Vendor: 소유 공급업체
- Unrestricted: 사용 가능한 위탁재고 수량
- In Quality Insp.: 검사 중 재고</pre>

---

## STEP 5 - 위탁 출고 / 소비 (MIGO)

### 트랜잭션: MIGO

**목적**: 위탁재고를 실제 소비 - 이 시점에 부채 발생

### 입력 방법

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">Transaction: Goods Issue
Movement Type: 201 K  ← 위탁재고 소비
또는
Movement Type: 261 K  ← 생산오더로 소비 (PP 연계 시)</pre>

### 주요 입력 필드

| 필드 | 입력값 |
|---|---|
| Movement Type | **201** (또는 261) |
| Special Stock | **K** |
| Vendor | 공급업체 번호 |
| Material | 자재 번호 |
| Quantity | 소비 수량 |
| Cost Center | 비용센터 (201의 경우) |

### 스크린 가이드

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[Item Detail → Where 탭]
- Special Stock: K 입력
- Vendor: 해당 공급업체 번호 입력
  → 이 두 필드가 없으면 일반 재고에서 출고됨 주의

[Posting 후]
- 이때 비로소 회계 전표 생성됨
  Dr. 소비 계정 / Cr. 위탁 정산 계정 (GR/IR 아님)</pre>

### 에러 상황 및 대처

| 에러 메시지 | 원인 | 대처 |
|---|---|---|
| No consignment stock available | K 재고 없음 | MB54 재고 확인, Vendor 필드 확인 |
| Cost center required | 계정지정 없음 | Cost Center 입력 |

---

## STEP 6 - 위탁 정산 (MRKO)

### 트랜잭션: MRKO

**목적**: 소비된 위탁재고에 대해 공급업체에 자동 정산 (송장 자동 생성)

### 입력 필드

| 필드 | 입력값 |
|---|---|
| Company Code | 회사코드 |
| Vendor | 공급업체 |
| Plant | 플랜트 |
| Posting Date | 정산 기준일 |
| Processing | **Settle** 선택 |

### 스크린 가이드

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">[실행 전]
- Processing: "Display" 로 먼저 확인 → 정산 예정 내역 조회
- 내용 확인 후 Processing: "Settle" 로 변경 → 실행

[결과 화면]
- 정산 완료 건: 초록색 체크
- 오류 건: 빨간 X → 클릭해서 원인 확인</pre>

### 에러 상황 및 대처

| 에러 메시지 | 원인 | 대처 |
|---|---|---|
| No price available | 인포레코드 K 유형 가격 없음 | ME11에서 K 인포레코드 가격 확인 |
| Posting period not open | 회계 기간 마감 | MMPV로 기간 오픈 |
| Tax code missing | 세금 코드 없음 | 인포레코드 또는 PO에서 세금 코드 설정 |

---

## 컨피그 설정 포인트 (SPRO)

### 1. 위탁 정산용 계정 설정

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">경로: SPRO → MM → Valuation → Account Determination
      → Account Determination Without Wizard → Configure Automatic Postings

트랜잭션 키: KON (Consignment Payables)
→ 위탁 소비 시 Cr 되는 계정 설정</pre>

### 2. 이동유형 확인 (참고)

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">경로: SPRO → MM → Inventory Management
      → Movement Types → Copy, Change Movement Types

주요 위탁 이동유형:
- 101 K : 위탁 입고
- 102 K : 위탁 입고 취소
- 201 K : 위탁 소비 (비용센터)
- 261 K : 위탁 소비 (생산오더)
- 411 K : 위탁→자사재고 전환</pre>

### 3. 위탁 재고 → 자사 재고 전환 (필요 시)

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">트랜잭션: MIGO
Movement Type: 411 K
→ 공급업체 소유를 회사 소유로 전환
→ 이 시점에 입고 회계 전표 생성 + 부채 발생</pre>

---

## 전체 이동유형 요약

| 이동유형 | 설명 | 회계 전표 |
|---|---|---|
| 101 K | 위탁 입고 | 없음 |
| 102 K | 위탁 입고 취소 | 없음 |
| 201 K | 위탁 소비 (비용센터) | 생성 |
| 261 K | 위탁 소비 (생산오더) | 생성 |
| 411 K | 위탁→자사 전환 | 생성 |
| 412 K | 자사→위탁 전환 | 생성 |

---

## 체크리스트 (실습 전 확인)

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">사전 준비
- [ ] 공급업체 마스터 존재 확인 (XK03)
- [ ] 자재마스터 구매 뷰 + 재고 뷰 존재 확인 (MM03)
- [ ] 플랜트에 저장위치 설정 확인 (MMSC)
- [ ] ME11에서 Info Cat K 인포레코드 가격 등록

실습 순서
- [ ] ME11 : 위탁 인포레코드 생성 (Info Cat = K)
- [ ] ME21N : PO 생성 (Item Cat = K)
- [ ] MIGO : 입고 (101 K) - 회계전표 없음 확인
- [ ] MB54 : 위탁재고 확인
- [ ] MIGO : 소비 (201 K) - 회계전표 생성 확인
- [ ] MRKO : 정산 - Display 먼저, 후 Settle</pre>

---

## 참고: 일반 구매 vs 위탁 구매 비교

| 항목 | 일반 구매 | 위탁 구매 |
|---|---|---|
| PO Item Cat | 비워둠 | K |
| 입고 시 회계 전표 | 생성 | 없음 |
| 재고 소유권 | 입고 즉시 회사 | 소비 시점에 회사 |
| 대금 지급 시점 | 입고/송장 기준 | 소비 후 MRKO 정산 |
| 재고 조회 | MMBE | MB54 (위탁), MMBE 병행 |
| 정산 방법 | MIRO (수동) | MRKO (자동) |
