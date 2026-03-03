---
title: "기준 정보 (Master Data)"
nav_order: 1
---

# SAP MM 기준 정보

모든 MM 프로세스의 **출발점**이 되는 기준 데이터입니다.
PR, PO, GR, MIRO - 모든 거래는 기준 정보를 참조합니다.

---

## 기준 정보 유형

| 문서 | 설명 | T-code |
|------|------|--------|
| [자재 기준 정보]({{ '/master-data/01-material-master/' | relative_url }}) | 구매/생산/재고의 기준 | MM01/02/03 |
| [공급업체 기준 정보]({{ '/master-data/02-vendor-master/' | relative_url }}) | S/4HANA 비즈니스 파트너 | BP |
| [Info Record & Source List]({{ '/master-data/03-purchasing-info/' | relative_url }}) | 자재-공급업체 연결 | ME11/ME01 |
| [자재명세서 BOM]({{ '/master-data/04-bom/' | relative_url }}) | 생산/원가 구성 자재 목록 | CS01/02/03 |

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
    MM["자재 기준 정보<br/>Material Master"] --> IR["Info Record<br/>자재 + 업체 조합<br/>단가/납기 조건"]
    VM["공급업체 기준 정보<br/>Vendor Master / BP"] --> IR
    MM --> SL["Source List<br/>허가 공급원 목록"]
    MM --> QA["Quota Arrangement<br/>업체별 물량 배분율"]
    SL --> QA
    IR --> PO["구매 오더 (PO)<br/>자동 단가/조건 적용"]
    QA --> PO
    MM --> BOM["BOM<br/>구성 자재 목록"]
    BOM --> PO
```

| 기준 정보 | 키 조합 | 주요 용도 |
|----------|--------|---------|
| Material Master | 자재번호 + 플랜트 | 구매/생산/재고/원가의 모든 기준 |
| Vendor Master | BP 번호 + 구매조직 | 공급업체 계약 조건 |
| Info Record | 자재 + 공급업체 + 구매조직 | PO 자동 단가 및 납기 제공 |
| Source List | 자재 + 플랜트 + 유효기간 | 허가된 공급업체 목록 및 MRP 소스 결정 |
| Quota Arrangement | 자재 + 플랜트 + 유효기간 | 복수 공급업체 자동 물량 배분 |
| BOM | 상위 자재 + 플랜트 + 용도 | MRP 폭발, 생산 출고, 원가 계산 기준 |
