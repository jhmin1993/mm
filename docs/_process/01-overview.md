---
title: "MM 모듈 개요 - 조직 구조와 핵심 개념"
nav_order: 1
---

# SAP MM 모듈 개요

## MM 모듈이란?

SAP MM(Materials Management)은 구매에서 재고관리, 송장 검증까지 **자재 흐름** 전반을 관리하는 모듈입니다.

**주요 기능 영역:**
- 구매 관리 (Purchasing)
- 재고 관리 (Inventory Management)
- 물류 송장 검증 (Logistics Invoice Verification)
- 기준 정보 관리 (Master Data)

---

## 조직 구조 (Organizational Structure)

```mermaid
graph TD
    Client --> CC["Company Code<br/>법인 단위, 재무제표 기준"]
    CC --> Plant["Plant<br/>생산/운영 단위 (공장, 물류센터)"]
    Plant --> SLoc["Storage Location<br/>창고 내 구체적 위치"]
    POrg["Purchasing Organization<br/>구매 조건 관리 단위"] --> PGroup["Purchasing Group<br/>담당자/팀 단위"]
```

### 핵심 조직 단위 설명

| 단위 | 설명 | 예시 |
|------|------|------|
| Client | SAP 시스템 최상위 단위 | 그룹사 전체 |
| Company Code | 독립 재무제표 작성 단위 (1:N Plant) | 각 법인 |
| Plant | 자재 관리/재고 평가/MRP 기준 단위 (1:N SLoc) | 서울 공장, 부산 물류 |
| Storage Location | Plant 내 보관 장소 (N:M Plant) | 원자재 창고, 완제품 창고 |
| Purch. Org | 구매 협상/조건 관리 (N:M Company Code) | 중앙구매, 현지구매 |
| Purch. Group | 실무 구매 담당 단위 | 기계팀, 전자팀 |

### 구매 조직 운영 유형

| 유형 | 설명 | 특징 |
|------|------|------|
| 중앙 집중 구매조직 | Company Code 레벨에 하나의 구매조직 | 협상력 강화, 가격경쟁력, Global Procurement |
| 분산 구매조직 | Plant별로 별도 구매조직 | 로컬 구매 비율 높음, 배송 정보 획득 용이 |
| 표준 구매조직 | 여러 구매조직이 특정 Plant에 조달 시 대표로 지정 | STO, Consignment 소스 자동 결정에 사용 |
| 기준 구매조직 | 유리한 계약 조건을 다른 구매조직이 공유 | 기준 구매조직의 조건레코드를 가격 결정에 활용 |

> **Plant**는 단순 공장 외에 물류센터, 판매지사, 본부도 될 수 있습니다. 또한 재고 평가(Valuation Area)의 기준 단위이므로 초기 정의가 매우 중요합니다.
{: .callout .callout-important}

### 조직 구조 설정 T-code (SPRO)

| T-code | 경로 | 설명 |
|--------|------|------|
| OX02 | ES - Definition - FI - Edit Company Code | 회사코드 생성/변경 |
| OX10 | ES - Definition - Logistics - Define Plant | 플랜트 생성 |
| OX18 | ES - Assignment - Logistics - Assign Plant to CoCd | 플랜트 - 회사코드 지정 |
| OX09 | ES - Definition - MM - Maintain Storage Location | 저장위치 생성 |
| OMKJ | ES - Definition - MM - Maintain Purch. Org | 구매조직 생성 |
| OX01 | ES - Assignment - MM - Assign POrg to CoCd | 구매조직 - 회사코드 지정 |
| OX17 | ES - Assignment - MM - Assign POrg to Plant | 구매조직 - 플랜트 지정 |
| OMKI | ES - Assignment - MM - Assign Standard POrg to Plant | 표준 구매조직 지정 |

---

## MM과 다른 모듈의 연계

```mermaid
graph LR
    SD["SD (판매)"] <--> MM["MM (자재관리)"]
    MM <--> PP["PP (생산)"]
    MM <--> FI["FI (재무회계)"]
    MM <--> CO["CO (관리회계)"]
    MM <--> WM["WM (창고관리)"]
    MM <--> QM["QM (품질관리)"]
```

- **MM-FI**: GR 시 자동 회계 전표 생성 (BSX, WRX 계정)
- **MM-PP**: 생산 오더 → 자재 출고 (Movement Type 261)
- **MM-SD**: 고객 납품 → 출고 (Movement Type 601)
- **MM-QM**: 검수(QI) 재고 연계

---

## MM 문서 유형 구조

| 문서 유형 | 번호 범위 | 설명 |
|----------|----------|------|
| 구매 요청 (PR) | 1xxxxxxxxx | ME51N |
| 구매 발주 (PO) | 45xxxxxxxx | ME21N, NB/FO/UB |
| 자재 문서 | 5xxxxxxxxx | MIGO, 입출고 기록 |
| 회계 문서 | 5xxxxxxxxx | GR/IV 시 자동 생성 |
| 물류 송장 | 51xxxxxxxx | MIRO |

---

## 핵심 T-code (개요)

| T-code | 설명 |
|--------|------|
| SPRO | 설정 (Customizing) |
| MM01 | 자재 마스터 생성 |
| BP | 비즈니스 파트너 (공급업체) |
| ME21N | 구매 발주 생성 |
| MIGO | 입/출고 처리 |
| MIRO | 송장 검증 |
| MMBE | 재고 현황 조회 |

---

## 스크린샷

> 스크린샷은 실제 SAP 시스템에서 캡쳐 후 아래에 추가합니다.
> 이미지 경로: `assets/img/process/overview-{순번}-{설명}.png`

<!-- 예시: ![SPRO MM 조직 구조 설정]({{ site.baseurl }}/assets/img/process/overview-01-spro-org.png) -->
<!-- 예시: ![MMBE 전체 재고 현황]({{ site.baseurl }}/assets/img/process/overview-02-mmbe.png) -->

---

<details markdown="1">
<summary>필드 → 마스터 연관</summary>

| 화면 필드 | 데이터 출처 | 설정/관리 위치 | 비고 |
|---------|-----------|-------------|------|
| Company Code | 회사 코드 마스터 | SPRO → Enterprise Structure → Financial Accounting → Define CC | OX02 |
| Plant | 플랜트 마스터 | SPRO → Enterprise Structure → Logistics → Define Plant | OX10 |
| Storage Location | 보관 위치 마스터 | SPRO → Enterprise Structure → Logistics → Define SLoc | OX09 |
| Purch. Organization | 구매 조직 마스터 | SPRO → Enterprise Structure → Purchasing → Define Purch. Org | OX08 |
| Purch. Group | 구매 그룹 마스터 | SPRO → MM → Purchasing → Create Purch. Groups | OME4 |

</details>

---

## 관련 SPRO 설정

→ [기준 정보 설정 가이드](/mm/config-guide/master-data/) 참조
