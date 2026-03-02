---
title: "기준 정보 (Master Data)"
nav_order: 1
---

# SAP MM 기준 정보

모든 MM 프로세스의 **출발점**이 되는 기준 데이터입니다.
PR, PO, GR, MIRO - 모든 거래는 기준 정보를 참조합니다.

---

## 기준 정보 유형

<div class="card-grid" markdown="0">
  <div class="card card-master">
    <h4><a href="{{ '/master-data/01-material-master/' | relative_url }}">자재 기준 정보</a></h4>
    <p>구매/생산/재고의 기준</p>
    <span class="card-badge">MM01/02/03</span>
  </div>
  <div class="card card-master">
    <h4><a href="{{ '/master-data/02-vendor-master/' | relative_url }}">공급업체 기준 정보</a></h4>
    <p>S/4HANA 비즈니스 파트너</p>
    <span class="card-badge">BP</span>
  </div>
  <div class="card card-master">
    <h4><a href="{{ '/master-data/03-purchasing-info/' | relative_url }}">Info Record & Source List</a></h4>
    <p>자재-공급업체 연결</p>
    <span class="card-badge">ME11/ME01</span>
  </div>
</div>

---

## 데이터 레벨 개념

> **Client 레벨**: 자재 기본 설명, 공급업체 이름/주소<br>
> **Company Code 레벨**: 공급업체 회계 데이터 (지급 조건, 재조정 계정)<br>
> **Plant 레벨**: 자재 MRP, 구매 조건, 평가 데이터<br>
> **Purch. Org 레벨**: 공급업체 구매 조건 (통화, 인코텀즈)
{: .callout .callout-note}

---

## 기준 정보 간 관계

```mermaid
flowchart TD
    A["자재 기준 정보<br/>Material Master"] <--> B["Info Record<br/>자재 + 공급업체 조합의 가격/납기 조건"]
    B <--> C["공급업체 기준 정보<br/>Vendor Master / BP"]
```

Source List: 특정 자재에 허가된 공급업체 목록 관리
