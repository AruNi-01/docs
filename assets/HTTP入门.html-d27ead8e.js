const t=JSON.parse(`{"key":"v-12bb3706","path":"/studynotes/cs/network/http/HTTP%E5%85%A5%E9%97%A8.html","title":"HTTP 入门","lang":"zh-CN","frontmatter":{"title":"HTTP 入门","date":"2022-12-12T00:00:00.000Z","order":1,"icon":"write","category":["计算机基础"],"tag":["网络"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. HTTP 是什么 HTTP 全称是 Hyper Text Transfer Protocol，意为超文本传输协议。它是 应用层 一个简单的 请求-响应 协议，通常运行在 TCP 之上（HTTP 3.0 之前）。 超文本传输协议可以拆分成以下三个部分： 超文本：HTTP 传输的内容是「超文本」。常见的超文本就是 HTML（超文本标记语言），其中很多标签定义了图片、视频等链接； 传输：HTTP 是基于 B/S 模式，用于浏览器—服务器 两端之间的数据传输； 协议：HTTP 是一种 网络协议，它有一套自己的 约定和规范。","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/cs/network/http/HTTP%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"HTTP 入门"}],["meta",{"property":"og:description","content":"本文内容 1. HTTP 是什么 HTTP 全称是 Hyper Text Transfer Protocol，意为超文本传输协议。它是 应用层 一个简单的 请求-响应 协议，通常运行在 TCP 之上（HTTP 3.0 之前）。 超文本传输协议可以拆分成以下三个部分： 超文本：HTTP 传输的内容是「超文本」。常见的超文本就是 HTML（超文本标记语言），其中很多标签定义了图片、视频等链接； 传输：HTTP 是基于 B/S 模式，用于浏览器—服务器 两端之间的数据传输； 协议：HTTP 是一种 网络协议，它有一套自己的 约定和规范。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-06T14:28:42.000Z"}],["meta",{"property":"article:tag","content":"网络"}],["meta",{"property":"article:published_time","content":"2022-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-06T14:28:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP 入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-06T14:28:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. HTTP 是什么","slug":"_1-http-是什么","link":"#_1-http-是什么","children":[]},{"level":2,"title":"2. HTTP 发展历程","slug":"_2-http-发展历程","link":"#_2-http-发展历程","children":[{"level":3,"title":"2.1 HTTP/0.9 — 单行协议","slug":"_2-1-http-0-9-—-单行协议","link":"#_2-1-http-0-9-—-单行协议","children":[]},{"level":3,"title":"2.2 HTTP/1.0 — 可扩展性","slug":"_2-2-http-1-0-—-可扩展性","link":"#_2-2-http-1-0-—-可扩展性","children":[]},{"level":3,"title":"2.3 HTTP/1.1 — 标准化","slug":"_2-3-http-1-1-—-标准化","link":"#_2-3-http-1-1-—-标准化","children":[]},{"level":3,"title":"2.4 HTTP/2.0 — 表现优异","slug":"_2-4-http-2-0-—-表现优异","link":"#_2-4-http-2-0-—-表现优异","children":[]},{"level":3,"title":"2.5 HTTP/3.0 — 强势来袭","slug":"_2-5-http-3-0-—-强势来袭","link":"#_2-5-http-3-0-—-强势来袭","children":[]}]},{"level":2,"title":"3. URI 和 URL","slug":"_3-uri-和-url","link":"#_3-uri-和-url","children":[{"level":3,"title":"3.1 URI 是什么","slug":"_3-1-uri-是什么","link":"#_3-1-uri-是什么","children":[]},{"level":3,"title":"3.2 URL","slug":"_3-2-url","link":"#_3-2-url","children":[]}]},{"level":2,"title":"4. HTTP 报文格式","slug":"_4-http-报文格式","link":"#_4-http-报文格式","children":[{"level":3,"title":"4.1 HTTP 请求报文格式","slug":"_4-1-http-请求报文格式","link":"#_4-1-http-请求报文格式","children":[]},{"level":3,"title":"4.2 HTTP 响应报文格式","slug":"_4-2-http-响应报文格式","link":"#_4-2-http-响应报文格式","children":[]},{"level":3,"title":"4.3 请求/响应头常见字段","slug":"_4-3-请求-响应头常见字段","link":"#_4-3-请求-响应头常见字段","children":[]}]},{"level":2,"title":"5. HTTP 常见状态码","slug":"_5-http-常见状态码","link":"#_5-http-常见状态码","children":[]},{"level":2,"title":"6. HTTP 请求方法","slug":"_6-http-请求方法","link":"#_6-http-请求方法","children":[{"level":3,"title":"6.1 常见 HTTP 请求方法","slug":"_6-1-常见-http-请求方法","link":"#_6-1-常见-http-请求方法","children":[]},{"level":3,"title":"6.2 幂等和安全的方法","slug":"_6-2-幂等和安全的方法","link":"#_6-2-幂等和安全的方法","children":[]}]},{"level":2,"title":"7. 参考文章","slug":"_7-参考文章","link":"#_7-参考文章","children":[]}],"git":{"createdTime":1677758434000,"updatedTime":1678112922000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":4}]},"readingTime":{"minutes":14.1,"words":4230},"filePathRelative":"studynotes/cs/network/http/HTTP入门.md","localizedDate":"2022年12月12日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. HTTP 是什么</h2>\\n<p>HTTP 全称是 Hyper Text Transfer Protocol，意为超文本传输协议。它是 <strong>应用层</strong> 一个简单的 <strong>请求-响应</strong> 协议，通常运行在 <strong>TCP 之上</strong>（HTTP 3.0 之前）。</p>\\n<p>超文本传输协议可以拆分成以下三个部分：</p>\\n<ul>\\n<li>超文本：HTTP 传输的内容是「<strong>超文本</strong>」。常见的超文本就是 HTML（超文本标记语言），其中很多标签定义了图片、视频等链接；</li>\\n<li>传输：HTTP 是基于 B/S 模式，用于浏览器—服务器 <strong>两端之间的数据传输</strong>；</li>\\n<li>协议：HTTP 是一种 <strong>网络协议</strong>，它有一套自己的 <strong>约定和规范</strong>。</li>\\n</ul>","autoDesc":true}`);export{t as data};
