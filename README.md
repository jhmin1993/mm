# SAP MM 공부 노트

> SAP MM(Materials Management)을 하루 30분씩 공부하며 정리한 Jekyll 블로그

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://jhmin1993.github.io/mm)

**Live**: https://jhmin1993.github.io/mm

---

## 학습 콘텐츠

| 섹션 | 내용 |
|------|------|
| 프로세스 개요 | MM 전체 흐름 & 3일 커리큘럼 |
| 마스터 데이터 | 자재 마스터 · 벤더 마스터 · 구매정보 레코드 |
| 구매 관리 | PR → RFQ → PO → 입고(GR) |
| 재고 관리 | 이동 유형 · 재고 유형 · 실사 |
| 인보이스 검증 | 3-Way Matching · 인보이스 보류 |
| SPRO 설정 가이드 | Customizing 경로 모음 |

---

## 로컬 실행

**사전 조건**: Ruby 3.x, Bundler

```bash
git clone https://github.com/jhmin1993/mm.git
cd mm
bundle install
bundle exec jekyll serve
```

브라우저에서 http://localhost:4000/mm 접속

---

## 디렉터리 구조

```
_posts/            # 날짜별 공부 일지 (YYYY-MM-DD-sap-mm-study-day-NN.md)
docs/
  _process/        # MM 프로세스 개요
  _master-data/    # 마스터 데이터
  _purchasing/     # 구매 관리
  _inventory/      # 재고 관리
  _invoice/        # 인보이스 검증
  _config-guide/   # SPRO 설정 가이드
assets/img/        # 스크린샷 (주제별 폴더)
_layouts/          # 커스텀 레이아웃 (page, post)
_config.yml        # Jekyll 설정
```

---

## 콘텐츠 추가 방법

### 공부 일지 추가

파일명 규칙: `_posts/YYYY-MM-DD-sap-mm-study-day-NN.md`

Front matter:
```yaml
---
layout: post
title: "Day NN: 주제"
date: YYYY-MM-DD
categories: [sap, mm]
---
```

### 컬렉션 문서 추가

해당 컬렉션 폴더(`docs/_<name>/`)에 `.md` 파일 추가:
```yaml
---
layout: page
title: "제목"
---
```

---

## 기술 스택

- **Jekyll** + **GitHub Pages**
- **Theme**: pages-themes/primer
- **Plugins**: jekyll-feed, jekyll-seo-tag, jekyll-sitemap

---

## License

MIT
