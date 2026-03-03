---
layout: default
title: "학습 일지"
permalink: /study-log/
---

# 📝 학습 일지

SAP MM 학습 기록을 날짜순으로 모아둔 페이지입니다.

---

{% if site.posts.size > 0 %}
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year %}
## {{ year_group.name }}년

{% for post in year_group.items %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%m월 %d일" }}
{% endfor %}

{% endfor %}
{% else %}
아직 작성된 학습 일지가 없습니다.
{% endif %}
