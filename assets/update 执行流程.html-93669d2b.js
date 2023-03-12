const e=JSON.parse(`{"key":"v-271932d7","path":"/studynotes/database/mysql/log/update%20%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html","title":"update 执行流程","lang":"zh-CN","frontmatter":{"title":"update 执行流程","date":"2023-3-12","order":3,"icon":"write","category":["数据库"],"tag":["MySQL"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 在基础篇中知道了 select 语句执行的那套流程，一条 update 语句其实也会同样走一遍。 不同的是，执行器进行更新操作后，还涉及到两个重要的日志模块，即 redo log 和 binlog。","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/database/mysql/log/update%20%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"update 执行流程"}],["meta",{"property":"og:description","content":"本文内容 前言 在基础篇中知道了 select 语句执行的那套流程，一条 update 语句其实也会同样走一遍。 不同的是，执行器进行更新操作后，还涉及到两个重要的日志模块，即 redo log 和 binlog。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-12T15:35:10.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-03-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-12T15:35:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"update 执行流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-12T15:35:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. update 执行流程","slug":"_1-update-执行流程","link":"#_1-update-执行流程","children":[]},{"level":2,"title":"2. 两阶段提交","slug":"_2-两阶段提交","link":"#_2-两阶段提交","children":[{"level":3,"title":"2.1 不用两阶段提交会有什么问题？","slug":"_2-1-不用两阶段提交会有什么问题","link":"#_2-1-不用两阶段提交会有什么问题","children":[]},{"level":3,"title":"2.2 两阶段提交如何保证两份日志的一致性？","slug":"_2-2-两阶段提交如何保证两份日志的一致性","link":"#_2-2-两阶段提交如何保证两份日志的一致性","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"4. 参考文章","slug":"_4-参考文章","link":"#_4-参考文章","children":[]}],"git":{"createdTime":1678635310000,"updatedTime":1678635310000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":1}]},"readingTime":{"minutes":7.75,"words":2325},"filePathRelative":"studynotes/database/mysql/log/update 执行流程.md","localizedDate":"2023年3月12日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>在基础篇中知道了 <a href=\\"https://aruni.me/docs/studynotes/database/mysql/basis/select%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">select 语句执行的那套流程</a>，一条 update 语句其实也会同样走一遍。</p>\\n<p>不同的是，执行器进行更新操作后，还涉及到两个重要的日志模块，即 <a href=\\"https://aruni.me/docs/studynotes/database/mysql/log/redo%20log%EF%BC%9A%E5%B4%A9%E6%BA%83%E6%81%A2%E5%A4%8D%E7%A5%9E%E5%99%A8.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">redo log</a> 和 <a href=\\"https://aruni.me/docs/studynotes/database/mysql/log/binlog%EF%BC%9A%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6%E5%92%8C%E5%A4%87%E4%BB%BD.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">binlog</a>。</p>\\n</div>","autoDesc":true}`);export{e as data};
