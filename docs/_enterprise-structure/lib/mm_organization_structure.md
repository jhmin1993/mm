---
title: "SAP MM 조직구조 완벽 가이드"
nav_order: 1
---

# SAP MM 조직구조 완벽 가이드

SAP MM(자재관리) 모듈의 조직구조는 **Client → Company Code → Plant → Storage Location** 순서의 계층 구조를 기본으로 하며, 여기에 유연한 할당이 가능한 Purchasing Organization과 조직 횡단적으로 운영되는 Purchasing Group이 결합된 형태다. 이 구조를 올바르게 설계해야 구매·재고·송장검증 등 MM 전체 프로세스가 원활하게 작동한다. SAP 공식 문서(help.sap.com)에 따르면, 조직구조는 한번 설정하면 변경이 매우 어렵기 때문에 **프로젝트 초기 단계에서 가장 신중하게 결정해야 할 요소**다.

---

## Plant는 MM 모듈의 핵심 축이다

SAP Learning Hub의 공식 정의에 따르면, **Plant(플랜트)는 "생산, 구매, 설비보전, 자재소요계획 관점에서 기업을 세분화하는 로지스틱스 조직 단위"**다. 4자리 영숫자 코드로 정의되며, 클라이언트 내에서 유일해야 한다.

Plant는 반드시 **하나의 Company Code에만 할당**된다(1:1 관계). 반면 하나의 Company Code에는 여러 Plant가 소속될 수 있다(1:N 관계). SAP S/4HANA에서는 **자재 평가(Material Valuation)가 Plant 레벨에서 의무적으로 수행**되므로, 같은 자재라도 Plant별로 다른 가격으로 평가될 수 있다.

Plant가 실무에서 대표하는 물리적 단위는 다양하다:

- **제조 공장**: 원자재를 투입하여 제품을 생산하는 시설 (예: 서울 반도체 공장 Plant 1000)
- **물류 센터/유통 창고**: 완제품을 보관·배송하는 거점 (예: 이천 물류센터 Plant 2000)
- **본사/영업 사무소**: 서비스를 제공하거나 관리 기능을 수행하는 사업장
- **소매 매장**: 리테일 기업에서 각 점포를 Plant로 설정

Plant는 MM 모듈 전반에 걸쳐 핵심 역할을 한다. **구매오더(PO) 품목마다 Plant 지정이 필수**이며, 재고 이동(Goods Movement) 전기 시에도 반드시 Plant를 명시해야 한다. MRP(자재소요계획)는 Plant 단위로 실행되고, 자재 마스터 데이터에서도 MRP, 구매, 저장, 원가 등 핵심 뷰가 Plant 레벨에서 관리된다.

---

## Storage Location은 Plant 내 재고를 분리하는 최소 단위

SAP Help Portal의 공식 정의는 다음과 같다: **"Storage Location(보관위치)은 Plant 내에서 자재 재고를 구분할 수 있게 하는 조직 단위다. 수량 기반 재고관리와 실사(Physical Inventory)가 이 레벨에서 수행된다."**

Storage Location은 **4자리 영숫자 코드**로 정의되며, Plant 내에서 유일하면 된다. 즉 서로 다른 Plant에서 동일한 Storage Location 코드(예: 0001)를 사용할 수 있다. 하나의 Plant에 여러 Storage Location을 생성하지만, **두 개의 Plant가 하나의 Storage Location을 공유할 수는 없다**.

Storage Location은 Warehouse Management(WM/EWM)를 사용하지 않는 환경에서 **재고 수량을 분리 관리하는 가장 작은 조직 단위**다. 재고 이동 트랜잭션에서 Storage Location 입력은 필수이며, Storage Location 내에서 재고 유형(비한정 사용, 품질검사, 차단 재고)으로 추가 분류된다.

실무에서 자주 사용되는 Storage Location 예시는 다음과 같다:

| 코드 | 명칭 | 용도 |
|------|------|------|
| 0001 | 원자재 창고 | 입고된 원자재 보관 |
| 0002 | 완제품 창고 | 생산 완료된 제품 보관 |
| 0003 | 품질검사 구역 | 검사 대기 자재 보관 |
| 0004 | 반제품 창고 | 중간 공정 자재 보관 |
| 0005 | 예비부품 보관소 | 설비 보전용 부품 |
| 0006 | 생산 현장 | 생산 라인 투입 자재 |

**Plant와 Storage Location 중 어느 것을 새로 만들지 결정**하는 것은 실무에서 자주 부딪히는 문제다. SAP Community의 가이드라인에 따르면, 자재 평가를 별도로 하거나 독립적인 MRP 실행이 필요하면 **별도 Plant**를 만들어야 하고, 단순히 재고 수량을 물리적으로 분리하는 것이 목적이라면 **Storage Location**으로 충분하다.

---

## Purchasing Organization의 4가지 유형과 중앙구매 vs 분산구매

