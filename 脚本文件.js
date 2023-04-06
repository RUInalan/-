// ==UserScript==
// @name              爱达杂货铺
// @namespace         https://github.com/RUInalan/AidaGroceryStore
// @version           6.0.3
// @author            YouXiaoHou
// @description       1
// @license           AGPL-3.0-or-later
// @match             *://adzhp.net/*
// ==/UserScript==

window.onload = (function () {

    function StraightChainP() {
        console.log("ks");

        // 获取页面上所有的 <a> 标签
        const links = document.getElementsByTagName('a');

        // 遍历每个链接，匹配与正则表达式相符的链接
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const pattern = /<a\s+href="([^"]+)"\s+target="_blank"\s+data-id="(\d+)"\s+data-url="([^"]+)"\s+class="[^"]*site-(\d+)"\s+title="([^"]+)">/g;
            if (pattern.test(link.outerHTML)) {
                console.log(link);
                //开始修改
                link.href = link.dataset.url;
            }
        }
    }


    StraightChainP();
    console.log("ks1166");
    Other();
    function Other(){
        var pagenumber = document.querySelectorAll(".pagenumber.nav-item");
        for (let i = 0; i < pagenumber.length; i++) {
            pagenumber[i].onmouseenter = StraightChainP;
            var anchorElement = pagenumber[i].querySelector("a");
            anchorElement.onmouseenter = StraightChainP;
        }
    }


})();
