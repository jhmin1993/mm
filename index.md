---
layout: default
title: "SAP MM 공부 노트"
---

# 📚 SAP MM 공부 노트

SAP Materials Management(MM) 모듈을 하루 30분씩 체계적으로 공부하고 기록하는 공간입니다.

---

## 학습 섹션

<div class="section-cards">
  <a class="section-card" href="{{ '/enterprise-structure/index/' | relative_url }}" style="--card-color:#0969da">
    <div class="section-card-title">기업 구조</div>
    <div class="section-card-desc">Client - 회사코드 - 플랜트 - 구매조직 계층</div>
    <div class="section-card-count">1개 문서</div>
  </a>
  <a class="section-card" href="{{ '/process/index/' | relative_url }}" style="--card-color:#2383e2">
    <div class="section-card-title">MM 전체 프로세스</div>
    <div class="section-card-desc">전체 흐름 &amp; 타 모듈 연계</div>
    <div class="section-card-count">4개 문서</div>
  </a>
  <a class="section-card" href="{{ '/master-data/index/' | relative_url }}" style="--card-color:#1a7f37">
    <div class="section-card-title">기준 정보</div>
    <div class="section-card-desc">Material Master, BP(Vendor), Info Record</div>
    <div class="section-card-count">3개 문서</div>
  </a>
  <a class="section-card" href="{{ '/purchasing/index/' | relative_url }}" style="--card-color:#7048b6">
    <div class="section-card-title">구매관리</div>
    <div class="section-card-desc">PR - RFQ - PO - GR - 특수조달</div>
    <div class="section-card-count">5개 문서</div>
  </a>
  <a class="section-card" href="{{ '/inventory/index/' | relative_url }}" style="--card-color:#e9a600">
    <div class="section-card-title">재고관리</div>
    <div class="section-card-desc">Movement Type, 재고 유형, 실사</div>
    <div class="section-card-count">3개 문서</div>
  </a>
  <a class="section-card" href="{{ '/invoice/index/' | relative_url }}" style="--card-color:#cf222e">
    <div class="section-card-title">송장 검증</div>
    <div class="section-card-desc">3-way Matching, MIRO</div>
    <div class="section-card-count">2개 문서</div>
  </a>
  <a class="section-card" href="{{ '/config-guide/index/' | relative_url }}" style="--card-color:#444444">
    <div class="section-card-title">SPRO 설정 가이드</div>
    <div class="section-card-desc">MM 모듈 Customizing 경로 정리</div>
    <div class="section-card-count">4개 문서</div>
  </a>
  <a class="section-card" href="{{ '/glossary/index/' | relative_url }}" style="--card-color:#6e40c9">
    <div class="section-card-title">용어 사전</div>
    <div class="section-card-desc">SAP MM 핵심 용어 - Full Name 포함</div>
    <div class="section-card-count">1개 문서</div>
  </a>
  <a class="section-card" href="{{ '/purchasing-scenarios/index/' | relative_url }}" style="--card-color:#e67e22">
    <div class="section-card-title">구매 시나리오</div>
    <div class="section-card-desc">표준/계약/SA/무재고/위탁/STO 시나리오별 흐름</div>
    <div class="section-card-count">6개 문서</div>
  </a>
</div>

---

## 📝 최근 학습 일지

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y년 %m월 %d일" }}
{% else %}
아직 작성된 학습 일지가 없습니다.
{% endfor %}