**Purchasing Organization(구매조직)은 "구매 요건에 따라 기업을 세분화하는 로지스틱스 조직 단위로, 자재·서비스를 조달하고 공급업체와 구매 조건을 협상하며 해당 거래에 대한 법적 책임을 진다."** SAP Help Portal은 구매조직을 4가지 유형으로 분류한다.

**유형 1: 그룹 전체 중앙구매 (Cross-Company-Code)**는 가장 집중화된 형태다. 구매조직을 **Company Code에 할당하지 않고**, 여러 Company Code 소속의 Plant들에 직접 할당한다. 하나의 구매조직이 그룹 전체의 구매를 담당하며, Company Code는 거래 시점에 Plant로부터 결정된다. 대규모 기업 그룹이 **구매 교섭력 극대화와 프로세스 표준화**를 원할 때 적합하다.

**유형 2: 회사코드별 구매 (Company-Code-Specific)**는 구매조직을 하나의 Company Code에 할당하는 형태다. 해당 Company Code 소속의 Plant들만 이 구매조직을 사용할 수 있다. 법인별로 독자적인 공급업체 관계와 가격 조건을 운영할 때 사용한다.

**유형 3: 플랜트별 분산구매 (Plant-Specific)**는 가장 분산된 형태로, 하나의 구매조직이 하나의 Plant만 담당한다. 각 Plant가 고유한 조달 요건과 공급업체를 가질 때 적합하지만, **공급업체 마스터 데이터 중복 관리와 구매력 분산**이라는 단점이 있다.

**유형 4: 참조구매조직 (Reference Purchasing Organization)**은 위 유형들을 혼합할 때 사용하는 특수한 형태다. 참조구매조직은 Plant나 Company Code에 할당되지 않고, **다른 구매조직에 할당**된다. 본사가 글로벌 계약을 체결하고, 각 지역 구매조직이 해당 계약의 가격·조건을 참조하여 릴리스 오더를 발행하는 구조다. SAP 공식 예시에 따르면, 애틀랜타 본사의 참조구매조직 RORG가 협상한 계약을 휴스턴 구매조직 EORG가 참조하여 발주할 수 있다.

중앙구매와 분산구매의 핵심 차이를 정리하면 다음과 같다:

| 비교 항목 | 중앙구매 (Centralized) | 분산구매 (Decentralized) |
|-----------|----------------------|------------------------|
| **구매 교섭력** | 높음 (대량 구매로 단가 인하) | 낮음 (개별 소량 구매) |
| **의사결정 속도** | 느림 (중앙 승인 필요) | 빠름 (현장 즉시 결정) |
| **공급업체 관리** | 통합 관리 (마스터 1벌) | 분산 관리 (마스터 중복) |
| **프로세스 표준화** | 용이 | 어려움 |
| **현지 요구 대응** | 제한적 | 유연함 |
| **SAP 설정** | POrg → Company Code 미할당 | POrg → 특정 Plant만 할당 |

SAP Community의 실무 전문가 의견에 따르면, 불필요하게 많은 구매조직을 만들면 "공급업체를 구매조직 간에 끊임없이 확장해야 하는" 관리 부담이 발생하므로, **가능한 한 구매조직 수를 최소화하는 것이 모범 사례**다.

---

## Purchasing Group은 "누가 구매하는가"를 정의한다

SAP Help Portal에 따르면 **Purchasing Group(구매그룹)은 "특정 구매 활동을 담당하는 구매 담당자 또는 구매 담당자 그룹의 키"**다. 3자리 영숫자 코드로 정의되며(T-Code: OME4), **어떤 조직 레벨에도 할당되지 않는** 클라이언트 레벨의 횡단적 요소다. 하나의 Purchasing Group이 여러 Purchasing Organization에 걸쳐 활동할 수 있다.

Purchasing Organization이 **"어떤 조직이 구매하는가"**를 나타낸다면, Purchasing Group은 **"누가(어떤 담당자/팀이) 구매를 실행하는가"**를 나타낸다. 구매요청서(PR), 구매오더(PO), 견적요청서(RFQ), 계약서 등 모든 구매 문서에 Purchasing Group이 기록되어 **업무 책임 추적과 리포팅**에 활용된다.

실무에서는 자재 유형, 부서, 또는 조달 방식에 따라 구매그룹을 분류한다. 예를 들어: 001(원자재 구매팀), 002(MRO 구매팀), 003(외주서비스 구매팀), 004(IT 구매팀), 005(수입 구매팀) 등이다. 구매그룹에는 담당자 전화번호와 이메일을 등록할 수 있어, **구매오더 출력 시 공급업체에게 연락처가 자동으로 표시**된다.

---

## 전체 조직구조 연결과 프로세스 흐름

SAP MM 조직구조의 전체 계층과 할당 관계를 도식화하면 다음과 같다:

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">Client (클라이언트)
 └── Company Code (회사코드) ──[1:N]──► Plant (플랜트) ──[1:N]──► Storage Location (보관위치)
          │                                │
          │                                │
     [0..1 : N]                        [M : N]
          │                                │
          └────► Purchasing Organization ◄─┘
                         │
                  (조직 할당 없음)
                         │
                 Purchasing Group (클라이언트 레벨, 횡단적)</pre>

