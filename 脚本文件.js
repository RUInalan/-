// ==UserScript==
// @name              爱达杂货铺
// @namespace         https://github.com/syhyz1990/baiduyun
// @version           6.0.3
// @author            YouXiaoHou
// @description       1
// @license           AGPL-3.0-or-later
// @match             *://adzhp.net/*
// ==/UserScript==

(function () {
    // 获取页面上所有的 <a> 标签
    const links = document.getElementsByTagName('a');

    // 遍历每个链接，匹配与正则表达式相符的链接
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const pattern = /<a href="([^"]+)"\s+target="_blank"\s+data-id="(\d+)"\s+data-url="([^"]+)"\s+class="card mb-3 site-(\d+)"\s+title="([^"]+)">/;
        if (pattern.test(link.outerHTML)) {
            //开始修改
            link.href = link.dataset.url;
        }
    }

})();
