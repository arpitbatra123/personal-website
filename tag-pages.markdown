---
permalink: "/tags/{{ tag }}/"
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
  - posts
layout: tagged-posts.liquid
renderData:
  title: posts tagged under "{{ tag }}"
---

<ol class="posts">
  {% for post in collections[tag] reversed %}
    <li class="post">
      <span class="post-title">
        <a href="{{ post.url | url }}">{{ post.data.title }}</a>
      </span>
      <div class="post-date">
        {{ post.date | date: '%b %Y' | downcase }}
      </div>
    </li>
  {% endfor %}
</ol>