핵심 할당 규칙을 정리하면 다음과 같다. **Plant는 반드시 하나의 Company Code에 할당**되며(N:1), Storage Location은 Plant에 종속된다. Purchasing Organization의 할당은 유연하여, Company Code에 할당하면 해당 법인 내 Plant만 사용 가능하고, **Company Code에 할당하지 않으면 모든 Company Code의 Plant를 사용**할 수 있다. Purchasing Group은 어디에도 할당되지 않으므로 전사적으로 자유롭게 사용된다.

주요 설정 트랜잭션 코드는 **OX10**(Plant 정의), **OX09**(Storage Location 정의), **OX08**(Purchasing Organization 정의), **OME4**(Purchasing Group 정의)이며, 할당은 **OX18**(Plant→Company Code), **OX01**(POrg→Company Code), **OX17**(POrg→Plant) 순서로 수행한다.

---

## 제조기업 사례로 보는 실제 업무 흐름

한국의 자동차 부품 제조 그룹 "가나다 그룹"을 예로 들어보자:

<pre style="color:#000000; background:#f6f8fa; padding:16px; border-radius:6px; border:1px solid #e1e4e8; font-size:0.9em;">Client: 가나다 그룹
├── Company Code 1000 (가나다제조㈜)
│    ├── Plant 1100 (인천 제1공장)
│    │    ├── SLoc 0001 원자재 창고
│    │    ├── SLoc 0002 완제품 창고
│    │    └── SLoc 0003 품질검사 구역
│    └── Plant 1200 (화성 제2공장)
│         ├── SLoc 0001 원자재 창고
│         └── SLoc 0002 완제품 창고
├── Company Code 2000 (가나다물류㈜)
│    └── Plant 2100 (이천 물류센터)
│         ├── SLoc 0001 입고 구역
│         └── SLoc 0002 출하 구역
│
├── Purchasing Org P100 → Company Code 1000 할당 (인천·화성 공장 구매 담당)
├── Purchasing Org P200 → Company Code 2000 할당 (물류센터 구매 담당)
├── Reference POrg RORG → P100, P200에 할당 (본사 글로벌 계약 협상)
│
├── Purchasing Group 001: 철강 원자재 구매팀
├── Purchasing Group 002: 전장부품 구매팀
└── Purchasing Group 003: MRO/소모품 구매팀</pre>

이 구조에서 실제 구매 프로세스가 흐르는 과정은 이렇다. 인천 공장(Plant 1100)에서 철강 원자재가 필요하면 **구매요청서가 Plant 1100, Purchasing Group 001(철강 구매팀)으로 생성**된다. 철강 구매팀은 Purchasing Org P100의 공급업체 마스터와 구매정보레코드를 기반으로 소싱한다. 이때 본사 참조구매조직 RORG가 글로벌 철강사와 체결한 프레임워크 계약이 있다면 그 조건을 참조하여 발주할 수 있다.

구매오더(PO) 생성 시 헤더에는 **공급업체, Purchasing Org P100, Purchasing Group 001, Company Code 1000**이 기록되고, 품목에는 **자재, Plant 1100, Storage Location 0001(원자재 창고), 수량, 단가**가 지정된다. 자재가 입고되면 MIGO 트랜잭션에서 **Plant 1100 / SLoc 0001에 재고가 전기**되고, 자재 평가는 Plant 1100 레벨에서 수행된다. 동시에 **Company Code 1000에 FI 전표**(재고 차변 / GR/IR 대변)가 자동 생성된다. 마지막으로 송장검증(MIRO)은 **Company Code 1000 레벨에서 수행**되며, PO·입고·송장의 3-Way 매칭 후 공급업체 미지급금이 확정된다.

---

## 결론: 설계 원칙과 핵심 요점

SAP MM 조직구조 설계에서 가장 중요한 판단 기준은 **"자재 평가를 별도로 해야 하는가"와 "구매 교섭력을 어디에 집중할 것인가"**라는 두 가지 질문이다. 자재 평가가 다르면 Plant를 분리해야 하고, 단순 재고 분리는 Storage Location으로 해결한다. 구매력을 집중하려면 구매조직을 최소화(중앙구매)하고, 현장 자율성이 중요하면 분산시키되 참조구매조직으로 글로벌 계약의 이점을 병행 활용할 수 있다.

실무적으로 가장 흔한 실수는 **구매조직을 불필요하게 많이 만드는 것**이다. 구매조직이 늘어날수록 공급업체 마스터 확장, 구매정보레코드 중복 관리, 조건 불일치 등의 관리 부담이 기하급수적으로 증가한다. SAP 공식 권장사항은 "같은 가격 조건과 구매 권한이 적용된다면, 하나의 구매조직으로 통합하라"는 것이다. Purchasing Group은 조직구조에 묶이지 않으므로, 구매 담당자의 업무 분장과 리포팅 목적에 맞게 자유롭게 설계하면 된다.